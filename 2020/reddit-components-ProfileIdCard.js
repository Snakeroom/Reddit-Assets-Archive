// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.d7232e6a6f768a8b85c1.js
// Retrieved at 8/3/2020, 6:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, s = null == e ? 0 : e.length, n = 0, r = []; ++t < s;) {
					var i = e[t];
					i && (r[n++] = i)
				}
				return r
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/chat/toggle.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: s,
					className: n,
					sendEvent: i,
					contextId: o
				} = e;
				return r.a.createElement(d.f, {
					onClick: () => {
						t(), i(Object(c.b)(o))
					},
					className: n
				}, s)
			};
			l.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, t) => {
				let {
					contextId: s,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(n, s))
					}
				}
			});
			t.a = m(Object(a.c)(l))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const i = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				o = () => null;
			t.b = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => s.e("CrisisFlow").then(s.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/config.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/helpers/awards/getIconForSize.ts"),
				d = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class m extends r.a.PureComponent {
				render() {
					const {
						prefersReducedMotion: e,
						recentAwardings: t,
						username: s
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: d
					} = t, m = Object(a.a)(n, 32, e), u = n.description ? n.description : n.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: "".concat(i.a.oldRedditUrl, "/user/").concat(s, "/gilded")
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: u,
						className: c.a.icon,
						src: m
					}), d > 1 && r.a.createElement("span", {
						className: c.a.count
					}, "+".concat(Object(o.b)(d - 1)))), r.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", n.name), l._plural(d)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = m
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, s) {
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
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/subscription/index.ts"),
				d = s("./src/reddit/components/ChatButton/index.tsx"),
				c = s("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/experiments/editProfileImagesInline.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/selectors/userPrefs.ts"),
				w = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				v = s("./node_modules/lodash/compact.js"),
				M = s.n(v),
				I = s("./src/config.ts"),
				P = s("./src/lib/classNames/index.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				E = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/multireddit/index.ts"),
				y = s("./src/reddit/actions/profile/index.ts"),
				L = s("./src/reddit/components/CrisisFlow/index.tsx"),
				k = s("./src/higherOrderComponents/makeAsync.tsx"),
				j = s("./src/lib/loadWithRetries/index.ts");
			var N = Object(k.a)({
					getComponent: () => Object(j.a)(() => s.e("GivePremiumModal").then(s.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				S = s("./src/reddit/constants/modals.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/index.tsx"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				R = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				U = s("./src/reddit/models/Gold/Premium/index.ts"),
				H = s("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				W = s("./src/reddit/selectors/premium.ts"),
				G = s("./src/reddit/components/ProfileIdCard/footer.m.less"),
				B = s.n(G);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Z = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const K = Object(o.c)({
					areModeratedSubredditsPending: b.a,
					coinsToSpend: g.d,
					givePremiumModalIsOpen: W.c,
					hasFetchedModerators: b.k,
					isEmployee: g.E,
					isLoggedIn: g.H,
					profile: b.j,
					crisisFlowEnabled: H.b
				}),
				q = e => {
					var {
						isLoading: t
					} = e, s = Z(e, ["isLoading"]);
					return r.a.createElement("div", D({}, s, {
						className: Object(P.a)(B.a.Shimmer, Object(R.b)({
							isLoading: t
						}))
					}))
				};
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(F.d)(F.a.GiftPremiumFlow));
						const {
							clickGivePremiumEvent: n
						} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
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
							coinsToSpend: s,
							hasSubreddit: n,
							isEmployee: r,
							isLoggedIn: i,
							isModerator: o,
							isOwnProfile: a,
							profileName: d,
							profile: c,
							crisisFlowEnabled: l,
							userAcceptsPms: m
						} = this.props, u = i && Object(U.c)(s, r).length && !a || r, p = M()([(a || o) && n ? {
							text: w.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(d, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, !a && m ? {
							text: w.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(I.a.redditUrl, "/message/compose/?to=").concat(d)
						} : void 0, !a && t ? {
							text: w.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(I.a.redditUrl, "/user/").concat(d, "/snoo")
						} : void 0, !a && l ? {
							text: w.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, a ? void 0 : {
							text: w.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, i && c && !c.isQuarantined ? {
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
					} = this.state, s = this.makeMenuItems();
					if (0 === s.length) return null;
					const n = (t ? s : []).map(e => e.url ? e.isInternalLink ? r.a.createElement(T.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: B.a.menuItem
					}, e.text) : r.a.createElement(A.b, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: B.a.menuItem
					}, e.text) : r.a.createElement(u.n, {
						className: B.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(r.a.createElement("div", {
						className: B.a.menuItem,
						key: "loading-1"
					}, r.a.createElement(q, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(r.a.createElement("div", {
						className: B.a.menuItem,
						key: "loading-2"
					}, r.a.createElement(q, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const i = t ? w.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : w.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return r.a.createElement("div", {
						className: B.a.container
					}, n, r.a.createElement("div", {
						className: B.a.expandContainer
					}, r.a.createElement(u.n, {
						className: B.a.expandButton,
						onClick: this.moreOptionsToggled
					}, i)), e && r.a.createElement(N, null), this.state.showCrisisModal && r.a.createElement(L.b, {
						withOverlay: !0,
						overlayCustomStyles: L.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var z = Object(i.b)(K, (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(O.g)(!0, !0)), e(Object(E.h)(S.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: t => e(Object(_.e)({
							correlationId: t,
							profileName: s
						})),
						onModeratorsRequested: () => e(Object(y.b)(s))
					}
				})(V),
				Q = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				Y = s.n(Q);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = Object(o.c)({
				account: g.i,
				activeTooltipId: C.a,
				currentUserHasSubreddit: g.f,
				hideNSFWPref: g.z,
				isEditProfileImagesInlineEnabled: p.a,
				isModerator: b.f,
				prefersReducedMotion: x.c,
				profile: b.j,
				profileAboutInfo: b.h,
				structuredStyle: (e, t) => Object(f.n)(e, Object(b.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(g.fb)(e, {
						userName: s
					})
				},
				user: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(g.eb)(e, {
						userName: s
					})
				},
				page: h.b
			}), $ = e => {
				let {
					username: t,
					currentUserHasSubreddit: s
				} = e;
				return r.a.createElement("div", {
					className: Y.a.actionItem
				}, r.a.createElement(u.h, {
					className: Y.a.button,
					to: s ? "/user/".concat(t, "/submit") : "/submit"
				}, J._("New post", null, {
					hk: "QD6O4"
				})))
			}, ee = e => {
				let {
					profileName: t,
					onToggleFollow: s,
					userIsSubscriber: n
				} = e;
				return r.a.createElement("div", {
					className: Y.a.actionItem
				}, n ? r.a.createElement(u.i, {
					className: Y.a.button,
					onClick: () => s(t, n)
				}, J._("Unfollow", null, {
					hk: "1nM1SO"
				})) : r.a.createElement(u.f, {
					className: Y.a.button,
					onClick: () => s(t, n)
				}, J._("Follow", null, {
					hk: "OPQuq"
				})))
			}, te = e => {
				let {
					userId: t
				} = e;
				return r.a.createElement("div", {
					className: Y.a.actionItem
				}, r.a.createElement(d.a, {
					contextId: t,
					className: Y.a.button,
					userId: t
				}, J._("Chat", null, {
					hk: "UKkIW"
				})))
			};
			t.default = Object(i.b)(X, e => ({
				onToggleFollow: (t, s) => e(Object(a.d)([{
					name: t,
					type: m.a.PROFILE
				}], !s))
			}))(Object(l.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: s,
					hideNSFWPref: n,
					isEditProfileImagesInlineEnabled: i,
					isModerator: o,
					isOverlay: a,
					isSubmissionPage: d,
					onToggleFollow: l,
					prefersReducedMotion: m,
					profile: u,
					profileAboutInfo: p,
					sendEvent: h,
					structuredStyle: b,
					userHasSubreddit: f,
					user: C,
					page: g
				} = e;
				if (!C) return null;
				const {
					accountIcon: x,
					awardedLastMonth: w,
					id: v,
					isEmployee: M,
					isGold: I,
					prefShowSnoovatar: P,
					username: _
				} = C, E = !!t && t.id === v, O = b && b.bannerBackgroundImage, y = !!u && u.isNSFW, L = !i && y && n, k = !(!p || !p.userIsSubscriber), j = "/user/".concat(_, "/"), N = g && g.url === j, S = !p || p.acceptChats, T = !p || p.acceptPms;
				return r.a.createElement(c.a, {
					isEditProfileImagesInlineEnabled: i,
					isEmployee: M,
					isGold: I,
					isNSFW: y,
					isOverlay: a,
					isOwnProfile: E,
					prefersReducedMotion: m,
					publicDescription: p ? p.publicDescription : void 0,
					title: u ? u.title : void 0,
					url: N ? null : j,
					username: _,
					recentAwardings: w,
					actions: r.a.createElement(r.a.Fragment, null, E && !d && $({
						username: _,
						currentUserHasSubreddit: s
					}), !E && f && ee({
						profileName: _,
						onToggleFollow: l,
						userIsSubscriber: k
					}), !!t && !E && S && te({
						userId: v
					})),
					footer: r.a.createElement(z, {
						hasSubreddit: f,
						isModerator: o,
						isOwnProfile: E,
						allowViewSnoovatar: P,
						profileName: _,
						sendEvent: h,
						userAcceptsPms: T
					}),
					profileIcon: x,
					bannerBackgroundImage: L ? void 0 : O
				})
			}))
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = s.n(o);
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
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
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
					const s = [];
					for (const n in r) {
						const i = r[n];
						(i.priceInCoins <= e || t) && s.push(i)
					}
					return s
				},
				o = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				a = [{
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
				}]
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const o = e => n.a.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: i.H,
					experimentName: n.c
				}),
				a = e => n.b.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: i.H,
					experimentName: n.d
				})
		},
		"./src/reddit/selectors/premium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				r = e => e.givePremium.givePremiumModalAccountName,
				i = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=reddit-components-ProfileIdCard.d7232e6a6f768a8b85c1.js.map