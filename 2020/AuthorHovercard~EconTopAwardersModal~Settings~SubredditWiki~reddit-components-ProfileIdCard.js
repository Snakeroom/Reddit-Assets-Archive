// https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard.5e213f4bf451f669a176.js
// Retrieved at 10/22/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"], {
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/actions/chat/toggle.ts"),
				i = a("./src/reddit/components/TrackingHelper/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/helpers/trackers/authorHovercard.ts");
			const d = e => {
				let {
					onStartChat: t,
					children: a,
					className: n,
					sendEvent: s,
					contextId: o
				} = e;
				return r.a.createElement(c.i, {
					onClick: () => {
						t(), s(Object(l.b)(o))
					},
					className: n
				}, a)
			};
			d.displayName = "ChatButton";
			const m = Object(s.b)(null, (e, t) => {
				let {
					contextId: a,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(n, a))
					}
				}
			});
			t.a = m(Object(i.c)(d))
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
				return f
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
			class f extends r.a.PureComponent {
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
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/config.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = a.n(i);
			const {
				fbt: l
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class d extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: a
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: i
					} = t, d = n.description ? n.description : n.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: "".concat(s.a.oldRedditUrl, "/user/").concat(a, "/gilded")
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, "+".concat(Object(o.b)(i - 1)))), r.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", n.name), l._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = d
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				s = a("./src/reddit/actions/preferences.ts"),
				o = a("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.i,
					hideNSFWPref: o.A
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, a) => e(Object(s.B)(t, a))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/Button/index.tsx"),
				i = a("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = a("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				d = a.n(l);
			const {
				fbt: m
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: a,
					isOwnProfile: n,
					onClick: l
				} = e;
				return r.a.createElement(o.q, {
					onClick: l,
					className: Object(s.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !a && n,
						[d.a.compactButtonLayout]: t
					})
				}, a ? r.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : r.a.createElement("div", {
					className: d.a.shirtIcon
				}), a ? m._("Style your avatar", null, {
					hk: "3u6CsM"
				}) : n ? m._("Create an avatar", null, {
					hk: "3RnRnc"
				}) : m._("Create your own avatar", null, {
					hk: "2fg3g5"
				}), a ? r.a.createElement("div", {
					className: d.a.chevronIcon
				}) : r.a.createElement(i.a, {
					className: d.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, a) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = a("./src/reddit/icons/svgs/Close/index.tsx"),
				i = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = a.n(c),
				d = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = a.n(d);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: a,
					username: n,
					editMode: c,
					isDeletingBanner: d,
					onDeleteBanner: u
				} = e;
				return r.a.createElement("div", {
					className: l.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: a,
					userName: n
				}), c && t && (d ? r.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : r.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: u
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./src/lib/timeAgo/index.ts"),
				i = a("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
				}
				return a
			};
			t.a = function(e) {
				var {
					className: t,
					shouldDisplaySnoovatar: a,
					url: n,
					userCreated: d,
					username: m
				} = e, u = l(e, ["className", "shouldDisplaySnoovatar", "url", "userCreated", "username"]);
				const p = a ? s.fbt._("{username} · {time since account creation}", [s.fbt._param("username", "u/".concat(m)), s.fbt._param("time since account creation", Object(o.d)(d, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : "u/".concat(m);
				return n ? r.a.createElement(i.a, c({}, u, {
					className: t,
					to: n
				}), p) : r.a.createElement("span", c({}, u, {
					className: t
				}), p)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/controls/InternalLink/index.tsx"),
				l = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = a("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				m = a("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				u = a("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				f = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				v = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				x = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				g = a.n(x);
			const C = 25;

			function _(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function I(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const b = _("particleDelay", g.a),
				h = _("particleX", g.a),
				N = _("particleFloat", g.a),
				E = () => {
					const e = I(h),
						t = I(N),
						a = I(b);
					return Object(i.a)(g.a.particle, e, t, a)
				};
			class P extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < C; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: g.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: "".concat(E())
					})
				}
			}
			var w = P,
				O = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				U = a.n(O);
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: a,
					currentUserHasSnoovatar: r,
					editMode: x,
					isDeletingBanner: C,
					isEmployee: _,
					isGold: I,
					isNSFW: b,
					isOwnProfile: h,
					onClickSnoovatar: N,
					onDeleteBanner: E,
					prefersReducedAnimations: P,
					snoovatarUrl: O,
					title: L,
					userCreated: j,
					username: y,
					url: B
				} = e;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(f.a, {
					bannerBackgroundImage: t,
					editMode: !!x,
					isNSFW: b,
					username: y,
					isDeletingBanner: !!C,
					onDeleteBanner: E
				}), s.a.createElement("div", {
					className: g.a.snoovatarContainer
				}, I && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: g.a.topGlow
				}), s.a.createElement("div", {
					className: g.a.bottomGlow
				}), !P && s.a.createElement(w, null)), s.a.createElement("img", {
					className: Object(i.a)(g.a.snoovatar, {
						[g.a.premiumGlow]: I
					}),
					src: O || void 0
				})), !x && h && s.a.createElement(c.a, {
					to: "/settings/profile",
					className: g.a.snoovatarSettingsLink
				}, s.a.createElement(u.a, {
					className: U.a.settingsIcon
				})), s.a.createElement("h1", {
					className: g.a.snoovatarUserTitle
				}, L || y, _ && s.a.createElement(l.a, {
					className: g.a.snoovatarAdminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), I && s.a.createElement("a", {
					title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", y)], {
						hk: "3Fylv"
					}),
					href: "".concat(o.a.redditUrl, "/premium")
				}, s.a.createElement(m.a, {
					className: g.a.snoovatarPremiumIcon
				})), b && s.a.createElement(d.a, {
					className: g.a.snoovatarNsfwIcon,
					title: n.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				})), s.a.createElement(v.a, {
					className: g.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: y,
					userCreated: j,
					url: B
				}), (h || !r && !!O) && s.a.createElement(p.a, {
					compact: a,
					currentUserHasSnoovatar: r,
					isOwnProfile: h,
					onClick: N
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, a) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
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
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, a) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = a.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), r.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#EC0623"
			}), r.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard.5e213f4bf451f669a176.js.map