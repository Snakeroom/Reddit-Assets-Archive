// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.ae133af51ba7a8641df3.js
// Retrieved at 1/20/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/actions/snoovatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return m
			})), a.d(t, "a", (function() {
				return v
			})), a.d(t, "e", (function() {
				return E
			})), a.d(t, "c", (function() {
				return w
			})), a.d(t, "d", (function() {
				return h
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				r = a("./src/lib/makeActionCreator/index.ts"),
				o = a("./src/lib/sentry/index.ts"),
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
				b = Object(r.a)(m),
				v = "RANDOM_AVATAR_LOADED",
				f = Object(r.a)(v),
				E = (e, t, a) => async (s, r, {
					apiContext: o
				}) => {
					var u, m, b, v;
					const f = Object(_.b)(r()),
						E = await (async (e, t, a, s, r) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r || ""
							},
							data: {
								accessory_ids: t,
								styles: a,
								...s
							}
						}))(o(), e, t, a, f);
					if (!E.ok) throw new Error("User avatar failed to save");
					return s(Object(p.A)(E.body)), {
						accountIcon: null === (m = null === (u = E.body) || void 0 === u ? void 0 : u.avatar) || void 0 === m ? void 0 : m.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (b = E.body) || void 0 === b ? void 0 : b.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, w = () => async (e, t, {
					apiContext: a
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(a());
						t.ok && e(b(t.body))
					} catch (s) {
						o.c.captureException(s)
					}
				}, h = () => async (e, t, {
					apiContext: a
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(a());
						t.ok && e(f(t.body))
					} catch (s) {
						o.c.captureException(s)
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
				r = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
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
				const s = Object(o.e)(e => Object(d.k)(e, {
						subredditId: t
					})),
					l = Object(o.e)(e => Object(d.m)(e, {
						subredditId: t
					}));
				if (!s) return null;
				const {
					tier: p,
					count: m,
					tiersInfo: b,
					supportersCount: v
				} = s, f = b[1].powerupsCost, E = p >= 2, w = (null == l ? void 0 : l.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], h = Math.min(m, f) / f, O = f - m;
				return r.a.createElement("div", {
					className: Object(n.a)(u.a.container, e, {
						[u.a.containerClickable]: !!a
					}),
					"data-testid": "join-heroes",
					onClick: () => null == a ? void 0 : a(m)
				}, r.a.createElement("div", {
					className: u.a.heroes
				}, !!w.length && r.a.createElement("div", {
					className: Object(n.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: w.length > 1
					})
				}, w.map(e => {
					var t, a;
					return r.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(c.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (a = e.supporterInfo.profile) || void 0 === a ? void 0 : a.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => v ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(v, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: u.a.title
				}, E ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", O), _._plural(O)], {
					hk: "2aHf4k"
				})), r.a.createElement(i.a, {
					className: u.a.progressBar,
					progress: h
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
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				n = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = a.n(i);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: a
			}) => o.a.createElement("button", {
				onClick: a,
				className: Object(s.a)(c.a.closeButton, {
					[c.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(n.b, {
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
			var s, r = a("./node_modules/react/index.js"),
				o = a.n(r),
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
				f = a("./src/lib/classNames/index.ts"),
				E = a("./src/reddit/actions/gold/powerups.ts"),
				w = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				h = a("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				O = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less"),
				g = a.n(O);
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var C = ({
					subredditId: e,
					className: t
				}) => {
					const a = Object(n.d)(),
						s = Object(l.a)(),
						r = Object(n.e)(t => Object(p.R)(t, {
							subredditId: e
						}).displayText);
					return o.a.createElement("div", {
						className: Object(f.a)(g.a.container, t)
					}, o.a.createElement("img", {
						className: g.a.powerupsIcon,
						src: `${v.a.assetPath}/img/powerups/powerups-rangers.png`,
						"data-testid": "powerups-icon-rangers"
					}), o.a.createElement("h2", {
						className: g.a.title
					}, y._("Use your Powerup to support {subreddit name}", [y._param("subreddit name", r)], {
						hk: "2OMTwG"
					})), o.a.createElement("h3", {
						className: g.a.subtitle
					}, y._("Go ahead, show them some love!", null, {
						hk: "3NzF6j"
					})), o.a.createElement(w.a, {
						className: g.a.button,
						onClick: () => {
							s(Object(d.r)()), a(Object(E.g)("in_feed_unit"))
						}
					}), o.a.createElement(h.a, {
						space: h.b.INFEED_UNIT
					}))
				},
				P = a("./src/reddit/controls/Button/index.tsx"),
				x = a("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				N = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less"),
				I = a.n(N),
				U = a("./src/higherOrderComponents/asModal/index.tsx"),
				j = a("./src/lib/opener/index.ts"),
				k = a("./src/reddit/actions/snoovatar.ts"),
				A = a("./src/reddit/actions/toaster.ts"),
				M = a("./src/reddit/actions/urlRequested.ts"),
				T = a("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				R = a("./src/reddit/constants/avatars.ts"),
				D = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = a("./src/reddit/helpers/avatar/index.ts"),
				F = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				B = a("./src/reddit/models/Avatar/accessories.ts"),
				L = a("./src/reddit/models/Toast/index.ts"),
				q = a("./src/reddit/selectors/avatar.ts"),
				W = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less"),
				G = a.n(W);
			const {
				fbt: H
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var Y = Object(U.a)(({
				subredditId: e,
				closeModal: t
			}) => {
				const a = Object(l.a)(),
					s = Object(n.d)(),
					i = Object(n.e)(q.a),
					[c, u] = Object(r.useState)(!1);
				Object(r.useEffect)(() => {
					a(Object(d.o)()), s(Object(k.c)())
				}, [s, a]);
				const _ = async () => s(Object(M.a)("/user/me", !0)), p = H._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), {
					legalCopy: m,
					learnMoreText: b,
					url: f
				} = R.a;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: G.a.modal
				}, o.a.createElement("div", {
					className: G.a.header
				}, p, o.a.createElement(T.a, {
					onClick: t
				})), o.a.createElement("div", {
					className: G.a.contentWrapper
				}, o.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: G.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${v.a.assetPath}/img/powerups/communityGear/${e}.png`
				}), o.a.createElement("div", {
					className: G.a.legalTextContainer
				}, o.a.createElement("span", null, m()), o.a.createElement("a", {
					href: f,
					target: j.d.BLANK,
					className: G.a.learnMoreLink,
					rel: j.c
				}, b()))), o.a.createElement("div", {
					className: G.a.buttonsRow
				}, o.a.createElement(P.t, {
					className: G.a.button,
					priority: P.c.Secondary,
					onClick: t
				}, H._("Go Back", null, {
					hk: "1EHXc5"
				})), o.a.createElement(P.t, {
					className: G.a.button,
					priority: P.c.Primary,
					onClick: async () => {
						if (a(Object(d.n)()), !i) return;
						const r = i.snoovatar,
							o = (null == r ? void 0 : r.styles) || {},
							n = (null == r ? void 0 : r.accessories) || [],
							c = Object(S.a)(n, [B.d[e]]).map(e => e.id);
						try {
							u(!0), a(Object(F.e)("powerups_post_upsell"));
							const e = await s(Object(k.e)(c, o, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							}));
							u(!1), t(), s(Object(A.f)({
								customIconAsset: e.accountIcon,
								duration: A.a,
								kind: L.b.SuccessCommunityGreen,
								text: H._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: H._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: _
							}))
						} catch {
							u(!1), s(Object(A.f)({
								duration: A.a,
								kind: L.b.Error,
								text: H._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					},
					disabled: c
				}, c ? o.a.createElement(D.a, {
					sizePx: 12,
					center: !0
				}) : o.a.createElement(o.a.Fragment, null, H._("Yes", null, {
					hk: "27lXsL"
				}))))))
			});
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var z = ({
					className: e,
					subredditId: t
				}) => {
					const a = Object(l.a)(),
						[s, n] = Object(r.useState)(!1),
						i = () => n(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(f.a)(I.a.container, e)
					}, o.a.createElement("div", {
						className: I.a.header
					}, o.a.createElement(x.a, {
						className: I.a.powerupsBolt
					}), o.a.createElement("div", {
						className: I.a.headerText
					}, o.a.createElement("h2", {
						className: I.a.title
					}, K._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), o.a.createElement("h3", {
						className: I.a.subtitle
					}, K._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), o.a.createElement("div", {
						className: I.a.contentWrapper
					}, o.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: I.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${v.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
					})), o.a.createElement("div", {
						className: I.a.buttonWrapper
					}, o.a.createElement(P.t, {
						priority: P.c.Secondary,
						onClick: () => {
							a(Object(d.m)()), (() => n(!0))()
						},
						isFullWidth: !0
					}, K._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), s && o.a.createElement(Y, {
						withOverlay: !0,
						closeModal: i,
						onOverlayClick: i,
						subredditId: t
					}))
				},
				V = a("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				X = a("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				J = a.n(X);
			const {
				fbt: Q
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var Z = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: a
			}) => {
				const r = Object(n.d)(),
					i = Object(l.a)(),
					c = Object(n.e)(e => Object(p.R)(e, {
						subredditId: t
					}));
				if (a === s.HIDDEN) return null;
				const u = Q._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return o.a.createElement("div", {
					className: Object(f.a)(J.a.container, e)
				}, a === s.POWERUPS_DEFAULT ? o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: J.a.powerupsIcon,
					src: `${v.a.assetPath}/img/powerups/powerups-rangers.png`,
					"data-testid": "powerups-icon-rangers"
				}), o.a.createElement("h2", {
					className: J.a.title
				}, Q._("Powerup {subreddit name}", [Q._param("subreddit name", c.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: J.a.subtitle
				}, u)), null) : o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: J.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${v.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
				}), o.a.createElement("h2", {
					className: J.a.title
				}, Q._("Unlock gear for {subreddit name}", [Q._param("subreddit name", c.displayText)], {
					hk: "208mAS"
				}))), null), o.a.createElement(V.a, {
					className: J.a.supporters,
					subredditId: t,
					onClick: e => {
						i(Object(d.e)("post_upsell")), r(e ? Object(E.i)(t) : Object(E.g)("in_feed_unit"))
					}
				}), o.a.createElement(w.a, {
					className: J.a.button,
					onClick: () => {
						a === s.POWERUPS_DEFAULT ? i(Object(d.q)()) : i(Object(d.t)()), r(Object(E.g)("in_feed_unit"))
					}
				}), o.a.createElement(h.a, {
					space: h.b.INFEED_UNIT
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
					[f, E] = Object(r.useState)(s.HIDDEN),
					w = Object(n.e)(e => ((e, {
						subredditId: t,
						subredditName: a
					}) => {
						const r = Object(b.x)(e, {
								subredditId: t
							}),
							o = Object(p.db)(e, {
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
							d = Object(b.w)(e) && Object(m.s)(e);
						return n || r ? i && o && Object(_.i)(e) ? s.UNLOCKED_COMMUNITY_GEAR : d ? s.UNLOCKED_UNAPPLIED_FROM_PREMIUM : s.HIDDEN : c && o && Object(_.i)(e) ? s.POWERUPS_COMMUNITY_GEAR : s.POWERUPS_DEFAULT
					})(e, {
						subredditId: v.id,
						subredditName: v.name
					})),
					h = (e => e === s.POWERUPS_DEFAULT || e === s.POWERUPS_COMMUNITY_GEAR ? i.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE : e === s.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? i.b.POWERUPS_UNAPPLIED_PREMIUM_INFEED_UNIT_VISIBILITY_STORE : e === s.UNLOCKED_COMMUNITY_GEAR ? i.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : null)(w);
				switch (Object(r.useEffect)(() => {
					const t = ((e, t) => {
						if (!t) return !0;
						return Object(c.j)(t, e) >= 2
					})(e, h) ? s.HIDDEN : w;
					E(t)
				}, [e, h, w, E]), Object(r.useEffect)(() => {
					if (f === s.HIDDEN) return;
					(() => f === s.UNLOCKED_COMMUNITY_GEAR ? a(Object(d.p)()) : f === s.POWERUPS_DEFAULT ? a(Object(d.v)()) : f === s.POWERUPS_COMMUNITY_GEAR ? a(Object(d.u)()) : f === s.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? a(Object(d.s)()) : void 0)(), Object(c.R)(h, e)
				}, [f, E, h, e, a, w]), f) {
					case s.POWERUPS_DEFAULT:
					case s.POWERUPS_COMMUNITY_GEAR:
						return o.a.createElement(Z, {
							className: t,
							subredditId: e,
							inFeedDisplayState: f
						});
					case s.UNLOCKED_UNAPPLIED_FROM_PREMIUM:
						return o.a.createElement(C, {
							className: t,
							subredditId: e
						});
					case s.UNLOCKED_COMMUNITY_GEAR:
						return o.a.createElement(z, {
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
				return f
			})), a.d(t, "f", (function() {
				return E
			})), a.d(t, "m", (function() {
				return w
			})), a.d(t, "h", (function() {
				return h
			})), a.d(t, "j", (function() {
				return O
			})), a.d(t, "k", (function() {
				return g
			})), a.d(t, "g", (function() {
				return y
			})), a.d(t, "i", (function() {
				return C
			})), a.d(t, "q", (function() {
				return P
			})), a.d(t, "d", (function() {
				return x
			})), a.d(t, "l", (function() {
				return N
			})), a.d(t, "t", (function() {
				return I
			})), a.d(t, "u", (function() {
				return U
			})), a.d(t, "r", (function() {
				return j
			})), a.d(t, "a", (function() {
				return k
			})), a.d(t, "s", (function() {
				return A
			})), a.d(t, "c", (function() {
				return M
			}));
			var s = a("./src/lib/classNames/index.ts"),
				r = a("./src/lib/lessComponent.tsx"),
				o = a("./node_modules/react/index.js"),
				n = a.n(o),
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
			const p = r.a.wrapped(d.a, "CloseIcon", u.a),
				m = r.a.section("ModalBody", u.a),
				b = r.a.section("ModalPostPreview", u.a),
				v = r.a.p("ModalText", u.a),
				f = r.a.div("ModalSmallText", u.a),
				E = r.a.div("ModalDescriptionText", u.a),
				w = r.a.div("ModalMetaText", u.a),
				h = r.a.label("ModalFormItem", u.a),
				O = r.a.wrapped(c.a, "ModalInput", u.a),
				g = r.a.label("ModalInputLabel", u.a),
				y = r.a.footer("ModalFooter", u.a),
				C = r.a.header("ModalHeader", u.a),
				P = r.a.div("ModalTitle", u.a),
				x = r.a.div("ModalAnnotation", u.a),
				N = r.a.div("ModalMain", u.a),
				I = r.a.textarea("TextArea", u.a),
				U = r.a.wrapped(i.l, "WarningButton", u.a),
				j = r.a.wrapped(i.l, "PrimaryButton", u.a),
				k = r.a.wrapped(i.o, "CancelButton", u.a),
				A = r.a.wrapped(i.r, "RemoveButton", u.a),
				M = ({
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
				return r
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js");
			const r = {
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
				r = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
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
			class _ extends r.a.Component {
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
					return r.a.createElement("input", u({
						className: Object(n.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, a))
				}
			}
			t.a = Object(o.b)(null, {
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
				return o
			}));
			var s = a("./node_modules/lodash/flatten.js"),
				r = a.n(s);
			const o = (e, t) => {
				const a = r()(t.map(e => e.assets.map(e => e.slot)));
				return [...e.filter(e => !e.assets.find(e => a.includes(e.slot))), ...t]
			}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return c
			})), a.d(t, "g", (function() {
				return d
			})), a.d(t, "h", (function() {
				return l
			})), a.d(t, "q", (function() {
				return u
			})), a.d(t, "k", (function() {
				return _
			})), a.d(t, "m", (function() {
				return p
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "p", (function() {
				return v
			})), a.d(t, "d", (function() {
				return f
			})), a.d(t, "j", (function() {
				return E
			})), a.d(t, "l", (function() {
				return h
			})), a.d(t, "i", (function() {
				return O
			})), a.d(t, "b", (function() {
				return g
			})), a.d(t, "o", (function() {
				return C
			})), a.d(t, "c", (function() {
				return P
			})), a.d(t, "a", (function() {
				return N
			})), a.d(t, "n", (function() {
				return I
			}));
			var s = a("./src/reddit/models/Gold/ProductOffer.ts"),
				r = a("./src/reddit/selectors/avatarMarketing.ts"),
				o = a("./src/reddit/selectors/telemetry.ts"),
				n = a("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const a = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.m(t)
					};
					return Object(r.a)(t) && Object.assign(a, i), a
				},
				d = (e, t) => a => {
					const {
						id: s
					} = Object(n.mb)(a, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.m(a),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				l = e => ({
					...o.m(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.fb(e)
				}),
				u = e => ({
					...o.m(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.fb(e)
				}),
				_ = e => ({
					...o.m(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.fb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.m(e),
					...i
				}),
				m = e => t => ({
					...o.m(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				b = e => t => a => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.m(a),
					snoovatar: o.fb(a),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				v = b("view"),
				f = b("click"),
				E = b("dismiss"),
				w = (e, t, a) => () => s => ({
					source: e,
					action: t,
					noun: a,
					...o.m(s),
					snoovatar: o.fb(s)
				}),
				h = w("anniversary_achievement", "view", "anniversary_achievement"),
				O = w("anniversary_achievement", "click", "close"),
				g = w("anniversary_achievement", "click", "equip"),
				y = e => () => t => ({
					...o.m(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				C = y("view"),
				P = y("click"),
				x = (e, t, a) => s => ({
					source: e,
					action: t,
					noun: a,
					...o.m(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.fb(s)
				}),
				N = e => x("onboarding", "click", e),
				I = () => x("avatar", "view", "onboarding")
		},
		"./src/reddit/models/Avatar/accessories.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return o
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
				r = {
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
				o = {
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
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return s
			})), a.d(t, "e", (function() {
				return o
			})), a.d(t, "b", (function() {
				return n
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "d", (function() {
				return c
			}));
			var s, r = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(s || (s = {}));
			const o = {
				[s.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[s.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var n, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(n || (n = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const a = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === a,
					r = "new_purchaser" === a,
					o = "repeat_purchaser" === a;
				return t ? i.GildFlow : s ? i.LowCoinBalance : r ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, a) {
			"use strict";
			var s, r, o = a("./node_modules/redux/es/redux.js"),
				n = a("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
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
			var f = (e = null, t) => {
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
									webAssetUrls: r,
									tags: o
								} = e, n = a && new Date(a) <= new Date, i = !!s && new Date(s) < new Date, c = !!n && !i, d = o.includes(_);
								if (o && o.includes(l) && !d) {
									const {
										text: a,
										id: s
									} = e, n = r || null, i = p(o);
									t && (t.quickCreateV1 = {
										...i,
										id: s,
										text: a,
										active: c && !!n,
										webAssetUrls: n
									})
								}
								if (o && o.includes(u) && !d) {
									const e = r || null;
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
			var E = (e = null, t) => {
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
			t.a = Object(o.c)({
				marketing: f,
				avatarUser: c,
				randomAvatar: E
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return i
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				r = a("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
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
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return i
			})), a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/reselect/es/index.js"),
				r = a("./src/lib/initializeClient/installReducer.ts"),
				o = a("./src/reddit/reducers/features/avatar/index.ts"),
				n = a("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, a;
					return !!(null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.marketing)
				},
				c = Object(s.a)(n.b, e => {
					var t, a, s;
					const r = null === (s = null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === a ? void 0 : a.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					return (null == r ? void 0 : r.active) ? (null == r ? void 0 : r.assetUrls) && (null == r ? void 0 : r.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.ae133af51ba7a8641df3.js.map