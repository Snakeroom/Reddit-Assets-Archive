// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.9814c9b38eb89073154b.js
// Retrieved at 10/22/2020, 4:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++t < r;) {
					var o = e[t];
					o && (s[n++] = o)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(s)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/actions/login.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			var c = r("./src/reddit/selectors/user.ts");
			const l = () => async e => {
				await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			}, d = e => async (t, r) => {
				const l = r();
				Object(n.a)((e => t => Object.assign({
					source: e,
					action: "click",
					noun: "edit_snoovatar"
				}, i.defaults(t)))(e)(l)), Object(c.I)(l) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL)) : await t(Object(s.h)())
			}
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const o = {
					backgroundColor: r("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				a = () => null;
			t.b = Object(n.a)({
				ErrorComponent: a,
				getComponent: () => Object(s.a)(() => r.e("CrisisFlow").then(r.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return le
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/Widgets/Base/index.tsx"),
				i = r("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				l = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./node_modules/react-redux/es/index.js"),
				m = r("./node_modules/reselect/es/index.js"),
				u = r("./src/lib/humanizeDate/index.ts"),
				p = r("./src/lib/prettyPrintNumber/index.ts"),
				f = r("./src/lib/timeAgo/index.ts"),
				b = r("./src/reddit/contexts/InsideOverlay.tsx"),
				h = r("./src/reddit/icons/svgs/Cake/index.tsx"),
				g = r("./src/reddit/icons/svgs/Karma/index.tsx"),
				v = r("./src/reddit/icons/svgs/User/index.tsx"),
				x = r("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/actions/tooltip.ts"),
				E = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				P = r.n(O);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = o.a.div("Container", P.a),
				k = o.a.div("Body", P.a),
				N = o.a.h5("Title", P.a),
				S = o.a.span("Label", P.a);
			class M extends s.a.Component {
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
						title: r,
						tooltip: n,
						tooltipId: o
					} = this.props, a = o && n ? {
						id: o,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return s.a.createElement(y, null, s.a.createElement(N, null, r), s.a.createElement(k, null, e, s.a.createElement(S, _({
						key: "label"
					}, a), t)), o && n && s.a.createElement(E.c, {
						caretOnTop: !0,
						tooltipId: o,
						text: n
					}))
				}
			}
			var j = Object(d.b)(null, e => ({
					toggleTooltip: t => e(Object(w.h)({
						tooltipId: t
					}))
				}))(Object(b.b)(M)),
				L = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				F = r.n(L);
			const U = Object(m.a)(x.a, C.j, (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(I.nb)(e, r)
				}, (e, t, r) => ({
					awardeeKarma: r ? r.awardeeKarma : 0,
					awardKarmaExperimentEnabled: e,
					awarderKarma: r ? r.awarderKarma : 0,
					commentKarma: r ? r.commentKarma : 0,
					postKarma: r ? r.postKarma : 0,
					profileCreated: r && (r.createdUtc || r.created) || 0,
					subscribers: t && t.subscribers || 0,
					totalKarma: r ? r.totalKarma || r.postKarma + r.commentKarma : 0
				})),
				B = o.a.div("Container", F.a);

			function T(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var A = Object(d.b)(U)(Object(b.b)(e => {
					const {
						awardeeKarma: t,
						awardKarmaExperimentEnabled: r,
						awarderKarma: n,
						profileCreated: o,
						isOverlay: a,
						commentKarma: i,
						postKarma: c,
						totalKarma: d,
						subscribers: m
					} = e, b = T(a, "karma"), x = T(a, "cakeday"), C = l.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [l.fbt._plural(c, "number", Object(p.b)(c, {
						displayFull: !0
					}))], {
						hk: "husfU"
					}), I = l.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [l.fbt._plural(i, "number", Object(p.b)(i, {
						displayFull: !0
					}))], {
						hk: "26iPTL"
					}), w = l.fbt._({
						"*": "{number} Awardee Karma",
						_1: "1 Awardee Karma"
					}, [l.fbt._plural(t, "number", Object(p.b)(t, {
						displayFull: !0
					}))], {
						hk: "2Ww5MR"
					}), E = l.fbt._({
						"*": "{number} Awarder Karma",
						_1: "1 Awarder Karma"
					}, [l.fbt._plural(n, "number", Object(p.b)(n, {
						displayFull: !0
					}))], {
						hk: "2F1chz"
					}), O = r ? "".concat(C, "\n").concat(I, "\n").concat(w, "\n").concat(E) : "".concat(C, "\n").concat(I);
					return s.a.createElement(B, null, s.a.createElement(j, {
						icon: s.a.createElement(g.a, {
							className: F.a.icon,
							key: "karma"
						}),
						label: Object(p.b)(d, {
							displayFull: !0
						}),
						title: l.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: b,
						tooltip: O
					}), s.a.createElement(j, {
						icon: s.a.createElement(h.a, {
							className: F.a.icon,
							key: "cakeDay"
						}),
						label: Object(u.a)(o, !0),
						title: l.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: x,
						tooltip: Object(f.d)(o)
					}), m > 0 && s.a.createElement(j, {
						icon: s.a.createElement(v.a, {
							className: F.a.icon,
							key: "followers"
						}),
						title: l.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(p.b)(m, {
							displayFull: !0
						})
					}))
				})),
				D = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				R = r.n(D),
				W = r("./src/config.ts"),
				K = r("./src/reddit/controls/InternalLink/index.tsx"),
				G = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				H = r("./src/reddit/controls/OutboundLink/index.tsx"),
				z = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				V = r("./src/reddit/icons/svgs/Close/index.tsx"),
				Z = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				q = r("./src/reddit/icons/svgs/Settings/index.tsx"),
				Q = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Y = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				J = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				X = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				$ = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				ee = r.n($),
				te = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				re = r.n(te);
			var ne = e => {
					let {
						bannerBackgroundImage: t,
						editMode: r,
						isDefaultIcon: n,
						isDeletingBanner: o,
						isDeletingIcon: a,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						onDeleteIcon: f,
						profileIcon: b,
						snoovatarEnabled: h,
						title: g,
						userCreated: v,
						username: x,
						url: C
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(J.a, {
						bannerBackgroundImage: t,
						editMode: !!r,
						isNSFW: d,
						username: x,
						isDeletingBanner: !!o,
						onDeleteBanner: p
					}), s.a.createElement("div", {
						className: ee.a.SnooIconWrapper
					}, m || !b || d ? s.a.createElement(Q.a, {
						iconUrl: b,
						isNSFW: d,
						userName: x,
						isProfileIdCard: !0
					}) : s.a.createElement(H.b, {
						isSponsored: !1,
						href: b,
						source: null
					}, s.a.createElement(Q.a, {
						iconUrl: b,
						isNSFW: d,
						userName: x,
						isProfileIdCard: !0
					})), r && !n && (a ? s.a.createElement(G.a, {
						sizePx: 20,
						className: re.a.loadingIcon
					}) : s.a.createElement(V.a, {
						className: re.a.closeIcon,
						onClick: f
					}))), !r && m && s.a.createElement(K.a, {
						to: "/settings/profile",
						className: ee.a.settingsLink
					}, s.a.createElement(q.a, {
						className: re.a.settingsIcon
					})), g && s.a.createElement("h4", {
						className: ee.a.userTitle
					}, g), s.a.createElement(X.a, {
						className: ee.a.userName,
						username: x,
						userCreated: v,
						url: C
					}), i && s.a.createElement(z.a, {
						className: ee.a.adminIcon,
						title: l.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && s.a.createElement("a", {
						title: l.fbt._("{username} has Reddit Premium", [l.fbt._param("username", x)], {
							hk: "3Fylv"
						}),
						href: "".concat(W.a.redditUrl, "/premium")
					}, s.a.createElement(Z.a, {
						className: ee.a.premiumIcon
					})), h && m && s.a.createElement(Y.a, {
						currentUserHasSnoovatar: !1,
						isOwnProfile: !0,
						onClick: u
					}))
				},
				se = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var oe = e => {
				let {
					bannerBackgroundImage: t,
					currentUserHasSnoovatar: r,
					editMode: n,
					isDefaultIcon: o,
					isDeletingBanner: a,
					isDeletingIcon: i,
					isEmployee: c,
					isGold: l,
					isNSFW: d,
					isOwnProfile: m,
					onClickSnoovatar: u,
					onDeleteBanner: p,
					onDeleteIcon: f,
					prefersReducedAnimations: b,
					profileIcon: h,
					snoovatarEnabled: g,
					snoovatarUrl: v,
					title: x,
					userCreated: C,
					username: I,
					url: w
				} = e;
				return g && v ? s.a.createElement(se.a, {
					bannerBackgroundImage: t,
					currentUserHasSnoovatar: r,
					editMode: n,
					isDeletingBanner: a,
					isEmployee: c,
					isGold: l,
					isNSFW: d,
					isOwnProfile: m,
					onClickSnoovatar: u,
					onDeleteBanner: p,
					prefersReducedAnimations: b,
					snoovatarUrl: v,
					title: x,
					userCreated: C,
					username: I,
					url: w
				}) : s.a.createElement(ne, {
					bannerBackgroundImage: t,
					editMode: n,
					isDefaultIcon: o,
					isDeletingBanner: a,
					isDeletingIcon: i,
					isEmployee: c,
					isGold: l,
					isNSFW: d,
					isOwnProfile: m,
					onClickSnoovatar: u,
					onDeleteBanner: p,
					onDeleteIcon: f,
					profileIcon: h,
					snoovatarEnabled: g,
					title: x,
					userCreated: C,
					username: I,
					url: w
				})
			};
			const ae = o.a.wrapped(a.b, "Widget", R.a),
				ie = o.a.div("Description", R.a),
				ce = o.a.wrapped(i.a, "Actions", R.a);
			class le extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(c.a, {
						topAwardIcon: t,
						recentAwardings: e,
						username: r
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						className: n,
						footer: o,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOverlay: l,
						isOwnProfile: d,
						profileIcon: m,
						publicDescription: u,
						snoovatarEnabled: p,
						snoovatarUrl: f,
						title: b,
						url: h,
						userCreated: g,
						username: v,
						isDefaultIcon: x,
						isDeletingIcon: C,
						isDeletingBanner: I,
						onClickSnoovatar: w,
						onDeleteIcon: E,
						onDeleteBanner: O,
						prefersReducedAnimations: P,
						editMode: _
					} = this.props;
					return s.a.createElement(ae, {
						className: n
					}, s.a.createElement(oe, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: _,
						isDefaultIcon: x,
						isDeletingBanner: I,
						isDeletingIcon: C,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: w,
						onDeleteBanner: O,
						onDeleteIcon: E,
						prefersReducedAnimations: P,
						profileIcon: m,
						title: b,
						userCreated: g,
						username: v,
						url: h,
						snoovatarEnabled: p,
						snoovatarUrl: f
					}), s.a.createElement(ie, null, u), s.a.createElement(A, {
						profileName: v,
						isOverlay: l
					}), this.renderAwardedLastMonth(), s.a.createElement(ce, null, e), o)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = r.n(m);
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(a.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: r,
						isNSFW: s,
						isProfileIdCard: a,
						userName: d
					} = this.props, {
						isUpdating: m
					} = this.state, p = o.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: d
					});
					return t && Object(l.e)(t) === d ? o.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", d)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: a ? u.a.EditButton : void 0,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(d.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, r) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us"
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, r) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				redditStyle: "_38vTQxawhhbbhD8rZc36N5",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatar.ts"),
				c = r("./src/reddit/actions/subscription/index.ts"),
				l = r("./src/reddit/components/ChatButton/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/constants/posts.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/selectors/experiments/econ/snoovatar.ts"),
				b = r("./src/reddit/selectors/gold/awardIcon.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/structuredStyles.ts"),
				x = r("./src/reddit/selectors/tooltip.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/selectors/userPrefs.ts"),
				w = (r("./node_modules/core-js/modules/es6.symbol.js"), r("./node_modules/fbt/lib/FbtPublic.js")),
				E = r("./node_modules/lodash/compact.js"),
				O = r.n(E),
				P = r("./src/config.ts"),
				_ = r("./src/lib/classNames/index.ts"),
				y = r("./src/reddit/actions/gold/modals.ts"),
				k = r("./src/reddit/actions/modal.ts"),
				N = r("./src/reddit/actions/multireddit/index.ts"),
				S = r("./src/reddit/actions/profile/index.ts"),
				M = r("./src/reddit/components/CrisisFlow/index.tsx"),
				j = r("./src/higherOrderComponents/makeAsync.tsx"),
				L = r("./src/lib/loadWithRetries/index.ts");
			var F = Object(j.a)({
					getComponent: () => Object(L.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				U = r("./src/reddit/constants/modals.ts"),
				B = r("./src/reddit/controls/InternalLink/index.tsx"),
				T = r("./src/reddit/controls/OutboundLink/index.tsx"),
				A = r("./src/reddit/helpers/correlationIdTracker.ts"),
				D = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				R = r("./src/reddit/models/Gold/Premium/index.ts"),
				W = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				K = r("./src/reddit/selectors/premium.ts"),
				G = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				H = r.n(G);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var V = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
				}
				return r
			};
			const Z = Object(a.c)({
					areModeratedSubredditsPending: g.a,
					coinsToSpend: C.d,
					givePremiumModalIsOpen: K.c,
					hasFetchedModerators: g.k,
					isEmployee: C.F,
					isLoggedIn: C.I,
					profile: g.j,
					crisisFlowEnabled: W.b
				}),
				q = e => {
					var {
						isLoading: t
					} = e, r = V(e, ["isLoading"]);
					return s.a.createElement("div", z({}, r, {
						className: Object(_.a)(H.a.Shimmer, Object(D.b)({
							isLoading: t
						}))
					}))
				};
			class Q extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(A.d)(A.a.GiftPremiumFlow));
						const {
							clickGivePremiumEvent: n
						} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(n())
					}, this.onOpenCrisisModal = () => {
						this.setState({
							showCrisisModal: !0
						})
					}, this.onCloseCrisisModal = () => {
						this.setState({
							showCrisisModal: !1
						})
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: r,
							hasSubreddit: n,
							isEmployee: s,
							isLoggedIn: o,
							isModerator: a,
							isOwnProfile: i,
							profileName: c,
							profile: l,
							crisisFlowEnabled: d,
							userAcceptsPms: m
						} = this.props, u = o && Object(R.e)(r, s).length && !i || s, p = O()([(i || a) && n ? {
							text: w.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(c, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, !i && m ? {
							text: w.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(P.a.redditUrl, "/message/compose/?to=").concat(c)
						} : void 0, !i && t ? {
							text: w.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(P.a.redditUrl, "/user/").concat(c, "/snoo")
						} : void 0, !i && d ? {
							text: w.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !i && l ? {
							text: w.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "".concat(P.a.redditUrl, "/api/report_redirect?reason_code=USER_PROFILE&thing=").concat(l.id)
						} : void 0, o && l && !l.isQuarantined ? {
							onClick: e,
							text: w.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return u && p.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: w.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), p
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(e => {
							let {
								expanded: t
							} = e;
							return {
								expanded: !t
							}
						})
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, r = this.makeMenuItems();
					if (0 === r.length) return null;
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(B.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: H.a.menuItem
					}, e.text) : s.a.createElement(T.b, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: H.a.menuItem
					}, e.text) : s.a.createElement(p.o, {
						className: H.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(s.a.createElement("div", {
						className: H.a.menuItem,
						key: "loading-1"
					}, s.a.createElement(q, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(s.a.createElement("div", {
						className: H.a.menuItem,
						key: "loading-2"
					}, s.a.createElement(q, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const o = t ? w.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : w.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: H.a.container
					}, n, s.a.createElement("div", {
						className: H.a.expandContainer
					}, s.a.createElement(p.o, {
						className: H.a.expandButton,
						onClick: this.moreOptionsToggled
					}, o)), e && s.a.createElement(F, null), this.state.showCrisisModal && s.a.createElement(M.b, {
						withOverlay: !0,
						overlayCustomStyles: M.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var Y = Object(o.b)(Z, (e, t) => {
					let {
						profileName: r
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(N.g)(!0, !0)), e(Object(k.h)(U.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: t => e(Object(y.e)({
							correlationId: t,
							profileName: r
						})),
						onModeratorsRequested: () => e(Object(S.b)(r))
					}
				})(Q),
				J = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				X = r.n(J);
			const {
				fbt: $
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(a.c)({
				account: C.i,
				activeTooltipId: x.a,
				currentUserHasSubreddit: C.f,
				hideNSFWPref: C.A,
				isModerator: g.f,
				prefersReducedAnimations: I.c,
				profile: g.j,
				profileAboutInfo: g.h,
				topAwardIcon: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(b.e)(e, {
						userName: r,
						minSize: 32
					})
				},
				structuredStyle: (e, t) => Object(v.n)(e, Object(g.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(C.ib)(e, {
						userName: r
					})
				},
				user: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(C.hb)(e, {
						userName: r
					})
				},
				page: h.b,
				snoovatarEnabled: f.a
			}), te = e => {
				let {
					username: t,
					currentUserHasSubreddit: r
				} = e;
				return s.a.createElement("div", {
					className: X.a.actionItem
				}, s.a.createElement(p.k, {
					className: X.a.button,
					to: r ? "/user/".concat(t, "/submit") : "/submit"
				}, $._("New post", null, {
					hk: "QD6O4"
				})))
			}, re = e => {
				let {
					profileName: t,
					onToggleFollow: r,
					userIsSubscriber: n
				} = e;
				return s.a.createElement("div", {
					className: X.a.actionItem
				}, n ? s.a.createElement(p.l, {
					className: X.a.button,
					onClick: () => r(t, n)
				}, $._("Unfollow", null, {
					hk: "1nM1SO"
				})) : s.a.createElement(p.i, {
					className: X.a.button,
					onClick: () => r(t, n)
				}, $._("Follow", null, {
					hk: "OPQuq"
				})))
			}, ne = e => {
				let {
					userId: t
				} = e;
				return s.a.createElement("div", {
					className: X.a.actionItem
				}, s.a.createElement(l.a, {
					contextId: t,
					className: X.a.button,
					userId: t
				}, $._("Chat", null, {
					hk: "UKkIW"
				})))
			};
			t.default = Object(o.b)(ee, e => ({
				onToggleFollow: (t, r) => e(Object(c.d)([{
					name: t,
					type: u.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(i.b)("profile_overview"))
			}))(Object(m.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: r,
					hideNSFWPref: n,
					isModerator: o,
					isOverlay: a,
					isSubmissionPage: i,
					onClickSnoovatar: c,
					onToggleFollow: l,
					profile: m,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: f,
					topAwardIcon: b,
					userHasSubreddit: h,
					user: g,
					page: v,
					prefersReducedAnimations: x,
					snoovatarEnabled: C
				} = e;
				if (!g) return null;
				const {
					accountIcon: I,
					awardedLastMonth: w,
					created: E,
					id: O,
					isEmployee: P,
					isGold: _,
					prefShowSnoovatar: y,
					snoovatarFullBodyAsset: k,
					username: N
				} = g, S = !!t && t.id === O, M = !(!t || !t.snoovatarFullBodyAsset), j = f && f.bannerBackgroundImage, L = !!m && m.isNSFW, F = L && n, U = !(!u || !u.userIsSubscriber), B = "/user/".concat(N, "/"), T = v && v.url === B, A = !u || u.acceptChats, D = !u || u.acceptPms;
				return s.a.createElement(d.a, {
					isEmployee: P,
					isGold: _,
					isNSFW: L,
					isOverlay: a,
					isOwnProfile: S,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: T ? null : B,
					userCreated: E,
					username: N,
					recentAwardings: w,
					currentUserHasSnoovatar: M,
					prefersReducedAnimations: !!x,
					snoovatarEnabled: C,
					snoovatarUrl: k,
					topAwardIcon: b,
					actions: s.a.createElement(s.a.Fragment, null, S && !i && te({
						username: N,
						currentUserHasSubreddit: r
					}), !S && h && re({
						profileName: N,
						onToggleFollow: l,
						userIsSubscriber: U
					}), !!t && !S && A && ne({
						userId: O
					})),
					footer: s.a.createElement(Y, {
						hasSubreddit: h,
						isModerator: o,
						isOwnProfile: S,
						allowViewSnoovatar: y,
						profileName: N,
						sendEvent: p,
						userAcceptsPms: D
					}),
					onClickSnoovatar: c,
					profileIcon: I,
					bannerBackgroundImage: F ? void 0 : j
				})
			}))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i),
				l = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
					}
					return r
				};
			const d = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, r = l(e, ["children"]);
					return s.a.createElement("div", r, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = r.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					fill: "none",
					stroke: "#fff",
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 18"
				}, s.a.createElement("path", {
					d: "M7 .75a.49.49 0 01.49.4 2.57 2.57 0 005.08 0 .49.49 0 01.49-.4h1.58A.51.51 0 0115 .9l4 4.09a.5.5 0 010 .7l-2 1.94a.51.51 0 01-.65 0l-1.5-1.04v10.16a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V6.59l-1.19 1A.5.5 0 013 7.6L1.08 5.69a.5.5 0 010-.7L5 .9a.51.51 0 01.36-.15H7z",
					strokeWidth: "1.29",
					strokeMiterlimit: "10",
					strokeLinecap: "round"
				}))
			}
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, r) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("dynamicTwoCol", o.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const r = [];
					for (const n in s) {
						const o = s[n];
						(o.priceInCoins <= e || t) && r.push(o)
					}
					return r
				},
				a = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = [{
					prompt: () => n.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => n.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => n.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => n.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => n.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => n.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => n.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => n.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => n.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => n.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}],
				c = "com.reddit.premium_1";
			var l;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(l || (l = {}))
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => n.a.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.I,
					experimentName: n.c
				}),
				i = e => n.b.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.I,
					experimentName: n.d
				})
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				o = e => e.givePremium.api.error || "",
				a = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.9814c9b38eb89073154b.js.map