// https://www.redditstatic.com/desktop2x/HappeningNow.a9460270d8aa5db82813.js
// Retrieved at 10/17/2022, 10:40:10 AM by Reddit Dataminer v1.0.0
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
					var s, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						x = !o && !l && /macintosh/i.test(t),
						f = !i && !u && !m && !p && /linux/i.test(t),
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
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
					} : i ? s = {
						name: "Android",
						version: C
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, C && (s.version = C)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, C && (s.version = C)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || C
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && C && (s.version = C)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : x ? (s.mac = e, s.osname = "macOS") : w ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : f && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? _ = (_ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? _ = (_ = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? _ = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? _ = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (_ = n(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (s.osversion = _);
					var j = !s.windows && _.split(".")[0];
					return g || d || "ipad" == o || i && (3 == j || j >= 4 && !E) || s.silk ? s.tablet = e : (E || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function o(e) {
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

				function i(e, r, s) {
					var i = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
					return !i(e, t, n)
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
				return s(e, (function(e, s, o) {
					n = r ? (r = !1, e) : t(n, e, s, o)
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
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? r : i,
					c = arguments.length < 3;
				return d(e, o(t, 4), n, c, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => {
					let t = 0,
						n = 0;
					const r = [0];
					for (const s of e) t++, n += s.length, r[t] = n;
					return r
				},
				s = e => {
					let t = 0,
						n = 0;
					const r = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) r[n] = t, n++;
						t++
					}
					return r[n] = t, r
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const s = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
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
				i = Object(s.a)("spBurnLinks", Object(r.a)({
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
				body: "_1TrxB2POu6F7W1humybt1N"
			}
		},
		"./src/reddit/components/HappeningNow/Section/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3O-89EoaLB3pbmrMwskje-",
				content: "_22agvKZP49I6cTCt4I6A1R"
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const d = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
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
					return o.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, n)))
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.db
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), e.isTweet || (r.height = "100%"), s.a.createElement("iframe", {
					className: Object(d.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: r,
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
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/ads.ts"),
				C = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				O = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				k = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = n.n(k);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => e > 2 * E.e,
				T = e => o.a.createElement("img", {
					alt: e.altText || r.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[S.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				M = e => {
					const t = Object(c.a)(S.a.image, x.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${E.j}px`), e.isListing || e.isTall && R(e.height) || (n.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const i = Object(s.useRef)(null),
						[a, d] = Object(s.useState)(!1),
						l = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && d(!0)
							})
						}, [a]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(g.a)(i, l, u.current);
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
					return e.renderSmallMedia ? o.a.createElement("div", {
						ref: i,
						style: b.current
					}, a && o.a.createElement(T, N({}, e, {
						className: t
					}))) : o.a.createElement("img", {
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
					return (!e.showFull && Object(E.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.L)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className, {
							[S.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				L = Object(i.b)(() => Object(d.a)(w.F, j.jb, (e, t) => {
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
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": O.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, b.a.Click), Object(v.a)(e.post, e.pageType))
					}
				}, F(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, F(e)) : F(e)
			});
			const P = (e, t) => o.a.createElement(M, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[y.a]: !e
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
					src: Object(l.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				F = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(E.L)(n.height, n.width),
						i = R(n.height) && s;
					return o.a.createElement(I, N({}, n, {
						className: `${s?`${y.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, P(s, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, P(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > E.j && Object(E.L)(n.height, n.width) && o.a.createElement("div", {
						className: S.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(h.a, {
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
						src: Object(i.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), s.a.createElement("div", {
					className: Object(o.a)(c.a.wrapper, {
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
					return s.a.createElement(l, this.props)
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
				return y
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
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
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(o.useRef)(),
					h = Object(o.useRef)(),
					b = Object(C.a)(d);

				function E(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (E(!d && (t || r)), h.current && s) return p.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							o = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, r) return r = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const s = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + f ? i = !0 : i && d >= a && d > a + f && (i = !1), a = d, s !== i && t(i)
						}, x);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", s)
						}
					}(h.current, s), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					b !== d && E(!d && (t || r))
				}, [b, d, t, r]), i.a.createElement("video", g({}, m, {
					ref: e => h.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(v.a)(u || "")
				}))
			}
			var w = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = n.n(w);
			const j = Object(d.c)({
				autoplayPref: h.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function y(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: o,
					started: d
				} = Object(a.e)(t => j(t, e)), {
					postId: h,
					shouldLoad: b,
					source: x,
					height: f,
					isNotCardView: v,
					showFull: C,
					shouldPause: g,
					width: w,
					isListing: y,
					className: O,
					showCentered: k,
					originalSource: S,
					isPromoted: N,
					renderSmallMedia: R
				} = e, T = t && !(N && Object(c.hasAcceptableAds)()), M = Object(a.d)();

				function I(e) {
					M(e ? Object(u.r)(h) : Object(u.E)(h))
				}

				function L() {
					return M(Object(u.z)({
						postId: h
					}))
				}
				const P = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && M(Object(u.s)(h))
				}, 200);

				function F(e) {
					e.persist(), P(e)
				}

				function B(e) {
					var t;
					(o || A(e), d) || (t = e.timeStamp, M(Object(u.A)(h, t)))
				}

				function H(e) {
					M(Object(u.q)(h, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						M(Object(u.D)({
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

				function D(e) {
					r || B(e), o || A(e), M(Object(u.C)(h))
				}

				function U() {
					const e = {};
					return k && (e.margin = "0 auto"), y || (e.maxHeight = `${p.e}px`), i.a.createElement(E, {
						autoplay: T,
						className: Object(l.a)(m.a, _.a.styledVideo, {
							[_.a.renderSmallMedia]: R
						}),
						height: R ? void 0 : f,
						isListing: y,
						isNotCardView: v,
						key: h,
						loop: !0,
						onBufferingChange: I,
						onLoadStart: H,
						onLoadedData: B,
						onLoadedMetadata: A,
						onPause: L,
						onPlaying: D,
						onTimeUpdate: F,
						shouldLoad: b,
						shouldPause: g,
						showCentered: k,
						showFull: C,
						source: x,
						style: R ? void 0 : e,
						width: R ? void 0 : w
					})
				}
				return y ? U() : i.a.createElement("div", {
					className: Object(l.a)(_.a.container, O, {
						[_.a.centered]: k
					})
				}, i.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
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
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/constants/colors.ts");
			const o = {
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
				return i
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: s.a.overlayReportFlow
				},
				i = Object(r.a)({
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
				a = Object(r.a)({
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
			t.b = a
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
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
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
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
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				v = m.a.span("SpoilerWrapper", u.a),
				C = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return o.a.createElement(v, p({}, r, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				g = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class E extends o.a.Component {
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
					return o.a.createElement(C, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(g, {
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
				return l
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
				return x
			})), n.d(t, "v", (function() {
				return f
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
				return j
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return R
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "w", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				h = d.a.blockquote("Blockquote", a.a),
				b = d.a.p("P", a.a),
				x = d.a.li("Li", a.a),
				f = d.a.ul("Ul", a.a),
				v = d.a.ol("Ol", a.a),
				C = d.a.strong("B", a.a),
				g = d.a.em("I", a.a),
				E = d.a.span("U", a.a),
				w = e => s.a.createElement("del", e),
				_ = d.a.sub("Sub", a.a),
				j = d.a.sup("Sup", a.a),
				y = d.a.table("Table", a.a),
				O = d.a.tr("Tr", a.a),
				k = d.a.td("Tdl", a.a),
				S = d.a.td("Tdc", a.a),
				N = d.a.td("Tdr", a.a),
				R = d.a.th("Thl", a.a),
				T = d.a.th("Thc", a.a),
				M = (d.a.th("Thr", a.a), d.a.wrapped(e => s.a.createElement(o.b, e), "A", a.a)),
				I = d.a.wrapped(c.a, "A", a.a)
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
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				f = n.n(x);
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				C = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return a.a.createElement(v, r)
				}),
				g = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				E = e => o()(e, g),
				w = e => e.findIndex(g),
				_ = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: o,
						isNsfwBlockingModalEligible: i,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: g,
						rtJsonElementProps: _,
						useExplicitTextColor: j,
						shouldBlur: y,
						onClickRevealSpoilerText: O,
						mediaProps: k
					} = e, S = r.document, N = [], R = e.mediaMetadata || null, T = w(S), M = E(S);
					if (y && !s && !i) return a.a.createElement(v, {
						className: Object(d.a)(m.j, n)
					}, a.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!c))));
					if (-1 !== T)
						for (let a = T; a <= M; a++) {
							const e = S[a];
							switch (e.e) {
								case p.k:
									N.push(b.c(e, _, a));
									break;
								case p.l:
									N.push(b.d(a));
									break;
								case p.b:
									N.push(b.a(e, R, _, a));
									break;
								case p.c:
									N.push(b.b(e, a));
									break;
								case p.p:
									N.push(b.f(e, R, _, a, O));
									break;
								case p.A:
									N.push(b.h(e, R, _, a, O));
									break;
								case p.v:
									N.push(b.g(e, R, _, a, O));
									break;
								case p.h:
									N.push(Object(h.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									N.push(...Object(h.b)(e, a, _, R, g, x, t, k))
							}
						}
					return j ? a.a.createElement(v, {
						className: Object(d.a)(m.j, n)
					}, N) : a.a.createElement(C, {
						className: Object(d.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class j extends a.a.Component {
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
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
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
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/RichTextJson/index.ts");
			var v = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				C = n("./src/reddit/components/RichTextJson/elements.tsx"),
				g = n("./src/reddit/components/RichTextJson/media.m.less"),
				E = n.n(g),
				w = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/reddit/helpers/media/index.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				O = w.a.wrapped(C.a, "A", E.a),
				k = w.a.wrapped(l.a, "ImageBox", E.a),
				S = w.a.wrapped(e => o.a.createElement("p", e), "Caption", E.a),
				N = w.a.div("Placeholder", E.a),
				R = w.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = n === f.E ? r.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : r.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						d && setTimeout(() => {
							m(!0)
						}, 1500)
					}), o.a.createElement(N, j({
						className: Object(i.a)(t, {
							[E.a.renderSmallMedia]: a,
							[E.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && u && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: E.a.ModalTopicsErrorButton,
						Icon: Object(x.b)("refresh"),
						text: r.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", E.a),
				T = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return o.a.createElement("div", {
						className: E.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, o.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				M = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === f.s ? s = n.s.u : n.e === f.r ? s = n.s.gif : n.e === f.t && (s = (e => {
						const t = y.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? o.a.createElement(O, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				I = (e, t, n, r, s, a, c, l) => {
					const p = f.F(r, e.id);
					if (s) return [M(e, t, p)];
					const x = [];
					return !p || p.e === f.s && null === p.s.x && null === p.s.y ? x.push(((e, t, n, r) => o.a.createElement(R, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: r
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === f.s ? x.push(((e, t, n, r, s) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = s || {};
						let p = d;
						return m && (p = Object(_.i)(240, 20, d, c)), o.a.createElement("div", {
							className: Object(i.a)(E.a.MediaWrapper, {
								[E.a.mHasCaption]: n,
								[E.a.hasSmallMedia]: m
							})
						}, o.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, o.a.createElement(k, {
							altText: r,
							originalSource: d.u,
							postId: a,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(p, t, !!e.c, c, l)) : p.e === f.r ? x.push(((e, t, n, r, s) => {
						let {
							id: a,
							ext: d,
							s: c
						} = e;
						if (Object(b.h)(a)) {
							const e = r.renderingObjectInfo,
								s = !!e && Object(h.b)(e),
								l = d || Object(b.g)(a);
							return o.a.createElement("div", {
								className: Object(i.a)({
									[E.a.MediaWrapper]: !s,
									[E.a.CommentGifWrapper]: s,
									[E.a.mHasCaption]: n
								})
							}, o.a.createElement(O, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? o.a.createElement("video", {
								className: E.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: c.mp4
							})) : l), o.a.createElement(v, {
								className: E.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(E.a.MediaWrapper, {
								[E.a.mHasCaption]: n,
								[E.a.hasSmallMedia]: s
							})
						}, o.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, o.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: a,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !s,
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: s
						})))
					})(p, t, !!e.c, n, null == l ? void 0 : l.renderSmallMedia)) : p.e === f.t && x.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(E.a.MediaWrapper, {
								[E.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, o.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: s,
							mpegDashSource: a,
							postId: r,
							isGif: m
						})))
					})(p, t, !!e.c, a)), e.c && x.push(((e, t) => o.a.createElement(S, {
						key: t
					}, e))(e.c, `caption${t}`)), x
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "f", (function() {
				return P
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
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = n.n(x);
			const v = 1e3,
				C = 1e3;
			var g;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(g || (g = {}));
			class E extends a.a.Component {
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
								subreddit: p.jb(t)
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
					const o = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return s ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: s,
						width: n,
						height: r,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${o}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var w = Object(l.c)(E),
				_ = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				y = n("./src/reddit/components/SubredditMention/index.tsx"),
				O = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/helpers/isPost.ts"),
				N = n("./src/reddit/helpers/richTextJson/index.ts"),
				R = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						o = [],
						i = r.length;
					for (let a = 0; a < i; a++) {
						const e = r[a];
						o.push(e.e === m.x ? e.t : D(e, t, a))
					}
					const c = d.x[s - 1];
					return a.a.createElement(c, {
						key: n
					}, o)
				},
				M = e => a.a.createElement(d.e, {
					key: e
				}),
				I = (e, t, n, r, s) => {
					const o = e.c;
					if (!o) return;
					const i = o.length,
						c = [];
					for (let a = 0; a < i; a++) c.push(F(o[a], t, n, a, s));
					return a.a.createElement(d.c, {
						key: r
					}, c)
				},
				L = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				P = (e, t, n, r, s) => {
					const o = e.c,
						i = [],
						c = o.length;
					for (let u = 0; u < c; u++) {
						const e = o[u].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: u
						}, e.map((e, r) => F(e, t, n, r, s))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: r
					}, i)
				},
				F = (e, t, n, r, s) => {
					switch (e.e) {
						case m.b:
							return I(e, t, n, r, s);
						case m.c:
							return L(e, r);
						case m.k:
							return T(e, n, r);
						case m.l:
							return M(r);
						case m.p:
							return P(e, t, n, r, s);
						case m.v:
							return H(e, t, n, r, s);
						case m.A:
							return B(e, t, n, r, s)
					}
				},
				B = (e, t, n, r, s) => {
					const o = e.c,
						i = e.h,
						c = o.length,
						l = i.length,
						u = [],
						m = [],
						p = [];
					for (let d = 0; d < l; d++) {
						const e = i[d],
							{
								H: r,
								D: o
							} = W(e.a),
							{
								c = []
							} = e;
						u.push(a.a.createElement(r, {
							key: d
						}, A(c, t, n, s))), p[d] = o
					}
					for (let h = 0; h < c; h++) {
						const e = o[h],
							r = e.length,
							i = [];
						for (let o = 0; o < r; o++) {
							const r = p[o],
								{
									c: d = []
								} = e[o];
							i.push(a.a.createElement(r, {
								key: o
							}, A(d, t, n, s)))
						}
						m.push(a.a.createElement(d.t, {
							key: h
						}, i))
					}
					return a.a.createElement(d.n, {
						key: r
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, u)), a.a.createElement("tbody", null, m))
				},
				H = (e, t, n, r, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(r);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(N.h)(o.id) ? a.a.createElement(d.j, {
						key: r
					}, A(e.c, t, n, s)) : Object(_.b)(o, r, n, t)
				},
				A = (e, t, n, r) => {
					const s = [],
						o = e.length;
					for (let i = 0; i < o; i++) {
						const o = e[i];
						if (o.e === m.B) s.push(U(o, i));
						else if (o.e === m.y) s.push(a.a.createElement(j.a, {
							key: i,
							onClickReveal: r
						}, A(o.c, t, n, r)));
						else if (o.e === m.n) s.push(a.a.createElement("br", {
							key: i
						}));
						else if (o.e === m.m || o.e === m.a) {
							if (o.id.startsWith("emote|")) {
								const e = m.F(t, o.id);
								e && s.push(a.a.createElement(w, {
									key: i,
									node: o,
									media: e
								}))
							}
						} else s.push(D(o, n, i))
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
							if (Object(O.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, o;
							const i = Object(R.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(S.b)(c) && (s = c.postId), c && Object(k.b)(c) && (o = c.id, s = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: s,
								commentId: o
							}, r);
						case m.z:
							return a.a.createElement(y.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: n,
						t: s
					} = e, o = [];
					if (!n) return G(0, s, t);
					const i = Object(r.a)(s);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, r] = n[a], c = t + r, l = i[t], u = i[c] - l;
						l > d && o.push(G(0, s.substr(d, l - d), `between${a}`)), o.push(G(e, s.substr(l, u), a)), d = l + u
					}
					return d < s.length && o.push(G(0, s.substr(d), `remaining${a}`)), o
				},
				V = {
					[m.j.monospace]: d.h,
					[m.j.bold]: d.b,
					[m.j.italic]: d.f,
					[m.j.underline]: d.u,
					[m.j.strikethrough]: d.d,
					[m.j.subscript]: d.l,
					[m.j.superscript]: d.m
				},
				G = (e, t, n) => {
					let r = t;
					return r = o()(V, (t, r, s) => e & parseInt(s, 10) ? a.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				W = e => {
					switch (e) {
						case m.f:
							return {
								H: d.r, D: d.q
							};
						case m.d:
							return {
								H: d.r, D: d.o
							};
						case m.e:
						default:
							return {
								H: d.r, D: d.p
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
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = o.a.wrapped(i.b, "SubredditIcon", c.a),
				u = o.a.wrapped(e => s.a.createElement(a.b, e), "S", c.a)
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(l.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class v extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return s.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const C = Object(h.c)(v),
				g = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				E = Object(o.b)(g),
				w = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return s.a.createElement(C, {
						subredditName: r,
						rtJsonElementProps: i
					});
					switch (o) {
						case b.Vf.SmIcon:
							return s.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: i
							});
						case b.Vf.SmIconHc:
							return s.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return s.a.createElement(C, {
								subredditName: r,
								rtJsonElementProps: i
							})
					}
				};
			t.b = E(w)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/memoize.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/categories.tsx"),
				i = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${i.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, t) => `${i.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				c = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return c;
				const r = n ? d : a,
					s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(s + t) % o.a.length],
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
				return a
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(o.b)(t))) return Object(s.b)(t) ? i.SourceElement.Comment : Object(r.x)(n) ? i.SourceElement.PostDetail : Object(r.H)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return f
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
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
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
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: s,
					screen: u.bb(e),
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
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const s = Object(a.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: Object(d.a)(t),
							subredditName: r,
							[s]: n.id
						},
						c = Object(l.B)(e, {
							subredditName: r
						});
					return c ? {
						outbound: {
							...o,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const r = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.kb(e, r),
						...h(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...b(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				C = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
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
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
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
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				d = n.n(a);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(i.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(i.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/HappeningNow/index.m.less": function(e, t, n) {
			e.exports = {
				main: "_1s0yf8yaKs3Bm_FnVQLBhW",
				container: "pNm6yMSKQZScSZjTA1OG",
				content: "_3ihSslAiQM4Ly7oq-AhJ-s"
			}
		},
		"./src/reddit/pages/HappeningNow/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/happeningNow/constants.ts"),
				c = n("./src/lib/isDefined.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/lib/makeRequest/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/redditGQL/operations/FetchLiveDiscoveryContent.json"),
				x = n("./src/redditGQL/types.ts");
			const f = e => {
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
				v = async e => {
					const t = await Object(l.a)(e, b);
					if (!Object(u.c)(t)) throw new Error("Encountered an error while fetching live discovery content");
					return (e => {
						var t, n, r, s;
						const o = {},
							i = {},
							{
								popularLiveContent: a,
								recommendedLiveContent: d
							} = e.liveDiscoveryContent,
							l = e => {
								var t, n, r, s;
								const a = null == e ? void 0 : e.node;
								if (!a) return;
								const {
									post: d,
									contentType: l,
									...u
								} = a, b = [];
								let v;
								const C = Object(m.f)(d);
								if (o[C.id] = C, Object(h.n)(d)) {
									const e = Object(p.a)(d.subreddit);
									i[e.id] = e
								}
								if (l === x.p.Chat) {
									const e = null === (r = null === (n = null === (t = null == d ? void 0 : d.commentForest) || void 0 === t ? void 0 : t.trees) || void 0 === n ? void 0 : n.map(e => f(null == e ? void 0 : e.node))) || void 0 === r ? void 0 : r.filter(c.a);
									(null == e ? void 0 : e.length) && b.push(...e);
									const s = f(d.authorInfo);
									s && b.push(s)
								} else l === x.p.Talk && Array.isArray(null === (s = null == d ? void 0 : d.talkRoom) || void 0 === s ? void 0 : s.topUsers) && (v = d.talkRoom, b.push(...d.talkRoom.topUsers));
								return {
									postId: C.id,
									participantAvatars: b,
									contentType: l,
									talkRoom: v,
									...u
								}
							},
							u = null !== (n = null === (t = null == a ? void 0 : a.edges) || void 0 === t ? void 0 : t.map(l).filter(c.a)) && void 0 !== n ? n : [],
							b = null !== (s = null === (r = null == d ? void 0 : d.edges) || void 0 === r ? void 0 : r.map(l).filter(c.a)) && void 0 !== s ? s : [];
						return {
							posts: o,
							subreddits: i,
							popularLiveContent: u,
							recommendedLiveContent: b
						}
					})(t.body.data)
				}, C = Object(a.a)(d.b), g = Object(a.a)(d.c), E = Object(a.a)(d.a);
			var w, _ = n("./src/config.ts"),
				j = n("./src/lib/classNames/index.ts"),
				y = n("./src/reddit/controls/Button/index.tsx");
			! function(e) {
				e.All = "all", e.Chat = "chat", e.Talk = "talk"
			}(w || (w = {}));
			var O = n("./src/reddit/components/HappeningNow/EmptyState/index.m.less"),
				k = n.n(O);
			var S = e => {
					const t = w.All,
						n = Object(s.useMemo)(() => (e => {
							switch (e) {
								case w.Chat:
									return {
										headerText: r.fbt._("There aren't any chats happening now", null, {
											hk: "3nrAYl"
										}), descriptionText: r.fbt._("Everyone is quiet right now, how about starting your own chat", null, {
											hk: "1IxXa7"
										}), ctaText: r.fbt._("Start a Chat", null, {
											hk: "BMlPp"
										})
									};
								case w.Talk:
									return {
										headerText: r.fbt._("There aren't any talks happening now", null, {
											hk: "1U7KsT"
										}), descriptionText: r.fbt._("Everyone is quiet right now, how about starting your own talk", null, {
											hk: "21DkH7"
										}), ctaText: r.fbt._("Start a Talk", null, {
											hk: "3dlnGh"
										})
									};
								case w.All:
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
						})(t), [t]);
					return o.a.createElement("div", {
						className: Object(j.a)(k.a.container, e.className)
					}, o.a.createElement("img", {
						className: k.a.img,
						src: `${_.a.assetPath}/img/happeningNow/empty-state-snoo.png`,
						alt: r.fbt._("Snoo with live chat icon", null, {
							hk: "4kxcZJ"
						})
					}), o.a.createElement("div", {
						className: k.a.textContainer
					}, o.a.createElement("p", {
						className: k.a.headerText
					}, n.headerText), o.a.createElement("p", {
						className: k.a.descriptionText
					}, n.descriptionText)), o.a.createElement(y.t, {
						className: k.a.ctaText,
						kind: y.b.InternalLink,
						to: "/submit"
					}, n.ctaText))
				},
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				R = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				T = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				M = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx"),
				I = n("./src/reddit/components/HappeningNow/Post/LiveRing/index.m.less"),
				L = n.n(I);
			var P = e => {
					let {
						id: t,
						className: n,
						isAnimated: r = !1
					} = e;
					return o.a.createElement("div", {
						className: Object(j.a)(L.a.speakerRingContainer, n)
					}, o.a.createElement(R.a, {
						ringId: t,
						className: Object(j.a)(L.a.speakerRingInner, {
							[L.a.animatedRing]: r
						})
					}), r && o.a.createElement(o.a.Fragment, null, o.a.createElement(T.a, {
						ringId: t,
						className: L.a.speakerRingMiddle
					}), o.a.createElement(M.a, {
						ringId: t,
						className: L.a.speakerRingOuter
					})))
				},
				F = n("./src/reddit/components/SubredditIcon/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var H = e => o.a.createElement("svg", B({
				viewBox: "0 0 21 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M10.0006 6.30166C9.26889 6.30182 8.55369 6.51894 7.94539 6.92558C7.3371 7.33222 6.86303 7.9101 6.58314 8.58617C6.30324 9.26224 6.23009 10.0061 6.37293 10.7238C6.51577 11.4414 6.86819 12.1006 7.38563 12.6179C7.90306 13.1353 8.56227 13.4876 9.27991 13.6303C9.99755 13.773 10.7414 13.6996 11.4173 13.4196C12.0933 13.1395 12.6711 12.6653 13.0776 12.0569C13.484 11.4485 13.701 10.7332 13.701 10.0015C13.6997 9.02047 13.3094 8.08003 12.6157 7.38643C11.922 6.69283 10.9815 6.30272 10.0006 6.30166ZM10.0006 12.5014C9.50621 12.5012 9.02299 12.3544 8.61201 12.0797C8.20103 11.8049 7.88076 11.4144 7.69168 10.9576C7.5026 10.5008 7.45321 9.99816 7.54976 9.51328C7.6463 9.02841 7.88444 8.58305 8.23407 8.23351C8.5837 7.88398 9.02911 7.64597 9.51399 7.54958C9.99888 7.45318 10.5015 7.50274 10.9582 7.69197C11.4149 7.8812 11.8053 8.20162 12.0799 8.6127C12.3545 9.02379 12.5011 9.50708 12.5011 10.0015C12.5003 10.6644 12.2365 11.2998 11.7677 11.7685C11.299 12.2372 10.6634 12.5007 10.0006 12.5014ZM11.3012 10.0015C11.3012 10.2585 11.225 10.5098 11.0822 10.7236C10.9394 10.9374 10.7365 11.104 10.499 11.2024C10.2615 11.3008 10.0002 11.3266 9.74808 11.2765C9.49595 11.2264 9.26434 11.1027 9.08251 10.921C8.90069 10.7392 8.77683 10.5077 8.72658 10.2556C8.67634 10.0035 8.70196 9.74211 8.80022 9.50457C8.89849 9.26702 9.06497 9.06394 9.27863 8.92101C9.49228 8.77807 9.74352 8.7017 10.0006 8.70154C10.3453 8.70175 10.6759 8.83875 10.9198 9.08247C11.1636 9.32618 11.3008 9.6567 11.3012 10.0015ZM15.6536 4.34656C14.611 3.30194 13.2995 2.56639 11.8644 2.22142C10.4294 1.87644 8.92694 1.93551 7.52343 2.39208C6.11993 2.84864 4.87022 3.68488 3.91278 4.80813C2.95534 5.93138 2.32755 7.29778 2.09897 8.75594C1.81319 10.5452 2.15066 12.3783 3.05487 13.9485L2.06777 17.2107C2.03747 17.3108 2.03471 17.4172 2.05977 17.5187C2.08482 17.6202 2.13678 17.713 2.21016 17.7875C2.28306 17.8634 2.37545 17.9177 2.47718 17.9445C2.57892 17.9713 2.68608 17.9696 2.7869 17.9395L6.12017 16.9851C7.30225 17.6516 8.63638 18.0015 9.99338 18.0011C10.4258 18.0007 10.8575 17.9662 11.2844 17.8979C12.7384 17.6628 14.0992 17.0305 15.2166 16.0708C16.3339 15.1111 17.1644 13.8614 17.6164 12.4595C18.0684 11.0577 18.1243 9.55815 17.7779 8.12651C17.4316 6.69487 16.6964 5.38676 15.6536 4.34656ZM10.0006 14.9012C9.03158 14.9011 8.08439 14.6136 7.27877 14.0751C6.47316 13.5366 5.8453 12.7713 5.47459 11.876C5.10388 10.9806 5.00697 9.9955 5.19611 9.04509C5.38525 8.09468 5.85194 7.22171 6.53718 6.53654C7.22242 5.85138 8.09543 5.3848 9.04582 5.19581C9.99621 5.00682 10.9813 5.10389 11.8765 5.47477C12.7717 5.84564 13.5369 6.47366 14.0752 7.2794C14.6136 8.08514 14.9009 9.03243 14.9009 10.0015C14.8994 11.3007 14.3826 12.5462 13.4639 13.4648C12.5452 14.3834 11.2997 14.9 10.0006 14.9012Z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M13.701 10.0015L13.701 10.0001C13.6998 9.26381 13.4794 8.55042 13.0761 7.94716C12.9423 7.74713 12.7884 7.55906 12.6157 7.38643C12.2691 7.03991 11.861 6.76913 11.4169 6.58478C10.9722 6.40019 10.4914 6.30219 10.0006 6.30166C9.75747 6.30171 9.51618 6.32572 9.28003 6.37267C8.80549 6.46703 8.35153 6.65408 7.9454 6.92558C7.74329 7.06069 7.556 7.2147 7.38572 7.38493C7.04357 7.72704 6.77002 8.13478 6.58314 8.58617C6.49016 8.81077 6.41999 9.04285 6.37298 9.27897C6.27854 9.7535 6.27757 10.2446 6.37294 10.7238C6.42038 10.9621 6.49095 11.1941 6.58301 11.4165C6.7681 11.8635 7.04019 12.2725 7.38563 12.6179C7.55749 12.7898 7.74499 12.9434 7.94507 13.0772C8.34728 13.346 8.80083 13.535 9.27991 13.6303C9.51801 13.6776 9.75898 13.7012 9.99941 13.7013L10.0008 13.7013C10.4842 13.7012 10.9664 13.6064 11.4174 13.4196C11.8682 13.2328 12.2753 12.9597 12.617 12.618C12.7877 12.4474 12.9422 12.2595 13.0776 12.0569C13.4838 11.4489 13.7007 10.7342 13.701 10.003V10.0015ZM9.99929 7.5016L10.0008 7.5016C10.3276 7.50159 10.6534 7.56567 10.9582 7.69197C11.2626 7.81812 11.5376 8.00256 11.7685 8.23329C11.8838 8.34861 11.9884 8.47576 12.0799 8.6127C12.3543 9.02338 12.5008 9.50612 12.5011 10V10.0015L12.5011 10.003C12.5002 10.5003 12.3513 10.982 12.079 11.3894C11.9886 11.5246 11.8844 11.6518 11.7678 11.7685C11.5336 12.0026 11.2579 12.1854 10.958 12.31C10.6575 12.4347 10.3323 12.501 10.0006 12.5014C9.8365 12.5013 9.67364 12.4851 9.51425 12.4534C9.19352 12.3897 8.88649 12.2632 8.61201 12.0797C8.47562 11.9885 8.34922 11.8845 8.23429 11.7697C8.00303 11.5384 7.81796 11.2627 7.69168 10.9576C7.62895 10.806 7.5816 10.6494 7.54985 10.4901C7.48601 10.1694 7.48529 9.8371 7.54976 9.51328C7.58178 9.35246 7.62938 9.19599 7.69146 9.04592C7.81653 8.74382 8.00061 8.46692 8.23407 8.23351C8.35001 8.11761 8.47648 8.01397 8.61143 7.92368C8.88324 7.742 9.19023 7.61394 9.514 7.54958C9.67459 7.51765 9.83712 7.50173 9.99929 7.5016ZM11.3012 9.99994C11.3006 9.74158 11.2232 9.49129 11.0817 9.27961C11.0346 9.20926 10.9805 9.14317 10.9198 9.08247C10.798 8.96078 10.6547 8.8657 10.4987 8.80097C10.3423 8.73605 10.1732 8.70165 10.0006 8.70154C9.91535 8.70159 9.83076 8.71002 9.74796 8.72648C9.58105 8.75966 9.42145 8.82547 9.27863 8.92101C9.20779 8.9684 9.14213 9.02241 9.08242 9.08209C8.96207 9.2024 8.86591 9.34579 8.80023 9.50457C8.76764 9.58336 8.74303 9.66477 8.72654 9.74759C8.69331 9.91447 8.69301 10.0871 8.72659 10.2556C8.74326 10.3392 8.76804 10.4206 8.80035 10.4987C8.86542 10.6559 8.96103 10.7995 9.08252 10.921C9.14287 10.9813 9.2087 11.0352 9.27896 11.0822C9.42036 11.1767 9.57964 11.243 9.74808 11.2765C9.83126 11.293 9.91544 11.3013 9.99943 11.3014L10.001 11.3014C10.1711 11.3015 10.3404 11.2681 10.499 11.2024C10.6573 11.1368 10.8003 11.0409 10.9203 10.9209C10.9804 10.8609 11.0346 10.7948 11.0822 10.7236C11.225 10.5098 11.3013 10.2585 11.3013 10.0015L11.3012 9.99994ZM14.9009 10.0015V9.99992C14.9006 9.03142 14.6133 8.08471 14.0752 7.2794C13.896 7.01108 13.6915 6.76246 13.4655 6.53649C13.0129 6.0839 12.4736 5.72214 11.8765 5.47477C11.2793 5.22735 10.6421 5.10179 10.0019 5.10172H10.0003C9.68137 5.10178 9.36168 5.133 9.04583 5.19581C8.41129 5.32199 7.81124 5.57192 7.27854 5.92802C7.01339 6.10528 6.76492 6.30884 6.53719 6.53654C6.07969 6.99399 5.71961 7.53516 5.4745 8.12719C5.35249 8.4219 5.25897 8.72922 5.19611 9.04509C5.06984 9.6796 5.07106 10.3296 5.19614 10.958C5.25841 11.2709 5.35138 11.5784 5.4746 11.876C5.72208 12.4737 6.08416 13.0134 6.53724 13.4665C6.76283 13.692 7.01098 13.8961 7.27878 14.0751C7.8166 14.4346 8.41752 14.6822 9.0459 14.8072C9.35879 14.8694 9.67848 14.9012 10.0006 14.9012C10.6505 14.9006 11.2871 14.771 11.876 14.5266C12.4642 14.2824 13.0049 13.9238 13.4639 13.4648C13.6926 13.2361 13.8964 12.9872 14.0735 12.7223C14.608 11.9228 14.8998 10.9773 14.9009 10.0015ZM3.05488 13.9485C2.15066 12.3783 1.8132 10.5452 2.09897 8.75594C2.32755 7.29778 2.95534 5.93138 3.91278 4.80813C4.87022 3.68488 6.11993 2.84864 7.52344 2.39208C8.92694 1.93551 10.4294 1.87644 11.8645 2.22142C13.2995 2.56639 14.611 3.30194 15.6536 4.34656C16.6964 5.38676 17.4316 6.69487 17.7779 8.12651C18.1243 9.55815 18.0684 11.0577 17.6164 12.4595C17.1644 13.8614 16.3339 15.1111 15.2166 16.0708C14.0992 17.0305 12.7384 17.6628 11.2845 17.8979C10.8575 17.9662 10.4258 18.0007 9.99338 18.0011C8.63638 18.0015 7.30226 17.6516 6.12017 16.9851L2.7869 17.9395C2.68608 17.9696 2.57893 17.9713 2.47719 17.9445C2.37545 17.9177 2.28306 17.8634 2.21016 17.7875C2.13678 17.713 2.08483 17.6202 2.05977 17.5187C2.03471 17.4172 2.03748 17.3108 2.06778 17.2107L3.05488 13.9485ZM0.153601 16.6311L0.906519 14.1428C0.0902768 12.3684 -0.186043 10.3853 0.123554 8.44332C0.409692 6.62145 1.19434 4.91426 2.3907 3.51072C3.58768 2.10645 5.15007 1.06098 6.90474 0.49018C8.65942 -0.0806237 10.5379 -0.154472 12.3319 0.276819C14.1253 0.707943 15.7644 1.62698 17.0676 2.93215C18.3705 4.23235 19.289 5.86713 19.7219 7.65621C20.1549 9.44601 20.085 11.3207 19.5199 13.0733C18.9549 14.8259 17.9166 16.3883 16.5197 17.588C15.1227 18.7878 13.4215 19.5783 11.6037 19.8722L11.6005 19.8728C11.0696 19.9577 10.5327 20.0006 9.99503 20.0011C8.58635 20.0015 7.19636 19.7008 5.91893 19.1231L3.34432 19.8602C2.89565 19.9913 2.41967 19.9976 1.96752 19.8785C1.5146 19.7591 1.10294 19.5184 0.776872 19.1824C0.45576 18.8534 0.228285 18.4445 0.118061 17.998C0.0068686 17.5476 0.0192187 17.0752 0.153601 16.6311Z"
			}));

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => o.a.createElement("svg", A({
					viewBox: "0 0 16 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("path", {
					d: "M13.5556 9.55762V9.89531C13.5199 11.2705 12.9987 12.586 12.0883 13.5986C11.1779 14.6112 9.93995 15.2525 8.60317 15.404V16.3115H9.77524V18H5.78032V16.3115H6.95238V15.404C5.6156 15.2525 4.37762 14.6112 3.46725 13.5986C2.55689 12.586 2.03569 11.2705 2 9.89531V9.55762H3.65079V9.89531C3.69755 10.969 4.15784 11.9801 4.93112 12.7078C5.70441 13.4354 6.72782 13.8205 7.77778 13.7788C8.82774 13.8205 9.85115 13.4354 10.6244 12.7078C11.3977 11.9801 11.858 10.969 11.9048 9.89531V9.55762H13.5556ZM7.77778 12.9346C8.65877 12.9277 9.50111 12.5636 10.12 11.9223C10.739 11.281 11.084 10.4148 11.0794 9.51372V5.37695C11.0794 4.48133 10.7315 3.62239 10.1124 2.98909C9.49318 2.35578 8.65341 2 7.77778 2C6.90214 2 6.06237 2.35578 5.4432 2.98909C4.82404 3.62239 4.47619 4.48133 4.47619 5.37695V9.51372C4.47157 10.4148 4.81657 11.281 5.43551 11.9223C6.05444 12.5636 6.89679 12.9277 7.77778 12.9346V12.9346Z",
					fill: "#FF4500"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M13.5556 7.55762C14.6601 7.55762 15.5556 8.45305 15.5556 9.55762V9.89531C15.5556 9.91261 15.5553 9.92991 15.5549 9.9472C15.507 11.7927 14.8077 13.5653 13.5756 14.9357C13.0497 15.5206 12.4417 16.0156 11.7752 16.407V18C11.7752 19.1046 10.8798 20 9.77524 20H5.78032C4.67575 20 3.78032 19.1046 3.78032 18V16.407C3.1139 16.0156 2.50582 15.5206 1.97994 14.9357C0.747883 13.5653 0.0485716 11.7927 0.000673294 9.9472C0.000224471 9.92991 0 9.91261 0 9.89531V9.55762C0 8.45305 0.89543 7.55762 2 7.55762H2.47619V5.37695C2.47619 3.96528 3.02404 2.60258 4.01312 1.59092C5.00371 0.577725 6.35696 0 7.77778 0C9.1986 0 10.5519 0.577725 11.5424 1.59092C12.5315 2.60258 13.0794 3.96528 13.0794 5.37695V7.55762H13.5556ZM11.9048 9.55762V9.89531C11.8627 10.862 11.4854 11.7779 10.8462 12.4819C10.8235 12.507 10.8004 12.5318 10.777 12.5563C10.7276 12.6081 10.6767 12.6586 10.6244 12.7078C10.0091 13.2868 9.2354 13.6489 8.41596 13.7516C8.31677 13.7641 8.2169 13.7727 8.11656 13.7775C8.00632 13.7827 7.89552 13.7833 7.78441 13.7791C7.7822 13.779 7.77999 13.7789 7.77778 13.7788C7.77557 13.7789 7.77336 13.779 7.77115 13.7791C7.66004 13.7833 7.54923 13.7827 7.439 13.7775C7.33866 13.7727 7.23879 13.7641 7.13959 13.7516C6.32016 13.6489 5.54645 13.2868 4.93112 12.7078C4.87884 12.6586 4.82799 12.6081 4.7786 12.5563C4.75517 12.5318 4.73208 12.507 4.70932 12.4819C4.07019 11.7779 3.69289 10.862 3.65079 9.89531V9.55762H2V9.89531C2.00062 9.91926 2.00139 9.94319 2.00231 9.9671C2.02319 10.5124 2.12039 11.0477 2.28789 11.5576C2.53476 12.3092 2.93432 13.0058 3.46725 13.5986C3.56935 13.7121 3.67558 13.821 3.7856 13.9251C4.06767 14.1919 4.37472 14.4269 4.70129 14.6273C5.04179 14.8362 5.40352 15.0075 5.78032 15.138C6.04795 15.2306 6.32319 15.3027 6.60381 15.353C6.71914 15.3737 6.83538 15.3907 6.95238 15.404V16.3115H5.78032V18H9.77524V16.3115H8.60317V15.404C8.72017 15.3907 8.83641 15.3737 8.95174 15.353C9.23237 15.3027 9.5076 15.2306 9.77524 15.138C10.152 15.0075 10.5138 14.8362 10.8543 14.6273C11.1808 14.4269 11.4879 14.1919 11.77 13.9251C11.88 13.821 11.9862 13.7121 12.0883 13.5986C12.6212 13.0058 13.0208 12.3092 13.2677 11.5576C13.4352 11.0477 13.5324 10.5124 13.5532 9.9671C13.5542 9.94319 13.5549 9.91926 13.5556 9.89531V9.55762H11.9048ZM4.4952 9.89531C4.57519 10.6565 4.90455 11.3722 5.43551 11.9223C5.47521 11.9635 5.51583 12.0035 5.55732 12.0423C6.15446 12.6012 6.93189 12.9194 7.74426 12.9341C7.75543 12.9343 7.7666 12.9345 7.77778 12.9346C7.78896 12.9345 7.80013 12.9343 7.81129 12.9341C8.62366 12.9194 9.40109 12.6012 9.99823 12.0423C10.0397 12.0035 10.0803 11.9635 10.12 11.9223C10.651 11.3722 10.9804 10.6565 11.0604 9.89531C11.0616 9.88312 11.0629 9.87092 11.064 9.8587C11.0734 9.759 11.0786 9.65855 11.0793 9.55762C11.0794 9.543 11.0794 9.52836 11.0794 9.51372V5.37695C11.0794 4.48133 10.7315 3.62239 10.1124 2.98909C9.49319 2.35579 8.65341 2 7.77778 2C6.90214 2 6.06237 2.35579 5.4432 2.98909C4.82404 3.62239 4.47619 4.48133 4.47619 5.37695V9.51372C4.47612 9.52836 4.47613 9.543 4.47624 9.55762C4.477 9.65855 4.48213 9.759 4.49154 9.8587C4.4927 9.87092 4.49391 9.88312 4.4952 9.89531Z"
				})),
				U = n("./src/reddit/selectors/posts.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/HappeningNow/Post/Header/index.m.less"),
				W = n.n(G);
			const J = {
				[x.p.Unknown]: "",
				[x.p.Chat]: r.fbt._("Chat", null, {
					hk: "1oa6K"
				}),
				[x.p.Talk]: r.fbt._("Talk", null, {
					hk: "1lMkQn"
				})
			};
			var Y = e => {
					let {
						model: t
					} = e;
					const n = Object(i.e)(e => Object(U.G)(e, {
							postId: t.postId
						})),
						a = Object(i.e)(e => Object(U.V)(e, {
							postId: t.postId
						})),
						d = Object(i.e)(V.db),
						c = Object(s.useMemo)(() => {
							var e, t, r;
							return (null === (e = null == a ? void 0 : a.icon) || void 0 === e ? void 0 : e.url) || (null === (r = null === (t = n.profile) || void 0 === t ? void 0 : t.icon) || void 0 === r ? void 0 : r.url) || ""
						}, [a, n]),
						l = Object(s.useMemo)(() => {
							var e;
							return (null == a ? void 0 : a.displayText) || (null === (e = null == n ? void 0 : n.profile) || void 0 === e ? void 0 : e.displayText) || ""
						}, [a, n]);
					return o.a.createElement("div", {
						className: W.a.header
					}, o.a.createElement("div", {
						className: W.a.subredditIconContainer
					}, o.a.createElement(P, {
						id: n.id,
						isAnimated: !0
					}), o.a.createElement(F.b, {
						className: W.a.subredditIcon,
						iconUrl: c
					}), t.contentType === x.p.Chat ? o.a.createElement(H, {
						className: Object(j.a)(W.a.liveChatIcon, {
							[W.a.nightMode]: d
						})
					}) : o.a.createElement(D, {
						className: Object(j.a)(W.a.microphoneIcon, {
							[W.a.nightMode]: d
						})
					})), o.a.createElement("div", {
						className: W.a.headerMetadata
					}, o.a.createElement("span", {
						className: W.a.subredditName
					}, l), o.a.createElement("div", null, o.a.createElement("span", {
						className: W.a.liveContentType
					}, J[t.contentType]), n.numComments > 0 && o.a.createElement("span", {
						className: W.a.messageCount
					}, r.fbt._({
						"*": "{number} messages",
						_1: "1 message"
					}, [r.fbt._plural(n.numComments, "number", Object(N.b)(n.numComments))], {
						hk: "2wEqSc"
					})))))
				},
				q = n("./src/reddit/actions/reportFlow/index.ts"),
				Z = n("./src/reddit/actions/tooltip.ts"),
				K = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				X = n("./src/reddit/components/ReportFlow/index.tsx"),
				z = n("./src/reddit/components/ReportFlow/new.tsx"),
				Q = n("./src/reddit/controls/Dropdown/index.tsx"),
				$ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ee = n("./src/reddit/icons/fonts/Report/index.tsx"),
				te = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				ne = n("./src/reddit/selectors/tooltip.ts"),
				re = n("./src/reddit/components/HappeningNow/Post/Menu/index.m.less"),
				se = n.n(re);
			const oe = Object(K.a)(Q.a);
			var ie = e => {
					let {
						post: t
					} = e;
					const n = Object(i.d)(),
						a = Object(i.e)(e => {
							var n, r;
							return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === t.id
						}),
						d = Object(i.e)(V.i) === t.authorId,
						c = Object(s.useMemo)(() => (e => `HappeningNowPost--menu--${e}`)(t.id), [t.id]),
						l = Object(i.e)(e => Object(ne.b)(c)(e)),
						u = o.a.useCallback(() => {
							n(Object(q.c)(t.id, !1))
						}, [n, t.id]),
						m = o.a.useCallback(() => {
							n(Object(Z.h)({
								tooltipId: c
							}))
						}, [n, c]);
					return d ? null : o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
						id: c,
						className: se.a.menuButton,
						onClick: m
					}, o.a.createElement(te.a, null), o.a.createElement(oe, {
						isOpen: l,
						tooltipId: c
					}, o.a.createElement($.b, {
						displayText: r.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: u
					}, o.a.createElement(ee.a, null)))), a && o.a.createElement(z.a, {
						withOverlay: !0,
						overlayCustomStyles: X.b,
						postId: t.id
					}))
				},
				ae = n("./src/reddit/components/UserIcon/index.tsx"),
				de = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				ce = n("./src/reddit/components/HappeningNow/Post/ParticipantsDisplay/index.m.less"),
				le = n.n(ce);
			const ue = (e, t) => Object(de.a)(e, t, !0).map(e => {
				let {
					image: t
				} = e;
				return {
					icon: {
						url: t
					}
				}
			});
			var me = e => {
					let {
						model: t
					} = e;
					const {
						participantAvatars: n = [],
						userCount: a,
						postId: d
					} = t, c = Object(s.useMemo)(() => a <= 0 ? 0 : a <= 1 ? 1 : a <= 2 ? 2 : a < 100 ? 3 : a < 500 ? 4 : 5, [a]), l = Object(i.e)(V.db), u = Object(s.useMemo)(() => {
						const e = n.slice(0, c);
						if (e.length >= c) return e;
						const t = c - e.length;
						return [...e, ...ue(d, t)]
					}, [n, c, d]);
					return a <= 0 ? null : o.a.createElement("div", {
						className: le.a.participantsDisplay
					}, u.length > 0 && o.a.createElement("div", {
						className: le.a.avatarRow
					}, u.map((e, t) => {
						var n, r, s;
						return o.a.createElement("div", {
							key: t,
							className: le.a.avatarContainer
						}, o.a.createElement(ae.a, {
							userName: "",
							iconUrl: null !== (r = null === (n = e.icon) || void 0 === n ? void 0 : n.url) && void 0 !== r ? r : "",
							className: Object(j.a)(le.a.avatar, {
								[le.a.snoovatar]: !!e.snoovatarIcon,
								[le.a.nightMode]: l
							}),
							isNSFW: !!(null === (s = e.profile) || void 0 === s ? void 0 : s.isNsfw)
						}))
					})), o.a.createElement("span", {
						className: le.a.userCount
					}, r.fbt._("{number of users participating in live chat or talk} here now", [r.fbt._param("number of users participating in live chat or talk", Object(N.b)(a))], {
						hk: "1qn5yO"
					})))
				},
				pe = n("./src/lib/constants/icons.ts"),
				he = n("./src/reddit/actions/post.ts"),
				be = n("./src/reddit/controls/Score/index.tsx"),
				xe = n("./src/reddit/icons/fonts/index.tsx"),
				fe = n("./src/reddit/models/Vote/index.ts"),
				ve = n("./src/reddit/components/HappeningNow/Post/Votes/index.m.less"),
				Ce = n.n(ve);
			var ge = e => {
					let {
						post: t,
						className: n
					} = e;
					const s = Object(i.d)();
					return o.a.createElement("div", {
						className: Object(j.a)(Ce.a.container, n)
					}, o.a.createElement("button", {
						"aria-label": r.fbt._("Upvote", null, {
							hk: "3lconG"
						}),
						"aria-pressed": t.voteState === fe.a.upvoted,
						className: Object(j.a)(Ce.a.upvote, {
							[Ce.a.voted]: t.voteState === fe.a.upvoted
						}),
						onClick: () => {
							s(Object(he.jb)(t.id))
						}
					}, o.a.createElement(xe.a, {
						name: pe.a.upvote,
						isFilled: !0
					})), o.a.createElement(be.a, {
						score: t.score,
						voteState: t.voteState,
						isScoreHidden: t.isScoreHidden,
						postId: t.id
					}), o.a.createElement("button", {
						"aria-label": r.fbt._("Downvote", null, {
							hk: "lxwdz"
						}),
						"aria-pressed": t.voteState === fe.a.downvoted,
						className: Object(j.a)(Ce.a.downvote, {
							[Ce.a.voted]: t.voteState === fe.a.downvoted
						}),
						onClick: () => {
							s(Object(he.v)(t.id))
						}
					}, o.a.createElement(xe.a, {
						name: pe.a.downvote,
						isFilled: !0
					})))
				},
				Ee = n("./src/reddit/components/RichTextJson/index.tsx"),
				we = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				_e = n("./src/reddit/helpers/overlay/index.ts"),
				je = n("./src/reddit/models/Media/index.ts"),
				ye = n("./src/reddit/selectors/features/happeningNow/index.ts"),
				Oe = n("./src/reddit/components/HappeningNow/Post/index.m.less"),
				ke = n.n(Oe);
			var Se = e => {
					let {
						postId: t,
						showVotes: n = !0
					} = e;
					const r = Object(i.d)(),
						a = Object(i.e)(e => Object(ye.b)(e, t)),
						d = Object(i.e)(e => Object(U.G)(e, {
							postId: t
						})),
						c = Object(s.useMemo)(() => {
							var e;
							return (null === (e = null == d ? void 0 : d.media) || void 0 === e ? void 0 : e.type) === je.o.RTJSON
						}, [d]),
						l = Object(s.useCallback)(e => {
							e && m(e.scrollHeight)
						}, []),
						[u, m] = Object(s.useState)(0),
						p = Object(s.useMemo)(() => u > 44, [u]);
					if (!a) return null;
					return o.a.createElement("article", {
						className: ke.a.post
					}, o.a.createElement("div", {
						className: Object(j.a)(ke.a.main, {
							[ke.a.showVotes]: n
						}),
						onClick: () => {
							var e;
							switch (a.contentType) {
								case x.p.Chat:
									r(Object(_e.a)(d.permalink));
									break;
								case x.p.Talk:
									window.open(`${_.a.redditUrl}/talk/${null===(e=a.talkRoom)||void 0===e?void 0:e.roomId}`)
							}
						}
					}, o.a.createElement(Y, {
						model: a
					}), o.a.createElement("div", {
						className: ke.a.content
					}, o.a.createElement("h2", {
						className: ke.a.title,
						ref: l
					}, d.title), c && !p && o.a.createElement(Ee.b, {
						className: ke.a.body,
						content: Object(we.a)(d),
						rtJsonElementProps: {
							renderingObjectInfo: d
						}
					})), o.a.createElement(me, {
						model: a
					})), n && o.a.createElement(ge, {
						className: ke.a.votesContainer,
						post: d
					}), o.a.createElement(ie, {
						post: d
					}))
				},
				Ne = n("./src/reddit/components/HappeningNow/Section/index.m.less"),
				Re = n.n(Ne);
			const Te = e => {
				let {
					title: t,
					children: n
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("h1", {
					className: Re.a.header
				}, t), o.a.createElement("div", {
					className: Re.a.content
				}, n))
			};
			var Me = n("./src/reddit/pages/ErrorPages/index.tsx"),
				Ie = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				Le = n("./src/reddit/pages/HappeningNow/index.m.less"),
				Pe = n.n(Le);
			const Fe = {
					[x.o.Unknown]: "",
					[x.o.Popular]: r.fbt._("Popular", null, {
						hk: "2pUvlx"
					}),
					[x.o.Recommended]: r.fbt._("For you", null, {
						hk: "19HGNV"
					})
				},
				Be = () => {
					const e = Object(i.e)(ye.c),
						t = Object(i.e)(ye.d);
					return !e.length && !t.length ? o.a.createElement("div", {
						className: Pe.a.content
					}, o.a.createElement(S, {
						className: Pe.a.emptyState
					})) : o.a.createElement("div", {
						className: Pe.a.content
					}, !!t.length && o.a.createElement(Te, {
						title: Fe[x.o.Recommended]
					}, t.map(e => o.a.createElement(Se, {
						key: e,
						postId: e
					}))), !!e.length && o.a.createElement(Te, {
						title: Fe[x.o.Popular]
					}, e.map(e => o.a.createElement(Se, {
						key: e,
						postId: e
					}))))
				};
			t.default = e => {
				const t = Object(i.d)(),
					n = Object(i.e)(Ie.a),
					r = Object(i.e)(ye.a);
				return Object(s.useEffect)(() => {
					t((() => async (e, t, n) => {
						let {
							gqlContext: r
						} = n;
						e(C());
						try {
							const t = await v(r());
							e(g(t))
						} catch (s) {
							e(E(s))
						}
					})())
				}, [t]), n ? o.a.createElement("div", {
					className: Pe.a.main
				}, o.a.createElement("div", {
					className: Pe.a.container
				}, r && o.a.createElement(Be, null))) : o.a.createElement(Me.b, null)
			}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => s.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: r.Pf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === r.Vf.SmIcon || t === r.Vf.SmIconHc
				},
				l = (e, t) => {
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
					const r = Object(i.bb)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/FetchLiveDiscoveryContent.json": function(e) {
			e.exports = JSON.parse('{"id":"84d1646aa274"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HappeningNow.a9460270d8aa5db82813.js.map