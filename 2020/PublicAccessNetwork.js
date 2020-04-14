// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.8c8a61a06625b6d353ed.js
// Retrieved at 4/14/2020, 2:30:08 PM by Reddit Dataminer v1.0.0
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
					var n, a = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						l = /CrOS/.test(t),
						d = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !a && !d && /macintosh/i.test(t),
						g = !o && !m && !u && !p && /linux/i.test(t),
						w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						S = s(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						f = !C && /[^-]mobi/i.test(t),
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
					} : o ? n = {
						name: "Android",
						version: S
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, S && (n.version = S)) : a ? (n = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, S && (n.version = S)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || S
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && S && (n.version = S)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && a ? (n[a] = e, n.ios = e, n.osname = "iOS") : v ? (n.mac = e, n.osname = "macOS") : _ ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var E = "";
					n.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (n.osversion = E);
					var O = !n.windows && E.split(".")[0];
					return C || c || "ipad" == a || o && (3 == O || O >= 4 && !f) || n.silk ? n.tablet = e : (f || "iphone" == a || "ipod" == a || o || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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

				function a(e) {
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

				function o(e, r, n) {
					var o = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (o = t(n));
					var i = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return a([i, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = a, s.check = function(e, t, s) {
					return !o(e, t, s)
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
				const a = Object(n.e)(e),
					o = encodeURIComponent("".concat(t).concat(a));
				return "".concat(r.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(o)
			}
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
			var r = s("./node_modules/uuid/v4.js"),
				n = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(a.a)(o.A),
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
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.div("Wrapper", p.a), v = i.a.span("Copy", p.a), g = i.a.wrapped(d.g, "SignupLink", p.a), w = i.a.wrapped(d.j, "LoginLink", p.a);
			t.a = Object(l.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: r,
					openLoginModal: i,
					openRegisterModal: l,
					origin: d,
					sendEvent: u
				} = e;
				return n.a.createElement(b, {
					className: Object(a.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, n.a.createElement(v, {
					className: Object(a.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), n.a.createElement(w, {
					href: Object(c.a)(r, d, "/login"),
					onClick: e => {
						Object(o.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), n.a.createElement(g, {
					className: Object(a.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(r, d, "/register"),
					onClick: e => {
						Object(o.a)(e) && (e.preventDefault(), e.stopPropagation(), l(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("sign up", null, {
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
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				l = s.n(c);
			const d = o.a.div("LoaderWrapper", l.a),
				m = o.a.div("Icon", l.a),
				u = o.a.div("Byline", l.a),
				p = Object(a.a)({
					ErrorComponent: () => n.a.createElement(d, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : n.a.createElement(d, null, n.a.createElement(m, null), n.a.createElement(u, null))
					}
				});
			t.a = e => n.a.createElement(p, e)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const a = Object(r.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = a
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				S = Object(m.a)(w),
				C = l.a.button("MenuButton", g.a),
				f = l.a.wrapped(h.a, "MenuIcon", g.a),
				_ = l.a.wrapped(p.b, "DropdownRow", g.a),
				E = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				O = Object(o.b)(E, (e, t) => {
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
			t.b = O(e => a.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: x(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : a.a.createElement(f, null), a.a.createElement(S, {
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
		"./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less": function(e, t, s) {
			e.exports = {
				meterOverlay: "_1SwzjHTHbv5YOLDvhibz5f",
				meterBar: "_1zcQixpm0ZSqRv7OqTXGUd",
				meterFillContainer: "_9zQwERCzRAc-wW9OUVogP",
				meterLine: "_2qeGEBmsp5Bc0SoQR3svzZ",
				baseMeter: "_3OOJznqLdq-PWJnDn-Bysj",
				fillMeterDonation: "_3tuPkSVbNCYM9KW2NcRjK3",
				flash: "_9EXOHmx8fxf-sQrh5UaxQ",
				fillMeterCritical: "_2y0uwouvZZzHtFXZSFuG7v",
				fillMeterLow: "_25Roektb1FL-TmyMwZRUEj",
				fillMeterNormal: "_3lQlVfIax8Me0nElY86hqX",
				fillMeterExtended: "_3XCpeg8p6M12ng0YdMjY1b",
				swoosh: "_2MVhzz9lsn7G8yTO4cNMbT",
				labelMeter: "_2c-DUIBBxLTj5vSjSJWHY1",
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
				donationButton: "_3W1aiCMFqNT1IUSxjsBnPx"
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
				promptButtonSet: "_2-JNYG0bcwDm13ZkpVuW99",
				donationPromptWrapper: "_2aF64OS64kPzJEVCdrSwRH",
				donationPromptLabel: "_3WLIjv5g9CNTuNe9D9EQ2_"
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
				meterCritical1: "_33lIXf_s9A4JPkIMIS37ty",
				meterCritical2: "_3MF2WGl4nQKvhudAkJ06Ur",
				meterCritical3: "_3sTEOXAib6E9_ghny4LEgd",
				meterCritical4: "_1_eskfWPVfo6EjnOdhECLf",
				meterCritical5: "_1OiZd03UgYq-_S8_g7Gu2v",
				meterCritical6: "_3wpTfJjCtqkYxMD87ot89F",
				meterCritical7: "yZjAts3acPDhKlUo5CPxo",
				meterCritical8: "_1woCyuSX_CEnqxlsrTTIZZ",
				meterCritical9: "_2p6DsMn9olNzIGCuJVSfSU",
				meterCritical10: "_1DtSizPrgyuKf8w6idU9cz",
				meterCritical11: "_2hDfwU_xoHPb1Hw9hp5I7c",
				meterCritical12: "_1Fc9BEmV6Ri4hkZ7LlkZP0",
				meterCritical13: "_2V1EDhtgsfUBykTUwWltuD",
				meterCritical14: "_17LLOMz6lSiBdY0qbbMb63",
				meterCritical15: "_2k71HlhH6AfDJ2AzVLWgCv",
				meterCritical16: "_3dph9vuUvnG5skLP14S0GG",
				meterCritical17: "_3FqdNZ_7xubt4ixghq3aeF",
				meterCritical18: "_2chw41WsTN9LKsXrBT9iPT",
				meterCritical19: "_1T-LWT5xcYwlalnFO9-yY6",
				meterCritical20: "_2WMEtQrqSX1GMTuAZi7BJF",
				meterCritical21: "_1VmL2Ryy9UPp1Q78mmeeb7",
				meterCritical22: "_3zs8HvYLr498tytgGHmp-N",
				meterCritical23: "_3v1EQt5UhvBEbd5VrEImL8",
				meterCritical24: "_3PQ0oDPSdkVBUh0bAxrztV",
				meterCritical25: "_1OYvrKMkqHjeHKaVLyLnKo",
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
				closeIcon: "UP3tR535P7cIknrcrCxQ3",
				meterCritical1: "_33O18kNtVsSPwnnMT3E1WM",
				meterCritical2: "_1YoHMdF_NQzf-K2VH4MysY",
				meterCritical3: "XEmbgJKiFW3gYKPgSO4FR",
				meterCritical4: "_1x62cBa_N8AGqAZORHlsqk",
				meterCritical5: "_2cKsfZbL-QBGOpAkqtFEn5",
				meterCritical6: "_3Zl28ytxKRvmcPMFnwxy2P",
				meterCritical7: "_25L7CZ3kUgee-Qi8AvmG1G",
				meterCritical8: "_1DCU4Qfkn3wAiPWzquCJWm",
				meterCritical9: "RWoJhEyN-p92o2IPGG2kn",
				meterCritical10: "_3itUJfgWxcRexhqqqxQinF",
				meterCritical11: "_1JWPxTE933fwUlHaRO9lMY",
				meterCritical12: "_2BJMzNY1a0RLMqTwgI_4NS",
				meterCritical13: "_1kzUn5Vfwi_SjSQIiFF2kH",
				meterCritical14: "_1J7a7hG3KKH131gLxRsUAg",
				meterCritical15: "_1CXuZv_UX57bpzdZSppAAc",
				meterCritical16: "_19W-qXX5AytHyHRGFDh3sN",
				meterCritical17: "_1qzkkuLzY9QEsdUlt7QA9M",
				meterCritical18: "_3u5r_n5to49UogZ5oRpldk",
				meterCritical19: "_1tbmC0oejKi0gQiaFnSFRC",
				meterCritical20: "_1Aq5PPETX3z41ibCky1_aX",
				meterCritical21: "_1r2L59WIYPetlAS4U1G0eo",
				meterCritical22: "_3ij5Aj78afQU3btE4WahUL",
				meterCritical23: "_178hNxyjDiucZZ3so9v8G5",
				meterCritical24: "_2MBF_mis3_b_i9gnpC-8KJ",
				meterCritical25: "_1lbVWroPmh0V7xuLGV4p2L"
			}
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const a = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: o
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
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
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
			class w extends o.a.Component {
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
					return e.href ? o.a.createElement(c.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: p.a.dropdownTriangle
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
				return o.a.createElement(w, v({
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
				a = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(a);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "k", (function() {
				return d
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return h
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
			const a = (e, t) => {
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
				o = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				i = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, a(e)),
				c = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, a(e)),
				l = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, a(s, e)),
				d = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, o(t), e && Object.assign({}, a(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, o(t), a(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, o(t), a(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, o(t), a(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, o(t), a(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, o(t), a(t, e)),
				v = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, o(t), a(t, e)),
				g = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, a(t, s))
				},
				w = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, a(t, s))
				},
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, a(s, t))
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(a.b)("dropdownTriangle"), " ").concat(e.className)
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(a.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("share"), c.a.shareIcon, e.className)
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
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx"),
				b = s("./src/lib/loadWithRetries/index.ts");
			var v = Object(h.a)({
					getComponent: () => Object(b.a)(() => s.e("RpanOnboardingModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./node_modules/lodash/throttle.js"),
				S = s.n(w);
			var C = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				f = s("./src/lib/focusVisible/index.js"),
				_ = s("./src/reddit/actions/media.ts"),
				E = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				O = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				x = s("./src/lib/makeActionCreator/index.ts");
			const k = Object(x.a)(O.D),
				y = Object(x.a)(O.X),
				N = e => async t => {
					t(k(e))
				}, P = Object(x.a)(O.N), I = Object(x.a)(O.T);
			var L, j = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				M = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				T = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				V = s("./src/reddit/actions/reportFlow.ts"),
				A = s("./src/reddit/components/HlsVideo/index.tsx"),
				R = s("./src/reddit/components/ReportFlow/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/history.ts"),
				F = s("./src/reddit/constants/keycodes.ts"),
				U = s("./src/reddit/helpers/dom/index.ts"),
				W = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				H = s("./src/reddit/helpers/trackers/rpan.ts"),
				G = s("./src/reddit/helpers/trackers/screenview.ts"),
				X = s("./src/reddit/icons/svgs/Close/index.tsx"),
				z = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				J = s("./src/reddit/selectors/media.ts"),
				K = s("./src/reddit/selectors/platform.ts"),
				q = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				Y = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				Q = s("./src/config.ts"),
				Z = s("./src/reddit/actions/gold/modals.ts"),
				$ = s("./src/reddit/actions/post.ts"),
				ee = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				te = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				se = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			! function(e) {
				e[e.DONATION = 0] = "DONATION", e[e.CRITICAL = 1] = "CRITICAL", e[e.LOW = 2] = "LOW", e[e.NORMAL = 3] = "NORMAL", e[e.EXTENDED = 4] = "EXTENDED"
			}(L || (L = {}));
			const re = 5,
				ne = 25,
				ae = [100, 75, 50, ne, 10, re],
				oe = e => {
					if (!e || !e.meter) return;
					const t = 100 * e.meter.proportion_full;
					return t > 100 ? L.EXTENDED : t > ne ? L.NORMAL : t > 10 ? L.LOW : t > re ? L.CRITICAL : L.DONATION
				};
			var ie = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				ce = s.n(ie);
			class le extends a.PureComponent {
				render() {
					return o.a.createElement("div", this.props)
				}
			}
			var de = le;
			const me = ["Sm", "Lg"],
				ue = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push("Delay".concat(t));
					return e
				})(),
				pe = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push("X".concat(5 * t));
					return e
				})(),
				he = ["15Deg", "45Deg", "75Deg"],
				be = e => e[Math.floor(Math.random() * e.length)],
				ve = () => {
					const e = [be(me), be(pe), be(he), be(ue)].map(e => ce.a["particle".concat(e)]).join(" ");
					return "".concat(ce.a.particle, " ").concat(e, " ").concat(Math.round(Math.random()) ? ce.a.particleReverse : "")
				};
			class ge extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < Math.round(this.props.meterValue); t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						className: ce.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: ve()
					})
				}
			}
			var we = ge;
			class Se extends a.Component {
				constructor() {
					super(...arguments), this.state = {
						increasePercent: null,
						firstStreamRender: !0
					}
				}
				componentDidUpdate(e) {
					if (e.currentStream && e.currentStream.meter && this.props.currentStream && this.props.currentStream.meter && e.currentStream.post.id === this.props.currentStream.post.id) {
						const t = e.currentStream.meter.proportion_full,
							s = this.props.currentStream.meter.proportion_full - t,
							r = Math.round(100 * s);
						s > 0 ? this.setState({
							increasePercent: r,
							firstStreamRender: !1
						}) : s < 0 && this.state.increasePercent ? this.setState({
							increasePercent: null,
							firstStreamRender: !1
						}) : 0 !== s && this.state.firstStreamRender && this.setState({
							firstStreamRender: !1
						})
					} else {
						const e = {};
						this.state.increasePercent && (e.increasePercent = null), this.props.currentStream && this.props.currentStream.meter && !this.state.firstStreamRender && (e.firstStreamRender = !0), (e.increasePercent || e.firstStreamRender) && this.setState(e)
					}
				}
				render() {
					const {
						currentStream: e
					} = this.props, {
						increasePercent: t,
						firstStreamRender: s
					} = this.state;
					if (!e || !e.meter) return null;
					const r = 100 * e.meter.proportion_full,
						n = Math.min(r, 100),
						a = Math.round(n),
						i = oe(e),
						c = ae.indexOf(Math.round(r)) > -1,
						l = t ? "Time +".concat(t, "%") : c || s ? "".concat(a, "% Time") : null;
					return o.a.createElement("div", {
						className: ce.a.meterOverlay
					}, o.a.createElement("div", {
						className: ce.a.meterBar
					}, o.a.createElement("div", {
						className: Object(d.a)(ce.a.meterLine, ce.a.baseMeter)
					}), o.a.createElement("div", {
						className: ce.a.meterFillContainer,
						style: {
							width: "".concat(n, "%")
						}
					}, t && o.a.createElement(we, {
						meterValue: n
					}), o.a.createElement(de, {
						className: Object(d.a)(ce.a.meterLine, {
							[ce.a.fillMeterDonation]: i === L.DONATION,
							[ce.a.fillMeterCritical]: i === L.CRITICAL,
							[ce.a.fillMeterLow]: i === L.LOW,
							[ce.a.fillMeterNormal]: i === L.NORMAL,
							[ce.a.fillMeterExtended]: i === L.EXTENDED
						})
					})), l && o.a.createElement("div", {
						className: ce.a.labelMeter
					}, l)))
				}
			}
			var Ce = Se,
				fe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				_e = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ee = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Oe = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				xe = s.n(Oe);
			const {
				fbt: ke
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ye = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: r,
						subreddits: n
					} = e;
					return o.a.createElement(fe.b, {
						className: xe.a.overflowMenu,
						dropdownClassName: xe.a.dropdown,
						defaultButtonOutline: !0,
						disabled: n.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: o.a.createElement("div", {
							className: xe.a.overflowMenuIcon
						}, t, o.a.createElement(Ee.a, {
							className: xe.a.dropdownTriangle
						})),
						onClick: r
					}, o.a.createElement("div", {
						className: xe.a.dropdownLabel
					}, ke._("Pick a Community", null, {
						hk: "8MoVj"
					})), n.map(e => o.a.createElement(_e.b, {
						className: xe.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: xe.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				Ne = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				Pe = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				Ie = s.n(Pe);
			class Le extends a.Component {
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
						isMuted: r,
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
					return o.a.createElement(Ne.a, {
						className: Object(d.a)(e, Ie.a.scrubberBar, {
							[Ie.a.visible]: a
						}),
						currentTime: h || 0,
						hasAudio: !0,
						hideControlBar: !!t,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: s,
						isMuted: r,
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
			var je = Le,
				Me = s("./node_modules/lodash/debounce.js"),
				Te = s.n(Me),
				Ve = s("./src/lib/prettyPrintNumber/index.ts"),
				Ae = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				Re = s("./src/reddit/models/Vote/index.ts"),
				De = s("./src/reddit/selectors/user.ts");
			Object(x.a)(O.C);
			const Be = (e, t) => async (s, r, n) => {
				let {
					apiContext: a
				} = n;
				const o = r();
				if (Object(De.G)(o))
					if (Object(z.c)(o)) await Object(Ae.g)(a(), e, t);
					else {
						await Object(p.d)(e);
						const s = Object(q.k)(r(), e);
						null !== s.post.voteState && Object(Re.e)(s.post.voteState) === t || await Object(Ae.g)(a(), e, t)
					}
				else s(Object(u.e)())
			};
			var Fe = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				We = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				He = s.n(We);
			const Ge = Object(l.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(q.k)(e, s)
				}
			});
			class Xe extends o.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Re.a.upvoted), this.downVotes = () => this.calculateVotes(Re.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Re.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Re.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = Te()(() => this.vote(Re.a.upvoted), O.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = Te()(() => this.vote(Re.a.downvoted), O.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Re.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign({}, this.state, {
						displayedVoteState: Object(Re.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign({}, this.state, {
						displayedVoteState: null !== t.post.voteState ? Object(Re.e)(t.post.voteState) : Re.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return o.a.createElement("div", {
						className: He.a.statsPanel
					}, o.a.createElement("div", {
						className: He.a.voteContainer
					}, o.a.createElement("button", {
						className: Object(d.a)(He.a.upButton, {
							[He.a.activeVote]: this.isVoteActive(Re.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": g.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, o.a.createElement(Ue.a, {
						className: He.a.voteIcon
					})), o.a.createElement("p", {
						className: He.a.votesCounter
					}, Object(Ve.b)(this.upVotes()))), o.a.createElement("div", {
						className: He.a.watchingContainer
					}, o.a.createElement("div", {
						className: He.a.watchingCounter
					}, Object(Ve.b)(t)), o.a.createElement("p", {
						className: He.a.watchingCaption
					}, this.props.isLive ? g.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : g.fbt._("Views", null, {
						hk: "ixhZU"
					}))), o.a.createElement("div", {
						className: He.a.voteContainer
					}, o.a.createElement("button", {
						className: Object(d.a)(He.a.downButton, {
							[He.a.activeVote]: this.isVoteActive(Re.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": g.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, o.a.createElement(Fe.a, {
						className: He.a.voteIcon
					})), o.a.createElement("p", {
						className: He.a.votesCounter
					}, Object(Ve.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Re.a.notVoted), void this.setState(Object.assign({}, this.state, {
							displayedVoteState: Re.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign({}, this.state, {
							displayedVoteState: e
						})), e === Re.a.upvoted ? this.props.sendEvent(Object(H.g)(t)) : this.props.sendEvent(Object(H.d)(t))
					}
				}
			}
			var ze = Object(i.b)(Ge, (e, t) => ({
					vote: (t, s) => e(Be(t, s))
				}))(Xe),
				Je = s("./src/lib/lessComponent.tsx"),
				Ke = s("./src/lib/opener/index.ts"),
				qe = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Ye = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Qe = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Ze = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				$e = s("./src/reddit/icons/svgs/Report/index.tsx"),
				et = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				tt = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				st = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				rt = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				nt = s.n(rt);
			var at = e => o.a.createElement("svg", {
					className: Object(d.a)(nt.a.icon, e.className),
					viewBox: "0 0 64 64",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "30.72",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "2.4576"
				}), o.a.createElement("path", {
					fill: "#fff",
					d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
				}))),
				ot = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				it = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				ct = s.n(it);
			const lt = e => {
					let {
						onClick: t
					} = e;
					return o.a.createElement("button", {
						className: ct.a.shareButton,
						onClick: t,
						"aria-label": g.fbt._("share video", null, {
							hk: "2e71ai"
						}),
						value: "share"
					}, o.a.createElement(Ye.a, {
						className: ct.a.menuIcon
					}))
				},
				dt = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return o.a.createElement("button", {
						className: ct.a.muteButton,
						onClick: s,
						"aria-label": g.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? o.a.createElement(tt.a, {
						className: ct.a.volumeIcon
					}) : o.a.createElement(ot.a, {
						className: ct.a.volumeIcon
					}))
				},
				mt = Je.a.wrapped(qe.a, "menuIcon", ct.a),
				ut = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: r
					} = e;
					return o.a.createElement(fe.b, {
						className: ct.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: o.a.createElement(mt, null),
						onClick: t
					}, o.a.createElement(_e.b, {
						className: ct.a.overflowItem,
						displayText: g.fbt._("View rules", null, {
							hk: "4lTvzy"
						}),
						iconWrapperClassName: ct.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Ke.d)(O.Q, Ke.c.BLANK)
					}, o.a.createElement(et.a, {
						className: ct.a.overflowItemIcon
					})), o.a.createElement(_e.b, {
						className: ct.a.overflowItem,
						displayText: g.fbt._("Visit RPAN community", null, {
							hk: "3KZliI"
						}),
						iconWrapperClassName: ct.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Ke.d)(O.O, Ke.c.BLANK)
					}, o.a.createElement(Ze.a, {
						className: ct.a.overflowItemIcon
					})), o.a.createElement(_e.b, {
						className: ct.a.overflowItem,
						displayText: g.fbt._("Report", null, {
							hk: "1TxhL9"
						}),
						iconWrapperClassName: ct.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: r
					}, o.a.createElement($e.a, {
						className: ct.a.overflowItemIcon
					})), o.a.createElement(_e.b, {
						className: ct.a.overflowItem,
						displayText: g.fbt._("Hide", null, {
							hk: "1qXTIB"
						}),
						iconWrapperClassName: ct.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, o.a.createElement(Qe.a, {
						className: ct.a.overflowItemIcon
					})))
				},
				pt = e => {
					let {
						onClick: t
					} = e;
					return o.a.createElement("button", {
						className: ct.a.promptButton,
						onClick: t
					}, o.a.createElement(st.a, null), o.a.createElement("span", null, g.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				ht = e => {
					let {
						onClick: t
					} = e;
					return o.a.createElement("button", {
						className: ct.a.promptButton,
						onClick: t
					}, o.a.createElement(at, null), o.a.createElement("span", null, g.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				},
				bt = e => {
					let {
						onClick: t
					} = e;
					return o.a.createElement("button", {
						className: "".concat(ct.a.promptButton, " ").concat(ct.a.donationButton),
						onClick: t
					}, o.a.createElement("span", null, g.fbt._("Donate", null, {
						hk: "1Nb3xC"
					})))
				};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var vt = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				gt = s.n(vt);
			const {
				fbt: wt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), St = e => {
				let {
					live: t,
					subredditMenu: s
				} = e;
				return o.a.createElement("div", {
					className: gt.a.broadcastStatus
				}, t ? o.a.createElement(Ct, {
					subredditMenu: s
				}) : o.a.createElement(ft, {
					subredditMenu: s
				}))
			}, Ct = e => {
				let {
					subredditMenu: t
				} = e;
				return wt._("{=Live} on {subreddit}", [wt._param("=Live", o.a.createElement("span", {
					className: gt.a.live
				}, wt._("Live", null, {
					hk: "2OKwyD"
				}))), wt._param("subreddit", t)], {
					hk: "i1rjr"
				})
			}, ft = e => {
				let {
					subredditMenu: t
				} = e;
				return wt._("Recorded live on {subreddit}", [wt._param("subreddit", t)], {
					hk: "29Nv8k"
				})
			}, _t = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: r,
					subreddits: n
				} = e, a = "";
				a = "home" === s ? "All" : "r/popular" === s ? "r/popular" : r || "All";
				const i = n.filter(e => e.prefixedName !== a);
				return o.a.createElement(fe.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: o.a.createElement("span", {
						className: gt.a.subreddit
					}, r || "RPAN")
				}, o.a.createElement("div", {
					className: gt.a.dropdownLabel
				}, wt._("Pick a Community", null, {
					hk: "4AfDwd"
				})), i.map(e => o.a.createElement(_e.b, {
					className: gt.a.dropdownRow,
					displayText: e.prefixedName,
					key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
					onClick: () => t(e)
				})))
			}, Et = e => {
				let {
					text: t
				} = e;
				return o.a.createElement("h1", {
					className: gt.a.title
				}, t)
			}, Ot = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return o.a.createElement("div", {
					className: gt.a.watchersCount
				}, s ? o.a.createElement(xt, {
					count: Math.max(1, t.continuous_watchers)
				}) : o.a.createElement(kt, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, xt = e => {
				let {
					count: t
				} = e;
				return wt._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [wt._plural(t, "number of watchers", Object(Ve.b)(t, !0))], {
					hk: "3F0Nj0"
				})
			}, kt = e => {
				let {
					count: t
				} = e;
				return wt._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [wt._plural(t, "number of views", Object(Ve.b)(t, !0))], {
					hk: "tSTjT"
				})
			}, yt = e => {
				let {
					onClick: t
				} = e;
				return o.a.createElement("button", {
					className: gt.a.shareButton,
					onClick: t,
					"aria-label": wt._("Share video", null, {
						hk: "I91IP"
					}),
					value: "share"
				}, o.a.createElement(Ye.a, {
					className: gt.a.shareIcon
				}))
			}, Nt = Je.a.wrapped(qe.a, "menuIcon", gt.a), Pt = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: r
				} = e;
				return o.a.createElement(fe.b, {
					className: gt.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: "rpan-overlay-menu",
					icon: o.a.createElement(Nt, null),
					onClick: t
				}, o.a.createElement(_e.b, {
					className: gt.a.overflowItem,
					displayText: wt._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: gt.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-rules"),
					onClick: () => Object(Ke.d)(O.Q, Ke.c.BLANK)
				}, o.a.createElement(et.a, {
					className: gt.a.overflowItemIcon
				})), o.a.createElement(_e.b, {
					className: gt.a.overflowItem,
					displayText: wt._("Visit RPAN community", null, {
						hk: "1vVY6o"
					}),
					iconWrapperClassName: gt.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-community"),
					onClick: () => Object(Ke.d)(O.O, Ke.c.BLANK)
				}, o.a.createElement(Ze.a, {
					className: gt.a.overflowItemIcon
				})), o.a.createElement(_e.b, {
					className: gt.a.overflowItem,
					displayText: wt._("Report", null, {
						hk: "3ZxBjz"
					}),
					iconWrapperClassName: gt.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-report"),
					onClick: r
				}, o.a.createElement($e.a, {
					className: gt.a.overflowItemIcon
				})), o.a.createElement(_e.b, {
					className: gt.a.overflowItem,
					displayText: wt._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: gt.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-hide"),
					onClick: s
				}, o.a.createElement(Qe.a, {
					className: gt.a.overflowItemIcon
				})))
			}, It = Object(i.b)(null, e => ({
				vote: (t, s) => e(Be(t, s))
			}))(class extends a.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(Re.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(Re.a.downvoted);
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
					return null == e ? null : e - Object(Re.e)(t) + this.voteState
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
					const e = this.voteState === Re.a.upvoted,
						t = this.voteState === Re.a.downvoted;
					return o.a.createElement("div", {
						className: gt.a.votePanel
					}, o.a.createElement(Lt, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? o.a.createElement(Mt, {
						score: this.score
					}) : null, o.a.createElement(jt, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(Re.e)(t))
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
					return e === this.voteState ? Re.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						sendEvent: s
					} = this.props, {
						id: r
					} = t.post;
					this.setVoteState(r, e), this.props.vote(r, e), e === Re.a.upvoted ? s(Object(H.g)(t)) : e === Re.a.downvoted && s(Object(H.d)(t))
				}
			}), Lt = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return o.a.createElement("button", {
					className: Object(d.a)(gt.a.voteButton, gt.a.upVoteButton, {
						[gt.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": wt._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, o.a.createElement(Ue.a, {
					className: gt.a.voteIcon
				}))
			}, jt = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return o.a.createElement("button", {
					className: Object(d.a)(gt.a.voteButton, gt.a.downVoteButton, {
						[gt.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": wt._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, o.a.createElement(Fe.a, {
					className: gt.a.voteIcon
				}))
			}, Mt = e => {
				let {
					score: t
				} = e;
				return o.a.createElement("div", {
					className: gt.a.score
				}, Object(Ve.b)(t))
			}, Tt = e => {
				let {
					children: t
				} = e;
				return o.a.createElement("div", {
					className: gt.a.prompt
				}, t)
			}, Vt = () => o.a.createElement(Tt, null, wt._("Connection issues", null, {
				hk: "hIrnJ"
			})), At = () => o.a.createElement(Tt, null, wt._("Tuning...", null, {
				hk: "3dG7Ks"
			})), Rt = () => o.a.createElement(Tt, null, wt._("Broadcast paused", null, {
				hk: "jxvku"
			})), Dt = e => {
				let {
					onClickReplay: t,
					onClickShare: s
				} = e;
				return o.a.createElement(Tt, null, o.a.createElement("div", {
					className: gt.a.promptButtonSet
				}, o.a.createElement(pt, {
					onClick: t
				}), o.a.createElement(ht, {
					onClick: s
				})))
			}, Bt = e => {
				let {
					onClickDonate: t
				} = e;
				return o.a.createElement(Tt, null, o.a.createElement("div", {
					className: gt.a.donationPromptWrapper
				}, o.a.createElement("div", {
					className: gt.a.donationPromptLabel
				}, wt._("Donate to keep this broadcaster ON AIR", null, {
					hk: "1YjfGJ"
				})), o.a.createElement(bt, {
					onClick: t
				})))
			};
			var Ft = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Ut = s.n(Ft);
			const {
				fbt: Wt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ht = (e, t) => {
				let {
					currentStreamId: s
				} = t;
				return s ? Object(q.k)(e, s) : void 0
			}, Gt = Object(l.c)({
				currentStream: Ht,
				inStreamingSubredditIntegration: z.b,
				inStreamingUiRefreshViewer: z.c,
				inViewerFeedTheMeter: (e, t) => Object(z.d)(e, t, Ht),
				isApiError: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(se.d)(e, s)
				},
				isBatchApiError: se.f,
				isBatchPending: se.g,
				isConfigError: se.h,
				isIntroInProgress: Y.b,
				isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
				lastBatchApiRequestTs: se.j,
				recommendedViewerSubredditOptions: se.k
			});
			class Xt extends a.Component {
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
							settingChange: ee.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: ee.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ee.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === ee.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ee.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === ee.a.Volume && s && s.handleMouseUp(e), this.setState({
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
						t && (e("".concat(Q.a.redditUrl).concat(t.share_link)), s(), r(Object(H.f)(t)))
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
						onHide: a,
						onReport: i,
						onToggleMenu: c,
						sendEvent: l
					} = this.props;
					return o.a.createElement("div", {
						className: Object(d.a)(ct.a.overlay, {
							[ct.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !s && o.a.createElement("div", {
						className: ct.a.overlayTop
					}, t && this.renderRecommendedViewerSubreddit(), e && !n && o.a.createElement(o.a.Fragment, null, !t && this.renderTitleContainer(), o.a.createElement(lt, {
						onClick: this.onCopyLink
					}), o.a.createElement(ut, {
						onClick: c,
						onHideClick: a,
						onReportClick: i
					}))), t && e && !s && !n && o.a.createElement("div", {
						className: ct.a.overlayTitle
					}, this.renderTitleContainer()), o.a.createElement("div", {
						className: ct.a.overlayCenter
					}, this.getContent()), e && !s && !n && o.a.createElement("div", {
						className: ct.a.overlayBottom
					}, o.a.createElement(ze, {
						currentStreamId: e.post.id,
						isLive: r,
						sendEvent: l
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inViewerFeedTheMeter: t,
						isIntroInProgress: s,
						isLive: r,
						isUnavailable: n,
						onHide: a,
						onReport: i,
						onSelectSubreddit: c,
						onToggleMenu: l,
						recommendedViewerSubredditOptions: m,
						related: u,
						sendEvent: p,
						subreddit: h
					} = this.props;
					return s || !e || n ? null : o.a.createElement("div", {
						className: Object(d.a)(gt.a.overlay, {
							[gt.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, t && !this.isVisible() && o.a.createElement(Ce, {
						currentStream: e
					}), this.renderPrompt(), o.a.createElement("div", {
						className: gt.a.overlayTop
					}, o.a.createElement("div", {
						className: gt.a.overlayTopLeft
					}, o.a.createElement("div", {
						className: gt.a.meta
					}, o.a.createElement(St, {
						live: r,
						subredditMenu: o.a.createElement(_t, {
							onSelect: c,
							related: u,
							subreddit: h,
							subreddits: m
						})
					}), o.a.createElement(Et, {
						text: e.post.title
					}), o.a.createElement(Ot, {
						broadcast: e,
						live: r
					}))), o.a.createElement("div", {
						className: gt.a.overlayTopRight
					}, o.a.createElement(Pt, {
						onClick: l,
						onHideClick: a,
						onReportClick: i
					}), o.a.createElement(yt, {
						onClick: this.onCopyLink
					}), o.a.createElement("div", {
						className: Object(d.a)({
							[gt.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, o.a.createElement(It, {
						broadcast: e,
						sendEvent: p
					})))), o.a.createElement("div", {
						className: gt.a.overlayBottom,
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
						onVideoPositionUpdate: a,
						setVolume: i,
						toggleMute: c,
						videoCurrentTime: l,
						videoTotalTime: d,
						volume: m
					} = this.props, u = e ? gt.a.controls : "", p = e || this.isVisible();
					return o.a.createElement("div", {
						className: u
					}, o.a.createElement(je, {
						isLive: t,
						isMuted: s,
						isPaused: r,
						isVisible: p,
						onPlayPauseToggle: n,
						onVideoPositionUpdate: a,
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
						isApiError: r,
						isBatchApiError: n,
						isBatchPending: a,
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
					if (b || c && i || t && r || !t && n) return o.a.createElement(Vt, null);
					if (c) return o.a.createElement("div", {
						className: ct.a.intro
					}, o.a.createElement(dt, {
						isMuted: d,
						onToggle: g
					}));
					if (m || !t && !n && !a && p) return null;
					if (l) return o.a.createElement(At, null);
					if (e && e.stream.state === te.b.DISCONNECTED) return o.a.createElement(Rt, null);
					if (v) return o.a.createElement(Dt, {
						onClickReplay: h,
						onClickShare: this.onCopyLink
					});
					const w = e && e.meter && 100 * e.meter.proportion_full < re;
					return u && w ? o.a.createElement(Bt, {
						onClickDonate: s
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
						a = "";
					"home" === s ? (n = "All", a = "All") : "r/popular" === s ? (n = "Popular", a = "r/popular") : r ? (n = r.replace(/^r\//, ""), a = r) : (n = "All", a = "All");
					const i = t.filter(e => e.prefixedName !== a);
					return o.a.createElement("div", {
						className: ct.a.menuContainer
					}, o.a.createElement(ye, {
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
						className: ct.a.titleContainer
					}, o.a.createElement("h1", {
						className: ct.a.videoTitle
					}, e.post.title), !t && o.a.createElement("div", {
						className: ct.a.RecordedLabel
					}, Wt._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Ut.a.ControlVolume)) return !0;
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
						isConfigError: a,
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
					return p || i && a || t && s || !t && r ? o.a.createElement("div", {
						className: ct.a.prompt
					}, Wt._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? o.a.createElement("div", {
						className: ct.a.intro
					}, o.a.createElement(dt, {
						isMuted: l,
						onToggle: b
					})) : d || !t && !r && !n && m ? null : c ? o.a.createElement("div", {
						className: ct.a.prompt
					}, Wt._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === te.b.DISCONNECTED ? o.a.createElement("div", {
						className: ct.a.prompt
					}, Wt._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? o.a.createElement("div", {
						className: ct.a.prompt
					}, o.a.createElement("div", {
						className: ct.a.promptButtonSet
					}, o.a.createElement(pt, {
						onClick: u
					}), o.a.createElement(ht, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var zt = Object(i.b)(Gt, (e, t) => ({
				copyLink: t => e(Object($.D)(t)),
				onHide: () => {
					t.currentStreamId && (e(Object($.X)(t.currentStreamId, !0, !0, !0)), e(N(t.currentStreamId)))
				},
				handleGiveAward: () => {
					t.currentStreamId && e(Object(Z.d)(t.currentStreamId))
				}
			}))(Xt);
			Object(x.a)(O.r);
			const Jt = Object(x.a)(O.z),
				Kt = (e, t) => async (s, r) => {
					const n = r(),
						a = Date.now(),
						o = e.map(e => Object(q.k)(n, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(a),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await qt(o, t)
				}, qt = (e, t) => Promise.all(e.map(e => Yt(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), Yt = e => new Promise((t, s) => {
					const r = new Image;
					r.onload = () => t(), r.onerror = () => s(), r.src = e
				}).then(() => !0, () => !1);
			var Qt = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				Zt = s.n(Qt);
			const $t = Object(l.c)({
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
			class es extends a.Component {
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
					} = this.props, a = [];
					t && this.isStreamChanged(t, e.currentStream) && a.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && a.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && a.push(s.post.id), a.length > 0 && r(a)
				}
				render() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						previewUrl: s
					} = this.props, r = e && e.meter && 100 * e.meter.proportion_full < ne || !s, n = !r && !t && s;
					return o.a.createElement("div", {
						className: Zt.a.staticContainer
					}, r && o.a.createElement("div", {
						className: Zt.a.tvNoise,
						"aria-label": g.fbt._("video static", null, {
							hk: "3FA8fk"
						})
					}), n && o.a.createElement("div", {
						className: Zt.a.previewContainer,
						"aria-label": g.fbt._("preview of video", null, {
							hk: "4piisq"
						}),
						style: {
							backgroundImage: "url(".concat(s, ")")
						}
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var ts = Object(i.b)($t, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, r) => {
						const n = await s(Kt(e, t));
						s(Jt(n))
					})(t))
				}))(es),
				ss = s("./src/lib/constants/index.ts"),
				rs = s("./src/lib/makeCommentsPageKey/index.ts"),
				ns = s("./src/lib/makeDraftKey/index.ts"),
				as = s("./src/reddit/actions/page.ts"),
				os = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				is = s("./src/reddit/components/CommentsChat/Loader.ts"),
				cs = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				ls = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				ds = s("./src/reddit/components/GildModal/Loader.tsx"),
				ms = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/models/Gold/Award.ts")),
				us = s("./src/reddit/selectors/posts.ts"),
				ps = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				hs = s.n(ps);
			const bs = Object(i.b)(() => Object(l.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(us.N)(e, {
							postId: s
						})
					}
				})),
				vs = ["Center", "Left", "Right"],
				gs = ["Low", "Mid", "High"],
				ws = () => Math.floor(800 * Math.random()),
				Ss = e => e[Math.floor(Math.random() * e.length)],
				Cs = e => {
					const t = Ss(vs),
						s = Ss(gs),
						r = e < ms.j.coinPrice ? "Silver" : e < ms.k.coinPrice ? "Gold" : "Platinum";
					return hs.a["award".concat(r, "Tier").concat(s).concat(t)]
				};
			class fs extends a.Component {
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
								coinPrice: a
							} = e[s];
							return {
								coinPrice: a,
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
						for (let a = 0; a < s; a++) {
							const s = "".concat(ws(), "ms"),
								i = Cs(t),
								c = o.a.createElement("img", {
									key: "".concat(e.id, "-").concat(a),
									className: Object(d.a)(hs.a.award, i),
									src: n,
									style: {
										animationDelay: s
									}
								});
							r.push(c)
						}
					}), o.a.createElement("div", {
						"aria-role": "presentation",
						className: hs.a.awardBubbler
					}, r)
				}
			}
			var _s = bs(fs),
				Es = s("./src/reddit/models/PostDraft/index.ts"),
				Os = s("./src/reddit/selectors/gild.ts"),
				xs = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				ks = s.n(xs);
			const ys = Object(l.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const r = Object(ls.b)(s);
					return Object(Os.c)(e, r)
				},
				isDisabled: (e, t) => Object(q.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: De.G,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(us.N)(e, {
						postId: s
					})
				},
				language: De.O
			});
			class Ns extends a.Component {
				constructor(e) {
					super(e), this.onChatClick = () => {
						this.props.sendEvent(Object(H.c)(this.props.postId))
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
						language: a,
						location: i,
						openLoginModal: c,
						openRegisterModal: l,
						sendEvent: m,
						subredditId: u
					} = this.props, p = Object(rs.a)(e), h = Object(ns.a)(Es.c.replyToPost, e);
					return s ? o.a.createElement("div", {
						className: Object(d.a)(ks.a.streamingChat, ks.a.prompt)
					}, g.fbt._("Chat has been disabled", null, {
						hk: "3139v6"
					})) : n ? o.a.createElement("div", {
						"aria-label": g.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: ks.a.streamingChat,
						onClick: this.onChatClick
					}, o.a.createElement(is.a, {
						className: ks.a.chatScroller,
						emptyStateClassName: ks.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: u,
						commentsPageKey: p
					}), r && o.a.createElement(cs.a, {
						key: "chatCommentsForm",
						language: a,
						postId: e,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: m,
						isLivestreaming: !0
					}), o.a.createElement(_s, {
						postId: e
					}), !r && o.a.createElement(os.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						language: a,
						location: i,
						openLoginModal: c,
						openRegisterModal: l,
						origin
					}), t && o.a.createElement(ds.a, null)) : o.a.createElement("div", {
						className: Object(d.a)(ks.a.streamingChat, ks.a.prompt)
					}, g.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Ps = Object(i.b)(ys, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(as.q)(s, void 0, {
							sort: ss.r.CHAT
						}, ss.r.CHAT)),
						openLoginModal: () => e(Object(u.e)()),
						openRegisterModal: () => e(Object(u.f)())
					}
				})(Ns),
				Is = e => o.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				Ls = e => o.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				js = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Ms = s.n(js);
			const Ts = e => {
				let {
					isNext: t,
					onClick: s,
					stream: r
				} = e;
				return o.a.createElement("div", {
					className: Object(d.a)(Ms.a.switchContainer, t ? Ms.a.switchContainerNext : Ms.a.switchContainerPrevious)
				}, o.a.createElement("button", {
					className: Ms.a.switchButton,
					disabled: !r,
					onClick: s,
					"aria-label": t ? g.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : g.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, o.a.createElement("div", {
					className: Ms.a.streamThumbnail,
					style: r ? {
						backgroundImage: "url(".concat(r.stream.thumbnail, ")")
					} : {}
				}), t ? o.a.createElement(Ls, {
					className: Ms.a.arrowIcon
				}) : o.a.createElement(Is, {
					className: Ms.a.arrowIcon
				})))
			};
			var Vs = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(Ts, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), o.a.createElement(Ts, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				As = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				Rs = s.n(As);
			const Ds = Object(l.c)({
					currentStream: q.c,
					currentStreamStartTime: q.d,
					currentHlsUrl: q.b,
					inStreamingSubredditIntegration: z.b,
					inViewerFeedTheMeter: (e, t) => Object(z.d)(e, t, q.c),
					isIntroInProgress: Y.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isOverlayOpen: K.h,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(W.g)(s || "")
					},
					lastChatActivityUtcTs: Y.c,
					nextStream: q.f,
					nextTopStream: q.g,
					playbackState: q.h,
					previousStream: q.j,
					volume: J.b
				}),
				Bs = Object(i.b)(Ds, (e, t) => ({
					closeLocation: () => e(Object(c.b)(t.location.state[B.a.CloseLocation])),
					fetchPostForStream: t => e(Object(E.a)(t)),
					subscribeConfig: () => e(j.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(j.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(j.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: t => e(Object(V.j)(t, void 0, !0)),
					onStatsSubscribe: t => e(j.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(j.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(p.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(p.b)(t)),
					removeStreamFromHistory: t => e(N(t)),
					setNewCorrelationId: () => e(Object(M.b)()),
					setIntroFinishedStatus: t => e(Object(M.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(T.b)({
						isMuted: t
					})),
					setVideoVolume: t => e(_.e(t)),
					updateVideoTimestamp: (t, s) => e(I({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(y(e))
					})(t)),
					resetHistory: () => e(P())
				}));
			class Fs extends a.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = o.a.createRef(), this.onCurrentTimeChanged = e => {
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
						Object(U.g)(e.target) ? e.stopPropagation() : e.keyCode === F.a.ArrowRight ? this.onNextStream() : e.keyCode === F.a.ArrowLeft && this.onPreviousStream()
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
						this.props.sendEvent(Object(H.h)(e, this.props.currentStream)), this.props.onNavigation(e.path)
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
					e.classList.add(Rs.a.focusVisible), Object(f.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, C(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(G.n)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isOverlay: r,
						isOverlayOpen: n,
						isReportFlowOpen: a,
						onHeartbeatSubscribe: o,
						onRecommendedViewerSubredditsSubscribe: i,
						onStatsSubscribe: c,
						playbackState: l,
						related: d,
						subreddit: m,
						subscribeConfig: u,
						subscribeStreams: p
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
						}), u().then(e => this.unsubscribeConfig = e), p().then(e => this.unsubscribeStreams = e), t && this.isCurrentStreamWatchable() && (o(t.post.id).then(e => this.unsubscribeHeartbeat = e), c(t.post.id).then(e => this.unsubscribeStats = e)), i().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (d || m) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !Ws(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || l === q.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), a && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					})
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => C(this.previouslyActiveElement))
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						inViewerFeedTheMeter: r,
						isIntroInProgress: n,
						isMuted: a,
						isOverlay: i,
						isReportFlowOpen: c,
						location: l,
						nextStream: m,
						playbackState: u,
						previousStream: p,
						related: h,
						sendEvent: b,
						subreddit: v,
						volume: g
					} = this.props, {
						videoCurrentTime: w,
						videoTotalTime: S
					} = this.state, C = e && !e.post.subreddit, f = e && e.meter ? Math.ceil(100 * e.meter.proportion_full) : 100, _ = r && f < ne && !n;
					return o.a.createElement("div", {
						className: Object(d.a)(Rs.a.theaterContainer, {
							[Rs.a.overlay]: i
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, o.a.createElement("div", {
						className: Object(d.a)(Rs.a.panesWrapper, {
							[Rs.a.initialized]: !n
						})
					}, o.a.createElement("div", {
						className: Object(d.a)(Rs.a.pane, Rs.a.leftPane)
					}, o.a.createElement("div", {
						className: Rs.a.videoContainer
					}, (this.state.isLoading || this.state.isError || _) && o.a.createElement(ts, {
						previousStream: p,
						currentStream: e,
						nextStream: m
					}), s && o.a.createElement("div", {
						className: Object(d.a)({
							[Rs.a["meterCritical".concat(f)]]: _
						})
					}, o.a.createElement(A.a, {
						autoplay: !0,
						controls: !1,
						startTime: t,
						isPaused: this.state.isVideoPaused,
						muted: a,
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
					})), o.a.createElement(zt, {
						currentStreamId: e && e.post.id,
						isLoading: this.state.isLoading,
						isLive: u === q.a.LIVE,
						isMuted: a,
						isPaused: this.state.isVideoPaused,
						isUnavailable: u === q.a.UNAVAILABLE,
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
						subreddit: v,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: w,
						videoTotalTime: S,
						volume: g
					}))), !n && o.a.createElement("div", {
						className: Object(d.a)(Rs.a.pane, Rs.a.rightPane)
					}, e && !C && o.a.createElement(Ps, {
						location: l,
						postId: e.post.id,
						sendEvent: b,
						subredditId: e.post.subreddit.id
					}))), e && !n && o.a.createElement(Vs, {
						nextStream: m,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: p
					}), e && !n && i && o.a.createElement(Us, {
						onClick: this.onClose
					}), e && !n && c && o.a.createElement(R.a, {
						useLiveStreamingFlow: !0,
						overlayCustomStyles: R.b,
						postId: e.post.id,
						timestamp: Math.trunc(w),
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
					e && r(Object(H.j)(e)), s !== q.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(H.k)(this.props.currentStream)), this.setState(Object.assign({}, this.state, {
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
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(H.e)(this.props.currentStream)))
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
						const t = Object(W.c)(e),
							r = s ? "?related=".concat(s) : "";
						return "".concat(t).concat(r)
					}
					return Object(W.e)(e.post.id)
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
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), t(e.post.id), this.syncLocationWithCurrentStreamId(), s(Object(H.l)(e)), this.showOverlayAfterStreamSwitching())
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
					const n = !r || Object(W.a)(e.post.id) === r;
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
			const Us = e => {
					let {
						onClick: t
					} = e;
					return o.a.createElement("button", {
						className: Rs.a.closeButton,
						onClick: t,
						"aria-label": g.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, o.a.createElement(X.a, {
						className: Rs.a.closeIcon
					}))
				},
				Ws = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var Hs = Bs(Object(D.c)(Fs)),
				Gs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Xs = s("./src/reddit/helpers/overlay/index.ts"),
				zs = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Js = s.n(zs);
			const {
				fbt: Ks
			} = s("./node_modules/fbt/lib/FbtPublic.js"), qs = Object(l.c)({
				isEnabled: z.a,
				isIntroInProgress: Y.b,
				isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
				related: (e, t) => {
					let {
						location: s,
						match: r
					} = t;
					const a = n()([...Object(m.a)(s.search)]).related,
						o = r.params.subreddit;
					return "home" === a || "r/popular" === a ? a : "popular" === o ? "r/popular" : o ? void 0 : "home"
				}
			}), Ys = Object(i.b)(qs, (e, t) => ({
				onOpenLoginModal: () => e(Object(u.e)()),
				onStreamByIdRequested: t => e(Object(p.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: r,
						useReplace: n
					} = s;
					const a = n ? c.c : c.b,
						o = r ? Object(Xs.b)(t) : t;
					e(a(o))
				}
			}));
			class Qs extends o.a.Component {
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
						match: a,
						related: i
					} = this.props, {
						subreddit: c,
						streamId: l
					} = a.params;
					return e ? o.a.createElement("div", {
						className: Object(d.a)(Js.a.rpanContainer, {
							[Js.a.overlay]: r
						})
					}, o.a.createElement(Hs, {
						isOverlay: !!r,
						location: n,
						onNavigation: this.onNavigation,
						related: i,
						streamIdFromPath: l,
						subreddit: c && "r/".concat(c)
					}), s && !t && o.a.createElement(v, null)) : o.a.createElement(Zs, null)
				}
			}
			const Zs = () => o.a.createElement("div", {
				className: Object(d.a)(Js.a.rpanContainer, Js.a.forbiddenScreen)
			}, o.a.createElement("h2", null, Ks._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = Ys(Object(D.c)(Object(Gs.b)(Qs)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "j", (function() {
				return A
			})), s.d(t, "i", (function() {
				return R
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
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.reports.reported,
				v = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				w = e => e.publicAccessNetwork.history.visitOrder,
				S = e => e.publicAccessNetwork.hlsStreams,
				C = Object(r.a)(S, e => e.ended),
				f = Object(r.a)(S, e => e.removed),
				_ = Object(r.a)(e => e.publicAccessNetwork.models, C, f, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, i.b.ENDED) ? i.b.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : Object.assign({}, e, {
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
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				E = (e, t) => {
					return _(e)[Object(o.g)(t)]
				},
				O = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), _, b, c.h, l.b, (e, t, s, r, n, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(o.g)(e);
							s[t] && a.push(t)
						}
						const c = a.concat(t),
							l = [...new Set(c)],
							d = new Set([...r, ...n]);
						return l.filter(e => {
							const t = s[e];
							return !d.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const l = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !l.has(e)).map(e => s[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				x = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, _, (e, t) => {
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
				k = Object(r.a)(_, x, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === i.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				y = Object(r.a)(_, x, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				N = Object(r.a)(w, (e, t) => {
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
				P = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, _, (e, t) => {
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
						a = n.find(e => e.stream.state === i.b.IS_LIVE);
					if (a) return a.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				I = Object(n.a)(Object(r.a)(P, _, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.g)(s) : void 0
				}, P, b, c.h, (e, t) => {
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
				j = Object(r.a)(g, w, N, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(r.a)(g, w, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(n.a)(Object(r.a)(L, _, (e, t) => e ? t[e] : void 0)),
				V = Object(n.a)(Object(r.a)(j, _, (e, t) => e ? t[e] : void 0)),
				A = Object(n.a)(Object(r.a)(M, _, (e, t) => e ? t[e] : void 0)),
				R = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
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
					return s ? E(e, s) : void 0
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
			const F = Object(r.a)(L, v, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const W = Object(r.a)(L, _, h.b, (e, t, s) => {
					if (s) return U.INTRO;
					const r = e && t[e];
					if (!r) return U.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.b.IS_LIVE || n === i.b.DISCONNECTED ? U.LIVE : n === i.b.ENDED && r.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				H = Object(r.a)(T, W, h.b, d.c, d.p, (e, t, s, r, n) => s ? r : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(T, W, F, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				l = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.8c8a61a06625b6d353ed.js.map