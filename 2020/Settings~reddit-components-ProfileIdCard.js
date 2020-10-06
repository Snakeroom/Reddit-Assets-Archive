// https://www.redditstatic.com/desktop2x/Settings~reddit-components-ProfileIdCard.882c4729d31b01c74cee.js
// Retrieved at 10/6/2020, 11:40:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings~reddit-components-ProfileIdCard"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, a) {
			"use strict";

			function n(e, t, a, n) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: a ? "UTC" : void 0
				}).format(r)
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/ImageInput/index.tsx"),
				i = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = a("./src/reddit/icons/svgs/NewPost/index.tsx"),
				l = a("./src/reddit/models/ApiRequestState/index.ts"),
				d = a("./src/reddit/components/EditableImage/index.m.less"),
				m = a.n(d);
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(l.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: a,
						editButtonClassName: n,
						isLoading: l,
						imageUrl: d
					} = this.props;
					return r.a.createElement("div", {
						className: Object(s.a)(m.a.Container, a)
					}, r.a.createElement("label", {
						className: m.a.HitBox
					}, r.a.createElement("span", {
						className: m.a.ImageContainer,
						role: "presentation"
					}, d ? r.a.createElement("img", {
						alt: e,
						className: m.a.Image,
						src: d
					}) : t), r.a.createElement(o.a, {
						className: m.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !l && r.a.createElement("div", {
						className: Object(s.a)(m.a.EditButton, n)
					}, r.a.createElement(c.a, {
						className: m.a.EditIcon
					}))), l && r.a.createElement(i.a, {
						className: m.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, a) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, a) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, a) {
			e.exports = {
				BannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				bannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				BannerImage: "_39u8lkB0jifV2dCyGxhTst",
				bannerImage: "_39u8lkB0jifV2dCyGxhTst",
				UserIcon: "M_wdt3XN_OW7h8RYbg38W",
				userIcon: "M_wdt3XN_OW7h8RYbg38W",
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				UserTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				userTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				PremiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				premiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				userName: "_2hgZVu2K-pvoghsBGGbJ7P",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ",
				CloseIcon: "t8u6KWjSIjLFBXsDU3u5M",
				closeIcon: "t8u6KWjSIjLFBXsDU3u5M",
				LoadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				SettingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				settingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				SettingsIcon: "_3EDNoLotHx3GB6fuK5G7wo",
				settingsIcon: "_3EDNoLotHx3GB6fuK5G7wo"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return ge
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./src/config.ts"),
				r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				i = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = a("./src/lib/lessComponent.tsx"),
				l = a("./src/reddit/components/Widgets/Base/index.tsx"),
				d = a("./src/reddit/controls/InternalLink/index.tsx"),
				m = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = a("./src/reddit/controls/OutboundLink/index.tsx"),
				p = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				g = a("./src/reddit/icons/svgs/Close/index.tsx"),
				f = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				x = a("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = a("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				I = a("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				h = a("./node_modules/react-redux/es/index.js"),
				_ = a("./node_modules/reselect/es/index.js"),
				v = a("./src/lib/humanizeDate/index.ts"),
				C = a("./src/lib/prettyPrintNumber/index.ts"),
				E = a("./src/lib/timeAgo/index.ts"),
				y = a("./src/reddit/contexts/InsideOverlay.tsx"),
				w = a("./src/reddit/icons/svgs/Cake/index.tsx"),
				P = a("./src/reddit/icons/svgs/Karma/index.tsx"),
				O = a("./src/reddit/icons/svgs/User/index.tsx"),
				N = a("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				j = a("./src/reddit/selectors/profile.ts"),
				B = a("./src/reddit/selectors/user.ts"),
				S = a("./src/reddit/actions/tooltip.ts"),
				L = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = a("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				U = a.n(k);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = c.a.div("Container", U.a),
				F = c.a.div("Body", U.a),
				D = c.a.h5("Title", U.a),
				W = c.a.span("Label", U.a);
			class M extends o.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: a,
						tooltip: n,
						tooltipId: r
					} = this.props, s = r && n ? {
						id: r,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(T, null, o.a.createElement(D, null, a), o.a.createElement(F, null, e, o.a.createElement(W, K({
						key: "label"
					}, s), t)), r && n && o.a.createElement(L.c, {
						caretOnTop: !0,
						tooltipId: r,
						text: n
					}))
				}
			}
			var R = Object(h.b)(null, e => ({
					toggleTooltip: t => e(Object(S.h)({
						tooltipId: t
					}))
				}))(Object(y.b)(M)),
				z = a("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				A = a.n(z);
			const H = Object(_.a)(N.a, j.j, (e, t) => {
					let {
						profileName: a
					} = t;
					return Object(B.mb)(e, a)
				}, (e, t, a) => ({
					awardeeKarma: a ? a.awardeeKarma : 0,
					awardKarmaExperimentEnabled: e,
					awarderKarma: a ? a.awarderKarma : 0,
					commentKarma: a ? a.commentKarma : 0,
					postKarma: a ? a.postKarma : 0,
					profileCreated: a && (a.createdUtc || a.created) || 0,
					subscribers: t && t.subscribers || 0,
					totalKarma: a ? a.totalKarma || a.postKarma + a.commentKarma : 0
				})),
				G = c.a.div("Container", A.a);

			function V(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var Z = Object(h.b)(H)(Object(y.b)(e => {
					const {
						awardeeKarma: t,
						awardKarmaExperimentEnabled: a,
						awarderKarma: n,
						profileCreated: s,
						isOverlay: i,
						commentKarma: c,
						postKarma: l,
						totalKarma: d,
						subscribers: m
					} = e, u = V(i, "karma"), p = V(i, "cakeday"), g = r.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [r.fbt._plural(l, "number", Object(C.b)(l, {
						displayFull: !0
					}))], {
						hk: "husfU"
					}), f = r.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [r.fbt._plural(c, "number", Object(C.b)(c, {
						displayFull: !0
					}))], {
						hk: "26iPTL"
					}), x = r.fbt._({
						"*": "{number} Awardee Karma",
						_1: "1 Awardee Karma"
					}, [r.fbt._plural(t, "number", Object(C.b)(t, {
						displayFull: !0
					}))], {
						hk: "2Ww5MR"
					}), b = r.fbt._({
						"*": "{number} Awarder Karma",
						_1: "1 Awarder Karma"
					}, [r.fbt._plural(n, "number", Object(C.b)(n, {
						displayFull: !0
					}))], {
						hk: "2F1chz"
					}), I = a ? "".concat(g, "\n").concat(f, "\n").concat(x, "\n").concat(b) : "".concat(g, "\n").concat(f);
					return o.a.createElement(G, null, o.a.createElement(R, {
						icon: o.a.createElement(P.a, {
							className: A.a.icon,
							key: "karma"
						}),
						label: Object(C.b)(d, {
							displayFull: !0
						}),
						title: r.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: u,
						tooltip: I
					}), o.a.createElement(R, {
						icon: o.a.createElement(w.a, {
							className: A.a.icon,
							key: "cakeDay"
						}),
						label: Object(v.a)(s, !0),
						title: r.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: p,
						tooltip: Object(E.d)(s)
					}), m > 0 && o.a.createElement(R, {
						icon: o.a.createElement(O.a, {
							className: A.a.icon,
							key: "followers"
						}),
						title: r.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(C.b)(m, {
							displayFull: !0
						})
					}))
				})),
				X = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				q = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Y = a("./src/reddit/components/ProfileIdCard/index.m.less"),
				J = a.n(Y),
				Q = a("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				$ = a.n(Q);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var te = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
				}
				return a
			};
			const ae = c.a.div("BannerWrapper", $.a),
				ne = c.a.wrapped(l.b, "Widget", $.a),
				re = c.a.h4("UserTitle", $.a),
				se = c.a.wrapped(f.a, "PremiumIcon", $.a),
				oe = c.a.div("Description", $.a),
				ie = e => {
					var {
						url: t
					} = e, a = te(e, ["url"]);
					return t ? o.a.createElement(d.a, ee({}, a, {
						className: $.a.userName,
						to: t
					})) : o.a.createElement("span", ee({}, a, {
						className: $.a.userName
					}))
				},
				ce = c.a.wrapped(b.a, "Actions", $.a),
				le = c.a.wrapped(g.a, "CloseIcon", $.a),
				de = c.a.wrapped(i.a, "SettingsLink", $.a),
				me = c.a.wrapped(x.a, "SettingsIcon", $.a),
				ue = c.a.wrapped(m.a, "LoadingIconStyled", $.a),
				pe = () => o.a.createElement(ue, {
					sizePx: 20
				});
			class ge extends o.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: a
					} = this.props;
					return e ? o.a.createElement(I.a, {
						topAwardIcon: t,
						recentAwardings: e,
						username: a
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: a,
						footer: s,
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOverlay: d,
						isOwnProfile: m,
						profileIcon: g,
						publicDescription: f,
						title: x,
						url: b,
						username: I,
						isDefaultIcon: h,
						isDeletingIcon: _,
						isDeletingBanner: v,
						onDeleteIcon: C,
						onDeleteBanner: E,
						editMode: y
					} = this.props, w = o.a.createElement(q.a, {
						iconUrl: g,
						isNSFW: l,
						isProfileIdCard: !0,
						userName: I
					});
					return o.a.createElement(ne, {
						className: a
					}, o.a.createElement(ae, null, o.a.createElement(X.a, {
						bannerUrl: t,
						isNSFW: l,
						userName: I
					}), y && t && (v ? o.a.createElement(pe, null) : o.a.createElement(le, {
						onClick: E
					}))), o.a.createElement("div", {
						className: J.a.SnooIconWrapper
					}, m || !g || l ? w : o.a.createElement(u.b, {
						isSponsored: !1,
						href: g,
						source: null
					}, w), y && !h && (_ ? o.a.createElement(pe, null) : o.a.createElement(le, {
						onClick: C
					}))), !y && m && o.a.createElement(de, {
						to: "/settings/profile"
					}, o.a.createElement(me, null)), x && o.a.createElement(re, null, x), o.a.createElement(ie, {
						url: b
					}, "u/".concat(I)), i && o.a.createElement(p.a, {
						className: J.a.adminIcon,
						title: r.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && o.a.createElement("a", {
						title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", I)], {
							hk: "3Fylv"
						}),
						href: "".concat(n.a.redditUrl, "/premium")
					}, o.a.createElement(se, null)), o.a.createElement(oe, null, f), o.a.createElement(Z, {
						profileName: I,
						isOverlay: d
					}), this.renderAwardedLastMonth(), o.a.createElement(ce, null, e), s)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, a) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./src/reddit/models/Image/index.tsx"),
				i = a("./src/reddit/components/EditableImage/index.tsx"),
				c = a("./src/reddit/models/User/index.ts"),
				l = a("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				d = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = a.n(d);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const a = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(a, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: a,
						hideNSFWPref: r,
						isNSFW: o,
						userName: l
					} = this.props, {
						isUpdating: d
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: "url(".concat(e, ")")
						}
					}) : null;
					return a && Object(c.e)(a) === l ? s.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, u) : o && r ? null : u
				}
			}
			t.a = Object(l.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, a) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./src/reddit/models/Image/index.tsx"),
				i = a("./src/reddit/components/EditableImage/index.tsx"),
				c = a("./src/reddit/components/UserIcon/index.tsx"),
				l = a("./src/reddit/models/User/index.ts"),
				d = a("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = a.n(m);
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const a = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(a, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: a,
						isNSFW: r,
						isProfileIdCard: o,
						userName: d
					} = this.props, {
						isUpdating: m
					} = this.state, p = s.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: a,
						isNSFW: r,
						userName: d
					});
					return t && Object(l.e)(t) === d ? s.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", d)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: o ? u.a.EditButton : void 0,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(d.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				s = a("./src/reddit/actions/preferences.ts"),
				o = a("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.i,
					hideNSFWPref: o.z
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, a) => e(Object(s.B)(t, a))
				}));
			t.a = c
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, a) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/components/SEOTitle/index.tsx"),
				i = a("./src/reddit/components/Widgets/Base/index.m.less"),
				c = a.n(i),
				l = function(e, t) {
					var a = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
					}
					return a
				};
			const d = s.a.div("WidgetBackground", c.a),
				m = s.a.wrapped(e => {
					var {
						children: t
					} = e, a = l(e, ["children"]);
					return r.a.createElement("div", a, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			class s extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							a = this.props.multiple ? [...t] : t[0];
						this.props.onChange(a), this.setState(() => ({
							value: a
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, a = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, s = a || n;
					return r.a.createElement("div", {
						className: e.className
					}, a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: a,
						tabIndex: e.tabIndex
					}), !s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), r.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), r.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), r.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, a) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				s = a.n(r);
			t.a = n.a.div("dynamicTwoCol", s.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings~reddit-components-ProfileIdCard.882c4729d31b01c74cee.js.map