// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.34571d736b1491acc176.js
// Retrieved at 3/30/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						v = !o && !l && /macintosh/i.test(t),
						g = !a && !m && !u && !h && /linux/i.test(t),
						w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						S = s(/version\/(\d+(\.\d+)?)/i),
						f = /tablet/i.test(t) && !/tablet pc/i.test(t),
						C = !f && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
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
					} : p ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (n.msedge = e, n.version = w) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: w
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
					} : h ? (n = {
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
					}, S && (n.version = S)) : o ? (n = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, S && (n.version = S)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || S
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && S && (n.version = S)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && o ? (n[o] = e, n.ios = e, n.osname = "iOS") : v ? (n.mac = e, n.osname = "macOS") : E ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var y = "";
					n.windows ? y = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (n.osversion = y);
					var O = !n.windows && y.split(".")[0];
					return f || c || "ipad" == o || a && (3 == O || O >= 4 && !C) || n.silk ? n.tablet = e : (C || "iphone" == o || "ipod" == o || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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

				function a(e, r, n) {
					var a = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (a = t(n));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = o, s.check = function(e, t, s) {
					return !a(e, t, s)
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
					a = encodeURIComponent("".concat(t).concat(o));
				return "".concat(r.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(a)
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++) r[n - 2] = arguments[n];
				let o, a = !1;
				const i = async () => {
					r && r.length ? await e.call(window, ...r) : await e.call(window), a || (o = window.setTimeout(i, t))
				};
				return o = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(o)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = o.c, this.currentConfigRateSec = o.d, this.heartbeatDelaySec = o.f, this.heartbeatRateSec = o.g, this.statsRefreshRateSec = o.j, this.recommendedViewerSubredditsRefreshRateSec = o.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startStreamsWork(e, t, s)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStreamPostId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentStreamId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
					const r = Object(i.m)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(n.c)(e));
					const r = Object(i.m)(s()),
						o = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== o && (this.currentConfigRateSec = o);
					const a = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== a && (this.currentStreamsRateSec = a, this.startStreamsWork(e, t, s));
					const c = r.viewer_heartbeat_interval;
					c && this.heartbeatRateSec !== c && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s) {
					window.clearTimeout(this.streamsTimeout), await t(Object(a.e)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s), this.getStreamsTimeout(s()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(o.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(n.b)());
					const s = Object(i.m)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(n.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(o.P, e, t), this.currentStreamPostId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(i.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStreamPostId && e(Object(a.d)(this.currentStreamPostId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(o.P, e, t), !this.currentStreamId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(i.m)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const a = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const c = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentStreamId && e(Object(n.d)(this.currentStreamId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, c)
					}, a)
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(i.m)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = c
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/query-string/index.js"),
				n = s.n(r),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const m = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					"home" === e && (s.related = e);
					const r = n.a.stringify(s);
					return r ? "?".concat(r) : ""
				},
				u = Object(o.a)(a.L),
				h = Object(o.a)(a.x),
				p = Object(o.a)(a.M),
				b = Object(o.a)(a.y),
				v = Object(o.a)(a.K),
				g = Object(o.a)(a.J),
				w = Object(o.a)(a.s),
				S = Object(o.a)(a.t),
				f = e => t => t.post.subreddit.name !== e ? t : Object.assign({}, t, {
					post: Object.assign({}, t.post, {
						subreddit: Object.assign({}, t.post.subreddit, {
							name: "pan"
						})
					})
				}),
				C = e => async (t, s, r) => {
					let {
						gqlContext: n
					} = r;
					const o = Object(c.g)(e),
						a = s();
					if (Object(l.e)(a, o)) return;
					t(u(o));
					const d = await Object(i.d)(n(), o),
						m = Date.now();
					if (d.ok && d.body && d.body.data) {
						let e = d.body.data;
						const r = Object(l.b)(s());
						r && "pan" !== r && (e = f(r)(e)), t(h({
							model: e,
							utcTimeStamp: m
						}))
					} else t(x({
						streamId: o,
						error: d.error,
						utcTimeStamp: m
					}))
				}, E = e => async (t, s) => Object(d.b)(s()) ? t(O(e)) : t(y()), y = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const n = t();
					if (Object(l.g)(n)) return;
					e(p());
					const o = await Object(i.f)(r()),
						a = Date.now();
					if (o.ok && o.body && o.body.data) {
						const t = o.body.data;
						e(b({
							models: t,
							utcTimeStamp: a
						}))
					} else e(_({
						error: o.error,
						utcTimeStamp: a
					}))
				}, O = e => async (t, s, r) => {
					let {
						gqlContext: n
					} = r;
					const o = s();
					if (Object(l.g)(o)) return;
					t(p());
					const a = await Object(i.e)(n(), e),
						c = Date.now();
					if (a.ok && a.body && a.body.data) {
						let r = a.body.data;
						const n = Object(l.b)(s());
						n && "pan" !== n && (r = r.map(f(n))), t(b({
							listingName: e,
							models: r,
							utcTimeStamp: c
						}))
					} else t(_({
						error: a.error,
						utcTimeStamp: c
					}))
				}, x = e => async t => {
					t(v(e))
				}, _ = e => async t => {
					t(g(e))
				}
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
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(a.A),
				c = e => async t => {
					t(i(e))
				}, d = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
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
				a = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				h = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.div("Wrapper", h.a), v = i.a.span("Copy", h.a), g = i.a.wrapped(l.g, "SignupLink", h.a), w = i.a.wrapped(l.j, "LoginLink", h.a);
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: r,
					openLoginModal: i,
					openRegisterModal: d,
					origin: l,
					sendEvent: u
				} = e;
				return n.a.createElement(b, {
					className: Object(o.a)(t, {
						[h.a.LiveStreamingWrapper]: s
					})
				}, n.a.createElement(v, {
					className: Object(o.a)({
						[h.a.LiveStreamingCopy]: s
					})
				}, p._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), n.a.createElement(w, {
					href: Object(c.a)(r, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("log in", null, {
					hk: "37jFXB"
				})), n.a.createElement(g, {
					className: Object(o.a)({
						[h.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(r, l, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("sign up", null, {
					hk: "2GqETx"
				})))
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
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = a.a.div("LoaderWrapper", d.a),
				m = a.a.div("Icon", d.a),
				u = a.a.div("Byline", d.a),
				h = Object(o.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
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
				a = s.n(o),
				i = s("./src/lib/env/index.ts");
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
						Object(i.a)() && console.error(t), e && this.onIrrecoverableError(e)
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
						tabIndex: e ? 0 : -1,
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
					const i = new a.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.subscribeErrorHandlers(i), i.on(a.a.Events.MANIFEST_LOADING, () => {
						n && n()
					}), i.on(a.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(i))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), i.on(a.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), i.loadSource(o), i.attachMedia(this.videoElement.current), this.hls = i
				}
				subscribeErrorHandlers(e) {
					e.on(a.a.Events.ERROR, (t, s) => {
						if (s.type === a.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case a.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case a.a.ErrorTypes.NETWORK_ERROR:
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
					t.details !== a.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== a.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
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
			const w = c.a.wrapped(u.a, "_Dropdown", g.a),
				S = Object(m.a)(w),
				f = c.a.button("MenuButton", g.a),
				C = c.a.wrapped(p.a, "MenuIcon", g.a),
				E = c.a.wrapped(h.b, "DropdownRow", g.a),
				y = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				O = Object(o.b)(y, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: s
						}))
					}
				}),
				x = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => n.a.createElement(f, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(l.c)("more options"),
				className: Object(i.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: x(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(C, null), n.a.createElement(S, {
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
				awardSilverTierLowCenter: "_16mYEbgnfAK5JTx2yKBLPC",
				float75Center: "_3A9o1PdPiDWiJfITCo2qEC",
				fade: "_3FoNOebBs_9TJFnLFtbUjL",
				awardSilverTierMidCenter: "_1vLGBwjGc5OI9Ni1gg8Dtl",
				float100Center: "_3LPS-agAJGcsfANT15rYl8",
				awardSilverTierHighCenter: "_3hq8pr3uME5WN9_2VzaBnV",
				float125Center: "_1wJt2jUSqBE-n2umgQUdln",
				awardGoldTierLowCenter: "_39Ab2lpohld2771ppoF7lt",
				scaleMd: "_15xyt6jmFtTLWmSNa5nrGQ",
				awardGoldTierMidCenter: "QOupD6pkvSFU5mMRTNfzp",
				awardGoldTierHighCenter: "_2r4xUA6ncEg7E4gvSBJ2wz",
				float150Center: "_3R1nNQWRQsoT9l6ZifsG47",
				awardPlatinumTierLowCenter: "FSrEE2IhoHf5Zhj4VqleX",
				scaleLg: "YLRJkPNcn3c5whQvOeUXS",
				float200Center: "_2r3LWQOuuFBw-6MlgY1pQt",
				awardPlatinumTierMidCenter: "_1YBi3oVYPy8osSNipGyEJP",
				float225Center: "_1Vihk7D4lCPLkj0wO_iW3u",
				awardPlatinumTierHighCenter: "_313ne3DkMNduypzRIPYBfw",
				float250Center: "_1LhoeEsykXNuFDpKWZz889",
				awardSilverTierLowLeft: "mI_UEahDoFHuvzvhVu2A3",
				float75Left: "_3IOoxSli9QpfsmexOXMcIK",
				awardSilverTierMidLeft: "M9X5YvRiH2UXRzHnpoBLE",
				float100Left: "_2q2rgJ-8FR6uz9yR7VeiLH",
				awardSilverTierHighLeft: "_3MDQ_5kITW9GkRRkKhoheB",
				float125Left: "QIM2ONU8x6sFjUembrsJO",
				awardGoldTierLowLeft: "_39SM6p2ebRWOSsMhgPlC52",
				awardGoldTierMidLeft: "_1jwc5WGJIXMXFmz_n76SGj",
				awardGoldTierHighLeft: "uUvMMAx6gQmzS_N2K71Zx",
				float150Left: "_1WhjlhiC8s6dkAybvRxr5b",
				awardPlatinumTierLowLeft: "_1yMoaq3ldXhCqObSrGhWqi",
				float200Left: "_2QGTN4l7AoTcovIc8t4NEQ",
				awardPlatinumTierMidLeft: "_17JIWo0rGoS9i4HuNDl-8w",
				float225Left: "ZauEx-KgYrY_KOCrJMPeW",
				awardPlatinumTierHighLeft: "_1k8czKFRU8UgYOsXlxF3-0",
				float250Left: "WXB-UF50Acfu-LbeVpqjw",
				awardSilverTierLowRight: "_2ETM_0p7tskvWyTDKyIdLl",
				float75Right: "YnOZON_jcjlOmnKQ42gC6",
				awardSilverTierMidRight: "_2tMhueIcH6hXn2ym1Fu2uT",
				float100Right: "_3USBLUGyjBTpJNXEAbla8r",
				awardSilverTierHighRight: "_18iXy_64CPaSdgXCJy-FI8",
				float125Right: "_2p90_prlzVa-hsep-G4nCk",
				awardGoldTierLowRight: "_3nl2pQKPsUbu6FYNgW2Hhp",
				awardGoldTierMidRight: "_1TlfEjLzfyrA1UZqo9gFQ9",
				awardGoldTierHighRight: "_3YQYtB26pMSMaxNx03-d9p",
				float150Right: "_2fPS0Ooe2JD4L8rGSIVx0L",
				awardPlatinumTierLowRight: "eMMznwoFNFLm5j11G_TbE",
				float200Right: "_1N8AaOtkRWFat_OLw8Br3t",
				awardPlatinumTierMidRight: "_2duuJ9PI2kUxKvpwl2p3q9",
				float225Right: "_2bdGMSPwywxuBeEZkqhXpo",
				awardPlatinumTierHighRight: "_1n6nq8wCfFtj0uZQSkFP_A",
				float250Right: "oPK1nepC5Dg_KXmmXVMMV",
				float175Center: "_3QialJDN2lgx_qYSBi311Y",
				float175Left: "_2q4HlG1Po75dNuZjxSWFyz",
				float175Right: "_1MmsAgQwzi4ALilKygWHQy"
			}
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
				live: "_2MrLGchkK1FzIihZNcSErL",
				subreddit: "_2HJ6_jH0Qxso0BklDa4MY8",
				dropdownLabel: "_2EdFq4jwAX3s-k2ywmNUdA",
				dropdownRow: "_2TUKPRdgdRLBjd4A65bAv8",
				title: "_2BOjTR_ZfK356j4GUU_uP0",
				watchersCount: "_3qmsTjPgq3yEn2MRAvyKWV",
				controls: "_3Ve6YrAPjNqahWzatg2r-G",
				actionButton: "_3ljeo8vtq9QnPE3mBHJzLA",
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
				promptButtonSet: "_2-JNYG0bcwDm13ZkpVuW99"
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
				overlay: "_3EBqsnw89Qx3UEoELcarMR",
				focusVisible: "RrzcV0hyA0BISr1eXgG9M",
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
				a = () => null;
			t.a = Object(r.a)({
				ErrorComponent: a,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				h = s.n(u),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(p);

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
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			class w extends a.a.Component {
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
					return e.href ? a.a.createElement(c.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const r = Object(i.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(w, v({
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
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(o);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "h", (function() {
				return S
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => {
					if (t) {
						const s = n.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id;
							const n = Object(r.h)(e, {
								streamIdFromPath: t.post.id
							});
							n === r.a.LIVE ? s.type = "stream_live" : n === r.a.VOD ? s.type = "stream_vod" : n === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n.post(e, t.post.id),
							media: s,
							subreddit: n.subreddit(e)
						}
					}
					return {
						subreddit: n.subreddit(e)
					}
				},
				a = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				i = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, o(e)),
				c = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, o(e)),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, a(t), e && Object.assign({}, o(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, a(t), o(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, a(t), o(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, a(t), o(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, a(t), o(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, a(t), o(t, e)),
				v = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, a(t), o(t, e)),
				g = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, o(t, s))
				},
				w = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				},
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, o(s, t))
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
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
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
				a = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("share"), c.a.shareIcon, e.className)
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
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
				w = s("./node_modules/lodash/throttle.js"),
				S = s.n(w);
			var f = e => {
				if (!e || !e.isConnected) return;
				const t = e.hasAttribute("tabindex");
				t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
			};
			var C = function(e) {
					var t = !0,
						s = !1,
						r = null,
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

					function o(e) {
						return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
					}

					function a(e) {
						e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
					}

					function i(e) {
						t = !1
					}

					function c() {
						document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
					}

					function d(e) {
						e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d))
					}
					document.addEventListener("keydown", (function(s) {
						s.metaKey || s.altKey || s.ctrlKey || (o(e.activeElement) && a(e.activeElement), t = !0)
					}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
						"hidden" === document.visibilityState && (s && (t = !0), c())
					}), !0), c(), e.addEventListener("focus", (function(e) {
						var s, r, i;
						o(e.target) && (t || (s = e.target, r = s.type, "INPUT" === (i = s.tagName) && n[r] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && a(e.target)
					}), !0), e.addEventListener("blur", (function(e) {
						var t;
						o(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(r), r = window.setTimeout((function() {
							s = !1
						}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
					}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
				},
				E = s("./src/reddit/actions/media.ts"),
				y = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				O = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				x = s("./src/lib/makeActionCreator/index.ts");
			const _ = Object(x.a)(O.D),
				k = Object(x.a)(O.Y),
				I = e => async t => {
					t(_(e))
				}, N = Object(x.a)(O.N), P = Object(x.a)(O.U);
			var j = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				L = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				T = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				M = s("./src/reddit/actions/reportFlow.ts"),
				V = s("./src/reddit/components/HlsVideo/index.tsx"),
				R = s("./src/reddit/components/ReportFlow/index.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/constants/history.ts"),
				B = s("./src/reddit/constants/keycodes.ts"),
				F = s("./src/reddit/helpers/dom/index.ts"),
				U = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				W = s("./src/reddit/helpers/trackers/rpan.ts"),
				H = s("./src/reddit/helpers/trackers/screenview.ts"),
				G = s("./src/reddit/icons/svgs/Close/index.tsx"),
				z = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				K = s("./src/reddit/selectors/media.ts"),
				J = s("./src/reddit/selectors/platform.ts"),
				q = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				Y = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				X = s("./src/config.ts"),
				Q = s("./src/reddit/actions/post.ts"),
				Z = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				$ = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				ee = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				te = s("./src/reddit/components/OverflowMenu/index.tsx"),
				se = s("./src/reddit/controls/Dropdown/Row.tsx"),
				re = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				ne = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				oe = s.n(ne);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: r,
						subreddits: n
					} = e;
					return a.a.createElement(te.b, {
						className: oe.a.overflowMenu,
						dropdownClassName: oe.a.dropdown,
						defaultButtonOutline: !0,
						disabled: n.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: a.a.createElement("div", {
							className: oe.a.overflowMenuIcon
						}, t, a.a.createElement(re.a, {
							className: oe.a.dropdownTriangle
						})),
						onClick: r
					}, a.a.createElement("div", {
						className: oe.a.dropdownLabel
					}, ae._("Pick a Community", null, {
						hk: "8MoVj"
					})), n.map(e => a.a.createElement(se.b, {
						className: oe.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: oe.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				ce = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				de = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				le = s.n(de);
			class me extends o.Component {
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
						onVideoPositionUpdate: i,
						seekBarRef: c,
						settingChange: d,
						setVolume: m,
						hideLiveLabel: u,
						videoCurrentTime: h,
						videoTotalTime: p,
						volume: b,
						volumeRef: v
					} = this.props;
					return a.a.createElement(ce.a, {
						className: Object(l.a)(e, le.a.scrubberBar, {
							[le.a.visible]: n
						}),
						currentTime: h || 0,
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
						setVideoPosition: i,
						setVolume: m,
						hideLiveLabel: u,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: p || 0,
						volume: b,
						volumeRef: v
					})
				}
			}
			var ue = me,
				he = s("./node_modules/lodash/debounce.js"),
				pe = s.n(he),
				be = s("./src/lib/prettyPrintNumber/index.ts"),
				ve = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				ge = s("./src/reddit/models/Vote/index.ts"),
				we = s("./src/reddit/selectors/user.ts");
			Object(x.a)(O.C);
			const Se = (e, t) => async (s, r, n) => {
				let {
					apiContext: o
				} = n;
				const a = r();
				if (Object(we.G)(a))
					if (Object(z.c)(a)) await Object(ve.g)(o(), e, t);
					else {
						await Object(h.d)(e);
						const s = Object(q.k)(r(), e);
						null !== s.post.voteState && Object(ge.e)(s.post.voteState) === t || await Object(ve.g)(o(), e, t)
					}
				else s(Object(u.e)())
			};
			var fe = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ee = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				ye = s.n(Ee);
			const Oe = Object(d.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(q.k)(e, s)
				}
			});
			class xe extends a.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(ge.a.upvoted), this.downVotes = () => this.calculateVotes(ge.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === ge.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(ge.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = pe()(() => this.vote(ge.a.upvoted), O.Z, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = pe()(() => this.vote(ge.a.downvoted), O.Z, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: ge.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign({}, this.state, {
						displayedVoteState: Object(ge.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign({}, this.state, {
						displayedVoteState: null !== t.post.voteState ? Object(ge.e)(t.post.voteState) : ge.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return a.a.createElement("div", {
						className: ye.a.statsPanel
					}, a.a.createElement("div", {
						className: ye.a.voteContainer
					}, a.a.createElement("button", {
						className: Object(l.a)(ye.a.upButton, {
							[ye.a.activeVote]: this.isVoteActive(ge.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": g.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, a.a.createElement(Ce.a, {
						className: ye.a.voteIcon
					})), a.a.createElement("p", {
						className: ye.a.votesCounter
					}, Object(be.b)(this.upVotes()))), a.a.createElement("div", {
						className: ye.a.watchingContainer
					}, a.a.createElement("div", {
						className: ye.a.watchingCounter
					}, Object(be.b)(t)), a.a.createElement("p", {
						className: ye.a.watchingCaption
					}, this.props.isLive ? g.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : g.fbt._("Views", null, {
						hk: "ixhZU"
					}))), a.a.createElement("div", {
						className: ye.a.voteContainer
					}, a.a.createElement("button", {
						className: Object(l.a)(ye.a.downButton, {
							[ye.a.activeVote]: this.isVoteActive(ge.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": g.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, a.a.createElement(fe.a, {
						className: ye.a.voteIcon
					})), a.a.createElement("p", {
						className: ye.a.votesCounter
					}, Object(be.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, ge.a.notVoted), void this.setState(Object.assign({}, this.state, {
							displayedVoteState: ge.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign({}, this.state, {
							displayedVoteState: e
						})), e === ge.a.upvoted ? this.props.sendEvent(Object(W.g)(t)) : this.props.sendEvent(Object(W.d)(t))
					}
				}
			}
			var _e = Object(i.b)(Oe, (e, t) => ({
					vote: (t, s) => e(Se(t, s))
				}))(xe),
				ke = s("./src/lib/lessComponent.tsx"),
				Ie = s("./src/lib/opener/index.ts"),
				Ne = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Pe = s("./src/reddit/icons/fonts/Share/index.tsx"),
				je = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Le = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Te = s("./src/reddit/icons/svgs/Report/index.tsx"),
				Me = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Ve = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Re = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Ae = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				De = s.n(Ae);
			var Be = e => a.a.createElement("svg", {
					className: Object(l.a)(De.a.icon, e.className),
					viewBox: "0 0 64 64",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "30.72",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "2.4576"
				}), a.a.createElement("path", {
					fill: "#fff",
					d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
				}))),
				Fe = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				Ue = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				We = s.n(Ue);
			const He = e => {
					let {
						onClick: t
					} = e;
					return a.a.createElement("button", {
						className: We.a.shareButton,
						onClick: t,
						"aria-label": g.fbt._("share video", null, {
							hk: "2e71ai"
						}),
						value: "share"
					}, a.a.createElement(Pe.a, {
						className: We.a.menuIcon
					}))
				},
				Ge = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return a.a.createElement("button", {
						className: We.a.muteButton,
						onClick: s,
						"aria-label": g.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? a.a.createElement(Ve.a, {
						className: We.a.volumeIcon
					}) : a.a.createElement(Fe.a, {
						className: We.a.volumeIcon
					}))
				},
				ze = ke.a.wrapped(Ne.a, "menuIcon", We.a),
				Ke = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: r
					} = e;
					return a.a.createElement(te.b, {
						className: We.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: a.a.createElement(ze, null),
						onClick: t
					}, a.a.createElement(se.b, {
						className: We.a.overflowItem,
						displayText: g.fbt._("View rules", null, {
							hk: "4lTvzy"
						}),
						iconWrapperClassName: We.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Ie.d)(O.Q, Ie.c.BLANK)
					}, a.a.createElement(Me.a, {
						className: We.a.overflowItemIcon
					})), a.a.createElement(se.b, {
						className: We.a.overflowItem,
						displayText: g.fbt._("Visit RPAN community", null, {
							hk: "3KZliI"
						}),
						iconWrapperClassName: We.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Ie.d)(O.O, Ie.c.BLANK)
					}, a.a.createElement(Le.a, {
						className: We.a.overflowItemIcon
					})), a.a.createElement(se.b, {
						className: We.a.overflowItem,
						displayText: g.fbt._("Report", null, {
							hk: "1TxhL9"
						}),
						iconWrapperClassName: We.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: r
					}, a.a.createElement(Te.a, {
						className: We.a.overflowItemIcon
					})), a.a.createElement(se.b, {
						className: We.a.overflowItem,
						displayText: g.fbt._("Hide", null, {
							hk: "1qXTIB"
						}),
						iconWrapperClassName: We.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, a.a.createElement(je.a, {
						className: We.a.overflowItemIcon
					})))
				},
				Je = e => {
					let {
						onClick: t
					} = e;
					return a.a.createElement("button", {
						className: We.a.promptButton,
						onClick: t
					}, a.a.createElement(Re.a, null), a.a.createElement("span", null, g.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				qe = e => {
					let {
						onClick: t
					} = e;
					return a.a.createElement("button", {
						className: We.a.promptButton,
						onClick: t
					}, a.a.createElement(Be, null), a.a.createElement("span", null, g.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var Ye = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				Xe = s.n(Ye);
			const {
				fbt: Qe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ze = e => {
				let {
					live: t,
					subredditMenu: s
				} = e;
				return a.a.createElement("div", {
					className: Xe.a.broadcastStatus
				}, t ? a.a.createElement($e, {
					subredditMenu: s
				}) : a.a.createElement(et, {
					subredditMenu: s
				}))
			}, $e = e => {
				let {
					subredditMenu: t
				} = e;
				return Qe._("{=Live} on {subreddit}", [Qe._param("=Live", a.a.createElement("span", {
					className: Xe.a.live
				}, Qe._("Live", null, {
					hk: "2OKwyD"
				}))), Qe._param("subreddit", t)], {
					hk: "i1rjr"
				})
			}, et = e => {
				let {
					subredditMenu: t
				} = e;
				return Qe._("Recorded live on {subreddit}", [Qe._param("subreddit", t)], {
					hk: "29Nv8k"
				})
			}, tt = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: r,
					subreddits: n
				} = e, o = "";
				o = "home" === s ? "All" : "r/popular" === s ? "r/popular" : r || "All";
				const i = n.filter(e => e.prefixedName !== o);
				return a.a.createElement(te.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: a.a.createElement("span", {
						className: Xe.a.subreddit
					}, r || "RPAN")
				}, a.a.createElement("div", {
					className: Xe.a.dropdownLabel
				}, Qe._("Pick a Community", null, {
					hk: "4AfDwd"
				})), i.map(e => a.a.createElement(se.b, {
					className: Xe.a.dropdownRow,
					displayText: e.prefixedName,
					key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
					onClick: () => t(e)
				})))
			}, st = e => {
				let {
					text: t
				} = e;
				return a.a.createElement("h1", {
					className: Xe.a.title
				}, t)
			}, rt = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return a.a.createElement("div", {
					className: Xe.a.watchersCount
				}, s ? a.a.createElement(nt, {
					count: Math.max(1, t.continuous_watchers)
				}) : a.a.createElement(ot, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, nt = e => {
				let {
					count: t
				} = e;
				return Qe._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [Qe._plural(t, "number of watchers", Object(be.b)(t, !0))], {
					hk: "3F0Nj0"
				})
			}, ot = e => {
				let {
					count: t
				} = e;
				return Qe._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [Qe._plural(t, "number of views", Object(be.b)(t, !0))], {
					hk: "tSTjT"
				})
			}, at = e => {
				let {
					onClick: t
				} = e;
				return a.a.createElement("button", {
					className: Xe.a.shareButton,
					onClick: t,
					"aria-label": Qe._("Share video", null, {
						hk: "I91IP"
					}),
					value: "share"
				}, a.a.createElement(Pe.a, {
					className: Xe.a.shareIcon
				}))
			}, it = ke.a.wrapped(Ne.a, "menuIcon", Xe.a), ct = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: r
				} = e;
				return a.a.createElement(te.b, {
					className: Xe.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: "rpan-overlay-menu",
					icon: a.a.createElement(it, null),
					onClick: t
				}, a.a.createElement(se.b, {
					className: Xe.a.overflowItem,
					displayText: Qe._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: Xe.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-rules"),
					onClick: () => Object(Ie.d)(O.Q, Ie.c.BLANK)
				}, a.a.createElement(Me.a, {
					className: Xe.a.overflowItemIcon
				})), a.a.createElement(se.b, {
					className: Xe.a.overflowItem,
					displayText: Qe._("Visit RPAN community", null, {
						hk: "1vVY6o"
					}),
					iconWrapperClassName: Xe.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-community"),
					onClick: () => Object(Ie.d)(O.O, Ie.c.BLANK)
				}, a.a.createElement(Le.a, {
					className: Xe.a.overflowItemIcon
				})), a.a.createElement(se.b, {
					className: Xe.a.overflowItem,
					displayText: Qe._("Report", null, {
						hk: "3ZxBjz"
					}),
					iconWrapperClassName: Xe.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-report"),
					onClick: r
				}, a.a.createElement(Te.a, {
					className: Xe.a.overflowItemIcon
				})), a.a.createElement(se.b, {
					className: Xe.a.overflowItem,
					displayText: Qe._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: Xe.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-hide"),
					onClick: s
				}, a.a.createElement(je.a, {
					className: Xe.a.overflowItemIcon
				})))
			}, dt = Object(i.b)(null, e => ({
				vote: (t, s) => e(Se(t, s))
			}))(class extends o.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(ge.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(ge.a.downvoted);
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
					return null == e ? null : e - Object(ge.e)(t) + this.voteState
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
					const e = this.voteState === ge.a.upvoted,
						t = this.voteState === ge.a.downvoted;
					return a.a.createElement("div", {
						className: Xe.a.votePanel
					}, a.a.createElement(lt, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? a.a.createElement(ut, {
						score: this.score
					}) : null, a.a.createElement(mt, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(ge.e)(t))
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
					return e === this.voteState ? ge.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						sendEvent: s
					} = this.props, {
						id: r
					} = t.post;
					this.setVoteState(r, e), this.props.vote(r, e), e === ge.a.upvoted ? s(Object(W.g)(t)) : e === ge.a.downvoted && s(Object(W.d)(t))
				}
			}), lt = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return a.a.createElement("button", {
					className: Object(l.a)(Xe.a.voteButton, Xe.a.upVoteButton, {
						[Xe.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": Qe._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, a.a.createElement(Ce.a, {
					className: Xe.a.voteIcon
				}))
			}, mt = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return a.a.createElement("button", {
					className: Object(l.a)(Xe.a.voteButton, Xe.a.downVoteButton, {
						[Xe.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": Qe._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, a.a.createElement(fe.a, {
					className: Xe.a.voteIcon
				}))
			}, ut = e => {
				let {
					score: t
				} = e;
				return a.a.createElement("div", {
					className: Xe.a.score
				}, Object(be.b)(t))
			}, ht = e => {
				let {
					children: t
				} = e;
				return a.a.createElement("div", {
					className: Xe.a.prompt
				}, t)
			}, pt = () => a.a.createElement(ht, null, Qe._("Connection issues", null, {
				hk: "hIrnJ"
			})), bt = () => a.a.createElement(ht, null, Qe._("Tuning...", null, {
				hk: "3dG7Ks"
			})), vt = () => a.a.createElement(ht, null, Qe._("Broadcast paused", null, {
				hk: "jxvku"
			})), gt = e => {
				let {
					onClickReplay: t,
					onClickShare: s
				} = e;
				return a.a.createElement(ht, null, a.a.createElement("div", {
					className: Xe.a.promptButtonSet
				}, a.a.createElement(Je, {
					onClick: t
				}), a.a.createElement(qe, {
					onClick: s
				})))
			};
			var wt = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				St = s.n(wt);
			const {
				fbt: ft
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ct = Object(d.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return s ? Object(q.k)(e, s) : void 0
				},
				inStreamingSubredditIntegration: z.b,
				inStreamingUiRefreshViewer: z.c,
				isApiError: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(ee.d)(e, s)
				},
				isBatchApiError: ee.f,
				isBatchPending: ee.g,
				isConfigError: ee.h,
				isIntroInProgress: Y.b,
				isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
				lastBatchApiRequestTs: ee.j,
				recommendedViewerSubredditOptions: ee.k
			});
			class Et extends o.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), O.o)
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
							settingChange: Z.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: Z.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === Z.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === Z.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === Z.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === Z.a.Volume && s && s.handleMouseUp(e), this.setState({
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
							onShareVideo: s,
							sendEvent: r
						} = this.props;
						t && (e("".concat(X.a.redditUrl).concat(t.share_link)), s(), r(Object(W.f)(t)))
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
						inStreamingSubredditIntegration: t,
						isIntroInProgress: s,
						isLive: r,
						isUnavailable: n,
						onHide: o,
						onReport: i,
						onToggleMenu: c,
						sendEvent: d
					} = this.props;
					return a.a.createElement("div", {
						className: Object(l.a)(We.a.overlay, {
							[We.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !s && a.a.createElement("div", {
						className: We.a.overlayTop
					}, t && this.renderRecommendedViewerSubreddit(), e && !n && a.a.createElement(a.a.Fragment, null, !t && this.renderTitleContainer(), a.a.createElement(He, {
						onClick: this.onCopyLink
					}), a.a.createElement(Ke, {
						onClick: c,
						onHideClick: o,
						onReportClick: i
					}))), t && e && !s && !n && a.a.createElement("div", {
						className: We.a.overlayTitle
					}, this.renderTitleContainer()), a.a.createElement("div", {
						className: We.a.overlayCenter
					}, this.getContent()), e && !s && !n && a.a.createElement("div", {
						className: We.a.overlayBottom
					}, a.a.createElement(_e, {
						currentStreamId: e.post.id,
						isLive: r,
						sendEvent: d
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						isLive: s,
						isUnavailable: r,
						onHide: n,
						onReport: o,
						onSelectSubreddit: i,
						onToggleMenu: c,
						recommendedViewerSubredditOptions: d,
						related: m,
						sendEvent: u,
						subreddit: h
					} = this.props;
					return t || !e || r ? null : a.a.createElement("div", {
						className: Object(l.a)(Xe.a.overlay, {
							[Xe.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, this.renderPrompt(), a.a.createElement("div", {
						className: Xe.a.overlayTop
					}, a.a.createElement("div", {
						className: Xe.a.overlayTopLeft
					}, a.a.createElement("div", {
						className: Xe.a.meta
					}, a.a.createElement(Ze, {
						live: s,
						subredditMenu: a.a.createElement(tt, {
							onSelect: i,
							related: m,
							subreddit: h,
							subreddits: d
						})
					}), a.a.createElement(st, {
						text: e.post.title
					}), a.a.createElement(rt, {
						broadcast: e,
						live: s
					}))), a.a.createElement("div", {
						className: Xe.a.overlayTopRight
					}, a.a.createElement(ct, {
						onClick: c,
						onHideClick: n,
						onReportClick: o
					}), a.a.createElement(at, {
						onClick: this.onCopyLink
					}), a.a.createElement("div", {
						className: Object(l.a)({
							[Xe.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, a.a.createElement(dt, {
						broadcast: e,
						sendEvent: u
					})))), a.a.createElement("div", {
						className: Xe.a.overlayBottom,
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
						onPlayPauseToggle: n,
						onVideoPositionUpdate: o,
						setVolume: i,
						toggleMute: c,
						videoCurrentTime: d,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Xe.a.controls : "", h = e || this.isVisible();
					return a.a.createElement("div", {
						className: u
					}, a.a.createElement(ue, {
						isLive: t,
						isMuted: s,
						isPaused: r,
						isVisible: h,
						onPlayPauseToggle: n,
						onVideoPositionUpdate: o,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: i,
						hideLiveLabel: e,
						toggleMute: c,
						videoCurrentTime: d,
						videoTotalTime: l,
						volume: m,
						volumeRef: e => this.volumeControl = e
					}))
				}
				renderPrompt() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: r,
						isBatchPending: n,
						isConfigError: o,
						isIntroInProgress: i,
						isLoading: c,
						isMuted: d,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: h,
						showStreamEndedPrompt: p,
						toggleMute: b
					} = this.props;
					return h || i && o || t && s || !t && r ? a.a.createElement(pt, null) : i ? a.a.createElement("div", {
						className: We.a.intro
					}, a.a.createElement(Ge, {
						isMuted: d,
						onToggle: b
					})) : l || !t && !r && !n && m ? null : c ? a.a.createElement(bt, null) : e && e.stream.state === $.b.DISCONNECTED ? a.a.createElement(vt, null) : p ? a.a.createElement(gt, {
						onClickReplay: u,
						onClickShare: this.onCopyLink
					}) : null
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
					const i = t.filter(e => e.prefixedName !== o);
					return a.a.createElement("div", {
						className: We.a.menuContainer
					}, a.a.createElement(ie, {
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
					if (e) return a.a.createElement("div", {
						className: We.a.titleContainer
					}, a.a.createElement("h1", {
						className: We.a.videoTitle
					}, e.post.title), !t && a.a.createElement("div", {
						className: We.a.RecordedLabel
					}, ft._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(St.a.ControlVolume)) return !0;
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
						isBatchPending: n,
						isConfigError: o,
						isIntroInProgress: i,
						isLoading: c,
						isMuted: d,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: h,
						showStreamEndedPrompt: p,
						toggleMute: b
					} = this.props;
					return h || i && o || t && s || !t && r ? a.a.createElement("div", {
						className: We.a.prompt
					}, ft._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? a.a.createElement("div", {
						className: We.a.intro
					}, a.a.createElement(Ge, {
						isMuted: d,
						onToggle: b
					})) : l || !t && !r && !n && m ? null : c ? a.a.createElement("div", {
						className: We.a.prompt
					}, ft._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === $.b.DISCONNECTED ? a.a.createElement("div", {
						className: We.a.prompt
					}, ft._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : p ? a.a.createElement("div", {
						className: We.a.prompt
					}, a.a.createElement("div", {
						className: We.a.promptButtonSet
					}, a.a.createElement(Je, {
						onClick: u
					}), a.a.createElement(qe, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var yt = Object(i.b)(Ct, (e, t) => ({
				copyLink: t => e(Object(Q.F)(t)),
				onHide: () => {
					t.currentStreamId && (e(Object(Q.Z)(t.currentStreamId, !0, !0, !0)), e(I(t.currentStreamId)))
				}
			}))(Et);
			Object(x.a)(O.r);
			const Ot = Object(x.a)(O.z),
				xt = (e, t) => async (s, r) => {
					const n = r(),
						o = Date.now(),
						a = e.map(e => Object(q.k)(n, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(o),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await _t(a, t)
				}, _t = (e, t) => Promise.all(e.map(e => kt(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), kt = e => new Promise((t, s) => {
					const r = new Image;
					r.onload = () => t(), r.onerror = () => s(), r.src = e
				}).then(() => !0, () => !1);
			var It = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				Nt = s.n(It);
			const Pt = Object(d.c)({
				isIntroInProgress: Y.b,
				previewUrl: (e, t) => {
					let {
						currentStream: s
					} = t;
					return s ? Object(q.i)(e, {
						streamId: s.post.id
					}) : void 0
				}
			});
			class jt extends o.Component {
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
					return a.a.createElement("div", {
						className: Nt.a.staticContainer
					}, a.a.createElement("div", {
						className: t ? "" : Nt.a.tvNoise,
						"aria-label": g.fbt._("video static", null, {
							hk: "3FA8fk"
						})
					}), t && !e && a.a.createElement("div", {
						className: Nt.a.previewContainer,
						"aria-label": g.fbt._("preview of video", null, {
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
			var Lt = Object(i.b)(Pt, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, r) => {
						const n = await s(xt(e, t));
						s(Ot(n))
					})(t))
				}))(jt),
				Tt = s("./src/lib/constants/index.ts"),
				Mt = s("./src/lib/makeCommentsPageKey/index.ts"),
				Vt = s("./src/lib/makeDraftKey/index.ts"),
				Rt = s("./src/reddit/actions/page.ts"),
				At = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Dt = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Bt = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ft = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Ut = s("./src/reddit/components/GildModal/Loader.tsx"),
				Wt = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/models/Gold/Award.ts")),
				Ht = s("./src/reddit/selectors/posts.ts"),
				Gt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				zt = s.n(Gt);
			const Kt = Object(i.b)(() => Object(d.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Ht.N)(e, {
							postId: s
						})
					}
				})),
				Jt = ["Center", "Left", "Right"],
				qt = ["Low", "Mid", "High"],
				Yt = () => Math.floor(800 * Math.random()),
				Xt = e => e[Math.floor(Math.random() * e.length)],
				Qt = e => {
					const t = Xt(Jt),
						s = Xt(qt),
						r = e < Wt.j.coinPrice ? "Silver" : e < Wt.k.coinPrice ? "Gold" : "Platinum";
					return zt.a["award".concat(r, "Tier").concat(s).concat(t)]
				};
			class Zt extends o.Component {
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
								icon: n,
								coinPrice: o
							} = e[s];
							return {
								coinPrice: o,
								count: r,
								iconUrl: n.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						r = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: n
						} = e;
						for (let o = 0; o < s; o++) {
							const s = "".concat(Yt(), "ms"),
								i = Qt(t),
								c = a.a.createElement("img", {
									key: "".concat(e.id, "-").concat(o),
									className: Object(l.a)(zt.a.award, i),
									src: n,
									style: {
										animationDelay: s
									}
								});
							r.push(c)
						}
					}), a.a.createElement("div", {
						"aria-role": "presentation",
						className: zt.a.awardBubbler
					}, r)
				}
			}
			var $t = Kt(Zt),
				es = s("./src/reddit/models/PostDraft/index.ts"),
				ts = s("./src/reddit/selectors/gild.ts"),
				ss = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				rs = s.n(ss);
			const ns = Object(d.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const r = Object(Ft.b)(s);
					return Object(ts.c)(e, r)
				},
				isDisabled: (e, t) => Object(q.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: we.G,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(Ht.N)(e, {
						postId: s
					})
				},
				language: we.O
			});
			class os extends o.Component {
				constructor(e) {
					super(e), this.onChatClick = () => {
						this.props.sendEvent(Object(W.c)(this.props.postId))
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
						location: i,
						openLoginModal: c,
						openRegisterModal: d,
						sendEvent: m,
						subredditId: u
					} = this.props, h = Object(Mt.a)(e), p = Object(Vt.a)(es.c.replyToPost, e);
					return s ? a.a.createElement("div", {
						className: Object(l.a)(rs.a.streamingChat, rs.a.prompt)
					}, g.fbt._("Chat has been disabled", null, {
						hk: "3139v6"
					})) : n ? a.a.createElement("div", {
						"aria-label": g.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: rs.a.streamingChat,
						onClick: this.onChatClick
					}, a.a.createElement(Dt.a, {
						className: rs.a.chatScroller,
						emptyStateClassName: rs.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: u,
						commentsPageKey: h
					}), r && a.a.createElement(Bt.a, {
						key: "chatCommentsForm",
						language: o,
						postId: e,
						draftKey: p,
						commentsPageKey: h,
						isEditing: !1,
						sendEvent: m,
						isLivestreaming: !0
					}), a.a.createElement($t, {
						postId: e
					}), !r && a.a.createElement(At.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						language: o,
						location: i,
						openLoginModal: c,
						openRegisterModal: d,
						origin
					}), t && a.a.createElement(Ut.a, null)) : a.a.createElement("div", {
						className: Object(l.a)(rs.a.streamingChat, rs.a.prompt)
					}, g.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var as = Object(i.b)(ns, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(Rt.q)(s, void 0, {
							sort: Tt.r.CHAT
						}, Tt.r.CHAT)),
						openLoginModal: () => e(Object(u.e)()),
						openRegisterModal: () => e(Object(u.f)())
					}
				})(os),
				is = e => a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				cs = e => a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				ds = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				ls = s.n(ds);
			const ms = e => {
				let {
					isNext: t,
					onClick: s,
					stream: r
				} = e;
				return a.a.createElement("div", {
					className: Object(l.a)(ls.a.switchContainer, t ? ls.a.switchContainerNext : ls.a.switchContainerPrevious)
				}, a.a.createElement("button", {
					className: ls.a.switchButton,
					disabled: !r,
					onClick: s,
					"aria-label": t ? g.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : g.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, a.a.createElement("div", {
					className: ls.a.streamThumbnail,
					style: r ? {
						backgroundImage: "url(".concat(r.stream.thumbnail, ")")
					} : {}
				}), t ? a.a.createElement(cs, {
					className: ls.a.arrowIcon
				}) : a.a.createElement(is, {
					className: ls.a.arrowIcon
				})))
			};
			var us = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(ms, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), a.a.createElement(ms, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				hs = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				ps = s.n(hs);
			const bs = Object(d.c)({
					currentStream: q.c,
					currentStreamStartTime: q.d,
					currentHlsUrl: q.b,
					inStreamingSubredditIntegration: z.b,
					isIntroInProgress: Y.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isOverlayOpen: J.h,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(U.g)(s || "")
					},
					lastChatActivityUtcTs: Y.c,
					nextStream: q.f,
					nextTopStream: q.g,
					playbackState: q.h,
					previousStream: q.j,
					volume: K.b
				}),
				vs = Object(i.b)(bs, (e, t) => ({
					closeLocation: () => e(Object(c.b)(t.location.state[D.a.CloseLocation])),
					fetchPostForStream: t => e(Object(y.a)(t)),
					subscribeConfig: () => e(j.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(j.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(j.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: t => e(Object(M.k)(t, void 0, !0)),
					onStatsSubscribe: t => e(j.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(j.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(h.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(h.b)(t)),
					removeStreamFromHistory: t => e(I(t)),
					setNewCorrelationId: () => e(Object(L.b)()),
					setIntroFinishedStatus: t => e(Object(L.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(T.b)({
						isMuted: t
					})),
					setVideoVolume: t => e(E.e(t)),
					updateVideoTimestamp: (t, s) => e(P({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(k(e))
					})(t)),
					resetHistory: () => e(N())
				}));
			class gs extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = a.a.createRef(), this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = S()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: r
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && r(t.post.id, e)
					}, O.p), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = S()(() => {
						const {
							nextStream: e
						} = this.props;
						e && this.goToStream(e)
					}, O.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = S()(() => {
						const {
							previousStream: e
						} = this.props;
						e && this.goToStream(e)
					}, O.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(F.g)(e.target) ? e.stopPropagation() : e.keyCode === B.a.ArrowRight ? this.onNextStream() : e.keyCode === B.a.ArrowLeft && this.onPreviousStream()
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
						this.props.sendEvent(Object(W.h)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === q.a.LIVE || this.props.playbackState === q.a.VOD, this.state = {
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
						wasVideoPausedWhenOverlayOpened: !1
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(ps.a.focusVisible), C(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, f(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(H.n)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isOverlay: r,
						isOverlayOpen: n,
						isReportFlowOpen: o,
						onHeartbeatSubscribe: a,
						onRecommendedViewerSubredditsSubscribe: i,
						onStatsSubscribe: c,
						playbackState: d,
						related: l,
						subreddit: m,
						subscribeConfig: u,
						subscribeStreams: h
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
						}), u().then(e => this.unsubscribeConfig = e), h().then(e => this.unsubscribeStreams = e), t && this.isCurrentStreamWatchable() && (a(t.stream.stream_id).then(e => this.unsubscribeHeartbeat = e), c(t.post.id).then(e => this.unsubscribeStats = e)), i().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (l || m) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !Ss(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || d === q.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), o && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					})
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => f(this.previouslyActiveElement))
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						isIntroInProgress: r,
						isMuted: n,
						isOverlay: o,
						isReportFlowOpen: i,
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
						videoTotalTime: w
					} = this.state, S = e && !e.post.subreddit;
					return a.a.createElement("div", {
						className: Object(l.a)(ps.a.theaterContainer, {
							[ps.a.overlay]: o
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, a.a.createElement("div", {
						className: Object(l.a)(ps.a.panesWrapper, {
							[ps.a.initialized]: !r
						})
					}, a.a.createElement("div", {
						className: Object(l.a)(ps.a.pane, ps.a.leftPane)
					}, a.a.createElement("div", {
						className: ps.a.videoContainer
					}, (this.state.isLoading || this.state.isError) && a.a.createElement(Lt, {
						previousStream: u,
						currentStream: e,
						nextStream: d
					}), s && a.a.createElement(V.a, {
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
					}), a.a.createElement(yt, {
						currentStreamId: e && e.post.id,
						isLoading: this.state.isLoading,
						isLive: m === q.a.LIVE,
						isMuted: n,
						isPaused: this.state.isVideoPaused,
						isUnavailable: m === q.a.UNAVAILABLE,
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
						videoTotalTime: w,
						volume: v
					}))), !r && a.a.createElement("div", {
						className: Object(l.a)(ps.a.pane, ps.a.rightPane)
					}, e && !S && a.a.createElement(as, {
						location: c,
						postId: e.post.id,
						sendEvent: p,
						subredditId: e.post.subreddit.id
					}))), e && !r && a.a.createElement(us, {
						nextStream: d,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: u
					}), e && !r && o && a.a.createElement(ws, {
						onClick: this.onClose
					}), e && !r && i && a.a.createElement(R.a, {
						useLiveStreamingFlow: !0,
						overlayCustomStyles: R.b,
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
					}), t && !e.live && 0 !== e.endSN && s === q.a.LIVE && r(t.post.id)
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
					e && r(Object(W.j)(e)), s !== q.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(W.k)(this.props.currentStream)), this.setState(Object.assign({}, this.state, {
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
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(W.e)(this.props.currentStream)))
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
						s && !e && !Object(Y.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, O.k), this.setState(Object.assign({}, this.state, {
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
						const t = Object(U.c)(e),
							r = s ? "?related=".concat(s) : "";
						return "".concat(t).concat(r)
					}
					return Object(U.e)(e.post.id)
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
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), t(e.post.id), this.syncLocationWithCurrentStreamId(), s(Object(W.l)(e)), this.showOverlayAfterStreamSwitching())
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), O.n), this.setState({
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
					const n = !r || Object(U.a)(e.post.id) === r;
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
			const ws = e => {
					let {
						onClick: t
					} = e;
					return a.a.createElement("button", {
						className: ps.a.closeButton,
						onClick: t,
						"aria-label": g.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, a.a.createElement(G.a, {
						className: ps.a.closeIcon
					}))
				},
				Ss = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var fs = vs(Object(A.c)(gs)),
				Cs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Es = s("./src/reddit/helpers/overlay/index.ts"),
				ys = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Os = s.n(ys);
			const {
				fbt: xs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = Object(d.c)({
				isEnabled: z.a,
				isIntroInProgress: Y.b,
				isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
				related: (e, t) => {
					let {
						location: s,
						match: r
					} = t;
					const o = n()([...Object(m.a)(s.search)]).related,
						a = r.params.subreddit;
					return "home" === o || "r/popular" === o ? o : "popular" === a ? "r/popular" : a ? void 0 : "home"
				}
			}), ks = Object(i.b)(_s, (e, t) => ({
				onOpenLoginModal: () => e(Object(u.e)()),
				onStreamByIdRequested: t => e(Object(h.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: r,
						useReplace: n
					} = s;
					const o = n ? c.c : c.b,
						a = r ? Object(Es.b)(t) : t;
					e(o(a))
				}
			}));
			class Is extends a.a.Component {
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
						related: i
					} = this.props, {
						subreddit: c,
						streamId: d
					} = o.params;
					return e ? a.a.createElement("div", {
						className: Object(l.a)(Os.a.rpanContainer, {
							[Os.a.overlay]: r
						})
					}, a.a.createElement(fs, {
						isOverlay: !!r,
						location: n,
						onNavigation: this.onNavigation,
						related: i,
						streamIdFromPath: d,
						subreddit: c && "r/".concat(c)
					}), s && !t && a.a.createElement(v, null)) : a.a.createElement(Ns, null)
				}
			}
			const Ns = () => a.a.createElement("div", {
				className: Object(l.a)(Os.a.rpanContainer, Os.a.forbiddenScreen)
			}, a.a.createElement("h2", null, xs._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = ks(Object(A.c)(Object(Cs.b)(Is)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				h = s.n(m)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "k", (function() {
				return y
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return V
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
				return G
			}));
			const b = e => e.publicAccessNetwork.reports.reported,
				v = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				w = e => e.publicAccessNetwork.history.visitOrder,
				S = e => e.publicAccessNetwork.hlsStreams,
				f = Object(r.a)(S, e => e.ended),
				C = Object(r.a)(S, e => e.removed),
				E = Object(r.a)(e => e.publicAccessNetwork.models, f, C, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, i.b.ENDED) ? i.b.ENDED : r,
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
							n = B(r, i.b.ENDED) ? i.b.ENDED : r,
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
				y = (e, t) => {
					return E(e)[Object(a.g)(t)]
				},
				O = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => h(t.listingName)(e, t), E, b, c.h, d.b, (e, t, s, r, n, c) => {
					if (c) {
						const o = [];
						if (e) {
							const t = Object(a.g)(e);
							s[t] && o.push(t)
						}
						const c = o.concat(t),
							d = [...new Set(c)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				x = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return O(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				_ = Object(r.a)(E, x, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === i.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				k = Object(r.a)(E, x, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				I = Object(r.a)(w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return x(e, {
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
					return x(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, v, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = n.find(e => e.stream.state === i.b.IS_LIVE);
					if (o) return o.post.id;
					const a = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				P = Object(n.a)(Object(r.a)(N, E, (e, t) => e ? t[e] : void 0)),
				j = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.g)(s) : void 0
				}, N, b, c.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return x(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				L = Object(r.a)(g, w, I, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(r.a)(g, w, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(n.a)(Object(r.a)(j, E, (e, t) => e ? t[e] : void 0)),
				V = Object(n.a)(Object(r.a)(L, E, (e, t) => e ? t[e] : void 0)),
				R = Object(n.a)(Object(r.a)(T, E, (e, t) => e ? t[e] : void 0)),
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
					return s ? y(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(r.a)(j, v, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const W = Object(r.a)(j, E, p.b, (e, t, s) => {
					if (s) return U.INTRO;
					const r = e && t[e];
					if (!r) return U.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.b.IS_LIVE || n === i.b.DISCONNECTED ? U.LIVE : n === i.b.ENDED && r.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				H = Object(r.a)(M, W, p.b, l.c, l.p, (e, t, s, r, n) => s ? r : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(M, W, F, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(a, o.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.34571d736b1491acc176.js.map