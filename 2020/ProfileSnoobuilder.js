// https://www.redditstatic.com/desktop2x/ProfileSnoobuilder.d25e57bbb61b187f2822.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileSnoobuilder"], {
		"./assets/snoobuilder/Snoobuilder.json": function(e, t, s) {
			e.exports = s.p + "snoobuilder/Snoobuilder-42545b1fd678a83812fadae5a34355a1.json"
		},
		"./assets/snoobuilder/UnityLoader.js": function(e, t, s) {
			e.exports = s.p + "snoobuilder/UnityLoader-3544178c924aac8c5129f2d974d60dd7.js"
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var r, i = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						x = !o && !m && !u && !p && /linux/i.test(t),
						g = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !y && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, g ? (r.msedge = e, r.version = g) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: g
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? r = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, v && (r.version = v)) : i ? (r = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (r.version = v)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !o && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : E ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var O = "";
					r.windows ? O = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (r.osversion = O);
					var _ = !r.windows && O.split(".")[0];
					return y || d || "ipad" == i || o && (3 == _ || _ >= 4 && !w) || r.silk ? r.tablet = e : (w || "iphone" == i || "ipod" == i || o || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function i(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = r(e, (function(e) {
							var s = t - n(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, n, r) {
					var o = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (o = t(r));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = i, s.check = function(e, t, s) {
					return !o(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, i) {
					s = n ? (n = !1, e) : t(s, e, r, i)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), n(r(e), t, s)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(r(e, t), 1)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				i = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? n : o,
					c = arguments.length < 3;
				return d(e, i(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				r = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : r(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/pages/profileSnoobuilder.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileSnoobuilderRequested", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/actions/externalAccount.ts"),
				r = s("./src/reddit/actions/pages/profileShared.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				o = s("./src/reddit/actions/subreddit.ts");
			const a = e => async (t, s, a) => {
				const {
					params: d
				} = e, {
					profileName: c
				} = d, l = c.toLowerCase();
				await t(Object(i.d)(l)), await Promise.all([t(Object(r.c)(c)), t(Object(o.q)()), t(Object(n.o)(c))])
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.t)(),
				f = Object(o.c)({
					layout: m.L
				}),
				x = Object(i.b)(f);
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(p.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						s = d.g - t,
						n = l.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(p.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(d.g + d.q + d.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(d.r, "px) / 2);\n              }\n\n              .").concat(p.a.Component, ".").concat(p.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(d.g + d.q + d.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(x(h.a.wrapped(g, "Component", p.a)))
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				w = s("./src/reddit/models/Profile/index.ts"),
				E = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/selectors/userPrefs.ts"),
				C = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				k = s.n(S);
			const j = Object(x.t)({
					routeName: x.S,
					privateListingType: x.i
				}),
				L = Object(d.c)({
					isDropdownMenuOpen: e => Object(O.a)(e) === P,
					isOwnProfile: (e, t) => Object(_.J)(e, t.profileName),
					language: _.O,
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: N.b
				}),
				T = Object(m.a)(g.a),
				P = "profile-nav-menu-tooltip";
			t.a = j(Object(o.b)(L, e => ({
				toggleTooltip: t => e(Object(h.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					language: n,
					privateListingType: r,
					profileName: o,
					routeName: a,
					toggleTooltip: d,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: l
				} = e;
				return i.a.createElement("div", {
					className: k.a.container
				}, i.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: l ? f.u : 0,
					render: () => i.a.createElement(i.a.Fragment, null, B({
						language: n,
						profileName: o,
						isOwnProfile: s,
						routeName: a,
						privateListingType: r,
						isSnoovatar30Enabled: c
					}).map(e => i.a.createElement(R, e)), i.a.createElement("button", {
						className: Object(u.a)(k.a.mainLink, k.a.overflowMenuButton),
						id: P,
						onClick: () => d(P)
					}, i.a.createElement(y.a, null)), i.a.createElement(T, {
						className: k.a.dropdown,
						isOpen: t,
						tooltipId: P
					}, I({
						language: n,
						profileName: o,
						isOwnProfile: s,
						routeName: a,
						privateListingType: r
					}).map(e => i.a.createElement(A, e))))
				}))
			}));
			const R = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: n,
						url: r,
						internal: o
					} = e;
					return o ? i.a.createElement(v.a, {
						className: Object(u.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: s
						}),
						to: r
					}, n) : i.a.createElement("a", {
						className: Object(u.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: s
						}),
						href: r
					}, n)
				},
				A = e => {
					let {
						isActive: t,
						internal: s,
						key: n,
						url: r,
						showOnNarrow: o,
						text: d
					} = e;
					return s ? i.a.createElement(a.a, {
						className: Object(u.a)(k.a.dropdownLink, {
							[k.a.isActive]: t,
							[k.a.showOnNarrow]: !!o
						}),
						to: r,
						key: n,
						rel: "nofollow",
						role: "listitem"
					}, d) : i.a.createElement("a", {
						className: Object(u.a)(k.a.dropdownLink, {
							[k.a.showOnNarrow]: !!o
						}),
						href: r,
						key: n,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, d)
				},
				B = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: r,
						routeName: i,
						privateListingType: o,
						isSnoovatar30Enabled: a
					} = e;
					const d = r ? [{
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Saved,
						key: "profile.saved",
						text: Object(c.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					r ? (d.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), d.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.GivenGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					})) : d.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(s, "/gilded/")
					});
					const m = a ? [{
						internal: !0,
						isActive: i === p.zb.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(C.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: i === p.zb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(c.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: i === p.zb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(c.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: i === p.zb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(c.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...d]
				},
				I = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: r,
						routeName: i,
						privateListingType: o
					} = e;
					const a = r ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return r ? (a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: i === p.zb.PROFILE_PRIVATE && o === w.a.GivenGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), a) : [...a, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(s, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				u = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = s("./src/reddit/constants/posts.ts");
			const h = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				b = e => i.a.createElement(o.a, {
					className: e.className
				}, i.a.createElement(h, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), i.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), i.a.createElement(a.a, {
					profileName: e.profileName
				}), i.a.createElement(d.a, {
					profileName: e.profileName
				}), i.a.createElement(c.a, null, i.a.createElement(m.a, {
					profileName: e.profileName
				})), i.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			b.defaultProps = {
				isOverlay: !1
			}, t.a = b
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/raf/index.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i);
			class a extends o.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return o.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(r);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/take.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				g = s.n(x),
				v = s("./src/lib/lessComponent.tsx");
			const y = 10,
				w = v.a.wrapped(u.n, "TertiaryButton", g.a);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: n,
							pending: r
						} = this.props, i = !e || t && n ? Object(c.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(c.a)(s, "sidebar.widgets.expandableList.viewLess");
						return o.a.createElement(w, {
							onClick: this.onButtonClick
						}, r ? o.a.createElement(p.a, {
							sizePx: y
						}) : i)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: i,
						renderItem: a,
						title: d
					} = this.props, {
						expanded: c
					} = this.state, l = n.length > i || t, u = (!l || c ? n : r()(n, i)).map(e => a({
						item: e
					}));
					return o.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: d
					}, u, o.a.createElement(h.a, null, o.a.createElement(b.a, null, l && this.renderToggleButton())))
				}
			}
			E.defaultProps = {
				minimizedLength: l.Eb
			};
			const O = Object(d.c)({
				language: f.O
			});
			t.a = Object(a.b)(O)(E)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.a("Link", d.a);
			t.a = e => r.a.createElement(o.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: d.a.LinkContainer
			}, r.a.createElement("div", {
				className: d.a.Column
			}, r.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, c._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, c._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, c._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, c._("Reddit gifts", null, {
				hk: "2XziRN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, c._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, c._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, c._("Topics", null, {
				hk: "349RFt"
			}))), r.a.createElement("div", {
				className: d.a.Column
			}, r.a.createElement(l, {
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: d.a.Copyright
			}, c._("Reddit Inc © {year}. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(b);
			const x = Object(o.c)({
					currentUser: h.i,
					language: h.O,
					moderated: u.n,
					subscriptions: p.f,
					hasMoreModerated: u.d,
					loadMorePending: u.a
				}),
				g = Object(i.b)(x, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = g(e => {
				const {
					currentUser: t,
					language: s,
					moderated: n,
					profileName: i,
					subscriptions: o,
					hasMoreModerated: d,
					onLoadMore: l,
					loadMorePending: u
				} = e;
				if (0 === n.length) return null;
				const p = t && Object(m.f)(t).toLowerCase() === i.toLowerCase() ? Object(a.a)(s, "profile.moderatedSubredditsYours") : Object(a.a)(s, "profile.moderatedSubreddits"),
					h = function(e, t, s) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: s,
							sendEvent: () => void 0
						}))
					}(n, new Set(o), s);
				return r.a.createElement(c.a, {
					className: f.a.container,
					title: p,
					items: h,
					renderItem: v,
					hasMoreItems: d,
					onLoadMore: l,
					pending: u
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				h = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(h);
			const f = Object(a.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				x = Object(i.b)(f, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.e)(t.profileName, !0))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				g = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(o.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: b.a.meta
					}, r.a.createElement(m.c, null, r.a.createElement(m.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", r.a.createElement(m.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: n,
					onLoadMore: i,
					profileName: o
				} = e;
				return n && n.length ? r.a.createElement(l.a, null, r.a.createElement(c.a, {
					hasMoreItems: t,
					items: n,
					onLoadMore: i,
					pending: s,
					renderItem: g,
					title: Object(u.c)("Public custom feeds by u/".concat(Object(u.b)("username", o)))
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m),
				p = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, a.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, a.a.createElement(l.c, null, "Back to top"))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = s.n(x),
				v = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = d.e[1] + 24,
				O = b.f + 8 + 152 + 32 + 16,
				_ = O + E + 8,
				N = v.a.div("Container", g.a),
				C = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = w(e, ["className"]);
					return a.a.createElement(p, y({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", g.a),
				S = e => {
					let {
						children: t,
						className: s,
						isSticky: r
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[g.a.StickyStyles]: r
						})
					}, t)
				};
			class k extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > O
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							children: t,
							className: s,
							hideFooter: n
						}
					} = this, r = this.state.isAdSticky && !(!e && !t);
					return a.a.createElement(N, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(S, {
						isSticky: r
					}, e, t, !n && a.a.createElement(h.a, null)), !this.props.hideBackToTop && a.a.createElement(C, null))
				}
			}
			const j = Object(f.t)();
			t.a = j(k)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = s("./node_modules/lodash/isEqual.js"),
				p = s.n(u);
			const h = Object(o.b)(o.d, p.a);
			var b = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				x = s.n(f),
				g = s("./src/lib/lessComponent.tsx");
			const v = Object(o.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(b.r)(e, Object(b.m)(e, s))
				}
			}, h);
			t.a = Object(i.b)(v)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(a.a, {
					title: Object(l.c)("Trophy Case (".concat(Object(l.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: N
				})
			});
			const y = g.a.wrapped(m.a, "TrophyItem", x.a),
				w = g.a.div("TrophyIcon", x.a),
				E = g.a.h5("TrophyName", x.a),
				O = g.a.div("TrophyContent", x.a),
				_ = g.a.wrapped(c.f, "Description", x.a);

			function N(e) {
				let {
					item: t
				} = e;
				const s = r.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return r.a.createElement(y, {
					key: t.id
				}, r.a.createElement(w, null, t.url ? r.a.createElement(d.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), r.a.createElement(O, null, r.a.createElement(E, null, t.name), r.a.createElement(_, null, t.description)))
			}
		},
		"./src/reddit/components/Snoobuilder/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2m3i3Cf98M2LvLLdou3RXP"
			}
		},
		"./src/reddit/components/Snoobuilder/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n, r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/lodash/debounce.js"),
				l = s.n(c),
				m = s("./src/reddit/components/ResizeSensor/index.tsx");
			class u extends r.Component {
				constructor() {
					super(...arguments), this.id = "__ReactUnityWebGL__", this.resizeHandler = () => {
						if (!this.containerRef || !this.canvasRef) return;
						const {
							width: e,
							height: t
						} = this.containerRef.getBoundingClientRect();
						this.canvasRef.width = e, this.canvasRef.height = t
					}, this.handleResize = l()(this.resizeHandler, 100, {
						leading: !0
					}), this.setContainerRef = e => this.containerRef = e
				}
				componentDidMount() {
					this.props.unityContent.load(this.id, (e, t) => {
						0 === t && e.Module.canvas && (this.canvasRef = e.Module.canvas, this.canvasRef.style.display = "block")
					})
				}
				render() {
					const {
						className: e,
						style: t
					} = this.props;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						id: this.id,
						ref: this.setContainerRef,
						style: t,
						className: e
					}), i.a.createElement(m.a, {
						onResize: this.handleResize
					}))
				}
			}! function(e) {
				e[e.OFF = 0] = "OFF", e[e.ON = 1] = "ON"
			}(n || (n = {}));
			class p {
				constructor(e, t) {
					this.buildJsonPath = e, this.unityLoaderJsPath = t, this.loaderPromise = null
				}
				load(e, t) {
					this.loaderPromise || (this.loaderPromise = h(this.unityLoaderJsPath)), this.loaderPromise.then(() => {
						if (this.instance) return;
						UnityLoader.Error.didShowErrorMessage = !0;
						const s = t ? {
							onProgress: t
						} : {};
						this.instance = UnityLoader.instantiate(e, this.buildJsonPath, s)
					})
				}
				setFullscreen(e) {
					this.instance && this.instance.SetFullscreen(e)
				}
				sendMessage(e, t, s) {
					if (!this.instance) return;
					const n = [e, t];
					void 0 !== s && n.push(s), this.instance.SendMessage(...n)
				}
			}
			const h = e => new Promise(t => {
				const s = document.getElementsByTagName("head")[0],
					n = document.createElement("script");
				n.type = "text/javascript", n.async = !0, n.src = e, n.onload = () => {
					t()
				}, s.appendChild(n)
			});
			var b = s("./src/reddit/components/Snoobuilder/index.m.less"),
				f = s.n(b),
				x = s("./assets/snoobuilder/Snoobuilder.json"),
				g = s.n(x),
				v = s("./assets/snoobuilder/UnityLoader.js"),
				y = s.n(v);
			const w = Object(d.c)({}),
				E = Object(o.b)(w, (e, t) => ({}));
			class O extends i.a.PureComponent {
				constructor(e) {
					super(e), this.unityContent = new p("".concat(a.a.assetPath).concat(g.a), "".concat(a.a.assetPath).concat(y.a))
				}
				render() {
					return i.a.createElement("div", {
						className: f.a.wrapper
					}, i.a.createElement(u, {
						unityContent: this.unityContent,
						style: {
							width: "100%",
							height: "800px"
						}
					}))
				}
			}
			t.default = E(O)
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = i.a.div("WidgetBackground", d.a),
				m = i.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(a.c)({
				language: h.O
			});
			var f = Object(i.b)(b, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				w = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				O = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				N = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				S = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return T
			}));
			const j = e => r.a.createElement(x.a, {
					className: Object(c.a)(S.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: S.a.container
				}, e.isLoading ? r.a.createElement(y.a, {
					className: S.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: S.a.errorMsg
				}, e.errorMsg || Object(w.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(T, k({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(v.n, {
					className: S.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				L = Object(a.c)({
					hideNSFWPref: h.y,
					language: h.O
				}),
				T = Object(i.b)(L)(e => r.a.createElement("div", {
					className: S.a.communityItemContainer
				}, r.a.createElement(O.a, {
					widthRight: g.t
				}, r.a.createElement("div", {
					className: S.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: S.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(E.a, {
					className: S.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: S.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: S.a.communityName,
					to: Object(N.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(N.b)(e.name, e.type)), r.a.createElement("div", {
					className: S.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: S.a.subscriberCount
				}, Object(d.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(y.a, {
					className: Object(c.a)(S.a.communityCta, S.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(v.n, {
					className: Object(c.a)(S.a.communityCta, {
						[S.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(f, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: S.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/models/ExternalAccount/index.ts"),
				h = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				g = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				w = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = s.n(w);
			var O = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let i, o = t.username,
						a = "";
					return n !== p.a.Twitter ? null : (i = r.a.createElement(v.a, {
						className: E.a.twitterLogo
					}), a = Object(x.c)("View on Twitter"), o = "@".concat(t.username), r.a.createElement(y.a, null, r.a.createElement("span", {
						className: E.a.icon
					}, i), r.a.createElement(f.a, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, r.a.createElement("div", {
						className: E.a.linkTitle
					}, r.a.createElement("span", {
						className: E.a.name
					}, o), r.a.createElement(g.a, {
						className: E.a.linkIcon
					})), r.a.createElement("div", {
						className: E.a.linkDescription
					}, a))))
				},
				_ = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				N = s.n(_);
			const C = Object(o.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(h.c)(e, {
							profileName: s.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(b.cb)(e, {
							userName: s.name
						}) : null
					}
				}),
				S = Object(i.b)(C, e => ({
					trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(d.b)(S(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? r.a.createElement(a.a, null, r.a.createElement(c.b, null, r.a.createElement(c.a, null, r.a.createElement(u.c, null, "Connected accounts")), s && r.a.createElement("div", {
					className: N.a.account
				}, r.a.createElement(O, {
					provider: p.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				f = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(w.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(w.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = E(e);
					return Object(y.f)(t)
				},
				N = e => {
					const t = O(e);
					return Object(y.f)(t)
				};
			var C = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(C);
			const k = Object(m.t)(),
				j = Object(i.b)(() => Object(o.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(g.m)(e, {
								subredditId: s
							}),
							r = Object(v.Q)(e);
						return n || r
					},
					nigtmode: v.Q,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(f.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = N(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: i,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? S.a.widgetContentOnly : S.a.widgetContent, h = !n && this.props.styles, f = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!o,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: o,
						style: f
					}, d && r.a.createElement("div", {
						className: S.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetTitle, l)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), i), r.a.createElement("div", {
						className: Object(a.a)(p, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.n, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, r.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = k(j(Object(d.a)(Object(l.b)(L))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = s.n(r);
			t.a = n.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: i,
					gutter: a
				} = e, m = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", c({
					className: Object(o.a)(d.a.expandRightContainer, t)
				}, m), r.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: i,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(d);
			const l = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || Object(a.c)("Sorry, there doesn't seem to be anything here.")), r.a.createElement(i.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.a.createElement(o.c, null, "Go Home")))
				},
				m = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || Object(a.c)("Sorry, You do not have permission to view this page.")), r.a.createElement(i.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.a.createElement(o.c, null, "Go Home")))
				}
		},
		"./src/reddit/pages/ProfileSnoobuilder/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/models/ContentGate.ts"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				m = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				u = s("./src/reddit/layout/page/Listing/index.tsx"),
				p = s("./src/reddit/pages/ErrorPages/index.tsx"),
				h = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const f = s("./src/reddit/components/Snoobuilder/index.tsx").default,
				x = Object(a.t)(),
				g = Object(o.a)(a.B, b.T, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(h.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t, s, n) => ({
					over18Prefs: t,
					isOwnProfile: e,
					isProfileNSFW: !!n && n.isNSFW,
					profileName: s
				})),
				v = Object(i.b)(g, (e, t) => ({}));
			class y extends r.a.Component {
				render() {
					const {
						over18Prefs: e,
						isOwnProfile: t,
						isProfileNSFW: s,
						pageLayer: n,
						profileName: i
					} = this.props;
					return n ? 403 === n.status ? r.a.createElement(p.a, null) : 404 === n.status ? r.a.createElement(p.b, null) : i ? e || !s || t ? r.a.createElement(u.a, {
						className: this.props.className,
						contentNavBar: r.a.createElement(l.a, {
							profileName: i
						}),
						content: r.a.createElement(f, null),
						sidebar: r.a.createElement(m.a, {
							hideBackToTop: !0,
							profileName: i
						})
					}) : r.a.createElement(c.a, {
						subredditName: i,
						contentGateType: d.a.Nsfw
					}) : null : null
				}
			}
			t.default = x(v(y))
		}
	}
]);
//# sourceMappingURL=ProfileSnoobuilder.d25e57bbb61b187f2822.js.map