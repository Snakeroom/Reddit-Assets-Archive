// https://www.redditstatic.com/desktop2x/HappeningNow.5cb1173194dba5cbd8ad.js
// Retrieved at 6/14/2023, 2:50:04 PM by Reddit Dataminer v1.0.0
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
					var a, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						l = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						d = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						C = !o && !d && /macintosh/i.test(t),
						v = !s && !m && !u && !p && /linux/i.test(t),
						f = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						w = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !g && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: w || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
					} : /SamsungBrowser/i.test(t) ? a = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: w || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? a = {
						name: "Opera Coast",
						coast: e,
						version: w || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? a = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: w || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? a = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? a = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? a = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? a = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? a = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? a = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (a = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, f ? (a.msedge = e, a.version = f) : (a.msie = e, a.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? a = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? a = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? a = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? a = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || w
					} : m ? a = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? a = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (a = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (a.firefoxos = e, a.osname = "Firefox OS")) : d ? a = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? a = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? a = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? a = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: w || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (a = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: w || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (a.touchpad = e)) : /bada/i.test(t) ? a = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? a = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
					} : /qupzilla/i.test(t) ? a = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
					} : /chromium/i.test(t) ? a = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
					} : /chrome|crios|crmo/i.test(t) ? a = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? a = {
						name: "Android",
						version: w
					} : /safari|applewebkit/i.test(t) ? (a = {
						name: "Safari",
						safari: e
					}, w && (a.version = w)) : o ? (a = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, w && (a.version = w)) : a = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || w
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !a.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (a.name = a.name || "Blink", a.blink = e) : (a.name = a.name || "Webkit", a.webkit = e), !a.version && w && (a.version = w)) : !a.opera && /gecko\//i.test(t) && (a.name = a.name || "Gecko", a.gecko = e, a.version = a.version || n(/gecko\/(\d+(\.\d+)?)/i)), a.windowsphone || !s && !a.silk ? !a.windowsphone && o ? (a[o] = e, a.ios = e, a.osname = "iOS") : C ? (a.mac = e, a.osname = "macOS") : _ ? (a.xbox = e, a.osname = "Xbox") : b ? (a.windows = e, a.osname = "Windows") : v && (a.linux = e, a.osname = "Linux") : (a.android = e, a.osname = "Android");
					var E = "";
					a.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : a.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : a.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : a.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : a.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : a.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : a.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (a.osversion = E);
					var k = !a.windows && E.split(".")[0];
					return g || l || "ipad" == o || s && (3 == k || k >= 4 && !x) || a.silk ? a.tablet = e : (x || "iphone" == o || "ipod" == o || s || i || a.blackberry || a.webos || a.bada) && (a.mobile = e), a.msedge || a.msie && a.version >= 10 || a.yandexbrowser && a.version >= 15 || a.vivaldi && a.version >= 1 || a.chrome && a.version >= 20 || a.samsungBrowser && a.version >= 4 || a.firefox && a.version >= 20 || a.safari && a.version >= 6 || a.opera && a.version >= 10 || a.ios && a.osversion && a.osversion.split(".")[0] >= 6 || a.blackberry && a.version >= 10.1 || a.chromium && a.version >= 20 ? a.a = e : a.msie && a.version < 10 || a.chrome && a.version < 20 || a.firefox && a.version < 20 || a.safari && a.version < 6 || a.opera && a.version < 10 || a.ios && a.osversion && a.osversion.split(".")[0] < 6 || a.chromium && a.version < 20 ? a.c = e : a.x = e, a
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function a(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = a(e, (function(e) {
							var n = t - r(e);
							return a((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, r, a) {
					var s = n;
					"string" == typeof r && (a = r, r = void 0), void 0 === r && (r = !1), a && (s = t(a));
					var i = "" + s.version;
					for (var l in e)
						if (e.hasOwnProperty(l) && s[l]) {
							if ("string" != typeof e[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e));
							return o([i, e[l]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = s, n.compareVersions = o, n.check = function(e, t, n) {
					return !s(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, a) {
				return a(e, (function(e, a, o) {
					n = r ? (r = !1, e) : t(n, e, a, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				a = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = a(n)) == n ? n : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), r(a(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				a = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var l = i(e) ? r : s,
					c = arguments.length < 3;
				return l(e, o(t, 4), n, c, a)
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
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const a = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				s = Object(r.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, a.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${n})`,
					strokeWidth: "2"
				}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${n}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, a.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${n})`
				}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${n}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, a.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${n})`,
					strokeWidth: "0.5"
				}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${n}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
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
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: a.a.overlayReportFlow
			};
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
				return s
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: a.a.overlayReportFlow
				},
				s = Object(r.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
		"./src/reddit/constants/imagePaths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${r.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				o = Array.from({
					length: 8
				}).map((e, t) => `${r.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function l(e, t, n) {
				const r = Object(s.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, s = o;
					return r ? a.a.createElement(t, s) : void 0 !== n ? a.a.createElement(n, s) : null
				})
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/memoize.js"),
				a = n.n(r),
				o = n("./src/reddit/constants/categories.tsx"),
				s = n("./src/reddit/constants/imagePaths.ts");
			const i = [];
			t.a = a()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return i;
				const r = n ? s.a : s.b,
					a = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(a + t) % o.a.length],
					image: r[(a + t) % r.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(o.a)(Object(s.b)("report", e.isFilled), l.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
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
				return m
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						shouldReloadHome: t
					} = e;
					return t ? o.a.createElement(s.a, {
						kind: s.b.ExternalLink,
						priority: s.c.Primary,
						className: l.a.primaryRouterLink,
						href: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})) : o.a.createElement(s.a, {
						kind: s.b.InternalLink,
						priority: s.c.Primary,
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
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(c, {
						shouldReloadHome: n
					}))
				},
				m = e => {
					let {
						message: t,
						shouldReloadHome: n
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(c, {
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/happeningNow/constants.ts"),
				d = n("./src/lib/isDefined.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/lib/makeRequest/index.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				C = n("./src/redditGQL/operations/FetchLiveDiscoveryContent.json"),
				v = n("./src/redditGQL/types.ts");
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
				w = async e => {
					const t = await Object(m.a)(e, C);
					if (!Object(u.c)(t)) throw new Error("Encountered an error while fetching live discovery content");
					return (e => {
						var t, n, r, a;
						const o = {},
							s = {},
							{
								popularLiveContent: i,
								recommendedLiveContent: l
							} = e.liveDiscoveryContent,
							c = e => {
								var t, n, r, a;
								const i = null == e ? void 0 : e.node;
								if (!i) return;
								const {
									post: l,
									contentType: c,
									...m
								} = i;
								if (Object(b.j)(l) || Object(b.i)(l)) return;
								const u = [];
								let C;
								const w = Object(p.f)(l);
								if (o[w.id] = w, Object(b.n)(l)) {
									const e = Object(h.a)(l.subreddit);
									s[e.id] = e
								}
								switch (c) {
									case v.u.Chat: {
										const e = null === (r = null === (n = null === (t = null == l ? void 0 : l.commentForest) || void 0 === t ? void 0 : t.trees) || void 0 === n ? void 0 : n.map(e => f(null == e ? void 0 : e.node))) || void 0 === r ? void 0 : r.filter(d.a);
										(null == e ? void 0 : e.length) && u.push(...e);
										const a = f(l.authorInfo);
										a && u.push(a);
										break
									}
									case v.u.Talk:
										C = l.talkRoom, Array.isArray(null === (a = null == l ? void 0 : l.talkRoom) || void 0 === a ? void 0 : a.topUsers) && u.push(...l.talkRoom.topUsers)
								}
								return {
									postId: w.id,
									participantAvatars: u,
									contentType: c,
									talkRoom: C,
									...m
								}
							},
							m = null !== (n = null === (t = null == i ? void 0 : i.edges) || void 0 === t ? void 0 : t.map(c).filter(d.a)) && void 0 !== n ? n : [],
							u = null !== (a = null === (r = null == l ? void 0 : l.edges) || void 0 === r ? void 0 : r.map(c).filter(d.a)) && void 0 !== a ? a : [];
						return {
							posts: o,
							subreddits: s,
							popularLiveContent: m,
							recommendedLiveContent: u
						}
					})(t.body.data)
				}, g = Object(l.a)(c.b), x = Object(l.a)(c.c), _ = Object(l.a)(c.a);
			var E = n("./src/reddit/actions/subreddit.ts"),
				k = n("./src/config.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/helpers/correlationIdTracker.ts"),
				j = n("./src/reddit/helpers/trackers/happeningNow.ts"),
				N = n("./src/reddit/hooks/useTracking.ts"),
				R = n("./src/reddit/models/HappeningNow/Filter/index.ts"),
				S = n("./src/reddit/selectors/features/happeningNow/index.ts"),
				F = n("./src/reddit/components/HappeningNow/EmptyState/index.m.less"),
				M = n.n(F);
			var A = e => {
					const t = Object(s.e)(S.e),
						n = Object(a.useMemo)(() => (e => {
							switch (e) {
								case R.a.Chat:
									return {
										headerText: r.fbt._("There aren't any chats happening now", null, {
											hk: "3nrAYl"
										}), descriptionText: r.fbt._("Everyone is quiet right now, how about starting your own chat", null, {
											hk: "1IxXa7"
										}), ctaText: r.fbt._("Start a Chat", null, {
											hk: "BMlPp"
										})
									};
								case R.a.Talk:
									return {
										headerText: r.fbt._("There aren't any talks happening now", null, {
											hk: "1U7KsT"
										}), descriptionText: r.fbt._("Everyone is quiet right now, how about starting your own talk", null, {
											hk: "21DkH7"
										}), ctaText: r.fbt._("Start a Talk", null, {
											hk: "3dlnGh"
										})
									};
								case R.a.All:
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
						c = Object(a.useCallback)(() => {
							const e = Object(O.d)(O.a.PostComposer, !1);
							l(Object(j.e)(e))
						}, [l]);
					return o.a.createElement("div", {
						className: Object(i.a)(M.a.container, e.className)
					}, o.a.createElement("img", {
						className: M.a.img,
						src: `${k.a.assetPath}/img/happeningNow/empty-state-snoo.png`,
						alt: r.fbt._("Snoo with live chat icon", null, {
							hk: "4kxcZJ"
						})
					}), o.a.createElement("div", {
						className: M.a.textContainer
					}, o.a.createElement("p", {
						className: M.a.headerText
					}, n.headerText), o.a.createElement("p", {
						className: M.a.descriptionText
					}, n.descriptionText)), o.a.createElement(y.t, {
						className: M.a.ctaText,
						kind: y.b.InternalLink,
						to: "/submit",
						onClick: c
					}, n.ctaText))
				},
				P = n("./src/reddit/actions/happeningNow/index.ts"),
				T = n("./src/reddit/components/HappeningNow/Filter/index.m.less"),
				H = n.n(T);
			var B = e => {
				let {
					filter: t
				} = e;
				const n = Object(N.a)(),
					r = Object(s.d)(),
					l = Object(s.e)(S.e),
					c = Object(a.useMemo)(() => l === t.name, [l, t]),
					d = Object(a.useCallback)(() => {
						n(Object(j.c)(t.name)), r(Object(P.c)(t.name))
					}, [n, r, t]);
				return o.a.createElement("button", {
					"aria-pressed": c,
					className: Object(i.a)(H.a.filterButton, {
						[H.a.selected]: c
					}),
					onClick: d
				}, t.label)
			};
			const L = [{
				name: R.a.All,
				label: r.fbt._("All", null, {
					hk: "4A1Mbp"
				})
			}, {
				name: R.a.Chat,
				label: r.fbt._("Chat", null, {
					hk: "4v6C1b"
				})
			}, {
				name: R.a.Talk,
				label: r.fbt._("Talk", null, {
					hk: "ym95l"
				})
			}];
			var I = e => o.a.createElement("div", {
					className: e.className
				}, L.map(e => o.a.createElement(B, {
					key: e.name,
					filter: e
				}))),
				V = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				D = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				G = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx"),
				Z = n("./src/reddit/components/HappeningNow/Post/LiveRing/index.m.less"),
				q = n.n(Z);
			var K = e => {
					let {
						id: t,
						className: n,
						isAnimated: r = !1
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(q.a.speakerRingContainer, n)
					}, o.a.createElement(U.a, {
						ringId: t,
						className: Object(i.a)(q.a.speakerRingInner, {
							[q.a.animatedRing]: r
						})
					}), r && o.a.createElement(o.a.Fragment, null, o.a.createElement(D.a, {
						ringId: t,
						className: q.a.speakerRingMiddle
					}), o.a.createElement(G.a, {
						ringId: t,
						className: q.a.speakerRingOuter
					})))
				},
				W = n("./src/reddit/components/SubredditIcon/index.tsx");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var z = e => o.a.createElement("svg", Y({
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

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var J = e => o.a.createElement("svg", Q({
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
				X = n("./src/reddit/selectors/posts.ts"),
				$ = n("./src/reddit/selectors/user.ts"),
				ee = n("./src/reddit/components/HappeningNow/Post/Header/index.m.less"),
				te = n.n(ee);
			const ne = {
				[v.u.Unknown]: "",
				[v.u.Chat]: r.fbt._("Chat", null, {
					hk: "1oa6K"
				}),
				[v.u.Talk]: r.fbt._("Talk", null, {
					hk: "1lMkQn"
				})
			};
			var re = e => {
					let {
						model: t
					} = e;
					const n = Object(s.e)(e => Object(X.F)(e, {
							postId: t.postId
						})),
						l = Object(s.e)(e => Object(X.U)(e, {
							postId: t.postId
						})),
						c = Object(s.e)($.fb),
						d = Object(a.useMemo)(() => {
							var e, t, r;
							return (null === (e = null == l ? void 0 : l.icon) || void 0 === e ? void 0 : e.url) || (null === (r = null === (t = n.profile) || void 0 === t ? void 0 : t.icon) || void 0 === r ? void 0 : r.url) || ""
						}, [l, n]),
						m = Object(a.useMemo)(() => {
							var e;
							return (null == l ? void 0 : l.displayText) || (null === (e = null == n ? void 0 : n.profile) || void 0 === e ? void 0 : e.displayText) || ""
						}, [l, n]);
					return o.a.createElement("div", {
						className: te.a.header
					}, o.a.createElement("div", {
						className: te.a.subredditIconContainer
					}, o.a.createElement(K, {
						id: n.id,
						isAnimated: !0
					}), o.a.createElement(W.b, {
						className: te.a.subredditIcon,
						iconUrl: d
					}), t.contentType === v.u.Chat ? o.a.createElement(z, {
						className: Object(i.a)(te.a.liveChatIcon, {
							[te.a.nightMode]: c
						})
					}) : o.a.createElement(J, {
						className: Object(i.a)(te.a.microphoneIcon, {
							[te.a.nightMode]: c
						})
					})), o.a.createElement("div", {
						className: te.a.headerMetadata
					}, o.a.createElement("span", {
						className: te.a.subredditName
					}, m), o.a.createElement("div", null, o.a.createElement("span", {
						className: te.a.liveContentType
					}, ne[t.contentType]), n.numComments > 0 && o.a.createElement("span", {
						className: te.a.messageCount
					}, r.fbt._({
						"*": "{number} messages",
						_1: "1 message"
					}, [r.fbt._plural(n.numComments, "number", Object(V.b)(n.numComments))], {
						hk: "2wEqSc"
					})))))
				},
				ae = n("./src/reddit/actions/reportFlow/index.ts"),
				oe = n("./src/reddit/actions/tooltip.ts"),
				se = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ie = n("./src/reddit/components/ReportFlow/index.tsx"),
				le = n("./src/reddit/components/ReportFlow/new.tsx"),
				ce = n("./src/reddit/controls/Dropdown/index.tsx"),
				de = n("./src/reddit/controls/Dropdown/Row.tsx"),
				me = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				pe = n("./src/reddit/selectors/tooltip.ts"),
				he = n("./src/reddit/components/HappeningNow/Post/Menu/index.m.less"),
				be = n.n(he);
			const Ce = Object(se.a)(ce.a);
			var ve = e => {
					let {
						post: t,
						itemKey: n
					} = e;
					const i = Object(s.d)(),
						l = Object(s.e)(e => {
							var n, r;
							return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === t.id
						}),
						c = Object(s.e)($.k) === t.authorId,
						d = Object(a.useMemo)(() => (e => `HappeningNowPost--menu--${e}`)(n), [n]),
						m = Object(s.e)(e => Object(pe.b)(d)(e)),
						u = o.a.useCallback(() => {
							i(Object(ae.c)(t.id, !1))
						}, [i, t.id]),
						p = o.a.useCallback(() => {
							i(Object(oe.h)({
								tooltipId: d
							}))
						}, [i, d]);
					return c ? null : o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
						id: d,
						className: be.a.menuButton,
						onClick: p
					}, o.a.createElement(ue.a, null), o.a.createElement(Ce, {
						isOpen: m,
						tooltipId: d
					}, o.a.createElement(de.b, {
						displayText: r.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: u
					}, o.a.createElement(me.a, null)))), l && o.a.createElement(le.a, {
						withOverlay: !0,
						overlayCustomStyles: ie.b,
						postId: t.id
					}))
				},
				fe = n("./src/reddit/components/UserIcon/index.tsx"),
				we = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				ge = n("./src/reddit/components/HappeningNow/Post/ParticipantsDisplay/index.m.less"),
				xe = n.n(ge);
			const _e = (e, t) => Object(we.a)(e, t, !0).map(e => {
				let {
					image: t
				} = e;
				return {
					icon: {
						url: t
					}
				}
			});
			var Ee = e => {
					let {
						model: t
					} = e;
					const {
						participantAvatars: n = [],
						userCount: l,
						postId: c
					} = t, d = Object(a.useMemo)(() => l <= 0 ? 0 : l <= 1 ? 1 : l <= 2 ? 2 : l < 100 ? 3 : l < 500 ? 4 : 5, [l]), m = Object(s.e)($.fb), u = Object(a.useMemo)(() => {
						const e = n.slice(0, d);
						if (e.length >= d) return e;
						const t = d - e.length;
						return [...e, ..._e(c, t)]
					}, [n, d, c]);
					return l <= 0 ? null : o.a.createElement("div", {
						className: xe.a.participantsDisplay
					}, u.length > 0 && o.a.createElement("div", {
						className: xe.a.avatarRow
					}, u.map((e, t) => {
						var n, r, a;
						return o.a.createElement("div", {
							key: t,
							className: xe.a.avatarContainer
						}, o.a.createElement(fe.a, {
							userName: "",
							iconUrl: null !== (r = null === (n = e.icon) || void 0 === n ? void 0 : n.url) && void 0 !== r ? r : "",
							className: Object(i.a)(xe.a.avatar, {
								[xe.a.snoovatar]: !!e.snoovatarIcon,
								[xe.a.nightMode]: m
							}),
							isNSFW: !!(null === (a = e.profile) || void 0 === a ? void 0 : a.isNsfw)
						}))
					})), o.a.createElement("span", {
						className: xe.a.userCount
					}, r.fbt._("{number of users participating in live chat or talk} here now", [r.fbt._param("number of users participating in live chat or talk", Object(V.b)(l))], {
						hk: "1qn5yO"
					})))
				},
				ke = n("./src/lib/constants/icons.ts"),
				ye = n("./src/reddit/actions/post.ts"),
				Oe = n("./src/reddit/controls/Score/index.tsx"),
				je = n("./src/reddit/icons/fonts/index.tsx"),
				Ne = n("./src/reddit/models/Vote/index.ts"),
				Re = n("./src/reddit/components/HappeningNow/Post/Votes/index.m.less"),
				Se = n.n(Re);
			var Fe = e => {
					let {
						post: t,
						className: n
					} = e;
					const a = Object(s.d)();
					return o.a.createElement("div", {
						className: Object(i.a)(Se.a.container, n)
					}, o.a.createElement("button", {
						"aria-label": r.fbt._("Upvote", null, {
							hk: "3lconG"
						}),
						"aria-pressed": t.voteState === Ne.a.upvoted,
						className: Object(i.a)(Se.a.upvote, {
							[Se.a.voted]: t.voteState === Ne.a.upvoted
						}),
						onClick: () => {
							a(Object(ye.ib)(t.id))
						}
					}, o.a.createElement(je.a, {
						name: ke.a.upvote,
						isFilled: !0
					})), o.a.createElement(Oe.a, {
						score: t.score,
						voteState: t.voteState,
						isScoreHidden: t.isScoreHidden,
						postId: t.id
					}), o.a.createElement("button", {
						"aria-label": r.fbt._("Downvote", null, {
							hk: "lxwdz"
						}),
						"aria-pressed": t.voteState === Ne.a.downvoted,
						className: Object(i.a)(Se.a.downvote, {
							[Se.a.voted]: t.voteState === Ne.a.downvoted
						}),
						onClick: () => {
							a(Object(ye.v)(t.id))
						}
					}, o.a.createElement(je.a, {
						name: ke.a.downvote,
						isFilled: !0
					})))
				},
				Me = n("./src/reddit/components/RichTextJson/index.tsx"),
				Ae = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Pe = n("./src/reddit/helpers/overlay/index.ts"),
				Te = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				He = n("./src/reddit/models/Media/index.ts"),
				Be = n("./src/reddit/components/HappeningNow/Post/index.m.less"),
				Le = n.n(Be);
			const Ie = 3;
			var Ve = e => {
					let {
						postId: t,
						showVotes: n = !0,
						showBodyContent: r = !0,
						titleLineCount: l = Ie,
						itemKey: c
					} = e;
					const d = Object(s.d)(),
						m = Object(N.a)(),
						u = Object(s.e)(e => Object(S.d)(e, t)),
						p = Object(s.e)(e => Object(X.F)(e, {
							postId: t
						})),
						h = Object(a.useMemo)(() => {
							var e;
							return (null === (e = null == p ? void 0 : p.media) || void 0 === e ? void 0 : e.type) === He.o.RTJSON && r
						}, [p, r]),
						b = Object(a.useCallback)(e => {
							e && f(e.scrollHeight)
						}, []),
						[C, f] = Object(a.useState)(0),
						w = Object(a.useMemo)(() => C > 44, [C]),
						[g, x] = Object(a.useState)(!1),
						_ = Object(a.useRef)(null),
						E = Object(a.useCallback)(e => {
							if (g) return;
							e.some(e => e.isIntersecting) && (m(Object(j.g)(t)), x(!0))
						}, [t, g, m]),
						y = Object(a.useMemo)(() => ({
							threshold: 1
						}), []);
					if (Object(Te.a)(_, E, y), !u) return null;
					return o.a.createElement("article", {
						className: Le.a.post,
						ref: _
					}, o.a.createElement("div", {
						className: Object(i.a)(Le.a.main, {
							[Le.a.showVotes]: n
						}),
						onClick: () => {
							var e;
							switch (u.contentType) {
								case v.u.Chat:
									d(Object(Pe.a)(p.permalink));
									break;
								case v.u.Talk:
									window.open(`${k.a.redditUrl}/talk/${null===(e=u.talkRoom)||void 0===e?void 0:e.roomId}`)
							}
							m(Object(j.d)(t))
						}
					}, o.a.createElement(re, {
						model: u
					}), o.a.createElement("div", {
						className: Le.a.content
					}, o.a.createElement("h2", {
						className: Object(i.a)(Le.a.title, {
							[Le.a[`lineCount${l}`]]: l !== Ie
						}),
						ref: b
					}, p.title), h && !w && o.a.createElement(Me.b, {
						className: Le.a.body,
						content: Object(Ae.a)(p),
						rtJsonElementProps: {
							renderingObjectInfo: p
						}
					})), o.a.createElement(Ee, {
						model: u
					})), n && o.a.createElement(Fe, {
						className: Le.a.votesContainer,
						post: p
					}), o.a.createElement(ve, {
						post: p,
						itemKey: c
					}))
				},
				Ue = n("./src/reddit/components/HappeningNow/Section/index.m.less"),
				De = n.n(Ue);
			const Ge = e => {
				let {
					title: t,
					children: n
				} = e;
				return o.a.createElement("div", null, o.a.createElement("h1", {
					className: De.a.header
				}, t), o.a.createElement("div", {
					className: De.a.content
				}, n))
			};

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var qe = e => o.a.createElement("svg", Ze({
					viewBox: "0 0 274 112",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("rect", {
					width: "312",
					height: "129",
					fill: "url(#paint0_linear_0_1)"
				}), o.a.createElement("mask", {
					id: "mask0_0_1",
					maskUnits: "userSpaceOnUse",
					x: "0",
					y: "0",
					width: "312",
					height: "129"
				}, o.a.createElement("rect", {
					width: "312",
					height: "129",
					fill: "url(#paint1_linear_0_1)"
				})), o.a.createElement("g", {
					mask: "url(#mask0_0_1)"
				}, o.a.createElement("circle", {
					cx: "192.5",
					cy: "252.5",
					r: "280.5",
					fill: "#A4F4FF",
					fillOpacity: "0.5"
				}), o.a.createElement("circle", {
					cx: "171",
					cy: "291",
					r: "255",
					fill: "url(#paint2_linear_0_1)"
				}), o.a.createElement("circle", {
					cx: "171",
					cy: "345",
					r: "255",
					fill: "url(#paint3_linear_0_1)"
				}), o.a.createElement("circle", {
					cx: "233",
					cy: "105",
					r: "4",
					fill: "#6A5CFF"
				}), o.a.createElement("circle", {
					cx: "210",
					cy: "80",
					r: "6",
					fill: "#FF9B1A"
				})), o.a.createElement("path", {
					d: "M61.9999 99.0045C63.0559 96.2406 66.1526 94.8561 68.9164 95.9121C71.6803 96.9682 73.0648 100.065 72.0088 102.829",
					stroke: "#FF9C1A",
					strokeWidth: "4.61812"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "paint0_linear_0_1",
					x1: "156",
					y1: "0",
					x2: "156",
					y2: "129",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#7ADFFF"
				}), o.a.createElement("stop", {
					offset: "0.353006",
					stopColor: "#6FD8CB"
				})), o.a.createElement("linearGradient", {
					id: "paint1_linear_0_1",
					x1: "156",
					y1: "0",
					x2: "156",
					y2: "129",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#7ADFFF"
				}), o.a.createElement("stop", {
					offset: "0.353006",
					stopColor: "#6FD8CB"
				})), o.a.createElement("linearGradient", {
					id: "paint2_linear_0_1",
					x1: "-21.2726",
					y1: "408.273",
					x2: "-20.1969",
					y2: "-80.7396",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#3911DA"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#BB01FF"
				})), o.a.createElement("linearGradient", {
					id: "paint3_linear_0_1",
					x1: "171",
					y1: "90",
					x2: "171",
					y2: "600",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF9C1A"
				}), o.a.createElement("stop", {
					offset: "0.608219",
					stopColor: "#FF7A00"
				})))),
				Ke = n("./src/reddit/components/HappeningNow/SidebarContent/index.m.less"),
				We = n.n(Ke);
			const Ye = [{
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
				ze = [{
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
				Qe = e => o.a.createElement("a", {
					className: We.a.link,
					href: e.url,
					rel: e.rel
				}, e.label);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Xe = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(We.a.liveDiscoveryContentIntro, t)
					}, o.a.createElement("img", {
						className: We.a.img,
						src: `${k.a.assetPath}/img/happeningNow/live-content-intro-snoo.png`,
						alt: r.fbt._("Snoo sitting on a sofa with popcorn", null, {
							hk: "1Rm16Z"
						})
					}), o.a.createElement(qe, {
						className: We.a.background
					}), o.a.createElement("h2", {
						className: We.a.header
					}, r.fbt._("Here's what's happening!", null, {
						hk: "2LRkyC"
					})), o.a.createElement("p", {
						className: We.a.description
					}, r.fbt._("Explore live chats and audio talks happening across Reddit.", null, {
						hk: "3HDfwU"
					})))
				},
				$e = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(We.a.links, t)
					}, o.a.createElement("div", {
						className: We.a.linksWrapper
					}, o.a.createElement("div", {
						className: We.a.column
					}, Ye.map((e, t) => o.a.createElement(Qe, Je({
						key: `first_column_link_${t}`
					}, e)))), o.a.createElement("div", {
						className: We.a.column
					}, ze.map((e, t) => o.a.createElement(Qe, Je({
						key: `second_column_link_${t}`
					}, e))))), o.a.createElement("span", {
						className: We.a.copyright
					}, r.fbt._("Reddit, Inc. © {year}. All rights reserved.", [r.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "DPZBh"
					})))
				};
			var et = n("./src/reddit/pages/ErrorPages/index.tsx"),
				tt = n("./src/reddit/selectors/experiments/happeningNow.ts"),
				nt = n("./src/reddit/components/HappeningNow/Section/carousel.m.less"),
				rt = n.n(nt);
			var at = e => {
					let {
						children: t
					} = e;
					const n = Object(a.createRef)(),
						l = Object(s.e)($.fb),
						[c, d] = Object(a.useState)(null),
						[m, u] = Object(a.useState)(null),
						[p, h] = Object(a.useState)(!1),
						[b, C] = Object(a.useState)(!1);
					Object(a.useEffect)(() => {
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
								u(e), d((e => {
									let t = e[0].previousElementSibling;
									return (null == t ? void 0 : t.previousElementSibling) && (t = t.previousElementSibling), t instanceof HTMLElement ? t : null
								})(n))
							}
						};
						return t(), e.addEventListener("scroll", t), () => {
							e.removeEventListener("scroll", t)
						}
					}, [n]), Object(a.useEffect)(() => {
						h(Boolean(c)), C(Boolean(m))
					}, [c, m]);
					const v = Object(a.useCallback)(e => {
							const t = n.current;
							if (!t || !e) return;
							let r = 0;
							r = e.offsetLeft + e.getBoundingClientRect().width - t.getBoundingClientRect().width / 2.85, t.scroll({
								left: r,
								behavior: "smooth"
							})
						}, [n]),
						f = Object(a.useCallback)(() => v(m), [v, m]),
						w = Object(a.useCallback)(() => v(c), [v, c]);
					return o.a.createElement("div", {
						className: Object(i.a)(rt.a.container),
						role: "region",
						"aria-label": "carousel"
					}, o.a.createElement("div", {
						className: Object(i.a)(rt.a.inner),
						ref: n
					}, a.Children.map(t, (e, t) => o.a.createElement("div", {
						className: Object(i.a)(rt.a.carouselItem),
						id: e.props.id,
						key: t,
						"data-position": t
					}, e))), o.a.createElement("div", {
						className: Object(i.a)(rt.a.arrowButtonContainer, rt.a.leftArrowContainer, {
							[rt.a.nightMode]: l,
							[rt.a.arrowVisible]: p
						})
					}, o.a.createElement("button", {
						className: rt.a.arrowButton,
						onClick: w,
						"aria-label": r.fbt._("previous items", null, {
							hk: "44uTrz"
						})
					}, o.a.createElement(je.a, {
						className: rt.a.arrowIcon,
						name: ke.a.caret_left
					}))), o.a.createElement("div", {
						className: Object(i.a)(rt.a.arrowButtonContainer, rt.a.rightArrowContainer, {
							[rt.a.nightMode]: l,
							[rt.a.arrowVisible]: b
						})
					}, o.a.createElement("button", {
						className: rt.a.arrowButton,
						onClick: f,
						"aria-label": r.fbt._("next items", null, {
							hk: "4EEfgp"
						})
					}, o.a.createElement(je.a, {
						className: rt.a.arrowIcon,
						name: ke.a.caret_right
					}))))
				},
				ot = n("./src/reddit/pages/HappeningNow/index.m.less"),
				st = n.n(ot);
			const it = {
					[v.t.Unknown]: "",
					[v.t.Popular]: r.fbt._("Popular", null, {
						hk: "2pUvlx"
					}),
					[v.t.Recommended]: r.fbt._("For you", null, {
						hk: "19HGNV"
					})
				},
				lt = (e, t) => `${e}--${t}`,
				ct = e => {
					let {
						addTopMargin: t
					} = e;
					return o.a.createElement("aside", {
						className: Object(i.a)(st.a.column, st.a.rightRail, {
							[st.a.withTopMargin]: t
						})
					}, o.a.createElement(Xe, null), o.a.createElement($e, null))
				},
				dt = () => {
					const e = Object(s.e)(S.b),
						t = Object(s.e)(S.c),
						n = t.length >= 2;
					return !e.length && !t.length ? o.a.createElement("div", {
						className: st.a.twoColumnLayout
					}, o.a.createElement("div", {
						className: st.a.column
					}, o.a.createElement(A, {
						className: st.a.emptyState
					})), o.a.createElement(ct, null)) : o.a.createElement(o.a.Fragment, null, n && o.a.createElement("div", {
						className: st.a.outer
					}, o.a.createElement("h1", {
						className: st.a.header
					}, it[v.t.Popular]), o.a.createElement(at, null, e.map(e => o.a.createElement(Ve, {
						key: e,
						postId: e,
						showVotes: !1,
						showBodyContent: !1,
						titleLineCount: 2,
						itemKey: lt(v.t.Popular, e)
					})))), o.a.createElement("div", {
						className: st.a.twoColumnLayout
					}, o.a.createElement("div", {
						className: Object(i.a)(st.a.column, st.a.content)
					}, !!t.length && o.a.createElement(Ge, {
						title: it[v.t.Recommended]
					}, t.map(e => o.a.createElement(Ve, {
						key: e,
						postId: e,
						itemKey: lt(v.t.Recommended, e)
					}))), !!e.length && !n && o.a.createElement(Ge, {
						title: it[v.t.Popular]
					}, e.map(e => o.a.createElement(Ve, {
						key: e,
						postId: e,
						itemKey: lt(v.t.Popular, e)
					})))), o.a.createElement(ct, {
						addTopMargin: !0
					})))
				};
			t.default = e => {
				const t = Object(s.d)(),
					n = Object(N.a)(),
					r = Object(s.e)(tt.a),
					i = Object(s.e)(S.a);
				return Object(a.useEffect)(() => {
					t((() => async (e, t, n) => {
						let {
							gqlContext: r
						} = n;
						e(g());
						try {
							const t = await w(r());
							e(x(t))
						} catch (a) {
							e(_(a))
						}
					})()), t(Object(E.q)())
				}, [t]), Object(a.useEffect)(() => {
					n(j.f)
				}, [n]), r ? o.a.createElement("div", {
					className: st.a.main
				}, o.a.createElement("div", {
					className: st.a.container
				}, i && o.a.createElement(o.a.Fragment, null, o.a.createElement(I, {
					className: st.a.filters
				}), o.a.createElement(dt, null)))) : o.a.createElement(et.b, null)
			}
		},
		"./src/redditGQL/operations/FetchLiveDiscoveryContent.json": function(e) {
			e.exports = JSON.parse('{"id":"f33b3c9cb73a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HappeningNow.5cb1173194dba5cbd8ad.js.map