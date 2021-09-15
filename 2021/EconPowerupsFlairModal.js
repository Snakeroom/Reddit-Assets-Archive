// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.2dc99420bcc8b961f509.js
// Retrieved at 9/15/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return x
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return w
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return g
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return y
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return F
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return k
			})), r.d(t, "setSubredditUserAchievement", (function() {
				return N
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/lib/initializeClient/installReducer.ts"),
				u = r("./src/reddit/reducers/features/powerups/index.ts"),
				m = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/commentSelector.ts"),
				v = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: u.a
				}
			});
			const x = Object(i.a)(j.d),
				w = Object(i.a)(j.h),
				O = Object(i.a)(j.f),
				E = Object(i.a)(j.g),
				g = Object(i.a)(j.e),
				P = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = s(),
							n = Object(c.i)(t),
							l = await (async (e, t, r, s) => {
								const i = await Object(a.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: s
									}
								});
								if (!i.ok) throw new Error("Unable to fetch user achievements");
								return i.body.data
							})(i(), e, d, n),
							{
								subredditInfoById: u,
								redditorsInfoByIds: m
							} = l;
						await r(x(u)), n && m && await r(w(m))
					} catch (l) {
						n.c.captureException(l)
					}
				}, y = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(I.k)(i);
					if (!n || !Object(v.g)(i, {
							subredditId: e
						})) return;
					const a = !!Object(f.c)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && a || await r(P(e, [n.id]))
				}, _ = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(m.l)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(v.g)(s, {
						subredditId: e
					})
				}, F = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(({
							id: e
						}) => e),
						a = Object(h.b)(i, {
							commentIds: n
						}),
						o = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(_(o)))) return;
					const d = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(P(o, Array.from(d)))
				}, k = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(_(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(P(e, Array.from(i)))
				}, N = (e, t) => async (r, i, {
					gqlContext: o
				}) => {
					const c = i(),
						l = Object(I.k)(c);
					if (!l) return;
					const u = {
						subredditId: e,
						userId: l.id,
						achievementType: t
					};
					r(O(u));
					try {
						await (async (e, t, r) => {
							const s = await Object(a.a)(e, {
								...d,
								variables: {
									subredditId: t,
									achievementType: r
								}
							});
							if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(o(), u.subredditId, u.achievementType), r(E(u))
					} catch (m) {
						r(g(u)), n.c.captureException(m), r(Object(p.f)({
							duration: p.a,
							kind: b.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return v
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				n = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(s.a)(a.a),
				d = Object(s.a)(a.b),
				c = Object(s.a)(a.c),
				l = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				b = Object(s.a)(a.h),
				h = Object(s.a)(a.i),
				v = e => Object(i.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return L
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				v = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var I = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				j = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "add-custom-badge-tooltip",
				E = 100,
				g = 2 * E,
				P = 24;
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, E)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, g)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return i.a.createElement("img", {
						className: Object(d.a)(x.a.image, this.props.className),
						src: `${o.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${O}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || P;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(v.a, {
						className: x.a.addCustom
					})), i.a.createElement(I, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(f.d)(r, r, e),
							n = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return i.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, i.a.createElement("div", {
							className: Object(d.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: x.a.image,
							id: n,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? i.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: n,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: n,
							text: e.title
						})))
					}))
				}
			}
			const _ = [],
				F = Object(a.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || _
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(a.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || _
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				N = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function C(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(y, w({
					badges: n
				}, s))
			}
			const T = Object(n.b)(F, N)(C),
				L = Object(n.b)(k, N)(C)
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				o = r.n(a);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				onClick: t
			}) => i.a.createElement("button", {
				onClick: t,
				className: o.a.closeButton,
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, i.a.createElement(n.b, {
				className: o.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, r) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				achievements: "_3yyAEiwzXU-705K4-2CYcp",
				achievementItem: "_29gOi1XSw60-K2kDQZerSu",
				achievementImgWrapper: "_2Quz2MhfZx-Ctyd9zFO7ju",
				achievementImg: "_3_H_5cdEEjCzMRE60q9kbE",
				achievementName: "_1BTx4JIyc9txuPsRaFBelE",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
				gradientVisible: "_1gcqKximkvdrFYxxOUaH4g",
				ctaButton: "_1q2lrbLX6F7HH2qBbvitLG"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/AchievementFlairs.m.less": function(e, t, r) {
			e.exports = {
				achievementsHeading: "f3B5GmPJndhr1UPiq1nyX",
				headingPowerupsBolt: "_1kERpVXxBb5LjYnxsMVw63",
				achievementsDescription: "_3sy847MLpk2VyYZAOeebkK",
				achievementsList: "_24I-FJs9kZEkdUlnDoLgKK",
				achievementItem: "_1fdfJYZzql6SL4e4j0bnM6",
				achievementItemLocked: "_34wXeBt88UZUr9JrpQ7apr",
				achievementImg: "_1IL3kVszY7JkmoQ60dSGUD",
				achievementName: "_30HKjuI-B2UWDuj62w06C8",
				achievementImgLocked: "_3WdoADJB7PBAiXP4yxXwH2",
				achievementItemActive: "_3jkW0ZPkk-qBhRKUv4fS4j",
				achievementItemSelectable: "_1sQQNV_Y0rV8gaQ0CBm6_E",
				achievementImgWrapper: "_2gIgh22uWUJg4zsgBmxcVj",
				achievementLock: "_1qRkWlM8dexCOIaWlMKi7Q",
				achievementTooltip: "_3ZL6uBKVK837Z0NJ2hQT2S",
				powerupButton: "_1b4lGWUAPpm12PKcqobcZV",
				Icon: "FsVzUyG3iKx0loHJHPuVn",
				icon: "FsVzUyG3iKx0loHJHPuVn",
				isLeft: "s6POBOl3yu7FEP_CLtax4",
				isRight: "OmrNRakEiIP1YQA690qKw",
				active: "_1R9aR4JcicdGJR0-7VYArZ"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less": function(e, t, r) {
			e.exports = {
				container: "_32dPE02K4p96dMl5z5Kzg2"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less": function(e, t, r) {
			e.exports = {
				container: "zxsMn2uKCugEKCXsP8J_i",
				header: "_2BPctTGaKvG7xpovxPZ80P",
				flairText: "_1GputOZ-w3oP_gCLbhgwLo",
				editButton: "_6miNe5RxOJ1kieKhPgXxm",
				flair: "_6jGQKuf2PkAqP5oy683Sx"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1R8JYXvrokxOrjWamBt94g"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				u = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/selectors/userFlair.ts"),
				p = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				b = r("./src/reddit/actions/gold/powerups.ts"),
				h = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				v = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/helpers/trackers/powerups.ts"),
				j = r("./src/reddit/hooks/useTracking.ts"),
				x = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				w = r("./src/reddit/selectors/gold/powerups/index.ts"),
				O = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				E = r("./src/lib/classNames/index.ts"),
				g = r("./src/reddit/actions/tooltip.ts"),
				P = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = r("./src/reddit/helpers/trackers/userFlair.ts"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				F = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/AchievementFlairs.m.less"),
				k = r.n(F);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = ({
				achievement: e,
				onSelect: t
			}) => {
				const r = Object(n.d)(),
					s = Object(j.a)(),
					a = `achievement-locked-${e.type}`,
					o = N._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					d = () => {
						if (e.isLocked) return r(Object(g.h)({
							tooltipId: a
						}))
					},
					c = !e.isLocked && !e.isPreferred;
				return i.a.createElement("div", {
					onMouseEnter: d,
					onMouseLeave: d,
					onClick: () => {
						c && t(e.type), e.isPreferred || s(Object(y.b)({
							achievementFlair: e
						}))
					},
					className: Object(E.a)(k.a.achievementItem, {
						[k.a.achievementItemLocked]: e.isLocked,
						[k.a.achievementItemActive]: e.isPreferred,
						[k.a.achievementItemSelectable]: c
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, i.a.createElement("div", {
					className: k.a.achievementImgWrapper
				}, i.a.createElement("img", {
					id: a,
					className: k.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), i.a.createElement("div", {
					className: k.a.achievementImgLocked
				}, i.a.createElement(_.a, {
					name: "lock",
					isFilled: !0,
					className: k.a.achievementLock
				}))), i.a.createElement("div", {
					className: k.a.achievementName
				}, i.a.createElement("span", null, e.name)), e.isLocked && i.a.createElement(P.c, {
					tooltipId: a,
					text: o,
					className: k.a.achievementTooltip
				}))
			}, {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js"), L = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const a = Object(j.a)(),
					o = Object(n.e)(e => Object(O.b)(e, {
						subredditId: t,
						userId: r
					})),
					d = Object(n.e)(e => Object(w.n)(e, {
						subredditId: t
					})),
					c = Object(n.e)(e => Object(O.e)(e, {
						subredditId: t,
						userId: r
					})),
					l = Object(n.d)(),
					u = e => {
						l(Object(p.setSubredditUserAchievement)(t, e))
					},
					m = () => {
						l(Object(b.f)("user_flair_picker"))
					};
				return Object(s.useEffect)(() => {
					Object(h.a)()
				}, []), i.a.createElement("div", {
					className: e
				}, i.a.createElement("h4", {
					className: k.a.achievementsHeading
				}, i.a.createElement(x.a, {
					className: k.a.headingPowerupsBolt
				}), T._("Achievements", null, {
					hk: "1DnL4g"
				})), i.a.createElement("p", {
					className: k.a.achievementsDescription
				}, (() => d && !c ? T._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : d ? T._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : T._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), i.a.createElement("div", {
					className: k.a.achievementsList
				}, o.map(e => i.a.createElement(C, {
					achievement: e,
					key: e.type,
					onSelect: u
				}))), (() => d && !c ? i.a.createElement(v.a, {
					onClick: () => {
						a(Object(I.y)()), m()
					}
				}) : d ? null : i.a.createElement(f.s, {
					priority: f.b.Primary,
					className: k.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						a(Object(I.v)()), m()
					}
				}, T._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var U = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				S = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				B = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				M = r.n(B);
			const A = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: n,
				username: a
			}) => i.a.createElement("div", {
				className: Object(E.a)(M.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, i.a.createElement(S.a, {
				className: M.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: a,
				flairData: s
			}), i.a.createElement(U.a, {
				onClick: n
			}));
			var D = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				H = r.n(D),
				G = r("./src/reddit/actions/authorFlair.ts"),
				V = r("./src/reddit/components/Flair/index.tsx"),
				K = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				R = r.n(K);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), q = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(n.d)(),
					a = Object(j.a)(),
					o = Object(n.e)(u.k);
				return o ? i.a.createElement("div", {
					className: Object(E.a)(R.a.container, e)
				}, i.a.createElement("div", {
					className: R.a.header
				}, i.a.createElement("h4", {
					className: R.a.flairText
				}, Q._("User flair", null, {
					hk: "3ToqP0"
				})), i.a.createElement(f.s, {
					className: R.a.editButton,
					priority: f.b.Plain,
					onClick: () => {
						const e = o ? Object(c.e)(o) : null;
						a(Object(y.a)()), s(Object(G.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, i.a.createElement(_.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement(V.b, {
					className: R.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(a.a)(() => {
				const e = Object(n.d)(),
					t = Object(n.e)(u.k),
					r = Object(n.e)(l.e),
					s = Object(n.e)(e => r ? Object(m.b)(e, {
						subredditId: r.id
					}) : null),
					a = Object(n.e)(e => r ? Object(m.d)(e, {
						subredditId: r.id
					}) : null),
					p = !!s && !!a;
				return t && r ? i.a.createElement("div", {
					className: H.a.container
				}, i.a.createElement(A, {
					subredditId: r.id,
					userId: t.id,
					username: Object(c.e)(t),
					flairData: a,
					onModalClose: () => {
						e(Object(o.g)(d.a.ACHIEVEMENT_FLAIR))
					}
				}), p && i.a.createElement(q, {
					subredditId: r.id,
					flairData: a
				}), i.a.createElement(L, {
					subredditId: r.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less": function(e, t, r) {
			e.exports = {
				container: "_3NdKulBcLHFmpKDAy9Barm",
				hoverPopup: "_3TMcWG2R9E0iMw_Qcg9tfi",
				icon: "_2Xc055D-KCIUe6f2E3Ghgr",
				hiddenAchievementsCount: "_1zxdGxj6UKKqJMibObCbeA"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/actions/gold/powerups.ts"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				l = r("./src/reddit/hooks/useScrollGradient.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				v = r.n(h);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const h = Object(n.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: r
					})),
					I = Object(n.e)(e => Object(b.Q)(e, {
						subredditId: t
					})),
					j = Object(n.d)(),
					x = Object(u.a)(),
					{
						container: w,
						isScrollGradientVisible: O,
						calculateGradientVisibility: E
					} = Object(l.a)(!1);
				Object(s.useEffect)(() => {
					E()
				}, [E]);
				return i.a.createElement("div", {
					className: Object(a.a)(v.a.container, e)
				}, i.a.createElement("div", {
					className: v.a.header
				}, i.a.createElement(m.a, {
					className: v.a.powerupsLogo
				}), f._("{r/community} {=achievements}", [f._param("r/community", I.displayText), f._param("=achievements", i.a.createElement("span", {
					className: v.a.headerText
				}, f._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), i.a.createElement("div", {
					className: v.a.headerDelimiter
				}), i.a.createElement("div", {
					className: v.a.achievements,
					onScroll: E,
					ref: w
				}, h.map(e => !e.isLocked && i.a.createElement("div", {
					className: v.a.achievementItem,
					key: e.type
				}, i.a.createElement("div", {
					className: v.a.achievementImgWrapper
				}, i.a.createElement("img", {
					className: v.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), i.a.createElement("div", {
					className: v.a.achievementName
				}, i.a.createElement("span", null, e.name))))), i.a.createElement("div", {
					className: v.a.footer
				}, i.a.createElement("div", {
					className: Object(a.a)(v.a.scrollGradient, {
						[v.a.gradientVisible]: O
					})
				}), i.a.createElement(d.s, {
					priority: d.b.Secondary,
					className: v.a.ctaButton,
					onClick: () => {
						x(Object(c.a)()), j(Object(o.e)())
					},
					isFullWidth: !0
				}, f._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var j = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				x = r.n(j);
			const w = ({
					className: e,
					subredditId: t,
					userId: r,
					showPopupOnHover: o,
					onHover: d
				}) => {
					const c = Object(n.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: r
						})),
						l = Object(n.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: r
						})),
						u = Object(n.e)(e => Object(p.c)(e, {
							subredditId: t,
							userId: r
						})),
						m = u ? [...u.supporterTypes, ...u.achievementTypes] : null,
						[b, h] = Object(s.useState)(!1);
					if (!(!!c || !!l) || !m) return null;
					const v = (null == l ? void 0 : l.type) === (null == c ? void 0 : c.type) ? null : l,
						f = (v ? 1 : 0) + (c ? 1 : 0),
						j = (null == m ? void 0 : m.length) - f;
					return i.a.createElement("span", {
						className: Object(a.a)(x.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							o && (h(!0), null == d || d())
						},
						onMouseLeave: () => {
							h(!1)
						}
					}, i.a.createElement(O, {
						achievement: v
					}), i.a.createElement(O, {
						achievement: c
					}), !!j && i.a.createElement("span", {
						className: x.a.hiddenAchievementsCount
					}, "+", j), o && b && i.a.createElement(I, {
						className: x.a.hoverPopup,
						subredditId: t,
						userId: r
					}))
				},
				O = ({
					achievement: e
				}) => e ? i.a.createElement("img", {
					alt: e.name,
					className: x.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less": function(e, t, r) {
			e.exports = {
				flairPreviewLine: "_2ik4YxCeEmPotQkDrf9tT5",
				flairPreview: "_1DR1r7cWVoK2RVj_pKKyPF",
				badge: "_1CVe5UNoFFPNZQdcj1E7qb",
				userIcon: "_2UOVKq8AASb4UjcU1wrCil",
				allFlair: "FB0XngPKpgt3Ui354TbYQ",
				flairPreviewFirstLine: "_3tIyrJzJQoNhuwDSYG5PGy",
				username: "TIveY2GD5UQpMI7hBO69I",
				flairPreviewSecondLine: "e9ybGKB-qvCqbOOAHfFpF",
				userFlair: "y3jF8D--GYQUXbjpSOL5",
				achievementFlair: "_28u73JpPTG4y_Vu5Qute7n"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				d = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/components/UserIcon/constants.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = r.n(p);
			const h = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: i,
				username: p,
				userHasBadge: h
			}) => {
				const v = Object(a.e)(e => Object(m.k)(e));
				return v ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
					nsfwIconUrl: u.a,
					userName: p || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, h && n.a.createElement(o.a, {
					className: b.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: b.a.username
				}, `${p||"username"}`), n.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: t,
					userId: r
				})), (null == i ? void 0 : i.applied) && i.displaySettings.isUserEnabled && n.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, n.a.createElement(c.b, {
					className: b.a.userFlair,
					flair: i.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/experiments/econ/index.ts"),
				d = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(n.e)(d.t),
					s = Object(n.e)(o.h);
				return i.a.createElement(a.s, {
					priority: a.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? c._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : s ? c._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : c._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				i = r("./src/reddit/selectors/comments.ts"),
				n = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r) => o => {
					const d = Object(i.e)(o, {
							commentId: e
						}),
						c = Object(n.d)(o, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(o),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.defaults(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js");

			function i(e) {
				const [t, r] = Object(s.useState)(e), i = Object(s.useRef)(null);
				return {
					container: i,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = i.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							s = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						r(!s)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);

			function n(e) {
				return i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), i.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && i.a.createElement("title", null, e.title), i.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), i.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), i.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), i.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), i.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const n = e => e.type.startsWith("POWERUPS_SUPPORTER"),
				a = e => !n(e),
				o = {};
			var d = r("./node_modules/icepick/icepick.js"),
				c = r("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				u = e => {
					var t, r;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = o, t) => {
					switch (t.type) {
						case i.pb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const o = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								d = s.filter(a).map(e => e.type),
								c = s.filter(n).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: o,
									achievementTypes: d,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = l, t) => {
					switch (t.type) {
						case c.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let i = e[r] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of s) {
								const r = t.filter(a),
									s = r.map(({
										type: e
									}) => e),
									o = t.filter(n),
									d = o.map(({
										type: e
									}) => e),
									c = u(r),
									l = u(o);
								i = {
									...i,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										achievementDisplayType: c,
										supporterDisplayType: l
									}
								}
							}
							return {
								...e,
								[r]: i
							}
						}
						case c.f: {
							const {
								subredditId: r,
								userId: s,
								achievementType: i
							} = t.payload;
							return Object(d.setIn)(e, [r, s, "pendingPreferredType"], i)
						}
						case c.g: {
							const {
								subredditId: r,
								userId: s,
								achievementType: i
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								achievementDisplayType: i,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(d.setIn)(e, [r, s, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case c.h: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const i = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: i.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return h
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/commentSelector.ts"),
				n = r("./src/reddit/selectors/experiments/econ/index.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: o.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => {
					var r, s;
					return t ? null === (s = null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: r
				}) => {
					var s, i;
					return t && r ? null === (i = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === i ? void 0 : i[r] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.achievementDisplayType)),
				u = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(c, e => null == e ? void 0 : e.supporterDisplayType),
				p = Object(s.a)([d, m], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const r = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.achievementDisplayType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = (e, {
					commentId: t
				}) => {
					const r = Object(i.a)(e, {
							commentId: t
						}),
						s = null == r ? void 0 : r.subredditId,
						a = null == r ? void 0 : r.authorId;
					return !(!s || !a) && !(!((e, {
						subredditId: t,
						userId: r
					}) => {
						var s, i, n;
						return t && r ? null === (n = null === (i = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === i ? void 0 : i[r]) || void 0 === n ? void 0 : n[t] : null
					})(e, {
						subredditId: s,
						userId: a
					}) || !Object(n.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.2dc99420bcc8b961f509.js.map