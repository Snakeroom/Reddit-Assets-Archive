// https://www.redditstatic.com/desktop2x/HappeningNow.9fd9b1d6620a9bd95569.js
// Retrieved at 12/19/2022, 4:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HappeningNow"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function r(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, a = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						l = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						d = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !a && !d && /macintosh/i.test(t),
						x = !o && !u && !m && !p && /linux/i.test(t),
						v = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						C = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !g && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: C || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || C
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: C || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: C || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: C || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || C
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : d ? s = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: C || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: C || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || C
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || C
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || C
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? s = {
						name: "Android",
						version: C
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, C && (s.version = C)) : a ? (s = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, C && (s.version = C)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || C
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && C && (s.version = C)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && a ? (s[a] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : w ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : x && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var _ = "";
					s.windows ? _ = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? _ = (_ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? _ = (_ = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? _ = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? _ = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (_ = n(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (s.osversion = _);
					var k = !s.windows && _.split(".")[0];
					return g || l || "ipad" == a || o && (3 == k || k >= 4 && !E) || s.silk ? s.tablet = e : (E || "iphone" == a || "ipod" == a || o || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function a(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, r, s) {
					var o = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (o = t(s));
					var i = "" + o.version;
					for (var l in e)
						if (e.hasOwnProperty(l) && o[l]) {
							if ("string" != typeof e[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e));
							return a([i, e[l]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = o, n.compareVersions = a, n.check = function(e, t, n) {
					return !o(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, a) {
					n = r ? (r = !1, e) : t(n, e, s, a)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				a = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var l = i(e) ? r : o,
					c = arguments.length < 3;
				return l(e, a(t, 4), n, c, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const s = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				a = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				o = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${n})`,
					strokeWidth: "2"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${n}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${n})`
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${n}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${n})`,
					strokeWidth: "0.5"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${n}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(s.a)("spBurnLinks", Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/HappeningNow/EmptyState/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3GDYLZHJp1CkQvFPsQCbCE",
				img: "_32u4k6FHHzC4G2mmF-gRkr",
				textContainer: "_2jmarrTKX-C5CcS50-jRHU",
				headerText: "Gh10dctgZ5ORre_jETYUB",
				descriptionText: "_1hXv7xHnobKA672aE-iYmN",
				ctaText: "_6h9G4KWPSERhJS5B0sV9"
			}
		},
		"./src/reddit/components/HappeningNow/Filter/index.m.less": function(e, t, n) {
			e.exports = {
				filterButton: "_2P9raqnOIsAUEQSfnU7hZZ",
				selected: "_1UGYMQb88YSJnHQDOqnPMa"
			}
		},
		"./src/reddit/components/HappeningNow/Post/Header/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3CpHOa_wss1Uf4XuwgeLdf",
				contentTypeIcon: "_1q8tCKvzEps5DPM3s1vhC-",
				nightMode: "_3WD1l96rgCUEAJhfoxpfOS",
				subredditIconContainer: "_3nb6-Qc_tPWrP57ve2-zDj",
				subredditIcon: "_3BZmsNmiA2C9waHRi7u0oJ",
				liveChatIcon: "_3ju8FdjahEeCn1M_eaPat2",
				microphoneIcon: "SOQ1jJj33E1erwhCGqhEN",
				headerMetadata: "F_eB6vxKPSHDl98MTrROE",
				subredditName: "_7H4lGLNqNHupQGALiNdMY",
				liveContentType: "_1_tCmQ6n0eCLK2qYpBlWe5",
				messageCount: "rd-rfo6BngwUkFCoFL1Xh"
			}
		},
		"./src/reddit/components/HappeningNow/Post/LiveRing/index.m.less": function(e, t, n) {
			e.exports = {
				speakerRingContainer: "_3sC31s9mXrI0PEdUTKKxCk",
				speakerRing: "utep78zho4xukDCyrXfAy",
				speakerRingInner: "_1FobH5VJdWRp6KSbJp40z5",
				animatedRing: "_1K-CSiS9V-vMgdXeWbGTfe",
				reverbInner: "_2K8qn3PYCZN3KgcSUgT3of",
				speakerRingMiddle: "_3C0XizJbbkPSS4huEC-wuf",
				reverbMiddle: "_1htcb3sZYrgdZrmZ_DrErr",
				speakerRingOuter: "_19Qhut55Y67XyDJZMTtNne",
				reverbOuter: "cTrK64n7uVrnR8apqBnig"
			}
		},
		"./src/reddit/components/HappeningNow/Post/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				menuButton: "SUbJ6gHsHtpoa0nEYRiL4"
			}
		},
		"./src/reddit/components/HappeningNow/Post/ParticipantsDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				participantsDisplay: "_1Tjy2e6WY5UavGMOuxGwbc",
				avatarRow: "_2jKvBn-l2EAg-KUTyuVPpL",
				avatarContainer: "_3dH0pctDGK1SEkkYvGef6d",
				avatar: "_2iT42rKDRQ8oTXPCxYyilU",
				snoovatar: "Xkrm9lUxLtDL_jxN5Hwr1",
				nightMode: "_1eieDv--r8AamEd4MerEWt",
				userCount: "mtAkgtAA6H-R683xSZKl8"
			}
		},
		"./src/reddit/components/HappeningNow/Post/Votes/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3sHHCQk8h_iwofHdlAUVSn",
				upvote: "_2A6GES5d91L5Qad8NEPq9R",
				voted: "_1SfU6p9dOk8FOpdyu8wQQA",
				downvote: "_2nTZ3Pt_6w9J9B1E7qNXM2"
			}
		},
		"./src/reddit/components/HappeningNow/Post/index.m.less": function(e, t, n) {
			e.exports = {
				post: "_2oRacEyQZ5ZXF7aqSy8ZYn",
				votesContainer: "_3eAuIK5dUq60wuDDK_oTpt",
				main: "_30tg1O9wAzwRoTqqBSRBlz",
				showVotes: "_3ZSjRUGOA0v5oEW8Y5RYEu",
				content: "_1p_M3D7bJ3rMWZfEPFZ1hQ",
				title: "pyUBnh_uLBl3ZZ_koLDjz",
				lineCount2: "_3y5oYkO4nRxyCkCBT_H9Q-",
				body: "_1TrxB2POu6F7W1humybt1N"
			}
		},
		"./src/reddit/components/HappeningNow/Section/carousel.m.less": function(e, t, n) {
			e.exports = {
				container: "V130prALH8-z1ok0Nuy-e",
				carouselItem: "YxZa4MYqw5DM6qG6kLJvu",
				arrowButton: "_3XgDX3CpzfSdXF2TRs80Nn",
				arrowIcon: "_2oQ5RhjzWmg1f47xEKpv9L",
				arrowButtonContainer: "_1ikZW_nGEU2ne6apfmb4Sw",
				arrowVisible: "_3tm2A2jkjRI8tBu5jCUskC",
				nightMode: "_1sJcdqJYjinfs9zzk27b0g",
				rightArrowContainer: "_2luN_RxsAHpnveFPKrgymT",
				leftArrowContainer: "_34YMuIJaNiJIBH_-6sTof2",
				inner: "_3YDiER2hxHeGJfA8oNhyiq"
			}
		},
		"./src/reddit/components/HappeningNow/Section/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3O-89EoaLB3pbmrMwskje-",
				content: "_22agvKZP49I6cTCt4I6A1R"
			}
		},
		"./src/reddit/components/HappeningNow/SidebarContent/index.m.less": function(e, t, n) {
			e.exports = {
				liveDiscoveryContentIntro: "_29ZINqNU9TgYgGNEarsvKV",
				img: "_2B04XaP70AoQitDrVs8YC8",
				background: "_2BATSEvVIDuRhQkl-taY3S",
				header: "_M5dMp5aodYqMrEbN9SL0",
				description: "_2iVroAs9yYYqvQgNjcbJIl",
				links: "_2gF7CwFWoUrsLhPqOxCc6F",
				linksWrapper: "ddddf7loJDK_wwKM77rOh",
				column: "_2yma8dKM02gyW2laznwVL1",
				link: "_3vKY4wbaOTwaAn5E2E9XbX",
				copyright: "_2weOgT5LuBeJvfz2zSTHes"
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(o);
			const l = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return a.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: i.a.unblurButton
					}, l(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				d = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(a.b)(() => Object(o.c)({
					isNightmodeOn: m.fb
				}));
			t.a = f(e => {
				const {
					isResponsive: t,
					source: n
				} = e, r = {
					responsive: "true",
					is_nightmode: e.isNightmodeOn
				}, a = new URL(n), o = t && !a.searchParams.has("s") ? Object(i.a)(Object(c.a)(n), r) : Object(c.a)(n), m = {
					overflow: "hidden"
				};
				return m.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (m.margin = "0 auto"), e.isListing || (m.maxHeight = `${u.d}px`), void 0 !== e.maxHeight && (m.maxHeight = e.maxHeight || void 0), e.isTweet || (m.height = "100%"), s.a.createElement("iframe", {
					className: Object(l.a)(d.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: o,
					style: m,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return R
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/ads.ts"),
				C = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/constants/tracking.ts"),
				j = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				N = n.n(y);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => e > 2 * E.d,
				M = e => a.a.createElement("img", {
					alt: e.altText || r.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[N.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				T = e => {
					const t = Object(c.a)(N.a.image, f.g, e.className, {
							[N.a.mShowCentered]: e.showCentered,
							[N.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${E.j}px`), e.isListing || e.isTall && R(e.height) || (n.maxHeight = `${e.maxHeight||E.d}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(s.useRef)(null),
						[i, l] = Object(s.useState)(!1),
						d = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!i && t && l(!0)
							})
						}, [i]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(g.a)(o, d, u.current);
					const {
						width: m,
						height: p
					} = e;
					let h = 240;
					if (m / p > 1)
						if (m < 240) h = p;
						else {
							(h = p * (240 / m)) < 20 && (h = 20)
						}
					else h = Math.min(h, p);
					const b = Object(s.useRef)({
						height: h
					});
					return e.renderSmallMedia ? a.a.createElement("div", {
						ref: o,
						style: b.current
					}, i && a.a.createElement(M, S({}, e, {
						className: t
					}))) : a.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(E.M)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.M)(e.height, e.width) ? `${E.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(c.a)(N.a.container, e.className, {
							[N.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				L = Object(o.b)(() => Object(l.a)(w.F, k.lb, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(w.b)(e, r) : null
				}, _.d, w.G, (e, t, n, r, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: r.pageType,
					post: s
				})));
			t.a = L(e => {
				const t = Object(C.a)();
				return e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": j.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, b.a.Click), Object(v.a)(e.post, e.pageType))
					}
				}, P(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, P(e)) : P(e)
			});
			const F = (e, t) => a.a.createElement(T, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[O.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(d.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				P = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(E.M)(n.height, n.width),
						o = R(n.height) && s;
					return a.a.createElement(I, S({}, n, {
						className: `${s?`${O.a} `:""}${n.className||""}`
					}), n.isListing ? a.a.createElement("div", {
						className: n.contentImageClassName
					}, F(s, n)) : a.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: N.a.imageLink
					}, F(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && a.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > E.j && Object(E.M)(n.height, n.width) && a.a.createElement("div", {
						className: N.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && a.a.createElement(h.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				l = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(l);
			const d = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					r = e.blurSrc ? s.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					l = Object(i.C)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${l}%`
					}
				}), s.a.createElement("div", {
					className: Object(a.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(d, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@reddit/adblock-detection/browser.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const f = 100,
				x = f / 2 / 1e3;
			var v = n("./src/lib/forceHttps/index.ts"),
				C = n("./src/lib/hooks/usePrevious.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function E(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: r,
					onBufferingChange: s,
					shouldLoad: i,
					shouldPause: l,
					showCentered: c,
					showFull: d,
					source: u,
					onClick: m,
					...p
				} = e;
				const h = Object(a.useRef)(),
					b = Object(a.useRef)(),
					E = Object(C.a)(l);

				function w(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(a.useEffect)(() => {
					if (w(!l && (t || r)), b.current && s) return h.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							a = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", a), e.addEventListener("playing", a);
						let o = !1,
							i = 0,
							l = 0;
						const c = window.setInterval(() => {
							if (l = e.currentTime, r) return r = !1, void(i = l);
							if (e.paused || e.seeking || !n) return void(i = l);
							const s = o;
							4 === e.readyState ? o = !1 : !o && l >= i && l < i + x ? o = !0 : o && l >= i && l > i + x && (o = !1), i = l, s !== o && t(o)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", s)
						}
					}(b.current, s), () => {
						h.current && h.current()
					}
				}, []), Object(a.useEffect)(() => {
					E !== l && w(!l && (t || r))
				}, [E, l, t, r]), o.a.createElement("video", g({}, p, {
					ref: e => b.current = e,
					muted: !0,
					onClick: m
				}), o.a.createElement("source", {
					src: Object(v.a)(u || "")
				}))
			}
			var w = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = n.n(w);
			const k = Object(l.c)({
				autoplayPref: h.d,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function O(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: a,
					started: l
				} = Object(i.e)(t => k(t, e)), {
					postId: h,
					shouldLoad: b,
					source: f,
					height: x,
					isNotCardView: v,
					showFull: C,
					shouldPause: g,
					width: w,
					isListing: O,
					className: j,
					showCentered: y,
					originalSource: N,
					isPromoted: S,
					renderSmallMedia: R,
					onClick: M
				} = e, T = t && !(S && Object(c.hasAcceptableAds)()), I = Object(i.d)();

				function L(e) {
					I(e ? Object(u.s)(h) : Object(u.Q)(h))
				}

				function F() {
					return I(Object(u.L)({
						postId: h
					}))
				}
				const P = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && I(Object(u.D)(h))
				}, 200);

				function B(e) {
					e.persist(), P(e)
				}

				function H(e) {
					var t;
					(a || D(e), l) || (t = e.timeStamp, I(Object(u.M)(h, t)))
				}

				function A(e) {
					I(Object(u.r)(h, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						I(Object(u.P)({
							metadata: e,
							postId: h
						}))
					}({
						id: h,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function U(e) {
					r || H(e), a || D(e), I(Object(u.O)(h))
				}

				function V() {
					const e = {};
					return y && (e.margin = "0 auto"), O || (e.maxHeight = `${p.d}px`), o.a.createElement(E, {
						autoplay: T,
						className: Object(d.a)(m.a, _.a.styledVideo, {
							[_.a.renderSmallMedia]: R
						}),
						height: R ? void 0 : x,
						isListing: O,
						isNotCardView: v,
						key: h,
						loop: !0,
						onBufferingChange: L,
						onClick: M,
						onLoadStart: A,
						onLoadedData: H,
						onLoadedMetadata: D,
						onPause: F,
						onPlaying: U,
						onTimeUpdate: B,
						shouldLoad: b,
						shouldPause: g,
						showCentered: y,
						showFull: C,
						source: f,
						style: R ? void 0 : e,
						width: R ? void 0 : w
					})
				}
				return O ? V() : o.a.createElement("div", {
					className: Object(d.a)(_.a.container, j, {
						[_.a.centered]: y
					})
				}, o.a.createElement("a", {
					href: N,
					target: "_blank",
					rel: "noopener noreferrer"
				}, V()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/constants/colors.ts");
			const a = {
				backgroundColor: s.a.overlayReportFlow
			};
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/constants/colors.ts");
			const a = {
					backgroundColor: s.a.overlayReportFlow
				},
				o = Object(r.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				i = Object(r.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportFlowNew").then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = i
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/Giphy.m.less": function(e, t, n) {
			e.exports = {
				anchor: "voEElhHVrm-yKZcIbBmik",
				giphy: "_1gg1MfJZaNkaPmqHpGQHni",
				attributionRow: "U76N5pdhVpwLUkKv0jpDZ",
				giphyLogo: "lhXj5Lw1-62CSn58uodEt",
				attributionText: "WZIEUuvYX30GAtLJofhDk"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				v = m.a.span("SpoilerWrapper", u.a),
				C = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return a.a.createElement(v, p({}, r, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				g = Object(c.a)(m.a.wrapped(l.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class E extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return a.a.createElement(C, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, a.a.createElement(f, null, a.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), a.a.createElement(g, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "s", (function() {
				return R
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "w", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				i = n.n(o),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const d = [l.a.div("H1", i.a), l.a.div("H2", i.a), l.a.div("H3", i.a), l.a.div("H4", i.a), l.a.div("H5", i.a), l.a.div("H6", i.a)],
				u = l.a.hr("Hr", i.a),
				m = l.a.code("M", i.a),
				p = l.a.pre("Pre", i.a),
				h = l.a.blockquote("Blockquote", i.a),
				b = l.a.p("P", i.a),
				f = l.a.li("Li", i.a),
				x = l.a.ul("Ul", i.a),
				v = l.a.ol("Ol", i.a),
				C = l.a.strong("B", i.a),
				g = l.a.em("I", i.a),
				E = l.a.span("U", i.a),
				w = e => s.a.createElement("del", e),
				_ = l.a.sub("Sub", i.a),
				k = l.a.sup("Sup", i.a),
				O = l.a.table("Table", i.a),
				j = l.a.tr("Tr", i.a),
				y = l.a.td("Tdl", i.a),
				N = l.a.td("Tdc", i.a),
				S = l.a.td("Tdr", i.a),
				R = l.a.th("Thl", i.a),
				M = l.a.th("Thc", i.a),
				T = (l.a.th("Thr", i.a), l.a.wrapped(e => s.a.createElement(a.b, e), "A", i.a)),
				I = l.a.wrapped(c.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				x = n.n(f);
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				C = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return i.a.createElement(v, r)
				}),
				g = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				E = e => a()(e, g),
				w = e => null == e ? void 0 : e.findIndex(g),
				_ = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: a,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: f,
						renderMediaAsLinks: g,
						rtJsonElementProps: _,
						useExplicitTextColor: k,
						shouldBlur: O,
						onClickRevealSpoilerText: j,
						mediaProps: y
					} = e, N = r.document, S = [], R = e.mediaMetadata || null, M = w(N), T = E(N);
					if (O && !s && !o) return i.a.createElement(v, {
						className: Object(l.a)(m.j, n)
					}, i.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: d
					}, Object(u.b)(!!a, !!c))));
					if (-1 !== M)
						for (let i = M; i <= T; i++) {
							const e = N[i];
							switch (e.e) {
								case p.k:
									S.push(b.c(e, _, i));
									break;
								case p.l:
									S.push(b.d(i));
									break;
								case p.b:
									S.push(b.a(e, R, _, i));
									break;
								case p.c:
									S.push(b.b(e, i));
									break;
								case p.p:
									S.push(b.f(e, R, _, i, j));
									break;
								case p.A:
									S.push(b.h(e, R, _, i, j));
									break;
								case p.v:
									S.push(b.g(e, R, _, i, j, y));
									break;
								case p.h:
									S.push(Object(h.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.E:
									S.push(...Object(h.b)({
										node: e,
										key: i,
										rtJsonElementProps: _,
										mediaMetadata: R,
										renderMediaAsLinks: g,
										postId: f,
										altText: t,
										mediaProps: y
									}))
							}
						}
					return k ? i.a.createElement(v, {
						className: Object(l.a)(m.j, n)
					}, S) : i.a.createElement(C, {
						className: Object(l.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, S)
				};
			class k extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => r.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return _(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				commentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return D
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				l = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				d = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/models/RichTextJson/index.ts"),
				v = n("./src/reddit/components/RichTextJson/elements.tsx"),
				C = n("./src/reddit/endpoints/giphy/index.ts"),
				g = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = n("./src/reddit/hooks/useMounted.ts");
			var w = e => a.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, a.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), a.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), a.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), a.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), a.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), a.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				_ = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				k = n.n(_);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					let {
						id: t,
						mp4Url: n,
						className: r,
						externalLink: o,
						onClick: i
					} = e;
					const l = o || Object(h.h)(t),
						c = Object(s.useRef)(null),
						[d, u] = Object(s.useState)(!1),
						[m, p] = Object(s.useState)(null),
						b = Object(E.b)(),
						f = Object(s.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: n
								} = e;
								!d && n && (u(!0), async function(e, t) {
									const n = Object(h.g)(e);
									t((await Object(C.a)(n)).data.user)
								}(t, e => {
									b.current && p(e)
								}))
							})
						}), [u, t, d, b]);
					Object(g.a)(c, f);
					const x = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement(v.a, {
						href: l,
						target: "_blank",
						className: k.a.anchor
					}, n ? a.a.createElement("video", {
						className: k.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: i,
						ref: c
					}, a.a.createElement("source", {
						src: n
					})) : l), a.a.createElement("div", {
						className: k.a.attributionRow
					}, a.a.createElement(w, {
						className: k.a.giphyLogo
					}), a.a.createElement("span", {
						className: k.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && x && a.a.createElement(a.a.Fragment, null, O._("by {=[name]}", [O._param("=[name]", a.a.createElement(v.a, {
						href: m.profile_url,
						target: "_blank"
					}, O._("{name}", [O._param("name", x)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), O._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				y = n("./src/reddit/components/RichTextJson/media.m.less"),
				N = n.n(y),
				S = n("./src/lib/lessComponent.tsx"),
				R = n("./src/reddit/helpers/media/index.ts");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = /\/(\w+)\/asset\/(\w+)\//,
				I = S.a.wrapped(v.a, "A", N.a),
				L = S.a.wrapped(d.a, "ImageBox", N.a),
				F = S.a.wrapped(e => a.a.createElement("p", e), "Caption", N.a),
				P = S.a.div("Placeholder", N.a),
				B = S.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: i,
						onReload: l,
						...c
					} = e;
					const d = n === x.E ? r.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : r.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						l && setTimeout(() => {
							m(!0)
						}, 1500)
					}), a.a.createElement(P, M({
						className: Object(o.a)(t, {
							[N.a.renderSmallMedia]: i,
							[N.a.reload]: !!l
						}),
						style: {
							"--placeholder-content-text": `'${d}'`
						}
					}, c), !!l && u && a.a.createElement(p.t, {
						priority: p.c.Plain,
						className: N.a.ModalTopicsErrorButton,
						Icon: Object(b.b)("refresh"),
						text: r.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: l
					}))
				}, "Placeholder", N.a),
				H = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return a.a.createElement("div", {
						className: N.a.MediaWrapper
					}, a.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, a.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				A = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === x.s ? s = n.s.u : n.e === x.r ? s = n.s.gif : n.e === x.t && (s = (e => {
						const t = T.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? a.a.createElement(I, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				D = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: r,
						mediaMetadata: s,
						renderMediaAsLinks: i,
						postId: c,
						altText: d,
						mediaProps: p
					} = e;
					const b = x.F(s, t.id);
					if (i) return [A(t, n, b)];
					const v = [];
					return !b || b.e === x.s && null === b.s.x && null === b.s.y ? v.push(((e, t, n, r) => a.a.createElement(B, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: r
					}))(t.e, n, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : b.e === x.s ? v.push(((e, t, n, r, s) => {
						let {
							id: i,
							s: l,
							p: c
						} = e;
						const {
							alignLeft: d,
							renderSmallMedia: m,
							onClick: p
						} = s || {};
						let h = l;
						return m && (h = Object(R.i)(240, 20, l, c)), a.a.createElement("div", {
							className: Object(o.a)(N.a.MediaWrapper, {
								[N.a.mHasCaption]: n,
								[N.a.hasSmallMedia]: m
							})
						}, a.a.createElement(u.a, {
							height: h.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: h.x
						}, a.a.createElement(L, {
							altText: r,
							originalSource: l.u,
							postId: i,
							source: h.u,
							maxHeight: f.w,
							height: h.y,
							width: h.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: d,
							renderSmallMedia: m,
							onClick: p
						})))
					})(b, n, !!t.c, d, p)) : b.e === x.r ? v.push(((e, t, n, r, s) => {
						let {
							id: i,
							ext: l,
							s: c
						} = e;
						return Object(h.i)(i) ? a.a.createElement(j, {
							key: t,
							id: i,
							mp4Url: c.mp4,
							className: N.a.CommentGiphyWrapper,
							externalLink: l,
							onClick: null == s ? void 0 : s.onClick
						}) : a.a.createElement("div", {
							className: Object(o.a)(N.a.MediaWrapper, {
								[N.a.mHasCaption]: n,
								[N.a.hasSmallMedia]: null == s ? void 0 : s.renderSmallMedia
							})
						}, a.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, a.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: i,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !(null == s ? void 0 : s.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == s ? void 0 : s.renderSmallMedia,
							onClick: null == s ? void 0 : s.onClick
						})))
					})(b, n, !!t.c, 0, p)) : b.e === x.t && v.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: i,
							x: c,
							y: d,
							isGif: m
						} = e;
						return a.a.createElement("div", {
							className: Object(o.a)(N.a.MediaWrapper, {
								[N.a.mHasCaption]: n
							})
						}, a.a.createElement(u.a, {
							height: d,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, a.a.createElement(l.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: s,
							mpegDashSource: i,
							postId: r,
							isGif: m
						})))
					})(b, n, !!t.c, c)), t.c && v.push(((e, t) => a.a.createElement(F, {
						key: t
					}, e))(t.c, `caption${n}`)), v
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return M
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return D
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(f);
			const v = 1e3,
				C = 1e3;
			var g;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(g || (g = {}));
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = g.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = g.Inside, setTimeout(() => {
							this.mouseLocation === g.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = g.Outside, setTimeout(() => {
							this.mouseLocation !== g.Inside && this.setState({
								tooltipOpen: !1
							})
						}, C)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.lb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, r, s;
					t.e === m.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === m.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const a = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return s ? i.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: s,
						width: n,
						height: r,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${a}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var w = Object(d.c)(E),
				_ = n("./src/reddit/components/RichTextJson/media.tsx"),
				k = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = n("./src/reddit/components/SubredditMention/index.tsx"),
				j = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				y = n("./src/reddit/helpers/isComment.ts"),
				N = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts"),
				R = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const M = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						a = [],
						o = r.length;
					for (let i = 0; i < o; i++) {
						const e = r[i];
						a.push(e.e === m.x ? e.t : D(e, t, i))
					}
					const c = l.x[s - 1];
					return i.a.createElement(c, {
						key: n
					}, a)
				},
				T = e => i.a.createElement(l.e, {
					key: e
				}),
				I = (e, t, n, r, s) => {
					const a = e.c;
					if (!a) return;
					const o = a.length,
						c = [];
					for (let i = 0; i < o; i++) c.push(P(a[i], t, n, i, s));
					return i.a.createElement(l.c, {
						key: r
					}, c)
				},
				L = (e, t) => {
					const n = e.c;
					return i.a.createElement(l.k, {
						key: t
					}, i.a.createElement(l.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				F = (e, t, n, r, s) => {
					const a = e.c,
						o = [],
						c = a.length;
					for (let u = 0; u < c; u++) {
						const e = a[u].c;
						e && e.length && o.push(i.a.createElement(l.g, {
							key: u
						}, e.map((e, r) => P(e, t, n, r, s))))
					}
					const d = e.o ? l.i : l.v;
					return i.a.createElement(d, {
						key: r
					}, o)
				},
				P = (e, t, n, r, s) => {
					switch (e.e) {
						case m.b:
							return I(e, t, n, r, s);
						case m.c:
							return L(e, r);
						case m.k:
							return M(e, n, r);
						case m.l:
							return T(r);
						case m.p:
							return F(e, t, n, r, s);
						case m.v:
							return H(e, t, n, r, s);
						case m.A:
							return B(e, t, n, r, s)
					}
				},
				B = (e, t, n, r, s) => {
					const a = e.c,
						o = e.h,
						c = a.length,
						d = o.length,
						u = [],
						m = [],
						p = [];
					for (let l = 0; l < d; l++) {
						const e = o[l],
							{
								H: r,
								D: a
							} = W(e.a),
							{
								c = []
							} = e;
						u.push(i.a.createElement(r, {
							key: l
						}, A(c, t, n, s))), p[l] = a
					}
					for (let h = 0; h < c; h++) {
						const e = a[h],
							r = e.length,
							o = [];
						for (let a = 0; a < r; a++) {
							const r = p[a],
								{
									c: l = []
								} = e[a];
							o.push(i.a.createElement(r, {
								key: a
							}, A(l, t, n, s)))
						}
						m.push(i.a.createElement(l.t, {
							key: h
						}, o))
					}
					return i.a.createElement(l.n, {
						key: r
					}, i.a.createElement("thead", null, i.a.createElement(l.t, null, u)), i.a.createElement("tbody", null, m))
				},
				H = (e, t, n, r, s, a) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(l.j, {
						key: e
					}, i.a.createElement("br", null)))(r);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(S.i)(o.id) ? i.a.createElement(l.j, {
						key: r
					}, A(e.c, t, n, s)) : Object(_.b)({
						node: o,
						key: r,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: a
					})
				},
				A = (e, t, n, r) => {
					const s = [],
						a = e.length;
					for (let o = 0; o < a; o++) {
						const a = e[o];
						if (a.e === m.B) s.push(U(a, o));
						else if (a.e === m.y) s.push(i.a.createElement(k.a, {
							key: o,
							onClickReveal: r
						}, A(a.c, t, n, r)));
						else if (a.e === m.n) s.push(i.a.createElement("br", {
							key: o
						}));
						else if (a.e === m.m || a.e === m.a) {
							if (a.id.startsWith("emote|")) {
								const e = m.F(t, a.id);
								e && s.push(i.a.createElement(w, {
									key: o,
									node: a,
									media: e
								}))
							}
						} else s.push(D(a, n, o))
					}
					return s
				},
				D = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const r = U({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(j.b)(e.u)) return i.a.createElement(l.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, a;
							const o = Object(R.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(N.b)(c) && (s = c.postId), c && Object(y.b)(c) && (a = c.id, s = c.postId), i.a.createElement(l.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: s,
								commentId: a
							}, r);
						case m.z:
							return i.a.createElement(O.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return i.a.createElement(l.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return i.a.createElement(l.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: n,
						t: s
					} = e, a = [];
					if (!n) return G(0, s, t);
					const o = Object(r.a)(s);
					let i = 0,
						l = 0;
					const c = n.length;
					for (; i < c; i++) {
						const [e, t, r] = n[i], c = t + r, d = o[t], u = o[c] - d;
						d > l && a.push(G(0, s.substr(l, d - l), `between${i}`)), a.push(G(e, s.substr(d, u), i)), l = d + u
					}
					return l < s.length && a.push(G(0, s.substr(l), `remaining${i}`)), a
				},
				V = {
					[m.j.monospace]: l.h,
					[m.j.bold]: l.b,
					[m.j.italic]: l.f,
					[m.j.underline]: l.u,
					[m.j.strikethrough]: l.d,
					[m.j.subscript]: l.l,
					[m.j.superscript]: l.m
				},
				G = (e, t, n) => {
					let r = t;
					return r = a()(V, (t, r, s) => e & parseInt(s, 10) ? i.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				W = e => {
					switch (e) {
						case m.f:
							return {
								H: l.r, D: l.q
							};
						case m.d:
							return {
								H: l.r, D: l.o
							};
						case m.e:
						default:
							return {
								H: l.r, D: l.p
							}
					}
				}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(l);
			const d = a.a.wrapped(o.b, "SubredditIcon", c.a),
				u = a.a.wrapped(e => s.a.createElement(i.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(l.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(d.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(d.b, null)), `r/${t}`))
					}
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class v extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return s.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const C = Object(h.c)(v),
				g = Object(o.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				E = Object(a.b)(g),
				w = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: a,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return s.a.createElement(C, {
						subredditName: r,
						rtJsonElementProps: o
					});
					switch (a) {
						case b.Qf.SmIcon:
							return s.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: o
							});
						case b.Qf.SmIconHc:
							return s.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(C, {
								subredditName: r,
								rtJsonElementProps: o
							})
					}
				};
			t.b = E(w)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function l(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(r)(e => {
					const {
						featureEnabled: r,
						...a
					} = e, o = a;
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/memoize.js"),
				s = n.n(r),
				a = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/config.ts");
			const i = Array.from({
					length: 20
				}).map((e, t) => `${o.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				l = Array.from({
					length: 8
				}).map((e, t) => `${o.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				c = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return c;
				const r = n ? l : i,
					s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: a.a[(s + t) % a.a.length],
					image: r[(s + t) % r.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(a.b)(t))) return Object(s.b)(t) ? o.SourceElement.Comment : Object(r.y)(n) ? o.SourceElement.PostDetail : Object(r.J)(n) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return w
			}));
			var r, s, a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.o(e),
					source: s.LINK,
					action: a.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: s,
					screen: u.cb(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(i.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const s = Object(i.b)(n) ? "postId" : "commentId",
						a = {
							url: `/r/${r}/`,
							sourceElement: Object(l.a)(t),
							subredditName: r,
							[s]: n.id
						},
						c = Object(d.C)(e, {
							subredditName: r
						});
					return c ? {
						outbound: {
							...a,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...a
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(i.b)(n) && !Object(o.b)(n)) return {};
					const r = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.mb(e, r),
						...h(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...b(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: a.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.nb(t, e),
					screen: u.cb(t)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.nb(n, e),
					screen: u.cb(n)
				}),
				C = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.nb(n, e),
					screen: u.cb(n)
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => t(!0), []), e
			}

			function a() {
				const e = Object(r.useRef)(!0);
				return Object(r.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("report", e.isFilled), l.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						shouldReloadHome: t
					} = e;
					return t ? a.a.createElement(o.a, {
						kind: o.b.ExternalLink,
						priority: o.c.Primary,
						className: l.a.primaryRouterLink,
						href: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})) : a.a.createElement(o.a, {
						kind: o.b.InternalLink,
						priority: o.c.Primary,
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					}))
				},
				d = e => {
					let {
						message: t,
						shouldReloadHome: n
					} = e;
					return a.a.createElement("div", {
						className: l.a.container
					}, a.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), a.a.createElement(c, {
						shouldReloadHome: n
					}))
				},
				u = e => {
					let {
						message: t,
						shouldReloadHome: n
					} = e;
					return a.a.createElement("div", {
						className: l.a.container
					}, a.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), a.a.createElement(c, {
						shouldReloadHome: n
					}))
				}
		},
		"./src/reddit/pages/HappeningNow/index.m.less": function(e, t, n) {
			e.exports = {
				main: "_1s0yf8yaKs3Bm_FnVQLBhW",
				container: "pNm6yMSKQZScSZjTA1OG",
				twoColumnLayout: "_7I4q4aAQamu75scWk9MM7",
				filters: "_2JDcrn_tmCjvuKbGIm0Tm4",
				content: "_3ihSslAiQM4Ly7oq-AhJ-s",
				column: "LtGyPi3MRg7RSKYlAHLHy",
				rightRail: "_1tTTQqDSCCPoLx-ORWAerg",
				withTopMargin: "_2RDOG6hnAPm7SZUCfu21Vt",
				header: "ZbIVauNOHVNWCMCmws38Y"
			}
		},
		"./src/reddit/pages/HappeningNow/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/happeningNow/constants.ts"),
				d = n("./src/lib/isDefined.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/makeRequest/index.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/redditGQL/operations/FetchLiveDiscoveryContent.json"),
				x = n("./src/redditGQL/types.ts");
			const v = e => {
					const {
						icon: t,
						snoovatarIcon: n,
						profile: r
					} = e || {};
					if (t || n) return {
						icon: t,
						snoovatarIcon: n,
						profile: r
					}
				},
				C = async e => {
					const t = await Object(u.a)(e, f);
					if (!Object(m.c)(t)) throw new Error("Encountered an error while fetching live discovery content");
					return (e => {
						var t, n, r, s;
						const a = {},
							o = {},
							{
								popularLiveContent: i,
								recommendedLiveContent: l
							} = e.liveDiscoveryContent,
							c = e => {
								var t, n, r, s;
								const i = null == e ? void 0 : e.node;
								if (!i) return;
								const {
									post: l,
									contentType: c,
									...u
								} = i;
								if (Object(b.j)(l) || Object(b.i)(l)) return;
								const m = [];
								let f;
								const C = Object(p.f)(l);
								if (a[C.id] = C, Object(b.n)(l)) {
									const e = Object(h.a)(l.subreddit);
									o[e.id] = e
								}
								switch (c) {
									case x.u.Chat: {
										const e = null === (r = null === (n = null === (t = null == l ? void 0 : l.commentForest) || void 0 === t ? void 0 : t.trees) || void 0 === n ? void 0 : n.map(e => v(null == e ? void 0 : e.node))) || void 0 === r ? void 0 : r.filter(d.a);
										(null == e ? void 0 : e.length) && m.push(...e);
										const s = v(l.authorInfo);
										s && m.push(s);
										break
									}
									case x.u.Talk:
										f = l.talkRoom, Array.isArray(null === (s = null == l ? void 0 : l.talkRoom) || void 0 === s ? void 0 : s.topUsers) && m.push(...l.talkRoom.topUsers)
								}
								return {
									postId: C.id,
									participantAvatars: m,
									contentType: c,
									talkRoom: f,
									...u
								}
							},
							u = null !== (n = null === (t = null == i ? void 0 : i.edges) || void 0 === t ? void 0 : t.map(c).filter(d.a)) && void 0 !== n ? n : [],
							m = null !== (s = null === (r = null == l ? void 0 : l.edges) || void 0 === r ? void 0 : r.map(c).filter(d.a)) && void 0 !== s ? s : [];
						return {
							posts: a,
							subreddits: o,
							popularLiveContent: u,
							recommendedLiveContent: m
						}
					})(t.body.data)
				}, g = Object(l.a)(c.b), E = Object(l.a)(c.c), w = Object(l.a)(c.a);
			var _ = n("./src/reddit/actions/subreddit.ts"),
				k = n("./src/config.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/helpers/correlationIdTracker.ts"),
				y = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				N = n("./src/reddit/hooks/useTracking.ts"),
				S = n("./src/reddit/models/HappeningNow/Filter/index.ts"),
				R = n("./src/reddit/selectors/features/happeningNow/index.ts"),
				M = n("./src/reddit/components/HappeningNow/EmptyState/index.m.less"),
				T = n.n(M);
			var I = e => {
					const t = Object(o.e)(R.e),
						n = Object(s.useMemo)(() => (e => {
							switch (e) {
								case S.a.Chat:
									return {
										headerText: r.fbt._("There aren't any chats happening now", null, {
											hk: "3nrAYl"
										}), descriptionText: r.fbt._("Everyone is quiet right now, how about starting your own chat", null, {
											hk: "1IxXa7"
										}), ctaText: r.fbt._("Start a Chat", null, {
											hk: "BMlPp"
										})
									};
								case S.a.Talk:
									return {
										headerText: r.fbt._("There aren't any talks happening now", null, {
											hk: "1U7KsT"
										}), descriptionText: r.fbt._("Everyone is quiet right now, how about starting your own talk", null, {
											hk: "21DkH7"
										}), ctaText: r.fbt._("Start a Talk", null, {
											hk: "3dlnGh"
										})
									};
								case S.a.All:
								default:
									return {
										headerText: r.fbt._("There aren't any live conversations happening now", null, {
											hk: "2ML98x"
										}), descriptionText: r.fbt._("Check back in later, or start your own", null, {
											hk: "2FOpxu"
										}), ctaText: r.fbt._("Start a live chat", null, {
											hk: "22xdVy"
										})
									}
							}
						})(t), [t]),
						l = Object(N.a)(),
						c = Object(s.useCallback)(() => {
							const e = Object(j.d)(j.a.PostComposer, !1);
							l(Object(y.e)(e))
						}, [l]);
					return a.a.createElement("div", {
						className: Object(i.a)(T.a.container, e.className)
					}, a.a.createElement("img", {
						className: T.a.img,
						src: `${k.a.assetPath}/img/happeningNow/empty-state-snoo.png`,
						alt: r.fbt._("Snoo with live chat icon", null, {
							hk: "4kxcZJ"
						})
					}), a.a.createElement("div", {
						className: T.a.textContainer
					}, a.a.createElement("p", {
						className: T.a.headerText
					}, n.headerText), a.a.createElement("p", {
						className: T.a.descriptionText
					}, n.descriptionText)), a.a.createElement(O.t, {
						className: T.a.ctaText,
						kind: O.b.InternalLink,
						to: "/submit",
						onClick: c
					}, n.ctaText))
				},
				L = n("./src/reddit/actions/happeningNow/index.ts"),
				F = n("./src/reddit/components/HappeningNow/Filter/index.m.less"),
				P = n.n(F);
			var B = e => {
				let {
					filter: t
				} = e;
				const n = Object(N.a)(),
					r = Object(o.d)(),
					l = Object(o.e)(R.e),
					c = Object(s.useMemo)(() => l === t.name, [l, t]),
					d = Object(s.useCallback)(() => {
						n(Object(y.c)(t.name)), r(Object(L.d)(t.name))
					}, [n, r, t]);
				return a.a.createElement("button", {
					"aria-pressed": c,
					className: Object(i.a)(P.a.filterButton, {
						[P.a.selected]: c
					}),
					onClick: d
				}, t.label)
			};
			const H = [{
				name: S.a.All,
				label: r.fbt._("All", null, {
					hk: "4A1Mbp"
				})
			}, {
				name: S.a.Chat,
				label: r.fbt._("Chat", null, {
					hk: "4v6C1b"
				})
			}, {
				name: S.a.Talk,
				label: r.fbt._("Talk", null, {
					hk: "ym95l"
				})
			}];
			var A = e => a.a.createElement("div", {
					className: e.className
				}, H.map(e => a.a.createElement(B, {
					key: e.name,
					filter: e
				}))),
				D = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				V = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				G = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx"),
				W = n("./src/reddit/components/HappeningNow/Post/LiveRing/index.m.less"),
				J = n.n(W);
			var Y = e => {
					let {
						id: t,
						className: n,
						isAnimated: r = !1
					} = e;
					return a.a.createElement("div", {
						className: Object(i.a)(J.a.speakerRingContainer, n)
					}, a.a.createElement(U.a, {
						ringId: t,
						className: Object(i.a)(J.a.speakerRingInner, {
							[J.a.animatedRing]: r
						})
					}), r && a.a.createElement(a.a.Fragment, null, a.a.createElement(V.a, {
						ringId: t,
						className: J.a.speakerRingMiddle
					}), a.a.createElement(G.a, {
						ringId: t,
						className: J.a.speakerRingOuter
					})))
				},
				K = n("./src/reddit/components/SubredditIcon/index.tsx");

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => a.a.createElement("svg", Z({
				viewBox: "0 0 21 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M10.0006 6.30166C9.26889 6.30182 8.55369 6.51894 7.94539 6.92558C7.3371 7.33222 6.86303 7.9101 6.58314 8.58617C6.30324 9.26224 6.23009 10.0061 6.37293 10.7238C6.51577 11.4414 6.86819 12.1006 7.38563 12.6179C7.90306 13.1353 8.56227 13.4876 9.27991 13.6303C9.99755 13.773 10.7414 13.6996 11.4173 13.4196C12.0933 13.1395 12.6711 12.6653 13.0776 12.0569C13.484 11.4485 13.701 10.7332 13.701 10.0015C13.6997 9.02047 13.3094 8.08003 12.6157 7.38643C11.922 6.69283 10.9815 6.30272 10.0006 6.30166ZM10.0006 12.5014C9.50621 12.5012 9.02299 12.3544 8.61201 12.0797C8.20103 11.8049 7.88076 11.4144 7.69168 10.9576C7.5026 10.5008 7.45321 9.99816 7.54976 9.51328C7.6463 9.02841 7.88444 8.58305 8.23407 8.23351C8.5837 7.88398 9.02911 7.64597 9.51399 7.54958C9.99888 7.45318 10.5015 7.50274 10.9582 7.69197C11.4149 7.8812 11.8053 8.20162 12.0799 8.6127C12.3545 9.02379 12.5011 9.50708 12.5011 10.0015C12.5003 10.6644 12.2365 11.2998 11.7677 11.7685C11.299 12.2372 10.6634 12.5007 10.0006 12.5014ZM11.3012 10.0015C11.3012 10.2585 11.225 10.5098 11.0822 10.7236C10.9394 10.9374 10.7365 11.104 10.499 11.2024C10.2615 11.3008 10.0002 11.3266 9.74808 11.2765C9.49595 11.2264 9.26434 11.1027 9.08251 10.921C8.90069 10.7392 8.77683 10.5077 8.72658 10.2556C8.67634 10.0035 8.70196 9.74211 8.80022 9.50457C8.89849 9.26702 9.06497 9.06394 9.27863 8.92101C9.49228 8.77807 9.74352 8.7017 10.0006 8.70154C10.3453 8.70175 10.6759 8.83875 10.9198 9.08247C11.1636 9.32618 11.3008 9.6567 11.3012 10.0015ZM15.6536 4.34656C14.611 3.30194 13.2995 2.56639 11.8644 2.22142C10.4294 1.87644 8.92694 1.93551 7.52343 2.39208C6.11993 2.84864 4.87022 3.68488 3.91278 4.80813C2.95534 5.93138 2.32755 7.29778 2.09897 8.75594C1.81319 10.5452 2.15066 12.3783 3.05487 13.9485L2.06777 17.2107C2.03747 17.3108 2.03471 17.4172 2.05977 17.5187C2.08482 17.6202 2.13678 17.713 2.21016 17.7875C2.28306 17.8634 2.37545 17.9177 2.47718 17.9445C2.57892 17.9713 2.68608 17.9696 2.7869 17.9395L6.12017 16.9851C7.30225 17.6516 8.63638 18.0015 9.99338 18.0011C10.4258 18.0007 10.8575 17.9662 11.2844 17.8979C12.7384 17.6628 14.0992 17.0305 15.2166 16.0708C16.3339 15.1111 17.1644 13.8614 17.6164 12.4595C18.0684 11.0577 18.1243 9.55815 17.7779 8.12651C17.4316 6.69487 16.6964 5.38676 15.6536 4.34656ZM10.0006 14.9012C9.03158 14.9011 8.08439 14.6136 7.27877 14.0751C6.47316 13.5366 5.8453 12.7713 5.47459 11.876C5.10388 10.9806 5.00697 9.9955 5.19611 9.04509C5.38525 8.09468 5.85194 7.22171 6.53718 6.53654C7.22242 5.85138 8.09543 5.3848 9.04582 5.19581C9.99621 5.00682 10.9813 5.10389 11.8765 5.47477C12.7717 5.84564 13.5369 6.47366 14.0752 7.2794C14.6136 8.08514 14.9009 9.03243 14.9009 10.0015C14.8994 11.3007 14.3826 12.5462 13.4639 13.4648C12.5452 14.3834 11.2997 14.9 10.0006 14.9012Z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M13.701 10.0015L13.701 10.0001C13.6998 9.26381 13.4794 8.55042 13.0761 7.94716C12.9423 7.74713 12.7884 7.55906 12.6157 7.38643C12.2691 7.03991 11.861 6.76913 11.4169 6.58478C10.9722 6.40019 10.4914 6.30219 10.0006 6.30166C9.75747 6.30171 9.51618 6.32572 9.28003 6.37267C8.80549 6.46703 8.35153 6.65408 7.9454 6.92558C7.74329 7.06069 7.556 7.2147 7.38572 7.38493C7.04357 7.72704 6.77002 8.13478 6.58314 8.58617C6.49016 8.81077 6.41999 9.04285 6.37298 9.27897C6.27854 9.7535 6.27757 10.2446 6.37294 10.7238C6.42038 10.9621 6.49095 11.1941 6.58301 11.4165C6.7681 11.8635 7.04019 12.2725 7.38563 12.6179C7.55749 12.7898 7.74499 12.9434 7.94507 13.0772C8.34728 13.346 8.80083 13.535 9.27991 13.6303C9.51801 13.6776 9.75898 13.7012 9.99941 13.7013L10.0008 13.7013C10.4842 13.7012 10.9664 13.6064 11.4174 13.4196C11.8682 13.2328 12.2753 12.9597 12.617 12.618C12.7877 12.4474 12.9422 12.2595 13.0776 12.0569C13.4838 11.4489 13.7007 10.7342 13.701 10.003V10.0015ZM9.99929 7.5016L10.0008 7.5016C10.3276 7.50159 10.6534 7.56567 10.9582 7.69197C11.2626 7.81812 11.5376 8.00256 11.7685 8.23329C11.8838 8.34861 11.9884 8.47576 12.0799 8.6127C12.3543 9.02338 12.5008 9.50612 12.5011 10V10.0015L12.5011 10.003C12.5002 10.5003 12.3513 10.982 12.079 11.3894C11.9886 11.5246 11.8844 11.6518 11.7678 11.7685C11.5336 12.0026 11.2579 12.1854 10.958 12.31C10.6575 12.4347 10.3323 12.501 10.0006 12.5014C9.8365 12.5013 9.67364 12.4851 9.51425 12.4534C9.19352 12.3897 8.88649 12.2632 8.61201 12.0797C8.47562 11.9885 8.34922 11.8845 8.23429 11.7697C8.00303 11.5384 7.81796 11.2627 7.69168 10.9576C7.62895 10.806 7.5816 10.6494 7.54985 10.4901C7.48601 10.1694 7.48529 9.8371 7.54976 9.51328C7.58178 9.35246 7.62938 9.19599 7.69146 9.04592C7.81653 8.74382 8.00061 8.46692 8.23407 8.23351C8.35001 8.11761 8.47648 8.01397 8.61143 7.92368C8.88324 7.742 9.19023 7.61394 9.514 7.54958C9.67459 7.51765 9.83712 7.50173 9.99929 7.5016ZM11.3012 9.99994C11.3006 9.74158 11.2232 9.49129 11.0817 9.27961C11.0346 9.20926 10.9805 9.14317 10.9198 9.08247C10.798 8.96078 10.6547 8.8657 10.4987 8.80097C10.3423 8.73605 10.1732 8.70165 10.0006 8.70154C9.91535 8.70159 9.83076 8.71002 9.74796 8.72648C9.58105 8.75966 9.42145 8.82547 9.27863 8.92101C9.20779 8.9684 9.14213 9.02241 9.08242 9.08209C8.96207 9.2024 8.86591 9.34579 8.80023 9.50457C8.76764 9.58336 8.74303 9.66477 8.72654 9.74759C8.69331 9.91447 8.69301 10.0871 8.72659 10.2556C8.74326 10.3392 8.76804 10.4206 8.80035 10.4987C8.86542 10.6559 8.96103 10.7995 9.08252 10.921C9.14287 10.9813 9.2087 11.0352 9.27896 11.0822C9.42036 11.1767 9.57964 11.243 9.74808 11.2765C9.83126 11.293 9.91544 11.3013 9.99943 11.3014L10.001 11.3014C10.1711 11.3015 10.3404 11.2681 10.499 11.2024C10.6573 11.1368 10.8003 11.0409 10.9203 10.9209C10.9804 10.8609 11.0346 10.7948 11.0822 10.7236C11.225 10.5098 11.3013 10.2585 11.3013 10.0015L11.3012 9.99994ZM14.9009 10.0015V9.99992C14.9006 9.03142 14.6133 8.08471 14.0752 7.2794C13.896 7.01108 13.6915 6.76246 13.4655 6.53649C13.0129 6.0839 12.4736 5.72214 11.8765 5.47477C11.2793 5.22735 10.6421 5.10179 10.0019 5.10172H10.0003C9.68137 5.10178 9.36168 5.133 9.04583 5.19581C8.41129 5.32199 7.81124 5.57192 7.27854 5.92802C7.01339 6.10528 6.76492 6.30884 6.53719 6.53654C6.07969 6.99399 5.71961 7.53516 5.4745 8.12719C5.35249 8.4219 5.25897 8.72922 5.19611 9.04509C5.06984 9.6796 5.07106 10.3296 5.19614 10.958C5.25841 11.2709 5.35138 11.5784 5.4746 11.876C5.72208 12.4737 6.08416 13.0134 6.53724 13.4665C6.76283 13.692 7.01098 13.8961 7.27878 14.0751C7.8166 14.4346 8.41752 14.6822 9.0459 14.8072C9.35879 14.8694 9.67848 14.9012 10.0006 14.9012C10.6505 14.9006 11.2871 14.771 11.876 14.5266C12.4642 14.2824 13.0049 13.9238 13.4639 13.4648C13.6926 13.2361 13.8964 12.9872 14.0735 12.7223C14.608 11.9228 14.8998 10.9773 14.9009 10.0015ZM3.05488 13.9485C2.15066 12.3783 1.8132 10.5452 2.09897 8.75594C2.32755 7.29778 2.95534 5.93138 3.91278 4.80813C4.87022 3.68488 6.11993 2.84864 7.52344 2.39208C8.92694 1.93551 10.4294 1.87644 11.8645 2.22142C13.2995 2.56639 14.611 3.30194 15.6536 4.34656C16.6964 5.38676 17.4316 6.69487 17.7779 8.12651C18.1243 9.55815 18.0684 11.0577 17.6164 12.4595C17.1644 13.8614 16.3339 15.1111 15.2166 16.0708C14.0992 17.0305 12.7384 17.6628 11.2845 17.8979C10.8575 17.9662 10.4258 18.0007 9.99338 18.0011C8.63638 18.0015 7.30226 17.6516 6.12017 16.9851L2.7869 17.9395C2.68608 17.9696 2.57893 17.9713 2.47719 17.9445C2.37545 17.9177 2.28306 17.8634 2.21016 17.7875C2.13678 17.713 2.08483 17.6202 2.05977 17.5187C2.03471 17.4172 2.03748 17.3108 2.06778 17.2107L3.05488 13.9485ZM0.153601 16.6311L0.906519 14.1428C0.0902768 12.3684 -0.186043 10.3853 0.123554 8.44332C0.409692 6.62145 1.19434 4.91426 2.3907 3.51072C3.58768 2.10645 5.15007 1.06098 6.90474 0.49018C8.65942 -0.0806237 10.5379 -0.154472 12.3319 0.276819C14.1253 0.707943 15.7644 1.62698 17.0676 2.93215C18.3705 4.23235 19.289 5.86713 19.7219 7.65621C20.1549 9.44601 20.085 11.3207 19.5199 13.0733C18.9549 14.8259 17.9166 16.3883 16.5197 17.588C15.1227 18.7878 13.4215 19.5783 11.6037 19.8722L11.6005 19.8728C11.0696 19.9577 10.5327 20.0006 9.99503 20.0011C8.58635 20.0015 7.19636 19.7008 5.91893 19.1231L3.34432 19.8602C2.89565 19.9913 2.41967 19.9976 1.96752 19.8785C1.5146 19.7591 1.10294 19.5184 0.776872 19.1824C0.45576 18.8534 0.228285 18.4445 0.118061 17.998C0.0068686 17.5476 0.0192187 17.0752 0.153601 16.6311Z"
			}));

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var z = e => a.a.createElement("svg", X({
					viewBox: "0 0 16 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), a.a.createElement("path", {
					d: "M13.5556 9.55762V9.89531C13.5199 11.2705 12.9987 12.586 12.0883 13.5986C11.1779 14.6112 9.93995 15.2525 8.60317 15.404V16.3115H9.77524V18H5.78032V16.3115H6.95238V15.404C5.6156 15.2525 4.37762 14.6112 3.46725 13.5986C2.55689 12.586 2.03569 11.2705 2 9.89531V9.55762H3.65079V9.89531C3.69755 10.969 4.15784 11.9801 4.93112 12.7078C5.70441 13.4354 6.72782 13.8205 7.77778 13.7788C8.82774 13.8205 9.85115 13.4354 10.6244 12.7078C11.3977 11.9801 11.858 10.969 11.9048 9.89531V9.55762H13.5556ZM7.77778 12.9346C8.65877 12.9277 9.50111 12.5636 10.12 11.9223C10.739 11.281 11.084 10.4148 11.0794 9.51372V5.37695C11.0794 4.48133 10.7315 3.62239 10.1124 2.98909C9.49318 2.35578 8.65341 2 7.77778 2C6.90214 2 6.06237 2.35578 5.4432 2.98909C4.82404 3.62239 4.47619 4.48133 4.47619 5.37695V9.51372C4.47157 10.4148 4.81657 11.281 5.43551 11.9223C6.05444 12.5636 6.89679 12.9277 7.77778 12.9346V12.9346Z",
					fill: "#FF4500"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M13.5556 7.55762C14.6601 7.55762 15.5556 8.45305 15.5556 9.55762V9.89531C15.5556 9.91261 15.5553 9.92991 15.5549 9.9472C15.507 11.7927 14.8077 13.5653 13.5756 14.9357C13.0497 15.5206 12.4417 16.0156 11.7752 16.407V18C11.7752 19.1046 10.8798 20 9.77524 20H5.78032C4.67575 20 3.78032 19.1046 3.78032 18V16.407C3.1139 16.0156 2.50582 15.5206 1.97994 14.9357C0.747883 13.5653 0.0485716 11.7927 0.000673294 9.9472C0.000224471 9.92991 0 9.91261 0 9.89531V9.55762C0 8.45305 0.89543 7.55762 2 7.55762H2.47619V5.37695C2.47619 3.96528 3.02404 2.60258 4.01312 1.59092C5.00371 0.577725 6.35696 0 7.77778 0C9.1986 0 10.5519 0.577725 11.5424 1.59092C12.5315 2.60258 13.0794 3.96528 13.0794 5.37695V7.55762H13.5556ZM11.9048 9.55762V9.89531C11.8627 10.862 11.4854 11.7779 10.8462 12.4819C10.8235 12.507 10.8004 12.5318 10.777 12.5563C10.7276 12.6081 10.6767 12.6586 10.6244 12.7078C10.0091 13.2868 9.2354 13.6489 8.41596 13.7516C8.31677 13.7641 8.2169 13.7727 8.11656 13.7775C8.00632 13.7827 7.89552 13.7833 7.78441 13.7791C7.7822 13.779 7.77999 13.7789 7.77778 13.7788C7.77557 13.7789 7.77336 13.779 7.77115 13.7791C7.66004 13.7833 7.54923 13.7827 7.439 13.7775C7.33866 13.7727 7.23879 13.7641 7.13959 13.7516C6.32016 13.6489 5.54645 13.2868 4.93112 12.7078C4.87884 12.6586 4.82799 12.6081 4.7786 12.5563C4.75517 12.5318 4.73208 12.507 4.70932 12.4819C4.07019 11.7779 3.69289 10.862 3.65079 9.89531V9.55762H2V9.89531C2.00062 9.91926 2.00139 9.94319 2.00231 9.9671C2.02319 10.5124 2.12039 11.0477 2.28789 11.5576C2.53476 12.3092 2.93432 13.0058 3.46725 13.5986C3.56935 13.7121 3.67558 13.821 3.7856 13.9251C4.06767 14.1919 4.37472 14.4269 4.70129 14.6273C5.04179 14.8362 5.40352 15.0075 5.78032 15.138C6.04795 15.2306 6.32319 15.3027 6.60381 15.353C6.71914 15.3737 6.83538 15.3907 6.95238 15.404V16.3115H5.78032V18H9.77524V16.3115H8.60317V15.404C8.72017 15.3907 8.83641 15.3737 8.95174 15.353C9.23237 15.3027 9.5076 15.2306 9.77524 15.138C10.152 15.0075 10.5138 14.8362 10.8543 14.6273C11.1808 14.4269 11.4879 14.1919 11.77 13.9251C11.88 13.821 11.9862 13.7121 12.0883 13.5986C12.6212 13.0058 13.0208 12.3092 13.2677 11.5576C13.4352 11.0477 13.5324 10.5124 13.5532 9.9671C13.5542 9.94319 13.5549 9.91926 13.5556 9.89531V9.55762H11.9048ZM4.4952 9.89531C4.57519 10.6565 4.90455 11.3722 5.43551 11.9223C5.47521 11.9635 5.51583 12.0035 5.55732 12.0423C6.15446 12.6012 6.93189 12.9194 7.74426 12.9341C7.75543 12.9343 7.7666 12.9345 7.77778 12.9346C7.78896 12.9345 7.80013 12.9343 7.81129 12.9341C8.62366 12.9194 9.40109 12.6012 9.99823 12.0423C10.0397 12.0035 10.0803 11.9635 10.12 11.9223C10.651 11.3722 10.9804 10.6565 11.0604 9.89531C11.0616 9.88312 11.0629 9.87092 11.064 9.8587C11.0734 9.759 11.0786 9.65855 11.0793 9.55762C11.0794 9.543 11.0794 9.52836 11.0794 9.51372V5.37695C11.0794 4.48133 10.7315 3.62239 10.1124 2.98909C9.49319 2.35579 8.65341 2 7.77778 2C6.90214 2 6.06237 2.35579 5.4432 2.98909C4.82404 3.62239 4.47619 4.48133 4.47619 5.37695V9.51372C4.47612 9.52836 4.47613 9.543 4.47624 9.55762C4.477 9.65855 4.48213 9.759 4.49154 9.8587C4.4927 9.87092 4.49391 9.88312 4.4952 9.89531Z"
				})),
				Q = n("./src/reddit/selectors/posts.ts"),
				$ = n("./src/reddit/selectors/user.ts"),
				ee = n("./src/reddit/components/HappeningNow/Post/Header/index.m.less"),
				te = n.n(ee);
			const ne = {
				[x.u.Unknown]: "",
				[x.u.Chat]: r.fbt._("Chat", null, {
					hk: "1oa6K"
				}),
				[x.u.Talk]: r.fbt._("Talk", null, {
					hk: "1lMkQn"
				})
			};
			var re = e => {
					let {
						model: t
					} = e;
					const n = Object(o.e)(e => Object(Q.G)(e, {
							postId: t.postId
						})),
						l = Object(o.e)(e => Object(Q.V)(e, {
							postId: t.postId
						})),
						c = Object(o.e)($.fb),
						d = Object(s.useMemo)(() => {
							var e, t, r;
							return (null === (e = null == l ? void 0 : l.icon) || void 0 === e ? void 0 : e.url) || (null === (r = null === (t = n.profile) || void 0 === t ? void 0 : t.icon) || void 0 === r ? void 0 : r.url) || ""
						}, [l, n]),
						u = Object(s.useMemo)(() => {
							var e;
							return (null == l ? void 0 : l.displayText) || (null === (e = null == n ? void 0 : n.profile) || void 0 === e ? void 0 : e.displayText) || ""
						}, [l, n]);
					return a.a.createElement("div", {
						className: te.a.header
					}, a.a.createElement("div", {
						className: te.a.subredditIconContainer
					}, a.a.createElement(Y, {
						id: n.id,
						isAnimated: !0
					}), a.a.createElement(K.b, {
						className: te.a.subredditIcon,
						iconUrl: d
					}), t.contentType === x.u.Chat ? a.a.createElement(q, {
						className: Object(i.a)(te.a.liveChatIcon, {
							[te.a.nightMode]: c
						})
					}) : a.a.createElement(z, {
						className: Object(i.a)(te.a.microphoneIcon, {
							[te.a.nightMode]: c
						})
					})), a.a.createElement("div", {
						className: te.a.headerMetadata
					}, a.a.createElement("span", {
						className: te.a.subredditName
					}, u), a.a.createElement("div", null, a.a.createElement("span", {
						className: te.a.liveContentType
					}, ne[t.contentType]), n.numComments > 0 && a.a.createElement("span", {
						className: te.a.messageCount
					}, r.fbt._({
						"*": "{number} messages",
						_1: "1 message"
					}, [r.fbt._plural(n.numComments, "number", Object(D.b)(n.numComments))], {
						hk: "2wEqSc"
					})))))
				},
				se = n("./src/reddit/actions/reportFlow/index.ts"),
				ae = n("./src/reddit/actions/tooltip.ts"),
				oe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ie = n("./src/reddit/components/ReportFlow/index.tsx"),
				le = n("./src/reddit/components/ReportFlow/new.tsx"),
				ce = n("./src/reddit/controls/Dropdown/index.tsx"),
				de = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ue = n("./src/reddit/icons/fonts/Report/index.tsx"),
				me = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				pe = n("./src/reddit/selectors/tooltip.ts"),
				he = n("./src/reddit/components/HappeningNow/Post/Menu/index.m.less"),
				be = n.n(he);
			const fe = Object(oe.a)(ce.a);
			var xe = e => {
					let {
						post: t,
						itemKey: n
					} = e;
					const i = Object(o.d)(),
						l = Object(o.e)(e => {
							var n, r;
							return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === t.id
						}),
						c = Object(o.e)($.k) === t.authorId,
						d = Object(s.useMemo)(() => (e => `HappeningNowPost--menu--${e}`)(n), [n]),
						u = Object(o.e)(e => Object(pe.b)(d)(e)),
						m = a.a.useCallback(() => {
							i(Object(se.c)(t.id, !1))
						}, [i, t.id]),
						p = a.a.useCallback(() => {
							i(Object(ae.h)({
								tooltipId: d
							}))
						}, [i, d]);
					return c ? null : a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						id: d,
						className: be.a.menuButton,
						onClick: p
					}, a.a.createElement(me.a, null), a.a.createElement(fe, {
						isOpen: u,
						tooltipId: d
					}, a.a.createElement(de.b, {
						displayText: r.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: m
					}, a.a.createElement(ue.a, null)))), l && a.a.createElement(le.a, {
						withOverlay: !0,
						overlayCustomStyles: ie.b,
						postId: t.id
					}))
				},
				ve = n("./src/reddit/components/UserIcon/index.tsx"),
				Ce = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				ge = n("./src/reddit/components/HappeningNow/Post/ParticipantsDisplay/index.m.less"),
				Ee = n.n(ge);
			const we = (e, t) => Object(Ce.a)(e, t, !0).map(e => {
				let {
					image: t
				} = e;
				return {
					icon: {
						url: t
					}
				}
			});
			var _e = e => {
					let {
						model: t
					} = e;
					const {
						participantAvatars: n = [],
						userCount: l,
						postId: c
					} = t, d = Object(s.useMemo)(() => l <= 0 ? 0 : l <= 1 ? 1 : l <= 2 ? 2 : l < 100 ? 3 : l < 500 ? 4 : 5, [l]), u = Object(o.e)($.fb), m = Object(s.useMemo)(() => {
						const e = n.slice(0, d);
						if (e.length >= d) return e;
						const t = d - e.length;
						return [...e, ...we(c, t)]
					}, [n, d, c]);
					return l <= 0 ? null : a.a.createElement("div", {
						className: Ee.a.participantsDisplay
					}, m.length > 0 && a.a.createElement("div", {
						className: Ee.a.avatarRow
					}, m.map((e, t) => {
						var n, r, s;
						return a.a.createElement("div", {
							key: t,
							className: Ee.a.avatarContainer
						}, a.a.createElement(ve.a, {
							userName: "",
							iconUrl: null !== (r = null === (n = e.icon) || void 0 === n ? void 0 : n.url) && void 0 !== r ? r : "",
							className: Object(i.a)(Ee.a.avatar, {
								[Ee.a.snoovatar]: !!e.snoovatarIcon,
								[Ee.a.nightMode]: u
							}),
							isNSFW: !!(null === (s = e.profile) || void 0 === s ? void 0 : s.isNsfw)
						}))
					})), a.a.createElement("span", {
						className: Ee.a.userCount
					}, r.fbt._("{number of users participating in live chat or talk} here now", [r.fbt._param("number of users participating in live chat or talk", Object(D.b)(l))], {
						hk: "1qn5yO"
					})))
				},
				ke = n("./src/lib/constants/icons.ts"),
				Oe = n("./src/reddit/actions/post.ts"),
				je = n("./src/reddit/controls/Score/index.tsx"),
				ye = n("./src/reddit/icons/fonts/index.tsx"),
				Ne = n("./src/reddit/models/Vote/index.ts"),
				Se = n("./src/reddit/components/HappeningNow/Post/Votes/index.m.less"),
				Re = n.n(Se);
			var Me = e => {
					let {
						post: t,
						className: n
					} = e;
					const s = Object(o.d)();
					return a.a.createElement("div", {
						className: Object(i.a)(Re.a.container, n)
					}, a.a.createElement("button", {
						"aria-label": r.fbt._("Upvote", null, {
							hk: "3lconG"
						}),
						"aria-pressed": t.voteState === Ne.a.upvoted,
						className: Object(i.a)(Re.a.upvote, {
							[Re.a.voted]: t.voteState === Ne.a.upvoted
						}),
						onClick: () => {
							s(Object(Oe.ib)(t.id))
						}
					}, a.a.createElement(ye.a, {
						name: ke.a.upvote,
						isFilled: !0
					})), a.a.createElement(je.a, {
						score: t.score,
						voteState: t.voteState,
						isScoreHidden: t.isScoreHidden,
						postId: t.id
					}), a.a.createElement("button", {
						"aria-label": r.fbt._("Downvote", null, {
							hk: "lxwdz"
						}),
						"aria-pressed": t.voteState === Ne.a.downvoted,
						className: Object(i.a)(Re.a.downvote, {
							[Re.a.voted]: t.voteState === Ne.a.downvoted
						}),
						onClick: () => {
							s(Object(Oe.v)(t.id))
						}
					}, a.a.createElement(ye.a, {
						name: ke.a.downvote,
						isFilled: !0
					})))
				},
				Te = n("./src/reddit/components/RichTextJson/index.tsx"),
				Ie = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Le = n("./src/reddit/helpers/overlay/index.ts"),
				Fe = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				Pe = n("./src/reddit/models/Media/index.ts"),
				Be = n("./src/reddit/components/HappeningNow/Post/index.m.less"),
				He = n.n(Be);
			const Ae = 3;
			var De = e => {
					let {
						postId: t,
						showVotes: n = !0,
						showBodyContent: r = !0,
						titleLineCount: l = Ae,
						itemKey: c
					} = e;
					const d = Object(o.d)(),
						u = Object(N.a)(),
						m = Object(o.e)(e => Object(R.d)(e, t)),
						p = Object(o.e)(e => Object(Q.G)(e, {
							postId: t
						})),
						h = Object(s.useMemo)(() => {
							var e;
							return (null === (e = null == p ? void 0 : p.media) || void 0 === e ? void 0 : e.type) === Pe.o.RTJSON && r
						}, [p, r]),
						b = Object(s.useCallback)(e => {
							e && v(e.scrollHeight)
						}, []),
						[f, v] = Object(s.useState)(0),
						C = Object(s.useMemo)(() => f > 44, [f]),
						[g, E] = Object(s.useState)(!1),
						w = Object(s.useRef)(null),
						_ = Object(s.useCallback)(e => {
							if (g) return;
							e.some(e => e.isIntersecting) && (u(Object(y.g)(t)), E(!0))
						}, [t, g, u]),
						O = Object(s.useMemo)(() => ({
							threshold: 1
						}), []);
					if (Object(Fe.a)(w, _, O), !m) return null;
					return a.a.createElement("article", {
						className: He.a.post,
						ref: w
					}, a.a.createElement("div", {
						className: Object(i.a)(He.a.main, {
							[He.a.showVotes]: n
						}),
						onClick: () => {
							var e;
							switch (m.contentType) {
								case x.u.Chat:
									d(Object(Le.a)(p.permalink));
									break;
								case x.u.Talk:
									window.open(`${k.a.redditUrl}/talk/${null===(e=m.talkRoom)||void 0===e?void 0:e.roomId}`)
							}
							u(Object(y.d)(t))
						}
					}, a.a.createElement(re, {
						model: m
					}), a.a.createElement("div", {
						className: He.a.content
					}, a.a.createElement("h2", {
						className: Object(i.a)(He.a.title, {
							[He.a[`lineCount${l}`]]: l !== Ae
						}),
						ref: b
					}, p.title), h && !C && a.a.createElement(Te.b, {
						className: He.a.body,
						content: Object(Ie.a)(p),
						rtJsonElementProps: {
							renderingObjectInfo: p
						}
					})), a.a.createElement(_e, {
						model: m
					})), n && a.a.createElement(Me, {
						className: He.a.votesContainer,
						post: p
					}), a.a.createElement(xe, {
						post: p,
						itemKey: c
					}))
				},
				Ue = n("./src/reddit/components/HappeningNow/Section/index.m.less"),
				Ve = n.n(Ue);
			const Ge = e => {
				let {
					title: t,
					children: n
				} = e;
				return a.a.createElement("div", null, a.a.createElement("h1", {
					className: Ve.a.header
				}, t), a.a.createElement("div", {
					className: Ve.a.content
				}, n))
			};

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Je = e => a.a.createElement("svg", We({
					viewBox: "0 0 274 112",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), a.a.createElement("rect", {
					width: "312",
					height: "129",
					fill: "url(#paint0_linear_0_1)"
				}), a.a.createElement("mask", {
					id: "mask0_0_1",
					maskUnits: "userSpaceOnUse",
					x: "0",
					y: "0",
					width: "312",
					height: "129"
				}, a.a.createElement("rect", {
					width: "312",
					height: "129",
					fill: "url(#paint1_linear_0_1)"
				})), a.a.createElement("g", {
					mask: "url(#mask0_0_1)"
				}, a.a.createElement("circle", {
					cx: "192.5",
					cy: "252.5",
					r: "280.5",
					fill: "#A4F4FF",
					fillOpacity: "0.5"
				}), a.a.createElement("circle", {
					cx: "171",
					cy: "291",
					r: "255",
					fill: "url(#paint2_linear_0_1)"
				}), a.a.createElement("circle", {
					cx: "171",
					cy: "345",
					r: "255",
					fill: "url(#paint3_linear_0_1)"
				}), a.a.createElement("circle", {
					cx: "233",
					cy: "105",
					r: "4",
					fill: "#6A5CFF"
				}), a.a.createElement("circle", {
					cx: "210",
					cy: "80",
					r: "6",
					fill: "#FF9B1A"
				})), a.a.createElement("path", {
					d: "M61.9999 99.0045C63.0559 96.2406 66.1526 94.8561 68.9164 95.9121C71.6803 96.9682 73.0648 100.065 72.0088 102.829",
					stroke: "#FF9C1A",
					strokeWidth: "4.61812"
				}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: "paint0_linear_0_1",
					x1: "156",
					y1: "0",
					x2: "156",
					y2: "129",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#7ADFFF"
				}), a.a.createElement("stop", {
					offset: "0.353006",
					stopColor: "#6FD8CB"
				})), a.a.createElement("linearGradient", {
					id: "paint1_linear_0_1",
					x1: "156",
					y1: "0",
					x2: "156",
					y2: "129",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#7ADFFF"
				}), a.a.createElement("stop", {
					offset: "0.353006",
					stopColor: "#6FD8CB"
				})), a.a.createElement("linearGradient", {
					id: "paint2_linear_0_1",
					x1: "-21.2726",
					y1: "408.273",
					x2: "-20.1969",
					y2: "-80.7396",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#3911DA"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#BB01FF"
				})), a.a.createElement("linearGradient", {
					id: "paint3_linear_0_1",
					x1: "171",
					y1: "90",
					x2: "171",
					y2: "600",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF9C1A"
				}), a.a.createElement("stop", {
					offset: "0.608219",
					stopColor: "#FF7A00"
				})))),
				Ye = n("./src/reddit/components/HappeningNow/SidebarContent/index.m.less"),
				Ke = n.n(Ye);
			const Ze = [{
					url: "https://www.reddithelp.com",
					label: r.fbt._("Help", null, {
						hk: "1RgRee"
					})
				}, {
					url: "https://reddit.onelink.me/MRHZ/b3d845e",
					label: r.fbt._("Reddit iOS", null, {
						hk: "2W8O9q"
					}),
					rel: "nofollow"
				}, {
					url: "https://reddit.onelink.me/MRHZ/4c212f61",
					label: r.fbt._("Reddit Android", null, {
						hk: "SmUA3"
					}),
					rel: "nofollow"
				}, {
					url: "/coins",
					label: r.fbt._("Reddit Coins", null, {
						hk: "C8VQN"
					})
				}, {
					url: "/premium",
					label: r.fbt._("Reddit Premium", null, {
						hk: "4sb3bq"
					})
				}, {
					url: "/subreddits/a-1/",
					label: r.fbt._("Communities", null, {
						hk: "1d1i7M"
					})
				}, {
					url: "/r/all/top/",
					label: r.fbt._("Top Posts", null, {
						hk: "11mVhu"
					})
				}, {
					url: "/topics/a-1/",
					label: r.fbt._("Topics", null, {
						hk: "4BzYQM"
					})
				}],
				qe = [{
					url: "https://www.redditinc.com",
					label: r.fbt._("About", null, {
						hk: "1MkWCX"
					})
				}, {
					url: "https://www.redditinc.com/careers",
					label: r.fbt._("Careers", null, {
						hk: "g9gZP"
					})
				}, {
					url: "https://www.redditinc.com/press",
					label: r.fbt._("Press", null, {
						hk: "10XBDT"
					})
				}, {
					url: "https://www.redditinc.com/advertising",
					label: r.fbt._("Advertise", null, {
						hk: "2Dwig5"
					})
				}, {
					url: "https://redditblog.com",
					label: r.fbt._("Blog", null, {
						hk: "2PoxW5"
					})
				}, {
					url: "https://www.redditinc.com/policies/previews-terms",
					label: r.fbt._("Terms", null, {
						hk: "3n4kRo"
					})
				}, {
					url: "https://www.redditinc.com/policies/content-policy",
					label: r.fbt._("Content Policy", null, {
						hk: "2xjmLL"
					})
				}, {
					url: "https://www.redditinc.com/policies/privacy-policy",
					label: r.fbt._("Privacy Policy", null, {
						hk: "y8Vyn"
					})
				}, {
					url: "https://www.redditinc.com/policies/moderator-guidelines",
					label: r.fbt._("Mod Policy", null, {
						hk: "1NB6LB"
					})
				}],
				Xe = e => a.a.createElement("a", {
					className: Ke.a.link,
					href: e.url,
					rel: e.rel
				}, e.label);

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Qe = e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: Object(i.a)(Ke.a.liveDiscoveryContentIntro, t)
					}, a.a.createElement("img", {
						className: Ke.a.img,
						src: `${k.a.assetPath}/img/happeningNow/live-content-intro-snoo.png`,
						alt: r.fbt._("Snoo sitting on a sofa with popcorn", null, {
							hk: "1Rm16Z"
						})
					}), a.a.createElement(Je, {
						className: Ke.a.background
					}), a.a.createElement("h2", {
						className: Ke.a.header
					}, r.fbt._("Here's what's happening!", null, {
						hk: "2LRkyC"
					})), a.a.createElement("p", {
						className: Ke.a.description
					}, r.fbt._("Explore live chats and audio talks happening across Reddit.", null, {
						hk: "3HDfwU"
					})))
				},
				$e = e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: Object(i.a)(Ke.a.links, t)
					}, a.a.createElement("div", {
						className: Ke.a.linksWrapper
					}, a.a.createElement("div", {
						className: Ke.a.column
					}, Ze.map((e, t) => a.a.createElement(Xe, ze({
						key: `first_column_link_${t}`
					}, e)))), a.a.createElement("div", {
						className: Ke.a.column
					}, qe.map((e, t) => a.a.createElement(Xe, ze({
						key: `second_column_link_${t}`
					}, e))))), a.a.createElement("span", {
						className: Ke.a.copyright
					}, r.fbt._("Reddit Inc © {year}. All rights reserved", [r.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "4BrCkA"
					})))
				};
			var et = n("./src/reddit/pages/ErrorPages/index.tsx"),
				tt = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				nt = n("./src/reddit/components/HappeningNow/Section/carousel.m.less"),
				rt = n.n(nt);
			var st = e => {
					let {
						children: t
					} = e;
					const n = Object(s.createRef)(),
						l = Object(o.e)($.fb),
						[c, d] = Object(s.useState)(null),
						[u, m] = Object(s.useState)(null),
						[p, h] = Object(s.useState)(!1),
						[b, f] = Object(s.useState)(!1);
					Object(s.useEffect)(() => {
						const e = n.current;
						if (!e) return;
						const t = () => {
							const t = e.getBoundingClientRect(),
								n = Array.from(e.children).filter(e => {
									const n = e.getBoundingClientRect();
									return n.left >= t.left && n.right <= t.right
								});
							if (n.length > 0) {
								const e = (e => {
									const t = e[e.length - 1].nextElementSibling;
									return t instanceof HTMLElement ? t : null
								})(n);
								m(e), d((e => {
									let t = e[0].previousElementSibling;
									return (null == t ? void 0 : t.previousElementSibling) && (t = t.previousElementSibling), t instanceof HTMLElement ? t : null
								})(n))
							}
						};
						return t(), e.addEventListener("scroll", t), () => {
							e.removeEventListener("scroll", t)
						}
					}, [n]), Object(s.useEffect)(() => {
						h(Boolean(c)), f(Boolean(u))
					}, [c, u]);
					const x = Object(s.useCallback)(e => {
							const t = n.current;
							if (!t || !e) return;
							let r = 0;
							r = e.offsetLeft + e.getBoundingClientRect().width - t.getBoundingClientRect().width / 2.85, t.scroll({
								left: r,
								behavior: "smooth"
							})
						}, [n]),
						v = Object(s.useCallback)(() => x(u), [x, u]),
						C = Object(s.useCallback)(() => x(c), [x, c]);
					return a.a.createElement("div", {
						className: Object(i.a)(rt.a.container),
						role: "region",
						"aria-label": "carousel"
					}, a.a.createElement("div", {
						className: Object(i.a)(rt.a.inner),
						ref: n
					}, s.Children.map(t, (e, t) => a.a.createElement("div", {
						className: Object(i.a)(rt.a.carouselItem),
						id: e.props.id,
						key: t,
						"data-position": t
					}, e))), a.a.createElement("div", {
						className: Object(i.a)(rt.a.arrowButtonContainer, rt.a.leftArrowContainer, {
							[rt.a.nightMode]: l,
							[rt.a.arrowVisible]: p
						})
					}, a.a.createElement("button", {
						className: rt.a.arrowButton,
						onClick: C,
						"aria-label": r.fbt._("previous items", null, {
							hk: "44uTrz"
						})
					}, a.a.createElement(ye.a, {
						className: rt.a.arrowIcon,
						name: ke.a.caret_left
					}))), a.a.createElement("div", {
						className: Object(i.a)(rt.a.arrowButtonContainer, rt.a.rightArrowContainer, {
							[rt.a.nightMode]: l,
							[rt.a.arrowVisible]: b
						})
					}, a.a.createElement("button", {
						className: rt.a.arrowButton,
						onClick: v,
						"aria-label": r.fbt._("next items", null, {
							hk: "4EEfgp"
						})
					}, a.a.createElement(ye.a, {
						className: rt.a.arrowIcon,
						name: ke.a.caret_right
					}))))
				},
				at = n("./src/reddit/pages/HappeningNow/index.m.less"),
				ot = n.n(at);
			const it = {
					[x.t.Unknown]: "",
					[x.t.Popular]: r.fbt._("Popular", null, {
						hk: "2pUvlx"
					}),
					[x.t.Recommended]: r.fbt._("For you", null, {
						hk: "19HGNV"
					})
				},
				lt = (e, t) => `${e}--${t}`,
				ct = e => {
					let {
						addTopMargin: t
					} = e;
					return a.a.createElement("aside", {
						className: Object(i.a)(ot.a.column, ot.a.rightRail, {
							[ot.a.withTopMargin]: t
						})
					}, a.a.createElement(Qe, null), a.a.createElement($e, null))
				},
				dt = () => {
					const e = Object(o.e)(R.b),
						t = Object(o.e)(R.c),
						n = t.length >= 2;
					return !e.length && !t.length ? a.a.createElement("div", {
						className: ot.a.twoColumnLayout
					}, a.a.createElement("div", {
						className: ot.a.column
					}, a.a.createElement(I, {
						className: ot.a.emptyState
					})), a.a.createElement(ct, null)) : a.a.createElement(a.a.Fragment, null, n && a.a.createElement("div", {
						className: ot.a.outer
					}, a.a.createElement("h1", {
						className: ot.a.header
					}, it[x.t.Popular]), a.a.createElement(st, null, e.map(e => a.a.createElement(De, {
						key: e,
						postId: e,
						showVotes: !1,
						showBodyContent: !1,
						titleLineCount: 2,
						itemKey: lt(x.t.Popular, e)
					})))), a.a.createElement("div", {
						className: ot.a.twoColumnLayout
					}, a.a.createElement("div", {
						className: Object(i.a)(ot.a.column, ot.a.content)
					}, !!t.length && a.a.createElement(Ge, {
						title: it[x.t.Recommended]
					}, t.map(e => a.a.createElement(De, {
						key: e,
						postId: e,
						itemKey: lt(x.t.Recommended, e)
					}))), !!e.length && !n && a.a.createElement(Ge, {
						title: it[x.t.Popular]
					}, e.map(e => a.a.createElement(De, {
						key: e,
						postId: e,
						itemKey: lt(x.t.Popular, e)
					})))), a.a.createElement(ct, {
						addTopMargin: !0
					})))
				};
			t.default = e => {
				const t = Object(o.d)(),
					n = Object(N.a)(),
					r = Object(o.e)(tt.a),
					i = Object(o.e)(R.a);
				return Object(s.useEffect)(() => {
					t((() => async (e, t, n) => {
						let {
							gqlContext: r
						} = n;
						e(g());
						try {
							const t = await C(r());
							e(E(t))
						} catch (s) {
							e(w(s))
						}
					})()), t(Object(_.q)())
				}, [t]), Object(s.useEffect)(() => {
					n(y.f)
				}, [n]), r ? a.a.createElement("div", {
					className: ot.a.main
				}, a.a.createElement("div", {
					className: ot.a.container
				}, i && a.a.createElement(a.a.Fragment, null, a.a.createElement(A, {
					className: ot.a.filters
				}), a.a.createElement(dt, null)))) : a.a.createElement(et.b, null)
			}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const i = e => s.d.subredditMentionD2xExperiment(e),
				l = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: r.Kf
					}) || ""
				},
				c = e => {
					const t = l(e);
					return t === r.Qf.SmIcon || t === r.Qf.SmIconHc
				},
				d = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = Object(o.cb)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/FetchLiveDiscoveryContent.json": function(e) {
			e.exports = JSON.parse('{"id":"56c8e9275a3e"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HappeningNow.9fd9b1d6620a9bd95569.js.map