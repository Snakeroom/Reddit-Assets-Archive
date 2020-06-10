// https://www.redditstatic.com/desktop2x/Settings~reddit-components-ProfileIdCard.27cdeea4e379714842db.js
// Retrieved at 6/10/2020, 7:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings~reddit-components-ProfileIdCard"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function a(e, t, n, a) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: a ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(r)
			}
			n.d(t, "a", (function() {
				return a
			}))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 19 19"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
					fill: "inherit"
				})),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				d = n("./src/reddit/components/EditableImage/index.m.less"),
				m = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
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
						className: n,
						editButtonClassName: a,
						isLoading: l,
						imageUrl: d
					} = this.props;
					return r.a.createElement("div", {
						className: Object(s.a)(m.a.Container, n)
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
						className: Object(s.a)(m.a.EditButton, a)
					}, r.a.createElement(c, {
						className: m.a.EditIcon
					}))), l && r.a.createElement(i.a, {
						className: m.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return xe
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				I = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				v = n("./node_modules/react-redux/es/index.js"),
				_ = n("./node_modules/reselect/es/index.js"),
				C = n("./src/lib/humanizeDate/index.ts"),
				E = n("./src/lib/prettyPrintNumber/index.ts"),
				y = n("./src/lib/timeAgo/index.ts"),
				P = n("./src/reddit/contexts/InsideOverlay.tsx"),
				O = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				N = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				j = n("./src/reddit/icons/svgs/User/index.tsx"),
				w = n("./src/reddit/selectors/profile.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				k = n.n(U);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const D = c.a.div("Container", k.a),
				W = c.a.div("Body", k.a),
				M = c.a.h5("Title", k.a),
				F = c.a.span("Label", k.a);
			class R extends o.a.Component {
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
						title: n,
						tooltip: a,
						tooltipId: r
					} = this.props, s = r && a ? {
						id: r,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(D, null, o.a.createElement(M, null, n), o.a.createElement(W, null, e, o.a.createElement(F, T({
						key: "label"
					}, s), t)), r && a && o.a.createElement(L.c, {
						caretOnTop: !0,
						tooltipId: r,
						text: a
					}))
				}
			}
			var K = Object(v.b)(null, e => ({
					toggleTooltip: t => e(Object(S.h)({
						tooltipId: t
					}))
				}))(Object(P.b)(R)),
				z = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				H = n.n(z);
			const A = Object(_.a)(w.j, (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(B.jb)(e, n)
				}, (e, t) => ({
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				G = c.a.div("Container", H.a);

			function V(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var Z = Object(v.b)(A)(Object(P.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						commentKarma: a,
						postKarma: s,
						totalKarma: i,
						subscribers: c
					} = e, l = V(n, "karma"), d = V(n, "cakeday"), m = r.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [r.fbt._plural(s, "number", Object(E.b)(s, !0))], {
						hk: "husfU"
					}), u = r.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [r.fbt._plural(s, "number", Object(E.b)(a, !0))], {
						hk: "26iPTL"
					});
					return o.a.createElement(G, null, o.a.createElement(K, {
						icon: o.a.createElement(N.a, {
							className: H.a.icon,
							key: "karma"
						}),
						label: Object(E.b)(i, !0),
						title: r.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: l,
						tooltip: "".concat(m, "\n").concat(u)
					}), o.a.createElement(K, {
						icon: o.a.createElement(O.a, {
							className: H.a.icon,
							key: "cakeDay"
						}),
						label: Object(C.a)(t, !0),
						title: r.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: d,
						tooltip: Object(y.d)(t)
					}), c > 0 && o.a.createElement(K, {
						icon: o.a.createElement(j.a, {
							className: H.a.icon,
							key: "followers"
						}),
						title: r.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(E.b)(c, !0)
					}))
				})),
				X = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				q = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Y = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				J = n.n(Y),
				Q = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				$ = n.n(Q);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var te = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const ne = c.a.div("BannerWrapper", $.a),
				ae = c.a.div("BannerImage", $.a),
				re = c.a.wrapped(l.a, "UserIcon", $.a),
				se = c.a.wrapped(d.b, "Widget", $.a),
				oe = c.a.h4("UserTitle", $.a),
				ie = c.a.wrapped(x.a, "PremiumIcon", $.a),
				ce = c.a.div("Description", $.a),
				le = e => {
					var {
						url: t
					} = e, n = te(e, ["url"]);
					return t ? o.a.createElement(m.a, ee({}, n, {
						className: $.a.userName,
						to: t
					})) : o.a.createElement("span", ee({}, n, {
						className: $.a.userName
					}))
				},
				de = c.a.wrapped(b.a, "Actions", $.a),
				me = c.a.wrapped(f.a, "CloseIcon", $.a),
				ue = c.a.wrapped(i.a, "SettingsLink", $.a),
				pe = c.a.wrapped(I.a, "SettingsIcon", $.a),
				ge = c.a.wrapped(u.a, "LoadingIconStyled", $.a),
				fe = () => o.a.createElement(ge, {
					sizePx: 20
				});
			class xe extends o.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						prefersReducedMotion: e,
						recentAwardings: t,
						username: n
					} = this.props;
					return t ? o.a.createElement(h.a, {
						prefersReducedMotion: e,
						recentAwardings: t,
						username: n
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: n,
						footer: s,
						isEditProfileImagesInlineEnabled: i,
						isEmployee: c,
						isGold: l,
						isNSFW: d,
						isOverlay: m,
						isOwnProfile: u,
						profileIcon: f,
						publicDescription: x,
						title: I,
						url: b,
						username: h,
						isDefaultIcon: v,
						isDeletingIcon: _,
						isDeletingBanner: C,
						onDeleteIcon: E,
						onDeleteBanner: y,
						editMode: P
					} = this.props, O = i ? o.a.createElement(q.a, {
						iconUrl: f,
						isNSFW: d,
						isProfileIdCard: !0,
						userName: h
					}) : o.a.createElement(re, {
						isNSFW: d,
						iconUrl: f,
						userName: h
					});
					return o.a.createElement(se, {
						className: n
					}, o.a.createElement(ne, null, i ? o.a.createElement(X.a, {
						bannerUrl: t,
						isNSFW: d,
						userName: h
					}) : t && o.a.createElement(ae, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), P && t && (C ? o.a.createElement(fe, null) : o.a.createElement(me, {
						onClick: y
					}))), o.a.createElement("div", {
						className: J.a.SnooIconWrapper
					}, u || !f || d ? O : o.a.createElement(p.a, {
						isSponsored: !1,
						href: f,
						source: null
					}, O), P && !v && (_ ? o.a.createElement(fe, null) : o.a.createElement(me, {
						onClick: E
					}))), !P && u && o.a.createElement(ue, {
						to: "/settings/profile"
					}, o.a.createElement(pe, null)), I && o.a.createElement(oe, null, I), o.a.createElement(le, {
						url: b
					}, "u/".concat(h)), c && o.a.createElement(g.a, {
						className: J.a.adminIcon,
						title: r.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), l && o.a.createElement("a", {
						title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", h)], {
							hk: "3Fylv"
						}),
						href: "".concat(a.a.redditUrl, "/premium")
					}, o.a.createElement(ie, null)), o.a.createElement(ce, null, x), o.a.createElement(Z, {
						profileName: h,
						isOverlay: m
					}), this.renderAwardedLastMonth(), o.a.createElement(de, null, e), s)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = n.n(d);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
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
					return n && Object(c.e)(n) === l ? s.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, u) : o && !r ? null : u
				}
			}
			t.a = Object(l.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = n.n(m);
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: n,
						isNSFW: r,
						isProfileIdCard: o,
						userName: d
					} = this.props, {
						isUpdating: m
					} = this.state, p = s.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: n,
						isNSFW: r,
						userName: d
					});
					return t && Object(l.e)(t) === d ? s.a.createElement(i.a, {
						altText: a.fbt._("{userName} avatar image", [a.fbt._param("userName", d)], {
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.i,
					hideNSFWPref: o.z
				}),
				c = Object(a.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.B)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i),
				l = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
					}
					return n
				};
			const d = s.a.div("WidgetBackground", c.a),
				m = s.a.wrapped(e => {
					var {
						children: t
					} = e, n = l(e, ["children"]);
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
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
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
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
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				s = n.n(r);
			t.a = a.a.div("dynamicTwoCol", s.a)
		}
	}
]);
//# sourceMappingURL=Settings~reddit-components-ProfileIdCard.27cdeea4e379714842db.js.map