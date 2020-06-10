// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.394bc6b461b69786f426.js
// Retrieved at 6/10/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, n = null == e ? 0 : e.length, s = 0, r = []; ++t < n;) {
					var i = e[t];
					i && (r[s++] = i)
				}
				return r
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/chat/toggle.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const c = e => {
				let {
					onStartChat: t,
					children: n,
					className: s,
					sendEvent: i,
					contextId: o
				} = e;
				return r.a.createElement(d.f, {
					onClick: () => {
						t(), i(Object(l.b)(o))
					},
					className: s
				}, n)
			};
			c.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: s
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(s, n))
					}
				}
			});
			t.a = m(Object(a.c)(c))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const i = {
					backgroundColor: n("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				o = () => null;
			t.b = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("CrisisFlow").then(n.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(a);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class c extends r.a.PureComponent {
				render() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					if (!e.topAward) return null;
					const {
						topAward: n,
						totalCount: s
					} = e, a = n.icon32 ? n.icon32.url : n.icon.url, c = n.description ? n.description : n.name;
					return r.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: "".concat(i.a.oldRedditUrl, "/user/").concat(t, "/gilded")
					}, r.a.createElement("div", {
						className: d.a.iconColumn
					}, r.a.createElement("img", {
						alt: c,
						className: d.a.icon,
						src: a
					}), s > 1 && r.a.createElement("span", {
						className: d.a.count
					}, "+".concat(Object(o.b)(s - 1)))), r.a.createElement("div", {
						className: d.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", n.name), l._plural(s)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				SnooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				snooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				d = n("./src/reddit/components/ChatButton/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/selectors/experiments/editProfileImagesInline.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				w = n("./node_modules/lodash/compact.js"),
				v = n.n(w),
				I = n("./src/config.ts"),
				M = n("./src/lib/classNames/index.ts"),
				_ = n("./src/reddit/actions/gold/modals.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/multireddit/index.ts"),
				O = n("./src/reddit/actions/profile/index.ts"),
				y = n("./src/reddit/components/CrisisFlow/index.tsx"),
				L = n("./src/higherOrderComponents/makeAsync.tsx"),
				k = n("./src/lib/loadWithRetries/index.ts");
			var j = Object(L.a)({
					getComponent: () => Object(k.a)(() => n.e("GivePremiumModal").then(n.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				N = n("./src/reddit/constants/modals.ts"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				T = n("./src/reddit/controls/OutboundLink/index.tsx"),
				A = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				R = n("./src/reddit/models/Gold/Premium/index.ts"),
				U = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				H = n("./src/reddit/selectors/premium.ts"),
				W = n("./src/reddit/components/ProfileIdCard/footer.m.less"),
				G = n.n(W);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var D = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const Z = Object(o.c)({
					areModeratedSubredditsPending: b.a,
					coinsToSpend: g.d,
					givePremiumModalIsOpen: H.c,
					hasFetchedModerators: b.k,
					isEmployee: g.E,
					isLoggedIn: g.H,
					profile: b.j,
					crisisFlowEnabled: U.b
				}),
				K = e => {
					var {
						isLoading: t
					} = e, n = D(e, ["isLoading"]);
					return r.a.createElement("div", B({}, n, {
						className: Object(M.a)(G.a.Shimmer, Object(F.b)({
							isLoading: t
						}))
					}))
				};
			class q extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						Object(A.d)(A.a.GiftPremiumFlow), e();
						const {
							clickGivePremiumEvent: s
						} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(s())
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
							coinsToSpend: n,
							hasSubreddit: s,
							isEmployee: r,
							isLoggedIn: i,
							isModerator: o,
							isOwnProfile: a,
							profileName: d,
							profile: l,
							crisisFlowEnabled: c
						} = this.props, m = i && Object(R.c)(n, r).length && !a || r, u = v()([(a || o) && s ? {
							text: x.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(d, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, a ? void 0 : {
							text: x.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(I.a.redditUrl, "/message/compose/?to=").concat(d)
						}, !a && t ? {
							text: x.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(I.a.redditUrl, "/user/").concat(d, "/snoo")
						} : void 0, !a && c ? {
							text: x.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, a ? void 0 : {
							text: x.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, i && l && !l.isQuarantined ? {
							onClick: e,
							text: x.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return m && u.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: x.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), u
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
					} = this.state, n = this.makeMenuItems();
					if (0 === n.length) return null;
					const s = (t ? n : []).map(e => e.url ? e.isInternalLink ? r.a.createElement(S.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: G.a.menuItem
					}, e.text) : r.a.createElement(T.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: G.a.menuItem
					}, e.text) : r.a.createElement(u.n, {
						className: G.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (s.unshift(r.a.createElement("div", {
						className: G.a.menuItem,
						key: "loading-1"
					}, r.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), s.unshift(r.a.createElement("div", {
						className: G.a.menuItem,
						key: "loading-2"
					}, r.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const i = t ? x.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : x.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return r.a.createElement("div", {
						className: G.a.container
					}, s, r.a.createElement("div", {
						className: G.a.expandContainer
					}, r.a.createElement(u.n, {
						className: G.a.expandButton,
						onClick: this.moreOptionsToggled
					}, i)), e && r.a.createElement(j, null), this.state.showCrisisModal && r.a.createElement(y.b, {
						withOverlay: !0,
						overlayCustomStyles: y.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var V = Object(i.b)(Z, (e, t) => {
					let {
						profileName: n
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(P.g)(!0, !0)), e(Object(E.h)(N.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(_.e)(n)),
						onModeratorsRequested: () => e(Object(O.b)(n))
					}
				})(q),
				z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				Q = n.n(z);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = Object(o.c)({
				account: g.i,
				activeTooltipId: C.a,
				currentUserHasSubreddit: g.f,
				hideNSFWPref: g.z,
				isEditProfileImagesInlineEnabled: p.a,
				isModerator: b.f,
				profile: b.j,
				profileAboutInfo: b.h,
				structuredStyle: (e, t) => Object(f.n)(e, Object(b.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(g.fb)(e, {
						userName: n
					})
				},
				user: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(g.eb)(e, {
						userName: n
					})
				},
				page: h.b
			}), X = e => {
				let {
					username: t,
					currentUserHasSubreddit: n
				} = e;
				return r.a.createElement("div", {
					className: Q.a.actionItem
				}, r.a.createElement(u.h, {
					className: Q.a.button,
					to: n ? "/user/".concat(t, "/submit") : "/submit"
				}, Y._("New post", null, {
					hk: "QD6O4"
				})))
			}, $ = e => {
				let {
					profileName: t,
					onToggleFollow: n,
					userIsSubscriber: s
				} = e;
				return r.a.createElement("div", {
					className: Q.a.actionItem
				}, s ? r.a.createElement(u.i, {
					className: Q.a.button,
					onClick: () => n(t, s)
				}, Y._("Unfollow", null, {
					hk: "1nM1SO"
				})) : r.a.createElement(u.f, {
					className: Q.a.button,
					onClick: () => n(t, s)
				}, Y._("Follow", null, {
					hk: "OPQuq"
				})))
			}, ee = e => {
				let {
					userId: t
				} = e;
				return r.a.createElement("div", {
					className: Q.a.actionItem
				}, r.a.createElement(d.a, {
					contextId: t,
					className: Q.a.button,
					userId: t
				}, Y._("Chat", null, {
					hk: "UKkIW"
				})))
			};
			t.default = Object(i.b)(J, e => ({
				onToggleFollow: (t, n) => e(Object(a.d)([{
					name: t,
					type: m.a.PROFILE
				}], !n))
			}))(Object(c.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: s,
					isEditProfileImagesInlineEnabled: i,
					isModerator: o,
					isOverlay: a,
					isSubmissionPage: d,
					onToggleFollow: c,
					profile: m,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: h,
					userHasSubreddit: b,
					user: f,
					page: C
				} = e;
				if (!f) return null;
				const {
					accountIcon: g,
					awardedLastMonth: x,
					id: w,
					isEmployee: v,
					isGold: I,
					prefShowSnoovatar: M,
					username: _
				} = f, E = !!t && t.id === w, P = h && h.bannerBackgroundImage, O = !!m && m.isNSFW, y = !i && O && s, L = !(!u || !u.userIsSubscriber), k = "/user/".concat(_, "/"), j = C && C.url === k;
				return r.a.createElement(l.a, {
					isEditProfileImagesInlineEnabled: i,
					isEmployee: v,
					isGold: I,
					isNSFW: O,
					isOverlay: a,
					isOwnProfile: E,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: j ? null : k,
					username: _,
					recentAwardings: x,
					actions: r.a.createElement(r.a.Fragment, null, E && !d && X({
						username: _,
						currentUserHasSubreddit: n
					}), !E && b && $({
						profileName: _,
						onToggleFollow: c,
						userIsSubscriber: L
					}), !!t && !E && ee({
						userId: w
					})),
					footer: r.a.createElement(V, {
						hasSubreddit: b,
						isModerator: o,
						isOwnProfile: E,
						allowViewSnoovatar: M,
						profileName: _,
						sendEvent: p
					}),
					profileIcon: g,
					bannerBackgroundImage: y ? void 0 : P
				})
			}))
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(e.className, a.a.admin, {
					[a.a.mEnabled]: e.enabled
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
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = {
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
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = [];
					for (const s in r) {
						const i = r[s];
						(i.priceInCoins <= e || t) && n.push(i)
					}
					return n
				},
				o = e => s.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [s.fbt._plural(e.monthsOfPremium, "number of months"), s.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				a = [{
					prompt: () => s.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => s.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => s.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => s.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => s.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => s.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => s.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => s.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => s.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => s.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}]
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => s.a.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: i.H,
					experimentName: s.c
				}),
				a = e => s.b.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: i.H,
					experimentName: s.d
				})
		},
		"./src/reddit/selectors/premium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => !!e.givePremium.givePremiumModalAccountName,
				r = e => e.givePremium.givePremiumModalAccountName,
				i = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=reddit-components-ProfileIdCard.394bc6b461b69786f426.js.map