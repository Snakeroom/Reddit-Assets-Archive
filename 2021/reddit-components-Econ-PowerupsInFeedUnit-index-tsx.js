// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.39d240a49af78340adea.js
// Retrieved at 12/7/2021, 10:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/actions/snoovatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return m
			})), a.d(t, "a", (function() {
				return v
			})), a.d(t, "e", (function() {
				return f
			})), a.d(t, "c", (function() {
				return h
			})), a.d(t, "d", (function() {
				return w
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/lib/sentry/index.ts"),
				n = a("./src/config.ts"),
				i = a("./src/lib/constants/index.ts"),
				c = a("./src/lib/makeApiRequest/index.ts"),
				d = a("./src/lib/omitHeaders/index.ts"),
				l = a("./src/reddit/constants/headers.ts");
			var u = a("./src/reddit/reducers/features/avatar/index.ts"),
				_ = a("./src/reddit/selectors/avatar.ts"),
				p = a("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const m = "SET_AVATAR_USER",
				b = Object(o.a)(m),
				v = "RANDOM_AVATAR_LOADED",
				E = Object(o.a)(v),
				f = (e, t, a) => async (s, o, {
					apiContext: r
				}) => {
					var u, m, b, v;
					const E = Object(_.b)(o()),
						f = await (async (e, t, a, s, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: a,
								...s
							}
						}))(r(), e, t, a, E);
					if (!f.ok) throw new Error("User avatar failed to save");
					return s(Object(p.A)(f.body)), {
						accountIcon: null === (m = null === (u = f.body) || void 0 === u ? void 0 : u.avatar) || void 0 === m ? void 0 : m.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (b = f.body) || void 0 === b ? void 0 : b.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, h = () => async (e, t, {
					apiContext: a
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(a());
						t.ok && e(b(t.body))
					} catch (s) {
						r.c.captureException(s)
					}
				}, w = () => async (e, t, {
					apiContext: a
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(a());
						t.ok && e(E(t.body))
					} catch (s) {
						r.c.captureException(s)
					}
				}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1tjm5mAw6CbmqAm82cwaAe",
				containerClickable: "_12ETqwk_rEASwSwC4LTdl2",
				heroes: "_1xr8vOZkP3Z1aqi0GVlhG7",
				heroesAvatarContainer: "_33ipNjYYNHKNP6aRMCuqyu",
				twoAvatarsContainer: "QEGs83pht1e9sqreE8rdg",
				heroesAvatar: "_1Rhp-wU2kBaVjLOMcsBK7R",
				heroImage: "_1s4Q5XjokhPDv6KobkwfC_",
				heroesTitle: "_1lF-V9k5_vuSgmcqbFv1-r",
				title: "afIbbnRh2nmaJ17MKDECR",
				progressBar: "u6z9wwkHkYsAHhii9K7g9"
			}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			}));
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				c = a("./src/reddit/components/UserIcon/index.tsx"),
				d = a("./src/reddit/selectors/gold/powerups/index.ts"),
				l = a("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = a.n(l);
			const {
				fbt: _
			} = a("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				onClick: a
			}) => {
				const s = Object(r.e)(e => Object(d.k)(e, {
						subredditId: t
					})),
					l = Object(r.e)(e => Object(d.m)(e, {
						subredditId: t
					}));
				if (!s) return null;
				const {
					tier: p,
					count: m,
					tiersInfo: b,
					supportersCount: v
				} = s, E = b[1].powerupsCost, f = p >= 2, h = (null == l ? void 0 : l.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], w = Math.min(m, E) / E, O = E - m;
				return o.a.createElement("div", {
					className: Object(n.a)(u.a.container, e, {
						[u.a.containerClickable]: !!a
					}),
					"data-testid": "join-heroes",
					onClick: () => null == a ? void 0 : a(m)
				}, o.a.createElement("div", {
					className: u.a.heroes
				}, !!h.length && o.a.createElement("div", {
					className: Object(n.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: h.length > 1
					})
				}, h.map(e => {
					var t, a;
					return o.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(c.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (a = e.supporterInfo.profile) || void 0 === a ? void 0 : a.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => v ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(v, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), o.a.createElement("p", {
					className: u.a.title
				}, f ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", O), _._plural(O)], {
					hk: "2aHf4k"
				})), o.a.createElement(i.a, {
					className: u.a.progressBar,
					progress: w
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, a) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var s = a("./src/lib/classNames/index.ts"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				n = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = a.n(i);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: a
			}) => r.a.createElement("button", {
				onClick: a,
				className: Object(s.a)(c.a.closeButton, {
					[c.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, r.a.createElement(n.b, {
				className: c.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less": function(e, t, a) {
			e.exports = {
				powerupsIcon: "_2uNsATPrzL4yprAYn1bgAq",
				container: "_3tZDqkm04pN0jRZCQWdnnj",
				title: "J2b6z_YpR1EFwlnmZXj_L",
				subtitle: "_3nx0CetCO-ndQlUSq4tL5d",
				button: "_1Ud8Fg6fg8z0GmHHNKYuJT"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less": function(e, t, a) {
			e.exports = {
				container: "_37a4QiPrsVtozH4qkNZwDj",
				header: "bX7tNotjfQnMB5sOh-EW_",
				powerupsBolt: "_2ESHZ6sIUs88srzVghBenH",
				headerText: "_14PHStRBtEebDMSDZ5gwap",
				title: "_2m5AtT2c7vrZXTy6boHoWC",
				subtitle: "_3kjiDzYc4g7JRxNgi_6Iw8",
				contentWrapper: "k8OChSaeB7FZt7X8KAEE3",
				avatarTop: "_20FNJCIiSq78ipBmWSou11",
				buttonWrapper: "_20LKMnJw4sWV3Hg4KP7SiO"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less": function(e, t, a) {
			e.exports = {
				modal: "tN9N11BZQzYVXGR9sYOH",
				header: "Ko7mD2xrA_T-hQnAg7bhU",
				contentWrapper: "_1s5hpVw5eWY5fVoZu-xj38",
				avatarTop: "_3APzLANFCmQxIfBEaPQ6k5",
				legalTextContainer: "_2n_vOmlSXLcswAhWo-jIhQ",
				learnMoreLink: "_3VKGwE-5XCUuOCDowqOGIn",
				buttonsRow: "_2CEDH2oWtfy4MrBEpw9HFT",
				button: "UCyCqzqk4J3lkNPrxCX4r"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, a) {
			e.exports = {
				container: "SS170RmKHoZuMMkJr141W",
				powerupsIcon: "w787eo650WzP0J00UYn-2",
				communityGearAvatar: "_35IGztfyzwQ3wZ8LAuV7rb",
				title: "_2QS5-06aVEbnm3x8WBjauN",
				subtitle: "_1hOGKkXaNRO6P9r7WcJZJO",
				supporters: "_1VV6QeoM4CWq3umVQYWm65",
				button: "ORJj8Dlz_GOfn6EWZgv_N"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s, o = a("./node_modules/react/index.js"),
				r = a.n(o),
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/constants/localStorage.ts"),
				c = a("./src/reddit/helpers/localStorage/index.ts"),
				d = a("./src/reddit/helpers/trackers/powerups.ts"),
				l = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/constants/posts.ts"),
				_ = a("./src/reddit/selectors/experiments/econ/index.ts"),
				p = a("./src/reddit/selectors/subreddit.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				b = a("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.UNLOCKED_UNAPPLIED_FROM_PREMIUM = 3] = "UNLOCKED_UNAPPLIED_FROM_PREMIUM", e[e.HIDDEN = 4] = "HIDDEN"
			}(s || (s = {}));
			var v = a("./src/config.ts"),
				E = a("./src/lib/classNames/index.ts"),
				f = a("./src/reddit/actions/gold/powerups.ts"),
				h = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				w = a("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				O = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less"),
				y = a.n(O);
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var C = ({
					subredditId: e,
					className: t
				}) => {
					const a = Object(n.d)(),
						s = Object(l.a)(),
						o = Object(n.e)(t => Object(p.R)(t, {
							subredditId: e
						}).displayText);
					return r.a.createElement("div", {
						className: Object(E.a)(y.a.container, t)
					}, r.a.createElement("img", {
						className: y.a.powerupsIcon,
						src: `${v.a.assetPath}/img/powerups/powerups-rangers.png`,
						"data-testid": "powerups-icon-rangers"
					}), r.a.createElement("h2", {
						className: y.a.title
					}, g._("Use your Powerup to support {subreddit name}", [g._param("subreddit name", o)], {
						hk: "2OMTwG"
					})), r.a.createElement("h3", {
						className: y.a.subtitle
					}, g._("Go ahead, show them some love!", null, {
						hk: "3NzF6j"
					})), r.a.createElement(h.a, {
						className: y.a.button,
						onClick: () => {
							s(Object(d.r)()), a(Object(f.g)("in_feed_unit"))
						}
					}), r.a.createElement(w.a, {
						space: w.b.INFEED_UNIT
					}))
				},
				x = a("./src/reddit/controls/Button/index.tsx"),
				N = a("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				I = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less"),
				P = a.n(I),
				U = a("./src/higherOrderComponents/asModal/index.tsx"),
				j = a("./src/lib/opener/index.ts"),
				A = a("./src/reddit/actions/snoovatar.ts"),
				M = a("./src/reddit/actions/toaster.ts"),
				k = a("./src/reddit/actions/urlRequested.ts"),
				T = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				R = a("./src/reddit/constants/avatars.ts"),
				D = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = a("./src/reddit/helpers/avatar/index.ts"),
				F = a("./src/reddit/models/Avatar/accessories.ts"),
				B = a("./src/reddit/models/Toast/index.ts"),
				L = a("./src/reddit/selectors/avatar.ts"),
				W = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less"),
				q = a.n(W);
			const {
				fbt: H
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var G = Object(U.a)(({
				subredditId: e,
				closeModal: t
			}) => {
				const a = Object(l.a)(),
					s = Object(n.d)(),
					i = Object(n.e)(L.a),
					[c, u] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					a(Object(d.o)()), s(Object(A.c)())
				}, [s, a]);
				const _ = async () => s(Object(k.a)("/user/me", !0)), p = H._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), {
					legalCopy: m,
					learnMoreText: b,
					url: E
				} = R.a;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: q.a.modal
				}, r.a.createElement("div", {
					className: q.a.header
				}, p, r.a.createElement(T.a, {
					onClick: t
				})), r.a.createElement("div", {
					className: q.a.contentWrapper
				}, r.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: q.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${v.a.assetPath}/img/powerups/communityGear/${e}.png`
				}), r.a.createElement("div", {
					className: q.a.legalTextContainer
				}, r.a.createElement("span", null, m()), r.a.createElement("a", {
					href: E,
					target: j.d.BLANK,
					className: q.a.learnMoreLink,
					rel: j.c
				}, b()))), r.a.createElement("div", {
					className: q.a.buttonsRow
				}, r.a.createElement(x.t, {
					className: q.a.button,
					priority: x.c.Secondary,
					onClick: t
				}, H._("Go Back", null, {
					hk: "1EHXc5"
				})), r.a.createElement(x.t, {
					className: q.a.button,
					priority: x.c.Primary,
					onClick: async () => {
						if (a(Object(d.n)()), !i) return;
						const o = i.snoovatar,
							r = (null == o ? void 0 : o.styles) || {},
							n = (null == o ? void 0 : o.accessories) || [],
							c = Object(S.a)(n, [F.d[e]]).map(e => e.id);
						try {
							u(!0);
							const e = await s(Object(A.e)(c, r, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							}));
							u(!1), t(), s(Object(M.f)({
								customIconAsset: e.accountIcon,
								duration: M.a,
								kind: B.b.SuccessCommunityGreen,
								text: H._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: H._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: _
							}))
						} catch {
							u(!1), s(Object(M.f)({
								duration: M.a,
								kind: B.b.Error,
								text: H._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					},
					disabled: c
				}, c ? r.a.createElement(D.a, {
					sizePx: 12,
					center: !0
				}) : r.a.createElement(r.a.Fragment, null, H._("Yes", null, {
					hk: "27lXsL"
				}))))))
			});
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var Y = ({
					className: e,
					subredditId: t
				}) => {
					const a = Object(l.a)(),
						[s, n] = Object(o.useState)(!1),
						i = () => n(!1);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(E.a)(P.a.container, e)
					}, r.a.createElement("div", {
						className: P.a.header
					}, r.a.createElement(N.a, {
						className: P.a.powerupsBolt
					}), r.a.createElement("div", {
						className: P.a.headerText
					}, r.a.createElement("h2", {
						className: P.a.title
					}, K._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), r.a.createElement("h3", {
						className: P.a.subtitle
					}, K._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), r.a.createElement("div", {
						className: P.a.contentWrapper
					}, r.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: P.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${v.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
					})), r.a.createElement("div", {
						className: P.a.buttonWrapper
					}, r.a.createElement(x.t, {
						priority: x.c.Secondary,
						onClick: () => {
							a(Object(d.m)()), (() => n(!0))()
						},
						isFullWidth: !0
					}, K._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), s && r.a.createElement(G, {
						withOverlay: !0,
						closeModal: i,
						onOverlayClick: i,
						subredditId: t
					}))
				},
				z = a("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				V = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				X = a.n(V);
			const {
				fbt: J
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var Q = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: a
			}) => {
				const o = Object(n.d)(),
					i = Object(l.a)(),
					c = Object(n.e)(e => Object(p.R)(e, {
						subredditId: t
					}));
				if (a === s.HIDDEN) return null;
				const u = J._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return r.a.createElement("div", {
					className: Object(E.a)(X.a.container, e)
				}, a === s.POWERUPS_DEFAULT ? r.a.createElement(() => r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: X.a.powerupsIcon,
					src: `${v.a.assetPath}/img/powerups/powerups-rangers.png`,
					"data-testid": "powerups-icon-rangers"
				}), r.a.createElement("h2", {
					className: X.a.title
				}, J._("Powerup {subreddit name}", [J._param("subreddit name", c.displayText)], {
					hk: "2zwNZk"
				})), r.a.createElement("h3", {
					className: X.a.subtitle
				}, u)), null) : r.a.createElement(() => r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: X.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${v.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
				}), r.a.createElement("h2", {
					className: X.a.title
				}, J._("Unlock gear for {subreddit name}", [J._param("subreddit name", c.displayText)], {
					hk: "208mAS"
				}))), null), r.a.createElement(z.a, {
					className: X.a.supporters,
					subredditId: t,
					onClick: e => {
						i(Object(d.e)("post_upsell")), o(e ? Object(f.i)(t) : Object(f.g)("in_feed_unit"))
					}
				}), r.a.createElement(h.a, {
					className: X.a.button,
					onClick: () => {
						a === s.POWERUPS_DEFAULT ? i(Object(d.q)()) : i(Object(d.t)()), o(Object(f.g)("in_feed_unit"))
					}
				}), r.a.createElement(w.a, {
					space: w.b.INFEED_UNIT
				}))
			};
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const a = Object(l.a)(),
					v = Object(n.e)(t => Object(p.R)(t, {
						subredditId: e
					})),
					[E, f] = Object(o.useState)(s.HIDDEN),
					h = Object(n.e)(e => ((e, {
						subredditId: t,
						subredditName: a
					}) => {
						const o = Object(b.w)(e, {
								subredditId: t
							}),
							r = Object(p.db)(e, {
								identifier: {
									name: a,
									type: u.a.SUBREDDIT
								}
							}),
							n = Object(b.l)(e, {
								subredditId: t
							}),
							i = Object(b.q)(e, {
								subredditId: t
							}),
							c = Object(b.g)(e, {
								subredditId: t
							}),
							d = Object(b.v)(e) && Object(m.s)(e);
						return n || o ? i && r && Object(_.j)(e) ? s.UNLOCKED_COMMUNITY_GEAR : d ? s.UNLOCKED_UNAPPLIED_FROM_PREMIUM : s.HIDDEN : c && r && Object(_.j)(e) ? s.POWERUPS_COMMUNITY_GEAR : s.POWERUPS_DEFAULT
					})(e, {
						subredditId: v.id,
						subredditName: v.name
					})),
					w = (e => e === s.POWERUPS_DEFAULT || e === s.POWERUPS_COMMUNITY_GEAR ? i.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE : e === s.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? i.b.POWERUPS_UNAPPLIED_PREMIUM_INFEED_UNIT_VISIBILITY_STORE : e === s.UNLOCKED_COMMUNITY_GEAR ? i.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : null)(h);
				switch (Object(o.useEffect)(() => {
					const t = ((e, t) => {
						if (!t) return !0;
						return Object(c.j)(t, e) >= 2
					})(e, w) ? s.HIDDEN : h;
					f(t)
				}, [e, w, h, f]), Object(o.useEffect)(() => {
					if (E === s.HIDDEN) return;
					(() => E === s.UNLOCKED_COMMUNITY_GEAR ? a(Object(d.p)()) : E === s.POWERUPS_DEFAULT ? a(Object(d.v)()) : E === s.POWERUPS_COMMUNITY_GEAR ? a(Object(d.u)()) : E === s.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? a(Object(d.s)()) : void 0)(), Object(c.R)(w, e)
				}, [E, f, w, e, a, h]), E) {
					case s.POWERUPS_DEFAULT:
					case s.POWERUPS_COMMUNITY_GEAR:
						return r.a.createElement(Q, {
							className: t,
							subredditId: e,
							inFeedDisplayState: E
						});
					case s.UNLOCKED_UNAPPLIED_FROM_PREMIUM:
						return r.a.createElement(C, {
							className: t,
							subredditId: e
						});
					case s.UNLOCKED_COMMUNITY_GEAR:
						return r.a.createElement(Y, {
							className: t,
							subredditId: e
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, a) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return p
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "n", (function() {
				return b
			})), a.d(t, "p", (function() {
				return v
			})), a.d(t, "o", (function() {
				return E
			})), a.d(t, "f", (function() {
				return f
			})), a.d(t, "m", (function() {
				return h
			})), a.d(t, "h", (function() {
				return w
			})), a.d(t, "j", (function() {
				return O
			})), a.d(t, "k", (function() {
				return y
			})), a.d(t, "g", (function() {
				return g
			})), a.d(t, "i", (function() {
				return C
			})), a.d(t, "q", (function() {
				return x
			})), a.d(t, "d", (function() {
				return N
			})), a.d(t, "l", (function() {
				return I
			})), a.d(t, "t", (function() {
				return P
			})), a.d(t, "u", (function() {
				return U
			})), a.d(t, "r", (function() {
				return j
			})), a.d(t, "a", (function() {
				return A
			})), a.d(t, "s", (function() {
				return M
			})), a.d(t, "c", (function() {
				return k
			}));
			var s = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				i = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/controls/Input/ModalInput.tsx"),
				d = a("./src/reddit/icons/svgs/Close/index.tsx"),
				l = a("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = a.n(l);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				m = o.a.section("ModalBody", u.a),
				b = o.a.section("ModalPostPreview", u.a),
				v = o.a.p("ModalText", u.a),
				E = o.a.div("ModalSmallText", u.a),
				f = o.a.div("ModalDescriptionText", u.a),
				h = o.a.div("ModalMetaText", u.a),
				w = o.a.label("ModalFormItem", u.a),
				O = o.a.wrapped(c.a, "ModalInput", u.a),
				y = o.a.label("ModalInputLabel", u.a),
				g = o.a.footer("ModalFooter", u.a),
				C = o.a.header("ModalHeader", u.a),
				x = o.a.div("ModalTitle", u.a),
				N = o.a.div("ModalAnnotation", u.a),
				I = o.a.div("ModalMain", u.a),
				P = o.a.textarea("TextArea", u.a),
				U = o.a.wrapped(i.l, "WarningButton", u.a),
				j = o.a.wrapped(i.l, "PrimaryButton", u.a),
				A = o.a.wrapped(i.o, "CancelButton", u.a),
				M = o.a.wrapped(i.r, "RemoveButton", u.a),
				k = ({
					className: e,
					...t
				}) => n.a.createElement(i.t, _({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(s.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/constants/avatars.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
				legalCopy: () => s.fbt._("Avatars and avatar visual elements © Reddit and its licensors.", null, {
					hk: "ZgN7P"
				}),
				learnMoreText: () => s.fbt._("Learn more", null, {
					hk: "1rlvT"
				}),
				url: "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				c = a("./src/reddit/constants/keycodes.ts"),
				d = a("./src/reddit/controls/Input/index.m.less"),
				l = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...a
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(n.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, a))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(_)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/helpers/avatar/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/lodash/flatten.js"),
				o = a.n(s);
			const r = (e, t) => {
				const a = o()(t.map(e => e.assets.map(e => e.slot)));
				return [...e.filter(e => !e.assets.find(e => a.includes(e.slot))), ...t]
			}
		},
		"./src/reddit/models/Avatar/accessories.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return r
			})), a.d(t, "d", (function() {
				return n
			}));
			const s = {
					id: "achievement_head_accessory_012",
					section_id: "head_accessories",
					assets: [{
						accessory_id: "achievement_head_accessory_012",
						slot: 80,
						image_url: "https://i.redd.it/snoovatar/accessory_assets/r13ZdtEfXFM_achievement_head_accessory_012.svg"
					}],
					customizable_classes: [],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				o = {
					id: "achievement_body_012",
					section_id: "top_body_tops",
					assets: [{
						accessory_id: "achievement_body_012",
						slot: 40,
						image_url: "https://i.redd.it/snoovatar/snoo_assets/XvgCbVDmabY_achievement_body_012.svg"
					}],
					customizable_classes: ["body"],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				r = {
					id: "achievement_body_bottom_012",
					section_id: "bottom_body_bottoms",
					assets: [{
						accessory_id: "achievement_body_bottom_012",
						slot: 30,
						image_url: "https://i.redd.it/snoovatar/snoo_assets/_Fx-Iq6Aueg_achievement_body_bottom_012.svg"
					}],
					customizable_classes: ["body"],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				n = {
					t5_4hmhx4: {
						id: "powerups_top_powerupsteam",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_powerupsteam",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/np95XAspcxQ_powerups_top_powerupsteam.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4hmhx4"}'],
						available_for_closet: !0
					},
					t5_37xo2: {
						id: "powerups_top_roastme",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_roastme",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/U5c4hNHwkok_powerups_top_roastme.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_37xo2"}'],
						available_for_closet: !0
					},
					t5_2qhta: {
						id: "powerups_top_cats",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_cats",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/gga_gu5iv6o_powerups_top_cats.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_2qhta"}'],
						available_for_closet: !0
					},
					t5_2qh55: {
						id: "powerups_top_food",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_food",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/np95XAspcxQ_powerups_top_food.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_2qh55"}'],
						available_for_closet: !0
					},
					t5_3f1s6: {
						id: "powerups_top_breathofthewild",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "enabled",
						assets: [{
							accessory_id: "powerups_top_breathofthewild",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/oahPwJK8sSk_powerups_top_breathofthewild.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_id":"t5_3f1s6"}'],
						available_for_closet: !0
					},
					t5_mvcq5: {
						id: "powerups_top_tiktokcringe",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "enabled",
						assets: [{
							accessory_id: "powerups_top_tiktokcringe",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/XlGK2-AG3V0_powerups_top_tiktokcringe.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_id":"t5_mvcq5"}'],
						available_for_closet: !0
					},
					t5_4e4fpz: {
						id: "powerups_top_qa_powerupsenabled",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "enabled",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/oahPwJK8sSk_powerups_top_qa_powerupsenabled.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_id":"t5_4e4fpz"}'],
						available_for_closet: !0
					},
					t5_4e4ib9: {
						id: "powerups_top_qa_powerupsenabled2",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled2",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/U5c4hNHwkok_powerups_top_qa_powerupsenabled2.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4e4ib9"}'],
						available_for_closet: !0
					},
					t5_4y3poa: {
						id: "powerups_top_qa_powerupsenabled3",
						section_id: "top_body_tops",
						customizable_classes: ["body"],
						capability_required: null,
						state: "ENABLED",
						assets: [{
							accessory_id: "powerups_top_qa_powerupsenabled3",
							image_url: "https://i.redd.it/snoovatar/snoo_assets/gga_gu5iv6o_powerups_top_qa_powerupsenabled3.svg",
							slot: 40
						}],
						tags: ['powerups={"subreddit_i:"t5_4y3poa"}'],
						available_for_closet: !0
					}
				}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, a) {
			"use strict";
			var s, o, r = a("./node_modules/redux/es/redux.js"),
				n = a("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = (e = i, t) => {
				switch (t.type) {
					case n.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				_ = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const a = e.split(":");
							if (!a.length && a.length < 3) return null;
							try {
								t[a[1]] = JSON.parse(a[2])
							} catch {
								t[a[1]] = a[2]
							}
						}
					}), t
				};
			var m = a("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = a("./src/reddit/actions/modal.ts"),
				v = a("./src/reddit/constants/modals.ts");
			var E = (e = null, t) => {
				var a;
				switch (t.type) {
					case m.o:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: a,
									endsAt: s,
									webAssetUrls: o,
									tags: r
								} = e, n = a && new Date(a) <= new Date, i = !!s && new Date(s) < new Date, c = !!n && !i, d = r.includes(_);
								if (r && r.includes(l) && !d) {
									const {
										text: a,
										id: s
									} = e, n = o || null, i = p(r);
									t && (t.quickCreateV1 = {
										...i,
										id: s,
										text: a,
										active: c && !!n,
										webAssetUrls: n
									})
								}
								if (r && r.includes(u) && !d) {
									const e = o || null;
									t && (t.marketingEvent = {
										active: c && !!e,
										assetUrls: e
									})
								}
							}), t
						}(s) : d;
					case b.c:
						return (null === (a = t.payload) || void 0 === a ? void 0 : a.id) === v.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var f = (e = null, t) => {
				switch (t.type) {
					case n.a: {
						const {
							image: e,
							accessory_ids: a
						} = t.payload;
						return {
							image: e,
							accessoryIds: a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				marketing: E,
				avatarUser: c,
				randomAvatar: f
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return i
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				o = a("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, a;
					return null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.avatarUser
				},
				n = e => {
					var t, a;
					return null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.avatarUser.csrf_token
				},
				i = e => {
					var t, a;
					return (null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.randomAvatar) || null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.39d240a49af78340adea.js.map