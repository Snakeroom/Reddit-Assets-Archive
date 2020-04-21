// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.4d2c125327b23e021821.js
// Retrieved at 4/21/2020, 5:30:05 PM by Reddit Dataminer v1.0.0
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
					var a, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						c = !o && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !n && !l && /macintosh/i.test(t),
						g = !i && !m && !u && !p && /linux/i.test(t),
						w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						C = s(/version\/(\d+(\.\d+)?)/i),
						f = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !f && /[^-]mobi/i.test(t),
						S = /xbox/i.test(t);
					/opera/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: C || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || C
					} : /SamsungBrowser/i.test(t) ? a = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: C || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? a = {
						name: "Opera Coast",
						coast: e,
						version: C || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? a = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: C || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? a = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? a = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? a = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? a = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? a = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? a = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (a = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (a.msedge = e, a.version = w) : (a.msie = e, a.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? a = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? a = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? a = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? a = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || C
					} : m ? a = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? a = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (a = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (a.firefoxos = e, a.osname = "Firefox OS")) : l ? a = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? a = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? a = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? a = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: C || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (a = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: C || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (a.touchpad = e)) : /bada/i.test(t) ? a = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? a = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || C
					} : /qupzilla/i.test(t) ? a = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || C
					} : /chromium/i.test(t) ? a = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || C
					} : /chrome|crios|crmo/i.test(t) ? a = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? a = {
						name: "Android",
						version: C
					} : /safari|applewebkit/i.test(t) ? (a = {
						name: "Safari",
						safari: e
					}, C && (a.version = C)) : n ? (a = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, C && (a.version = C)) : a = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || C
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !a.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (a.name = a.name || "Blink", a.blink = e) : (a.name = a.name || "Webkit", a.webkit = e), !a.version && C && (a.version = C)) : !a.opera && /gecko\//i.test(t) && (a.name = a.name || "Gecko", a.gecko = e, a.version = a.version || s(/gecko\/(\d+(\.\d+)?)/i)), a.windowsphone || !i && !a.silk ? !a.windowsphone && n ? (a[n] = e, a.ios = e, a.osname = "iOS") : v ? (a.mac = e, a.osname = "macOS") : S ? (a.xbox = e, a.osname = "Xbox") : b ? (a.windows = e, a.osname = "Windows") : g && (a.linux = e, a.osname = "Linux") : (a.android = e, a.osname = "Android");
					var x = "";
					a.windows ? x = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : a.windowsphone ? x = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : a.mac ? x = (x = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? x = (x = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? x = s(/android[ \/-](\d+(\.\d+)*)/i) : a.webos ? x = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : a.blackberry ? x = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : a.bada ? x = s(/bada\/(\d+(\.\d+)*)/i) : a.tizen && (x = s(/tizen[\/\s](\d+(\.\d+)*)/i)), x && (a.osversion = x);
					var E = !a.windows && x.split(".")[0];
					return f || c || "ipad" == n || i && (3 == E || E >= 4 && !_) || a.silk ? a.tablet = e : (_ || "iphone" == n || "ipod" == n || i || o || a.blackberry || a.webos || a.bada) && (a.mobile = e), a.msedge || a.msie && a.version >= 10 || a.yandexbrowser && a.version >= 15 || a.vivaldi && a.version >= 1 || a.chrome && a.version >= 20 || a.samsungBrowser && a.version >= 4 || a.firefox && a.version >= 20 || a.safari && a.version >= 6 || a.opera && a.version >= 10 || a.ios && a.osversion && a.osversion.split(".")[0] >= 6 || a.blackberry && a.version >= 10.1 || a.chromium && a.version >= 20 ? a.a = e : a.msie && a.version < 10 || a.chrome && a.version < 20 || a.firefox && a.version < 20 || a.safari && a.version < 6 || a.opera && a.version < 10 || a.ios && a.osversion && a.osversion.split(".")[0] < 6 || a.chromium && a.version < 20 ? a.c = e : a.x = e, a
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function a(e, t) {
					var s, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) r.push(t(e[s]));
					return r
				}

				function n(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), s = a(e, (function(e) {
							var s = t - r(e);
							return a((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, a) {
					var i = s;
					"string" == typeof r && (a = r, r = void 0), void 0 === r && (r = !1), a && (i = t(a));
					var o = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return n([o, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = n, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = r() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseClamp.js"),
				a = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = a(s)) == s ? s : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), r(a(e), t, s)
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
				a = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const n = Object(a.e)(e),
					i = encodeURIComponent("".concat(t).concat(n));
				return "".concat(r.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(i)
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
				a = s.n(r),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const o = Object(n.a)(i.A),
				c = e => async t => {
					t(o(e))
				}, d = () => async e => {
					e(o({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(o({
						correlationId: a()()
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
				a = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.div("Wrapper", p.a), v = o.a.span("Copy", p.a), g = o.a.wrapped(l.g, "SignupLink", p.a), w = o.a.wrapped(l.j, "LoginLink", p.a);
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: r,
					openLoginModal: o,
					openRegisterModal: d,
					origin: l,
					sendEvent: u
				} = e;
				return a.a.createElement(b, {
					className: Object(n.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, a.a.createElement(v, {
					className: Object(n.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), a.a.createElement(w, {
					href: Object(c.a)(r, l, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), a.a.createElement(g, {
					className: Object(n.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(r, l, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("sign up", null, {
					hk: "2GqETx"
				})))
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/lessComponent.tsx"),
				c = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				d = s("./node_modules/lodash/memoize.js"),
				l = s.n(d),
				m = s("./src/lib/constants/index.ts"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = s.n(p);
			const b = o.a.div("Userpic", h.a);
			var v = l()(e => {
					const {
						userId: t
					} = e, {
						processingAvatarImageUrl: s
					} = c.a, r = (e => e.replace(m.wb.Account + "_", ""))(t), {
						avatar: n,
						color: i
					} = (e => {
						const t = u.length,
							s = parseInt(e, 36),
							r = s % 20 + 1,
							a = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + r).slice(-2),
							color: u[a]
						}
					})(r), o = "".concat(s, "/avatar_default_").concat(n, "_").concat(i, ".png");
					return a.a.createElement(b, {
						style: {
							backgroundImage: "url(".concat(o, ")"),
							backgroundColor: "#".concat(i)
						}
					})
				}),
				g = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				w = s("./src/reddit/icons/svgs/Remove/index.tsx");
			const C = o.a.img("Userpic", h.a),
				f = Object(i.c)({
					account: e => e.user.account
				}),
				_ = Object(n.b)(f);
			t.a = o.a.wrapped(_(e => {
				let {
					account: t,
					className: s,
					height: r,
					isLivestreaming: n,
					trash: i,
					userId: o,
					width: c
				} = e;
				const d = n ? 36 : 20,
					l = {
						height: r || d,
						width: c || d,
						minWidth: c || d
					};
				return i ? a.a.createElement("div", {
					className: s,
					style: l
				}, a.a.createElement(w.a, {
					className: h.a.TrashIcon
				})) : o ? a.a.createElement("div", {
					className: s,
					style: l
				}, t && t.accountIcon && t.id === o ? a.a.createElement(C, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(v, {
					userId: o
				})) : a.a.createElement("div", {
					className: s,
					style: l
				}, t && t.accountIcon ? a.a.createElement(C, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(g.a, {
					className: h.a.ProfileIcon
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
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
			t.a = a
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
				a = s.n(r),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = i.a.div("LoaderWrapper", d.a),
				m = i.a.div("Icon", d.a),
				u = i.a.div("Byline", d.a),
				p = Object(n.a)({
					ErrorComponent: () => a.a.createElement(l, null, a.a.createElement(m, null), a.a.createElement(u, null)),
					getComponent: () => Object(o.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : a.a.createElement(l, null, a.a.createElement(m, null), a.a.createElement(u, null))
					}
				});
			t.a = e => a.a.createElement(p, e)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const n = Object(r.a)({
				getComponent: () => Object(a.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
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
				return S
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(v);
			const w = d.a.wrapped(u.a, "_Dropdown", g.a),
				C = Object(m.a)(w),
				f = d.a.button("MenuButton", g.a),
				_ = d.a.wrapped(h.a, "MenuIcon", g.a),
				S = d.a.wrapped(p.b, "DropdownRow", g.a),
				x = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				E = Object(i.b)(x, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				O = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => n.a.createElement(f, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: O(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(_, null), n.a.createElement(C, {
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
				awardButton: "xXntZktZERg_h5_1RbTAJ",
				awardOverlaySpectacle: "_2KvsuLKnVtlqMTrKCouaF8"
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
				awardPromptWrapper: "_1J2SNfou9P_BKlDY42rZgE",
				awardPromptLabel: "_3EmfXMw_zUNf46UsW8EyGZ"
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
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const n = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(r.a)({
				ErrorComponent: i,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
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
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (s[r[a]] = e[r[a]])
				}
				return s
			};
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
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
					}, s = Object(o.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, v({}, t, {
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
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const r = Object(o.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return i.a.createElement(w, v({
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
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
				n = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(n);
			t.a = r.a.wrapped(a.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return o
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
				return C
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => {
					if (t) {
						const s = a.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id;
							const a = Object(r.h)(e, {
								streamIdFromPath: t.post.id
							});
							a === r.a.LIVE ? s.type = "stream_live" : a === r.a.VOD ? s.type = "stream_vod" : a === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: a.post(e, t.post.id),
							media: s,
							subreddit: a.subreddit(e)
						}
					}
					return {
						subreddit: a.subreddit(e)
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				o = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, n(e)),
				c = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, n(e)),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, n(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, n(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), n(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), n(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), n(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), n(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), n(t, e)),
				v = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), n(t, e)),
				g = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, n(t, s))
				},
				w = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, n(t, s))
				},
				C = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, n(s, t))
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
				a = s.n(r),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(n.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", o.a);
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
				a = s.n(r),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(n.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(n.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
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
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function n(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function n(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function n(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
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
				a = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
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
				C = s.n(w);
			var f = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				_ = s("./src/lib/focusVisible/index.js"),
				S = s("./src/reddit/actions/media.ts"),
				x = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				E = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				O = s("./src/lib/makeActionCreator/index.ts");
			const k = Object(O.a)(E.D),
				N = Object(O.a)(E.X),
				y = e => async t => {
					t(k(e))
				}, I = Object(O.a)(E.N), L = Object(O.a)(E.T);
			var P, j = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				T = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				A = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				M = s("./src/reddit/actions/reportFlow.ts"),
				V = s("./src/reddit/components/HlsVideo/index.tsx"),
				R = s("./src/reddit/components/ReportFlow/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/history.ts"),
				F = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/helpers/dom/index.ts"),
				H = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				U = s("./src/reddit/helpers/trackers/rpan.ts"),
				X = s("./src/reddit/helpers/trackers/screenview.ts"),
				K = s("./src/reddit/icons/svgs/Close/index.tsx"),
				G = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Y = s("./src/reddit/selectors/media.ts"),
				q = s("./src/reddit/selectors/platform.ts"),
				J = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				z = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(P || (P = {}));
			const Z = 60,
				Q = 30,
				$ = 3 * Z,
				ee = 5 * Z,
				te = 5 * Z,
				se = 10,
				re = 5;
			var ae = s("./src/config.ts"),
				ne = s("./src/lib/makeCommentsPageKey/index.ts"),
				ie = s("./src/reddit/actions/gold/modals.ts"),
				oe = s("./src/reddit/actions/post.ts"),
				ce = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				de = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				le = s("./src/reddit/selectors/experiments/goldRpanLivePreview.ts"),
				me = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				ue = s("./src/reddit/selectors/comments.ts"),
				pe = s("./src/reddit/selectors/communityAwards.ts"),
				he = s("./src/reddit/models/Gold/Award.ts");
			var be = e => e < 500 || !e ? he.d.Silver : e < 1800 ? he.d.Gold : he.d.Platinum,
				ve = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				ge = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				we = s.n(ge);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function fe(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: r,
					tier: a,
					className: n
				} = e, o = a === he.d.Silver ? we.a.silverTierAttribution : a === he.d.Gold ? we.a.goldTierAttribution : we.a.platinumTierAttribution;
				return i.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(l.a)(n, we.a.tierAttribution, o)
				}, a !== he.d.Silver && i.a.createElement(ve.a, {
					className: we.a.giverIcon,
					userId: r,
					width: 16,
					height: 16
				}), i.a.createElement("span", null, a !== he.d.Silver && Ce._("{giverName} gave {space}", [Ce._param("giverName", s), Ce._param("space", " ")], {
					hk: "SzDdi"
				}), i.a.createElement("strong", {
					className: we.a.awardName
				}, t)))
			}
			var _e = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Se = s("./src/reddit/icons/svgs/Star/index.tsx"),
				xe = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				Ee = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Oe = s.n(Ee);

			function ke(e) {
				const {
					iconUrl: t,
					tier: s,
					className: r
				} = e, a = s === he.d.Silver ? Oe.a.silverTierAwardIcon : s === he.d.Gold ? Oe.a.goldTierAwardIcon : Oe.a.platinumTierAwardIcon, n = s !== he.d.Silver, o = s === he.d.Platinum;
				return i.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(l.a)(r, Oe.a.tierAwardIcon)
				}, i.a.createElement("div", {
					className: Oe.a.awardIconContainer
				}, n && i.a.createElement(i.a.Fragment, null, i.a.createElement(Se.a, {
					className: Object(l.a)(Oe.a.backgroundAnimation, Oe.a.backgroundStar)
				}), i.a.createElement(xe.a, {
					className: Object(l.a)(Oe.a.backgroundAnimation, Oe.a.backgroundStar, Oe.a.backgroundStar2)
				})), i.a.createElement("img", {
					src: t,
					className: a
				}), o && i.a.createElement(i.a.Fragment, null, i.a.createElement(_e.a, {
					className: Object(l.a)(Oe.a.backgroundAnimation, Oe.a.backgroundSparkle, Oe.a.sparkleBottomLeft)
				}), i.a.createElement(_e.a, {
					className: Object(l.a)(Oe.a.backgroundAnimation, Oe.a.backgroundSparkle, Oe.a.sparkleTopRight)
				}), i.a.createElement(_e.a, {
					className: Object(l.a)(Oe.a.backgroundAnimation, Oe.a.backgroundSparkle, Oe.a.sparkleBottomRight)
				}))))
			}
			var Ne = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				ye = s.n(Ne);

			function Ie(e) {
				const {
					award: t,
					className: s,
					giverId: r,
					giverName: a
				} = e, n = be(t.coinPrice), o = t.icon128 ? t.icon128.url : t.icon.url;
				return i.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(l.a)(s, ye.a.container)
				}, i.a.createElement(ke, {
					iconUrl: o,
					tier: n,
					className: ye.a.awardIconAnimation
				}), i.a.createElement(fe, {
					awardName: t.name,
					className: ye.a.attributionAnimation,
					giverId: r,
					giverName: a,
					tier: n
				}))
			}
			var Le = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Pe = s.n(Le);
			class je extends n.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: r
					} = this.props;
					return e && r && s ? i.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(l.a)(t, Pe.a.awardOverlay)
					}, i.a.createElement(Ie, {
						award: e,
						giverId: r,
						giverName: s
					})) : null
				}
			}
			var Te = Object(o.b)(() => Object(d.a)(e => e, ue.n, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: r,
						authorId: a
					} = t;
					return {
						award: s ? Object(pe.a)(e, s) : void 0,
						giverId: a,
						giverName: r
					}
				}))(je),
				Ae = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Me = s.n(Ae);
			const Ve = Object(o.b)(() => Object(d.c)({
					awardedCommentLinks: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return Object(ue.g)(e, {
							commentsPageKey: s
						}).filter(t => {
							const s = Object(ue.n)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isPending: ue.d
				})),
				Re = e => ({
					prevAwardedCommentLinks: e.isPending ? void 0 : [...e.awardedCommentLinks],
					prevAwardedCommentLinksTopIndex: e.isPending ? 0 : e.awardedCommentLinks.length,
					prevCommentsPageKey: e.commentsPageKey
				});
			class De extends n.Component {
				constructor(e) {
					super(e), this.state = Re(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Re(e);
					return {
						prevAwardedCommentLinks: e.isPending ? void 0 : [...e.awardedCommentLinks],
						prevAwardedCommentLinksTopIndex: e.isPending ? 0 : t.prevAwardedCommentLinks ? t.prevAwardedCommentLinks.length : e.awardedCommentLinks.length
					}
				}
				render() {
					const {
						awardedCommentLinks: e,
						className: t,
						isPending: s
					} = this.props, {
						prevAwardedCommentLinksTopIndex: r
					} = this.state;
					if (s) return null;
					const a = e.slice(r);
					return a.length ? i.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(l.a)(t, Me.a.awardOverlaySpectacle)
					}, a.map(e => i.a.createElement(Te, {
						className: Me.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Be = Ve(De);
			const Fe = (e, t) => e > t ? P.EXTENDED : e < $ ? P.CRITICAL : e < ee ? P.LOW : P.NORMAL,
				We = e => e / Z,
				He = e => 5 * Math.round(e / 5) % te == 0;
			var Ue = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				Xe = s.n(Ue);
			const Ke = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push("Delay".concat(t));
					return e
				})(),
				Ge = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push("X".concat(5 * t));
					return e
				})(),
				Ye = ["15Deg", "45Deg", "75Deg"],
				qe = e => e[Math.floor(Math.random() * e.length)],
				Je = () => {
					const e = [qe(Ge), qe(Ye), qe(Ke)].map(e => Xe.a["particle".concat(e)]).join(" ");
					return "".concat(Xe.a.particle, " ").concat(e, " ").concat(Math.round(Math.random()) ? Xe.a.particleReverse : "")
				},
				ze = 40,
				Ze = 20;
			class Qe extends i.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < ze; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < Ze; t++) e.push(this.createParticle(t, "particleLg"));
					return i.a.createElement("div", {
						className: Xe.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return i.a.createElement("div", {
						key: "".concat(t).concat(innerHeight),
						className: "".concat(Je(), " ").concat(Xe.a[t])
					})
				}
			}
			var $e = Qe;
			const et = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class tt extends n.Component {
				constructor() {
					super(...arguments), this.state = et(), this.timerId = 0
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
					return t || s > 0 || He(e) || e < ee
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: r
					} = e, {
						timerDiff: a,
						timer: n,
						visible: i
					} = t;
					if (!s || !s.meter || null === n || !i) return null;
					if (a > 0) {
						if (a < Z) {
							const e = 5 * Math.round(a / 5) || 5;
							return g.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [g.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(We(a));
							return g.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [g.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (n > s.meter.full_meter_duration) {
						const e = Math.round(We(s.meter.full_meter_duration)).toLocaleString();
						return g.fbt._("{number of minutes}+ minutes airtime left", [g.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (He(n) && !r && n > ee) {
						const e = Math.round(We(n)).toLocaleString();
						return g.fbt._("{number of minutes} minutes airtime left", [g.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const o = Math.round(n),
						c = Math.floor(We(o)),
						d = o % Z,
						l = "".concat(c, ":").concat(d < 10 ? "0" : "").concat(d);
					return g.fbt._("{mm:ss timestamp of remaining time} airtime left", [g.fbt._param("mm:ss timestamp of remaining time", l)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return et();
					const s = e.currentStream.post.id,
						r = e.currentStream.estimated_remaining_time;
					let a;
					if (t.streamId !== s) a = {
						estimatedTimeRemaining: r,
						previouslyVisible: !1,
						visible: !0,
						streamId: s,
						timerPausedAt: null,
						timerDiff: 0,
						timer: r
					};
					else if (r > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							n = r - t.estimatedTimeRemaining + e;
						a = {
							estimatedTimeRemaining: r,
							previouslyVisible: t.visible,
							visible: !0,
							streamId: s,
							timerPausedAt: r,
							timerDiff: n,
							timer: r
						}
					} else if (r < t.estimatedTimeRemaining) {
						let {
							timer: n,
							timerDiff: i,
							timerPausedAt: o
						} = t;
						Math.abs(n - r) > se && (i = (n = r) - t.timer, o = null), null !== o && o - n > re && (i = 0, o = null), a = {
							estimatedTimeRemaining: r,
							previouslyVisible: t.visible,
							visible: tt.isPillVisible(n, e.overlayOpen, i),
							streamId: s,
							timerPausedAt: o,
							timerDiff: i,
							timer: n
						}
					} else {
						let {
							timerDiff: s,
							timerPausedAt: r
						} = t;
						null !== r && r - t.timer > re && (s = 0, r = null), a = Object.assign({}, t, {
							timerDiff: s,
							timerPausedAt: r,
							previouslyVisible: t.visible,
							visible: tt.isPillVisible(t.timer, e.overlayOpen, s)
						})
					}
					return Object.assign({}, a, {
						pillLabel: tt.getPillLabel(e, a)
					})
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
						previouslyVisible: r,
						timer: a,
						pillLabel: n
					} = this.state;
					if (!(s && e && e.meter && a)) return null;
					const o = Fe(a, e.meter.full_meter_duration),
						c = !r,
						d = a < ee || t,
						m = this.state.timerDiff > 0;
					return i.a.createElement("div", {
						className: Xe.a.meterOverlay
					}, i.a.createElement("div", {
						className: Xe.a.meterPillWrapper
					}, m && i.a.createElement($e, null), i.a.createElement("div", {
						className: Object(l.a)(Xe.a.meterPillContainer, {
							[Xe.a.animateMeterInAndOut]: c && !d,
							[Xe.a.animateMeterInOnly]: c && d,
							[Xe.a.fillMeterCritical]: o === P.CRITICAL,
							[Xe.a.fillMeterLow]: o === P.LOW,
							[Xe.a.fillMeterNormal]: o === P.NORMAL || o === P.EXTENDED,
							[Xe.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, i.a.createElement("div", {
						className: Xe.a.meterLabel
					}, n))))
				}
			}
			var st = tt,
				rt = s("./src/reddit/components/OverflowMenu/index.tsx"),
				at = s("./src/reddit/controls/Dropdown/Row.tsx"),
				nt = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				it = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				ot = s.n(it);
			const {
				fbt: ct
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var dt = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: r,
						subreddits: a
					} = e;
					return i.a.createElement(rt.b, {
						className: ot.a.overflowMenu,
						dropdownClassName: ot.a.dropdown,
						defaultButtonOutline: !0,
						disabled: a.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: i.a.createElement("div", {
							className: ot.a.overflowMenuIcon
						}, t, i.a.createElement(nt.a, {
							className: ot.a.dropdownTriangle
						})),
						onClick: r
					}, i.a.createElement("div", {
						className: ot.a.dropdownLabel
					}, ct._("Pick a Community", null, {
						hk: "8MoVj"
					})), a.map(e => i.a.createElement(at.b, {
						className: ot.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: ot.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				lt = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				mt = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ut = s.n(mt);
			class pt extends n.Component {
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
						isPaused: a,
						isVisible: n,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: c,
						seekBarRef: d,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: v,
						volumeRef: g
					} = this.props;
					return i.a.createElement(lt.a, {
						className: Object(l.a)(e, ut.a.scrubberBar, {
							[ut.a.visible]: n
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
						isPaused: a,
						playPauseVideo: o,
						ref: this.setControlBarRef,
						seekBarRef: d,
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
			var ht = pt,
				bt = s("./node_modules/lodash/debounce.js"),
				vt = s.n(bt),
				gt = s("./src/lib/prettyPrintNumber/index.ts"),
				wt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				Ct = s("./src/reddit/models/Vote/index.ts"),
				ft = s("./src/reddit/selectors/user.ts");
			Object(O.a)(E.C);
			const _t = (e, t) => async (s, r, a) => {
				let {
					apiContext: n
				} = a;
				const i = r();
				if (Object(ft.H)(i))
					if (Object(G.c)(i)) await Object(wt.g)(n(), e, t);
					else {
						await Object(p.d)(e);
						const s = Object(J.k)(r(), e);
						null !== s.post.voteState && Object(Ct.e)(s.post.voteState) === t || await Object(wt.g)(n(), e, t)
					}
				else s(Object(u.e)())
			};
			var St = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				xt = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Et = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				Ot = s.n(Et);
			const kt = Object(d.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(J.k)(e, s)
				}
			});
			class Nt extends i.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Ct.a.upvoted), this.downVotes = () => this.calculateVotes(Ct.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Ct.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Ct.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = vt()(() => this.vote(Ct.a.upvoted), E.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = vt()(() => this.vote(Ct.a.downvoted), E.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Ct.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign({}, this.state, {
						displayedVoteState: Object(Ct.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign({}, this.state, {
						displayedVoteState: null !== t.post.voteState ? Object(Ct.e)(t.post.voteState) : Ct.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return i.a.createElement("div", {
						className: Ot.a.statsPanel
					}, i.a.createElement("div", {
						className: Ot.a.voteContainer
					}, i.a.createElement("button", {
						className: Object(l.a)(Ot.a.upButton, {
							[Ot.a.activeVote]: this.isVoteActive(Ct.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": g.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, i.a.createElement(xt.a, {
						className: Ot.a.voteIcon
					})), i.a.createElement("p", {
						className: Ot.a.votesCounter
					}, Object(gt.b)(this.upVotes()))), i.a.createElement("div", {
						className: Ot.a.watchingContainer
					}, i.a.createElement("div", {
						className: Ot.a.watchingCounter
					}, Object(gt.b)(t)), i.a.createElement("p", {
						className: Ot.a.watchingCaption
					}, this.props.isLive ? g.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : g.fbt._("Views", null, {
						hk: "ixhZU"
					}))), i.a.createElement("div", {
						className: Ot.a.voteContainer
					}, i.a.createElement("button", {
						className: Object(l.a)(Ot.a.downButton, {
							[Ot.a.activeVote]: this.isVoteActive(Ct.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": g.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, i.a.createElement(St.a, {
						className: Ot.a.voteIcon
					})), i.a.createElement("p", {
						className: Ot.a.votesCounter
					}, Object(gt.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Ct.a.notVoted), void this.setState(Object.assign({}, this.state, {
							displayedVoteState: Ct.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign({}, this.state, {
							displayedVoteState: e
						})), e === Ct.a.upvoted ? this.props.sendEvent(Object(U.g)(t)) : this.props.sendEvent(Object(U.d)(t))
					}
				}
			}
			var yt = Object(o.b)(kt, (e, t) => ({
					vote: (t, s) => e(_t(t, s))
				}))(Nt),
				It = s("./src/lib/lessComponent.tsx"),
				Lt = s("./src/lib/opener/index.ts"),
				Pt = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				jt = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Tt = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				At = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Mt = s("./src/reddit/icons/svgs/Report/index.tsx"),
				Vt = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Rt = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Dt = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Bt = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				Ft = s.n(Bt);
			var Wt = e => i.a.createElement("svg", {
					className: Object(l.a)(Ft.a.icon, e.className),
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
				Ht = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				Ut = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Xt = s.n(Ut);
			const Kt = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Xt.a.shareButton,
						onClick: t,
						"aria-label": g.fbt._("share video", null, {
							hk: "2e71ai"
						}),
						value: "share"
					}, i.a.createElement(jt.a, {
						className: Xt.a.menuIcon
					}))
				},
				Gt = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return i.a.createElement("button", {
						className: Xt.a.muteButton,
						onClick: s,
						"aria-label": g.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? i.a.createElement(Rt.a, {
						className: Xt.a.volumeIcon
					}) : i.a.createElement(Ht.a, {
						className: Xt.a.volumeIcon
					}))
				},
				Yt = It.a.wrapped(Pt.a, "menuIcon", Xt.a),
				qt = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: r
					} = e;
					return i.a.createElement(rt.b, {
						className: Xt.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: i.a.createElement(Yt, null),
						onClick: t
					}, i.a.createElement(at.b, {
						className: Xt.a.overflowItem,
						displayText: g.fbt._("View rules", null, {
							hk: "4lTvzy"
						}),
						iconWrapperClassName: Xt.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Lt.d)(E.Q, Lt.c.BLANK)
					}, i.a.createElement(Vt.a, {
						className: Xt.a.overflowItemIcon
					})), i.a.createElement(at.b, {
						className: Xt.a.overflowItem,
						displayText: g.fbt._("Visit RPAN community", null, {
							hk: "3KZliI"
						}),
						iconWrapperClassName: Xt.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Lt.d)(E.O, Lt.c.BLANK)
					}, i.a.createElement(At.a, {
						className: Xt.a.overflowItemIcon
					})), i.a.createElement(at.b, {
						className: Xt.a.overflowItem,
						displayText: g.fbt._("Report", null, {
							hk: "1TxhL9"
						}),
						iconWrapperClassName: Xt.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: r
					}, i.a.createElement(Mt.a, {
						className: Xt.a.overflowItemIcon
					})), i.a.createElement(at.b, {
						className: Xt.a.overflowItem,
						displayText: g.fbt._("Hide", null, {
							hk: "1qXTIB"
						}),
						iconWrapperClassName: Xt.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, i.a.createElement(Tt.a, {
						className: Xt.a.overflowItemIcon
					})))
				},
				Jt = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Xt.a.promptButton,
						onClick: t
					}, i.a.createElement(Dt.a, null), i.a.createElement("span", null, g.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				zt = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Xt.a.promptButton,
						onClick: t
					}, i.a.createElement(Wt, null), i.a.createElement("span", null, g.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				},
				Zt = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: "".concat(Xt.a.promptButton, " ").concat(Xt.a.awardButton),
						onClick: t
					}, i.a.createElement("span", null, g.fbt._("Award Now", null, {
						hk: "STk0L"
					})))
				};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var Qt = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				$t = s.n(Qt);
			const {
				fbt: es
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ts = e => {
				let {
					live: t,
					subredditMenu: s
				} = e;
				return i.a.createElement("div", {
					className: $t.a.broadcastStatus
				}, t ? i.a.createElement(ss, {
					subredditMenu: s
				}) : i.a.createElement(rs, {
					subredditMenu: s
				}))
			}, ss = e => {
				let {
					subredditMenu: t
				} = e;
				return es._("{=Live} on {subreddit}", [es._param("=Live", i.a.createElement("span", {
					className: $t.a.live
				}, es._("Live", null, {
					hk: "2OKwyD"
				}))), es._param("subreddit", t)], {
					hk: "i1rjr"
				})
			}, rs = e => {
				let {
					subredditMenu: t
				} = e;
				return es._("Recorded live on {subreddit}", [es._param("subreddit", t)], {
					hk: "29Nv8k"
				})
			}, as = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: r,
					subreddits: a
				} = e, n = "";
				n = "home" === s ? "All" : "r/popular" === s ? "r/popular" : r || "All";
				const o = a.filter(e => e.prefixedName !== n);
				return i.a.createElement(rt.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: i.a.createElement("span", {
						className: $t.a.subreddit
					}, r || "RPAN")
				}, i.a.createElement("div", {
					className: $t.a.dropdownLabel
				}, es._("Pick a Community", null, {
					hk: "4AfDwd"
				})), o.map(e => i.a.createElement(at.b, {
					className: $t.a.dropdownRow,
					displayText: e.prefixedName,
					key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
					onClick: () => t(e)
				})))
			}, ns = e => {
				let {
					text: t
				} = e;
				return i.a.createElement("h1", {
					className: $t.a.title
				}, t)
			}, is = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return i.a.createElement("div", {
					className: $t.a.watchersCount
				}, s ? i.a.createElement(os, {
					count: Math.max(1, t.continuous_watchers)
				}) : i.a.createElement(cs, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, os = e => {
				let {
					count: t
				} = e;
				return es._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [es._plural(t, "number of watchers", Object(gt.b)(t, !0))], {
					hk: "3F0Nj0"
				})
			}, cs = e => {
				let {
					count: t
				} = e;
				return es._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [es._plural(t, "number of views", Object(gt.b)(t, !0))], {
					hk: "tSTjT"
				})
			}, ds = e => {
				let {
					onClick: t
				} = e;
				return i.a.createElement("button", {
					className: $t.a.shareButton,
					onClick: t,
					"aria-label": es._("Share video", null, {
						hk: "I91IP"
					}),
					value: "share"
				}, i.a.createElement(jt.a, {
					className: $t.a.shareIcon
				}))
			}, ls = It.a.wrapped(Pt.a, "menuIcon", $t.a), ms = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: r
				} = e;
				return i.a.createElement(rt.b, {
					className: $t.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: "rpan-overlay-menu",
					icon: i.a.createElement(ls, null),
					onClick: t
				}, i.a.createElement(at.b, {
					className: $t.a.overflowItem,
					displayText: es._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: $t.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-rules"),
					onClick: () => Object(Lt.d)(E.Q, Lt.c.BLANK)
				}, i.a.createElement(Vt.a, {
					className: $t.a.overflowItemIcon
				})), i.a.createElement(at.b, {
					className: $t.a.overflowItem,
					displayText: es._("Visit RPAN community", null, {
						hk: "1vVY6o"
					}),
					iconWrapperClassName: $t.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-community"),
					onClick: () => Object(Lt.d)(E.O, Lt.c.BLANK)
				}, i.a.createElement(At.a, {
					className: $t.a.overflowItemIcon
				})), i.a.createElement(at.b, {
					className: $t.a.overflowItem,
					displayText: es._("Report", null, {
						hk: "3ZxBjz"
					}),
					iconWrapperClassName: $t.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-report"),
					onClick: r
				}, i.a.createElement(Mt.a, {
					className: $t.a.overflowItemIcon
				})), i.a.createElement(at.b, {
					className: $t.a.overflowItem,
					displayText: es._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: $t.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-hide"),
					onClick: s
				}, i.a.createElement(Tt.a, {
					className: $t.a.overflowItemIcon
				})))
			}, us = Object(o.b)(null, e => ({
				vote: (t, s) => e(_t(t, s))
			}))(class extends n.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(Ct.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(Ct.a.downvoted);
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
					return null == e ? null : e - Object(Ct.e)(t) + this.voteState
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
					const e = this.voteState === Ct.a.upvoted,
						t = this.voteState === Ct.a.downvoted;
					return i.a.createElement("div", {
						className: $t.a.votePanel
					}, i.a.createElement(ps, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? i.a.createElement(bs, {
						score: this.score
					}) : null, i.a.createElement(hs, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(Ct.e)(t))
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
					return e === this.voteState ? Ct.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						sendEvent: s
					} = this.props, {
						id: r
					} = t.post;
					this.setVoteState(r, e), this.props.vote(r, e), e === Ct.a.upvoted ? s(Object(U.g)(t)) : e === Ct.a.downvoted && s(Object(U.d)(t))
				}
			}), ps = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return i.a.createElement("button", {
					className: Object(l.a)($t.a.voteButton, $t.a.upVoteButton, {
						[$t.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": es._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, i.a.createElement(xt.a, {
					className: $t.a.voteIcon
				}))
			}, hs = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return i.a.createElement("button", {
					className: Object(l.a)($t.a.voteButton, $t.a.downVoteButton, {
						[$t.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": es._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, i.a.createElement(St.a, {
					className: $t.a.voteIcon
				}))
			}, bs = e => {
				let {
					score: t
				} = e;
				return i.a.createElement("div", {
					className: $t.a.score
				}, Object(gt.b)(t))
			}, vs = e => {
				let {
					children: t
				} = e;
				return i.a.createElement("div", {
					className: $t.a.prompt
				}, t)
			}, gs = () => i.a.createElement(vs, null, es._("Connection issues", null, {
				hk: "hIrnJ"
			})), ws = () => i.a.createElement(vs, null, es._("Tuning...", null, {
				hk: "3dG7Ks"
			})), Cs = () => i.a.createElement(vs, null, es._("Broadcast paused", null, {
				hk: "jxvku"
			})), fs = e => {
				let {
					onClickReplay: t,
					onClickShare: s
				} = e;
				return i.a.createElement(vs, null, i.a.createElement("div", {
					className: $t.a.promptButtonSet
				}, i.a.createElement(Jt, {
					onClick: t
				}), i.a.createElement(zt, {
					onClick: s
				})))
			}, _s = e => {
				let {
					onClickAward: t
				} = e;
				return i.a.createElement(vs, null, i.a.createElement("div", {
					className: $t.a.awardPromptWrapper
				}, i.a.createElement("div", {
					className: $t.a.awardPromptLabel
				}, es._("Award this broadcast to give it more airtime", null, {
					hk: "20jmEz"
				})), i.a.createElement(Zt, {
					onClick: t
				})))
			};
			var Ss = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				xs = s.n(Ss);
			const {
				fbt: Es
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Os = (e, t) => {
				let {
					currentStreamId: s
				} = t;
				return s ? Object(J.k)(e, s) : void 0
			}, ks = Object(d.c)({
				currentStream: Os,
				inGoldRpanLivePreview: le.a,
				inStreamingSubredditIntegration: G.b,
				inStreamingUiRefreshViewer: G.c,
				inViewerFeedTheMeter: (e, t) => Object(G.d)(e, t, Os),
				isApiError: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(me.d)(e, s)
				},
				isBatchApiError: me.f,
				isBatchPending: me.g,
				isConfigError: me.h,
				isIntroInProgress: z.b,
				isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
				lastBatchApiRequestTs: me.j,
				recommendedViewerSubredditOptions: me.k
			});
			class Ns extends n.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), E.o)
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
							settingChange: ce.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: ce.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ce.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === ce.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ce.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === ce.a.Volume && s && s.handleMouseUp(e), this.setState({
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
						t && (e("".concat(ae.a.redditUrl).concat(t.share_link)), s(), r(Object(U.f)(t)))
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
						inGoldRpanLivePreview: t,
						inStreamingSubredditIntegration: s,
						isIntroInProgress: r,
						isLive: a,
						isUnavailable: n,
						onHide: o,
						onReport: c,
						onToggleMenu: d,
						sendEvent: m
					} = this.props, u = e && e.post.id;
					return i.a.createElement("div", {
						className: Object(l.a)(Xt.a.overlay, {
							[Xt.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !r && i.a.createElement("div", {
						className: Xt.a.overlayTop
					}, s && this.renderRecommendedViewerSubreddit(), e && !n && i.a.createElement(i.a.Fragment, null, !s && this.renderTitleContainer(), i.a.createElement(Kt, {
						onClick: this.onCopyLink
					}), i.a.createElement(qt, {
						onClick: d,
						onHideClick: o,
						onReportClick: c
					}))), t && e && !r && !n && !!u && i.a.createElement(Be, {
						className: Xt.a.awardOverlaySpectacle,
						commentsPageKey: Object(ne.a)(u)
					}), s && e && !r && !n && i.a.createElement("div", {
						className: Xt.a.overlayTitle
					}, this.renderTitleContainer()), i.a.createElement("div", {
						className: Xt.a.overlayCenter
					}, this.getContent()), e && !r && !n && i.a.createElement("div", {
						className: Xt.a.overlayBottom
					}, i.a.createElement(yt, {
						currentStreamId: e.post.id,
						isLive: a,
						sendEvent: m
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inGoldRpanLivePreview: t,
						inViewerFeedTheMeter: s,
						isIntroInProgress: r,
						isLive: a,
						isUnavailable: n,
						onHide: o,
						onReport: c,
						onSelectSubreddit: d,
						onToggleMenu: m,
						recommendedViewerSubredditOptions: u,
						related: p,
						sendEvent: h,
						subreddit: b
					} = this.props;
					if (r || !e || n) return null;
					const v = e && e.post.id;
					return i.a.createElement("div", {
						className: Object(l.a)($t.a.overlay, {
							[$t.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, t && e && !r && !n && !!v && i.a.createElement(Be, {
						className: Xt.a.awardOverlaySpectacle,
						commentsPageKey: Object(ne.a)(v)
					}), s && i.a.createElement(st, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), i.a.createElement("div", {
						className: $t.a.overlayTop
					}, i.a.createElement("div", {
						className: $t.a.overlayTopLeft
					}, i.a.createElement("div", {
						className: $t.a.meta
					}, i.a.createElement(ts, {
						live: a,
						subredditMenu: i.a.createElement(as, {
							onSelect: d,
							related: p,
							subreddit: b,
							subreddits: u
						})
					}), i.a.createElement(ns, {
						text: e.post.title
					}), i.a.createElement(is, {
						broadcast: e,
						live: a
					}))), i.a.createElement("div", {
						className: $t.a.overlayTopRight
					}, i.a.createElement(ms, {
						onClick: m,
						onHideClick: o,
						onReportClick: c
					}), i.a.createElement(ds, {
						onClick: this.onCopyLink
					}), i.a.createElement("div", {
						className: Object(l.a)({
							[$t.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, i.a.createElement(us, {
						broadcast: e,
						sendEvent: h
					})))), i.a.createElement("div", {
						className: $t.a.overlayBottom,
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
						onPlayPauseToggle: a,
						onVideoPositionUpdate: n,
						setVolume: o,
						toggleMute: c,
						videoCurrentTime: d,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? $t.a.controls : "", p = e || this.isVisible();
					return i.a.createElement("div", {
						className: u
					}, i.a.createElement(ht, {
						isLive: t,
						isMuted: s,
						isPaused: r,
						isVisible: p,
						onPlayPauseToggle: a,
						onVideoPositionUpdate: n,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: o,
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
						handleGiveAward: s,
						isApiError: r,
						isBatchApiError: a,
						isBatchPending: n,
						isConfigError: o,
						isIntroInProgress: c,
						isLoading: d,
						isMuted: l,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: h,
						showErrorPrompt: b,
						showStreamEndedPrompt: v,
						toggleMute: g
					} = this.props;
					if (b || c && o || t && r || !t && a) return i.a.createElement(gs, null);
					if (c) return i.a.createElement("div", {
						className: Xt.a.intro
					}, i.a.createElement(Gt, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !a && !n && p) return null;
					if (d) return i.a.createElement(ws, null);
					if (e && e.stream.state === de.b.DISCONNECTED) return i.a.createElement(Cs, null);
					if (v) return i.a.createElement(fs, {
						onClickReplay: h,
						onClickShare: this.onCopyLink
					});
					const w = e && e.meter && e.estimated_remaining_time < Q;
					return u && w ? i.a.createElement(_s, {
						onClickAward: s
					}) : null
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: r
					} = this.props;
					let a = "",
						n = "";
					"home" === s ? (a = "All", n = "All") : "r/popular" === s ? (a = "Popular", n = "r/popular") : r ? (a = r.replace(/^r\//, ""), n = r) : (a = "All", n = "All");
					const o = t.filter(e => e.prefixedName !== n);
					return i.a.createElement("div", {
						className: Xt.a.menuContainer
					}, i.a.createElement(dt, {
						label: a,
						onSelect: e,
						subreddits: o
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return i.a.createElement("div", {
						className: Xt.a.titleContainer
					}, i.a.createElement("h1", {
						className: Xt.a.videoTitle
					}, e.post.title), !t && i.a.createElement("div", {
						className: Xt.a.RecordedLabel
					}, Es._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(xs.a.ControlVolume)) return !0;
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
						isBatchPending: a,
						isConfigError: n,
						isIntroInProgress: o,
						isLoading: c,
						isMuted: d,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: h,
						toggleMute: b
					} = this.props;
					return p || o && n || t && s || !t && r ? i.a.createElement("div", {
						className: Xt.a.prompt
					}, Es._("Connection issues", null, {
						hk: "24LpRV"
					})) : o ? i.a.createElement("div", {
						className: Xt.a.intro
					}, i.a.createElement(Gt, {
						isMuted: d,
						onToggle: b
					})) : l || !t && !r && !a && m ? null : c ? i.a.createElement("div", {
						className: Xt.a.prompt
					}, Es._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === de.b.DISCONNECTED ? i.a.createElement("div", {
						className: Xt.a.prompt
					}, Es._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? i.a.createElement("div", {
						className: Xt.a.prompt
					}, i.a.createElement("div", {
						className: Xt.a.promptButtonSet
					}, i.a.createElement(Jt, {
						onClick: u
					}), i.a.createElement(zt, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var ys = Object(o.b)(ks, (e, t) => ({
				copyLink: t => e(Object(oe.D)(t)),
				onHide: () => {
					t.currentStreamId && (e(Object(oe.X)(t.currentStreamId, !0, !0, !0)), e(y(t.currentStreamId)))
				},
				handleGiveAward: () => {
					t.currentStreamId && e(Object(ie.d)(t.currentStreamId))
				}
			}))(Ns);
			Object(O.a)(E.r);
			const Is = Object(O.a)(E.z),
				Ls = (e, t) => async (s, r) => {
					const a = r(),
						n = Date.now(),
						i = e.map(e => Object(J.k)(a, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(n),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await Ps(i, t)
				}, Ps = (e, t) => Promise.all(e.map(e => js(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), js = e => new Promise((t, s) => {
					const r = new Image;
					r.onload = () => t(), r.onerror = () => s(), r.src = e
				}).then(() => !0, () => !1);
			var Ts = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				As = s.n(Ts);
			const Ms = Object(d.c)({
				isIntroInProgress: z.b,
				previewUrl: (e, t) => {
					let {
						currentStream: s
					} = t;
					return s ? Object(J.i)(e, {
						streamId: s.post.id
					}) : void 0
				}
			});
			class Vs extends n.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: r
					} = this.props, a = [];
					e && a.push(e.post.id), s && a.push(s.post.id), r && a.push(r.post.id), a.length > 0 && t(a)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: r,
						previousStream: a
					} = this.props, n = [];
					t && this.isStreamChanged(t, e.currentStream) && n.push(t.post.id), a && this.isStreamChanged(a, e.previousStream) && n.push(a.post.id), s && this.isStreamChanged(s, e.nextStream) && n.push(s.post.id), n.length > 0 && r(n)
				}
				render() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						previewUrl: s
					} = this.props, r = e && e.meter && e.estimated_remaining_time < ee || !s, a = !r && !t && s;
					return i.a.createElement("div", {
						className: As.a.staticContainer
					}, r && i.a.createElement("div", {
						className: As.a.tvNoise,
						"aria-label": g.fbt._("video static", null, {
							hk: "3FA8fk"
						})
					}), a && i.a.createElement("div", {
						className: As.a.previewContainer,
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
			var Rs = Object(o.b)(Ms, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, r) => {
						const a = await s(Ls(e, t));
						s(Is(a))
					})(t))
				}))(Vs),
				Ds = s("./src/lib/constants/index.ts"),
				Bs = s("./src/lib/makeDraftKey/index.ts"),
				Fs = s("./src/reddit/actions/page.ts"),
				Ws = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Hs = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Us = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Xs = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Ks = s("./src/reddit/components/GildModal/Loader.tsx"),
				Gs = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/selectors/posts.ts")),
				Ys = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				qs = s.n(Ys);
			const Js = Object(o.b)(() => Object(d.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Gs.N)(e, {
							postId: s
						})
					}
				})),
				zs = ["Center", "Left", "Right"],
				Zs = ["Low", "Mid", "High"],
				Qs = () => Math.floor(800 * Math.random()),
				$s = e => e[Math.floor(Math.random() * e.length)],
				er = e => {
					const t = $s(zs),
						s = $s(Zs),
						r = be(e);
					return qs.a["award_".concat(r, "Tier_").concat(s).concat(t)]
				};
			class tr extends n.Component {
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
								icon: a,
								coinPrice: n
							} = e[s];
							return {
								coinPrice: n,
								count: r,
								iconUrl: a.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						r = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: a
						} = e;
						for (let n = 0; n < s; n++) {
							const s = "".concat(Qs(), "ms"),
								o = er(t),
								c = i.a.createElement("img", {
									key: "".concat(e.id, "-").concat(n),
									className: Object(l.a)(qs.a.award, o),
									src: a,
									style: {
										animationDelay: s
									}
								});
							r.push(c)
						}
					}), i.a.createElement("div", {
						"aria-role": "presentation",
						className: qs.a.awardBubbler
					}, r)
				}
			}
			var sr = Js(tr),
				rr = s("./src/reddit/models/PostDraft/index.ts"),
				ar = s("./src/reddit/selectors/gild.ts"),
				nr = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				ir = s.n(nr);
			const or = Object(d.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const r = Object(Xs.b)(s);
					return Object(ar.c)(e, r)
				},
				isDisabled: (e, t) => Object(J.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: ft.H,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(Gs.N)(e, {
						postId: s
					})
				},
				language: ft.P
			});
			class cr extends n.Component {
				constructor(e) {
					super(e), this.onChatClick = () => {
						this.props.sendEvent(Object(U.c)(this.props.postId))
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
						isPostDataLoaded: a,
						language: n,
						location: o,
						openLoginModal: c,
						openRegisterModal: d,
						sendEvent: m,
						subredditId: u
					} = this.props, p = Object(ne.a)(e), h = Object(Bs.a)(rr.c.replyToPost, e);
					return s ? i.a.createElement("div", {
						className: Object(l.a)(ir.a.streamingChat, ir.a.prompt)
					}, g.fbt._("Chat has been disabled", null, {
						hk: "3139v6"
					})) : a ? i.a.createElement("div", {
						"aria-label": g.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: ir.a.streamingChat,
						onClick: this.onChatClick
					}, i.a.createElement(Hs.a, {
						className: ir.a.chatScroller,
						emptyStateClassName: ir.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: u,
						commentsPageKey: p
					}), r && i.a.createElement(Us.a, {
						key: "chatCommentsForm",
						language: n,
						postId: e,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: m,
						isLivestreaming: !0
					}), i.a.createElement(sr, {
						postId: e
					}), !r && i.a.createElement(Ws.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						language: n,
						location: o,
						openLoginModal: c,
						openRegisterModal: d,
						origin
					}), t && i.a.createElement(Ks.a, null)) : i.a.createElement("div", {
						className: Object(l.a)(ir.a.streamingChat, ir.a.prompt)
					}, g.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var dr = Object(o.b)(or, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(Fs.q)(s, void 0, {
							sort: Ds.r.CHAT
						}, Ds.r.CHAT)),
						openLoginModal: () => e(Object(u.e)()),
						openRegisterModal: () => e(Object(u.f)())
					}
				})(cr),
				lr = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				mr = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				ur = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				pr = s.n(ur);
			const hr = e => {
				let {
					isNext: t,
					onClick: s,
					stream: r
				} = e;
				return i.a.createElement("div", {
					className: Object(l.a)(pr.a.switchContainer, t ? pr.a.switchContainerNext : pr.a.switchContainerPrevious)
				}, i.a.createElement("button", {
					className: pr.a.switchButton,
					disabled: !r,
					onClick: s,
					"aria-label": t ? g.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : g.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, i.a.createElement("div", {
					className: pr.a.streamThumbnail,
					style: r ? {
						backgroundImage: "url(".concat(r.stream.thumbnail, ")")
					} : {}
				}), t ? i.a.createElement(mr, {
					className: pr.a.arrowIcon
				}) : i.a.createElement(lr, {
					className: pr.a.arrowIcon
				})))
			};
			var br = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(hr, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), i.a.createElement(hr, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				vr = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				gr = s.n(vr);
			const wr = Object(d.c)({
					currentStream: J.c,
					currentStreamStartTime: J.d,
					currentHlsUrl: J.b,
					inStreamingSubredditIntegration: G.b,
					inViewerFeedTheMeter: (e, t) => Object(G.d)(e, t, J.c),
					isIntroInProgress: z.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isOverlayOpen: q.h,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(H.g)(s || "")
					},
					lastChatActivityUtcTs: z.c,
					nextStream: J.f,
					nextTopStream: J.g,
					playbackState: J.h,
					previousStream: J.j,
					volume: Y.b
				}),
				Cr = Object(o.b)(wr, (e, t) => ({
					closeLocation: () => e(Object(c.b)(t.location.state[B.a.CloseLocation])),
					fetchPostForStream: t => e(Object(x.a)(t)),
					subscribeConfig: () => e(j.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(j.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(j.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: t => e(Object(M.j)(t, void 0, !0)),
					onStatsSubscribe: t => e(j.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(j.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(p.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(p.b)(t)),
					removeStreamFromHistory: t => e(y(t)),
					setNewCorrelationId: () => e(Object(T.b)()),
					setIntroFinishedStatus: t => e(Object(T.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(A.b)({
						isMuted: t
					})),
					setVideoVolume: t => e(S.e(t)),
					updateVideoTimestamp: (t, s) => e(L({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(N(e))
					})(t)),
					resetHistory: () => e(I())
				}));
			class fr extends n.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = i.a.createRef(), this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = C()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: r
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && r(t.post.id, e)
					}, E.p), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = C()(() => {
						const {
							nextStream: e
						} = this.props;
						e && this.goToStream(e)
					}, E.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = C()(() => {
						const {
							previousStream: e
						} = this.props;
						e && this.goToStream(e)
					}, E.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(W.g)(e.target) ? e.stopPropagation() : e.keyCode === F.a.ArrowRight ? this.onNextStream() : e.keyCode === F.a.ArrowLeft && this.onPreviousStream()
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
						this.props.sendEvent(Object(U.h)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === J.a.LIVE || this.props.playbackState === J.a.VOD, this.state = {
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
					e.classList.add(gr.a.focusVisible), Object(_.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, f(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(X.n)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isOverlay: r,
						isOverlayOpen: a,
						isReportFlowOpen: n,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: o,
						onStatsSubscribe: c,
						playbackState: d,
						related: l,
						subreddit: m,
						subscribeConfig: u,
						subscribeStreams: p
					} = this.props;
					if (r || a === e.isOverlayOpen || (a ? (this.setState(e => {
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
						}), u().then(e => this.unsubscribeConfig = e), p().then(e => this.unsubscribeStreams = e), t && this.isCurrentStreamWatchable() && (i(t.post.id).then(e => this.unsubscribeHeartbeat = e), c(t.post.id).then(e => this.unsubscribeStats = e)), o().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (l || m) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !Sr(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || d === J.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), n && this.state.isVideoPaused && this.setState({
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
						inViewerFeedTheMeter: r,
						isIntroInProgress: a,
						isMuted: n,
						isOverlay: o,
						isReportFlowOpen: c,
						location: d,
						nextStream: m,
						playbackState: u,
						previousStream: p,
						related: h,
						sendEvent: b,
						subreddit: v,
						volume: g
					} = this.props, {
						videoCurrentTime: w,
						videoTotalTime: C
					} = this.state, f = e && !e.post.subreddit, _ = e && e.meter && 10 * Math.round(e.estimated_remaining_time / 10), S = r && e && e.estimated_remaining_time < $ && !a, x = void 0 !== _ && _ >= 0 && S ? gr.a["meterCritical".concat(_)] : void 0;
					return i.a.createElement("div", {
						className: Object(l.a)(gr.a.theaterContainer, {
							[gr.a.overlay]: o
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, i.a.createElement("div", {
						className: Object(l.a)(gr.a.panesWrapper, {
							[gr.a.initialized]: !a
						})
					}, i.a.createElement("div", {
						className: Object(l.a)(gr.a.pane, gr.a.leftPane)
					}, i.a.createElement("div", {
						className: gr.a.videoContainer
					}, (this.state.isLoading || this.state.isError || S) && i.a.createElement(Rs, {
						previousStream: p,
						currentStream: e,
						nextStream: m
					}), s && i.a.createElement("div", {
						className: x
					}, i.a.createElement(V.a, {
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
					})), i.a.createElement(ys, {
						currentStreamId: e && e.post.id,
						isLoading: this.state.isLoading,
						isLive: u === J.a.LIVE,
						isMuted: n,
						isPaused: this.state.isVideoPaused,
						isUnavailable: u === J.a.UNAVAILABLE,
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
						videoTotalTime: C,
						volume: g
					}))), !a && i.a.createElement("div", {
						className: Object(l.a)(gr.a.pane, gr.a.rightPane)
					}, e && !f && i.a.createElement(dr, {
						location: d,
						postId: e.post.id,
						sendEvent: b,
						subredditId: e.post.subreddit.id
					}))), e && !a && i.a.createElement(br, {
						nextStream: m,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: p
					}), e && !a && o && i.a.createElement(_r, {
						onClick: this.onClose
					}), e && !a && c && i.a.createElement(R.a, {
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
					}), t && !e.live && 0 !== e.endSN && s === J.a.LIVE && r(t.post.id)
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
						setIntroFinishedStatus: a
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return a(!0), void this.setState(Object.assign({}, this.state, {
						isLoading: !!e
					}));
					e && r(Object(U.j)(e)), s !== J.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(U.k)(this.props.currentStream)), this.setState(Object.assign({}, this.state, {
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
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(U.e)(this.props.currentStream)))
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
						s && !e && !Object(z.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, E.k), this.setState(Object.assign({}, this.state, {
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
						const t = Object(H.c)(e),
							r = s ? "?related=".concat(s) : "";
						return "".concat(t).concat(r)
					}
					return Object(H.e)(e.post.id)
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
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), t(e.post.id), this.syncLocationWithCurrentStreamId(), s(Object(U.l)(e)), this.showOverlayAfterStreamSwitching())
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), E.n), this.setState({
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
					const a = !r || Object(H.a)(e.post.id) === r;
					s(this.getStreamLocation(e), a)
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
			const _r = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: gr.a.closeButton,
						onClick: t,
						"aria-label": g.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, i.a.createElement(K.a, {
						className: gr.a.closeIcon
					}))
				},
				Sr = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var xr = Cr(Object(D.c)(fr)),
				Er = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Or = s("./src/reddit/helpers/overlay/index.ts"),
				kr = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Nr = s.n(kr);
			const {
				fbt: yr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ir = Object(d.c)({
				isEnabled: G.a,
				isIntroInProgress: z.b,
				isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
				related: (e, t) => {
					let {
						location: s,
						match: r
					} = t;
					const n = a()([...Object(m.a)(s.search)]).related,
						i = r.params.subreddit;
					return "home" === n || "r/popular" === n ? n : "popular" === i ? "r/popular" : i ? void 0 : "home"
				}
			}), Lr = Object(o.b)(Ir, (e, t) => ({
				onOpenLoginModal: () => e(Object(u.e)()),
				onStreamByIdRequested: t => e(Object(p.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: r,
						useReplace: a
					} = s;
					const n = a ? c.c : c.b,
						i = r ? Object(Or.b)(t) : t;
					e(n(i))
				}
			}));
			class Pr extends i.a.Component {
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
						location: a,
						match: n,
						related: o
					} = this.props, {
						subreddit: c,
						streamId: d
					} = n.params;
					return e ? i.a.createElement("div", {
						className: Object(l.a)(Nr.a.rpanContainer, {
							[Nr.a.overlay]: r
						})
					}, i.a.createElement(xr, {
						isOverlay: !!r,
						location: a,
						onNavigation: this.onNavigation,
						related: o,
						streamIdFromPath: d,
						subreddit: c && "r/".concat(c)
					}), s && !t && i.a.createElement(v, null)) : i.a.createElement(jr, null)
				}
			}
			const jr = () => i.a.createElement("div", {
				className: Object(l.a)(Nr.a.rpanContainer, Nr.a.forbiddenScreen)
			}, i.a.createElement("h2", null, yr._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = Lr(Object(D.c)(Object(Er.b)(Pr)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return x
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "g", (function() {
				return L
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "j", (function() {
				return V
			})), s.d(t, "i", (function() {
				return R
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "h", (function() {
				return H
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "d", (function() {
				return X
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(a.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.reports.reported,
				v = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				w = e => e.publicAccessNetwork.history.visitOrder,
				C = e => e.publicAccessNetwork.hlsStreams,
				f = Object(r.a)(C, e => e.ended),
				_ = Object(r.a)(C, e => e.removed),
				S = Object(r.a)(e => e.publicAccessNetwork.models, f, _, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							a = B(r, o.b.ENDED) ? o.b.ENDED : r,
							n = s.stream.vod_accessible;
						return a === r && !0 === n ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: a,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							a = B(r, o.b.ENDED) ? o.b.ENDED : r,
							n = s.stream.vod_accessible;
						return a === r && !1 === n ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: a,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				x = (e, t) => {
					return S(e)[Object(i.g)(t)]
				},
				E = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), S, b, c.h, d.b, (e, t, s, r, a, c) => {
					if (c) {
						const n = [];
						if (e) {
							const t = Object(i.g)(e);
							s[t] && n.push(t)
						}
						const c = n.concat(t),
							d = [...new Set(c)],
							l = new Set([...r, ...a]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== o.b.KILLED && t.stream.state !== o.b.PURGED
						})
					}
					const d = new Set([...r, ...a]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== n.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.b.KILLED && e.stream.state !== o.b.PURGED).map(e => e.post.id)
				}),
				O = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, S, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return E(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				k = Object(r.a)(S, O, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === o.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				N = Object(r.a)(S, O, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				y = Object(r.a)(w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: a
					} = t;
					return O(e, {
						listingName: s || a,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				I = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, S, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: a
					} = t;
					return O(e, {
						listingName: s || a,
						streamIdFromPath: r
					})
				}, v, (e, t, s, r) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						n = a.find(e => e.stream.state === o.b.IS_LIVE);
					if (n) return n.post.id;
					const i = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				L = Object(a.a)(Object(r.a)(I, S, (e, t) => e ? t[e] : void 0)),
				P = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, I, b, c.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: a
					} = t;
					return O(e, {
						listingName: s || a,
						streamIdFromPath: r
					})
				}, (e, t, s, r, a) => !e || s.includes(e) || r.includes(e) ? t || a[0] : e),
				j = Object(r.a)(g, w, y, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(r.a)(g, w, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				A = Object(a.a)(Object(r.a)(P, S, (e, t) => e ? t[e] : void 0)),
				M = Object(a.a)(Object(r.a)(j, S, (e, t) => e ? t[e] : void 0)),
				V = Object(a.a)(Object(r.a)(T, S, (e, t) => e ? t[e] : void 0)),
				R = (Object(a.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, S, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
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
					return s ? x(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[o.b.NOT_STARTED]: 0,
					[o.b.PUBLISHED]: 1,
					[o.b.IS_LIVE]: 2,
					[o.b.DISCONNECTED]: 2,
					[o.b.ENDED]: 3,
					[o.b.KILLED]: 4,
					[o.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(r.a)(P, v, (e, t) => e && t.timestamps[e] || 0);
			var W;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(W || (W = {}));
			const H = Object(r.a)(P, S, h.b, (e, t, s) => {
					if (s) return W.INTRO;
					const r = e && t[e];
					if (!r) return W.UNAVAILABLE;
					const a = r.stream.state;
					return a === o.b.IS_LIVE || a === o.b.DISCONNECTED ? W.LIVE : a === o.b.ENDED && r.stream.vod_accessible ? W.VOD : W.UNAVAILABLE
				}),
				U = Object(r.a)(A, H, h.b, l.c, l.p, (e, t, s, r, a) => s ? r : e ? t === W.LIVE || t === W.VOD ? e.stream.hls_url : a : void 0),
				X = Object(r.a)(A, H, F, (e, t, s) => e ? t === W.LIVE ? e.broadcast_time : t === W.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(r.a)(i, n.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + a.a > Date.now()
		},
		"./src/reddit/selectors/experiments/goldRpanLivePreview.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.Z
				}) === r.gb.Enabled
			}
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.4d2c125327b23e021821.js.map