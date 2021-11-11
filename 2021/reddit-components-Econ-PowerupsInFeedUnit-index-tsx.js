// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.f053adf312bc02935d03.js
// Retrieved at 11/11/2021, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/actions/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return w
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				n = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			var u = s("./src/reddit/reducers/features/avatar/index.ts"),
				_ = s("./src/reddit/selectors/avatar.ts"),
				p = s("./src/reddit/actions/users.ts");
			Object(a.a)({
				features: {
					avatar: u.a
				}
			});
			const m = "SET_AVATAR_USER",
				b = Object(r.a)(m),
				E = "RANDOM_AVATAR_LOADED",
				v = Object(r.a)(E),
				O = (e, t, s) => async (a, r, {
					apiContext: o
				}) => {
					var u, m, b, E;
					const v = Object(_.b)(r()),
						O = await (async (e, t, s, a, r) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r || ""
							},
							data: {
								accessory_ids: t,
								styles: s,
								...a
							}
						}))(o(), e, t, s, v);
					if (!O.ok) throw new Error("User avatar failed to save");
					return a(Object(p.A)(O.body)), {
						accountIcon: null === (m = null === (u = O.body) || void 0 === u ? void 0 : u.avatar) || void 0 === m ? void 0 : m.headshot_image_url,
						fullBodySnoovatar: null === (E = null === (b = O.body) || void 0 === b ? void 0 : b.avatar) || void 0 === E ? void 0 : E.image_url
					}
				}, h = () => async (e, t, {
					apiContext: s
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(s());
						t.ok && e(b(t.body))
					} catch (a) {
						o.c.captureException(a)
					}
				}, w = () => async (e, t, {
					apiContext: s
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(s());
						t.ok && e(v(t.body))
					} catch (a) {
						o.c.captureException(a)
					}
				}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/gold/powerups/index.ts"),
				l = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = s.n(l);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const a = Object(o.e)(e => Object(d.k)(e, {
						subredditId: t
					})),
					l = Object(o.e)(e => Object(d.m)(e, {
						subredditId: t
					}));
				if (!a) return null;
				const {
					tier: p,
					count: m,
					tiersInfo: b,
					supportersCount: E
				} = a, v = b[1].powerupsCost, O = p >= 2, h = (null == l ? void 0 : l.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], w = Math.min(m, v) / v, f = v - m;
				return r.a.createElement("div", {
					className: Object(n.a)(u.a.container, e, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(m)
				}, r.a.createElement("div", {
					className: u.a.heroes
				}, !!h.length && r.a.createElement("div", {
					className: Object(n.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: h.length > 1
					})
				}, h.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(c.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => E ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(E, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: u.a.title
				}, O ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", f), _._plural(f)], {
					hk: "2aHf4k"
				})), r.a.createElement(i.a, {
					className: u.a.progressBar,
					progress: w
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: s
			}) => o.a.createElement("button", {
				onClick: s,
				className: Object(a.a)(c.a.closeButton, {
					[c.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(n.b, {
				className: c.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less": function(e, t, s) {
			e.exports = {
				powerupsIcon: "_2uNsATPrzL4yprAYn1bgAq",
				container: "_3tZDqkm04pN0jRZCQWdnnj",
				title: "J2b6z_YpR1EFwlnmZXj_L",
				subtitle: "_3nx0CetCO-ndQlUSq4tL5d",
				button: "_1Ud8Fg6fg8z0GmHHNKYuJT"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/constants/localStorage.ts"),
				c = s("./src/reddit/helpers/localStorage/index.ts"),
				d = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.UNLOCKED_UNAPPLIED_FROM_PREMIUM = 3] = "UNLOCKED_UNAPPLIED_FROM_PREMIUM", e[e.HIDDEN = 4] = "HIDDEN"
			}(a || (a = {}));
			var E = s("./src/config.ts"),
				v = s("./src/lib/classNames/index.ts"),
				O = s("./src/reddit/actions/gold/powerups.ts"),
				h = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				w = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				f = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less"),
				g = s.n(f);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = ({
					subredditId: e,
					className: t
				}) => {
					const s = Object(n.d)(),
						a = Object(l.a)(),
						r = Object(n.e)(t => Object(p.Q)(t, {
							subredditId: e
						}).displayText);
					return o.a.createElement("div", {
						className: Object(v.a)(g.a.container, t)
					}, o.a.createElement("img", {
						className: g.a.powerupsIcon,
						src: `${E.a.assetPath}/img/powerups/powerups-rangers.png`,
						"data-testid": "powerups-icon-rangers"
					}), o.a.createElement("h2", {
						className: g.a.title
					}, N._("Use your Powerup to support {subreddit name}", [N._param("subreddit name", r)], {
						hk: "2OMTwG"
					})), o.a.createElement("h3", {
						className: g.a.subtitle
					}, N._("Go ahead, show them some love!", null, {
						hk: "3NzF6j"
					})), o.a.createElement(h.a, {
						className: g.a.button,
						onClick: () => {
							a(Object(d.r)()), s(Object(O.g)("in_feed_unit"))
						}
					}), o.a.createElement(w.a, {
						space: w.b.INFEED_UNIT
					}))
				},
				U = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				C = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less"),
				P = s.n(C),
				I = s("./src/higherOrderComponents/asModal/index.tsx"),
				j = s("./src/lib/opener/index.ts"),
				k = s("./src/reddit/actions/snoovatar.ts"),
				x = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/actions/urlRequested.ts"),
				R = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				M = s("./src/reddit/constants/avatars.ts"),
				S = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				T = s("./src/reddit/helpers/avatar/index.ts"),
				L = s("./src/reddit/models/Avatar/accessories.ts"),
				F = s("./src/reddit/models/Toast/index.ts"),
				B = s("./src/reddit/selectors/avatar.ts"),
				q = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/UpdateAvatarConfirmationModal/index.m.less"),
				W = s.n(q);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var K = Object(I.a)(({
				subredditId: e,
				closeModal: t
			}) => {
				const s = Object(l.a)(),
					a = Object(n.d)(),
					i = Object(n.e)(B.a),
					[c, u] = Object(r.useState)(!1);
				Object(r.useEffect)(() => {
					s(Object(d.o)()), a(Object(k.c)())
				}, [a, s]);
				const _ = async () => a(Object(D.a)("/user/me", !0)), p = G._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), {
					legalCopy: m,
					learnMoreText: b,
					url: v
				} = M.a;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: W.a.modal
				}, o.a.createElement("div", {
					className: W.a.header
				}, p, o.a.createElement(R.a, {
					onClick: t
				})), o.a.createElement("div", {
					className: W.a.contentWrapper
				}, o.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: W.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${E.a.assetPath}/img/powerups/communityGear/${e}.png`
				}), o.a.createElement("div", {
					className: W.a.legalTextContainer
				}, o.a.createElement("span", null, m()), o.a.createElement("a", {
					href: v,
					target: j.d.BLANK,
					className: W.a.learnMoreLink,
					rel: j.c
				}, b()))), o.a.createElement("div", {
					className: W.a.buttonsRow
				}, o.a.createElement(U.t, {
					className: W.a.button,
					priority: U.c.Secondary,
					onClick: t
				}, G._("Go Back", null, {
					hk: "1EHXc5"
				})), o.a.createElement(U.t, {
					className: W.a.button,
					priority: U.c.Primary,
					onClick: async () => {
						if (s(Object(d.n)()), !i) return;
						const r = i.snoovatar,
							o = (null == r ? void 0 : r.styles) || {},
							n = (null == r ? void 0 : r.accessories) || [],
							c = Object(T.a)(n, [L.d[e]]).map(e => e.id);
						try {
							u(!0);
							const e = await a(Object(k.e)(c, o, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							}));
							u(!1), t(), a(Object(x.f)({
								customIconAsset: e.accountIcon,
								duration: x.a,
								kind: F.b.SuccessCommunityGreen,
								text: G._("Success!", null, {
									hk: "4ieEVt"
								}),
								buttonText: G._("View profile", null, {
									hk: "IGoMl"
								}),
								buttonAction: _
							}))
						} catch {
							u(!1), a(Object(x.f)({
								duration: x.a,
								kind: F.b.Error,
								text: G._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					},
					disabled: c
				}, c ? o.a.createElement(S.a, {
					sizePx: 12,
					center: !0
				}) : o.a.createElement(o.a.Fragment, null, G._("Yes", null, {
					hk: "27lXsL"
				}))))))
			});
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var H = ({
					className: e,
					subredditId: t
				}) => {
					const s = Object(l.a)(),
						[a, n] = Object(r.useState)(!1),
						i = () => n(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(v.a)(P.a.container, e)
					}, o.a.createElement("div", {
						className: P.a.header
					}, o.a.createElement(A.a, {
						className: P.a.powerupsBolt
					}), o.a.createElement("div", {
						className: P.a.headerText
					}, o.a.createElement("h2", {
						className: P.a.title
					}, Y._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), o.a.createElement("h3", {
						className: P.a.subtitle
					}, Y._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), o.a.createElement("div", {
						className: P.a.contentWrapper
					}, o.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: P.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${E.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
					})), o.a.createElement("div", {
						className: P.a.buttonWrapper
					}, o.a.createElement(U.t, {
						priority: U.c.Secondary,
						onClick: () => {
							s(Object(d.m)()), (() => n(!0))()
						},
						isFullWidth: !0
					}, Y._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), a && o.a.createElement(K, {
						withOverlay: !0,
						closeModal: i,
						onOverlayClick: i,
						subredditId: t
					}))
				},
				z = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				V = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				Q = s.n(V);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Z = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: s
			}) => {
				const r = Object(n.d)(),
					i = Object(l.a)(),
					c = Object(n.e)(e => Object(p.Q)(e, {
						subredditId: t
					}));
				if (s === a.HIDDEN) return null;
				const u = J._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return o.a.createElement("div", {
					className: Object(v.a)(Q.a.container, e)
				}, s === a.POWERUPS_DEFAULT ? o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: Q.a.powerupsIcon,
					src: `${E.a.assetPath}/img/powerups/powerups-rangers.png`,
					"data-testid": "powerups-icon-rangers"
				}), o.a.createElement("h2", {
					className: Q.a.title
				}, J._("Powerup {subreddit name}", [J._param("subreddit name", c.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: Q.a.subtitle
				}, u)), null) : o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: Q.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${E.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
				}), o.a.createElement("h2", {
					className: Q.a.title
				}, J._("Unlock gear for {subreddit name}", [J._param("subreddit name", c.displayText)], {
					hk: "208mAS"
				}))), null), o.a.createElement(z.a, {
					className: Q.a.supporters,
					subredditId: t,
					onClick: e => {
						i(Object(d.e)("post_upsell")), r(e ? Object(O.i)(t) : Object(O.g)("in_feed_unit"))
					}
				}), o.a.createElement(h.a, {
					className: Q.a.button,
					onClick: () => {
						s === a.POWERUPS_DEFAULT ? i(Object(d.q)()) : i(Object(d.t)()), r(Object(O.g)("in_feed_unit"))
					}
				}), o.a.createElement(w.a, {
					space: w.b.INFEED_UNIT
				}))
			};
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(l.a)(),
					E = Object(n.e)(t => Object(p.Q)(t, {
						subredditId: e
					})),
					[v, O] = Object(r.useState)(a.HIDDEN),
					h = Object(n.e)(e => ((e, {
						subredditId: t,
						subredditName: s
					}) => {
						const r = Object(b.w)(e, {
								subredditId: t
							}),
							o = Object(p.cb)(e, {
								identifier: {
									name: s,
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
						return n || r ? i && o && Object(_.j)(e) ? a.UNLOCKED_COMMUNITY_GEAR : d ? a.UNLOCKED_UNAPPLIED_FROM_PREMIUM : a.HIDDEN : c && o && Object(_.j)(e) ? a.POWERUPS_COMMUNITY_GEAR : a.POWERUPS_DEFAULT
					})(e, {
						subredditId: E.id,
						subredditName: E.name
					})),
					w = (e => e === a.POWERUPS_DEFAULT || e === a.POWERUPS_COMMUNITY_GEAR ? i.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE : e === a.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? i.b.POWERUPS_UNAPPLIED_PREMIUM_INFEED_UNIT_VISIBILITY_STORE : e === a.UNLOCKED_COMMUNITY_GEAR ? i.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : null)(h);
				switch (Object(r.useEffect)(() => {
					const t = ((e, t) => {
						if (!t) return !0;
						return Object(c.j)(t, e) >= 2
					})(e, w) ? a.HIDDEN : h;
					O(t)
				}, [e, w, h, O]), Object(r.useEffect)(() => {
					if (v === a.HIDDEN) return;
					(() => v === a.UNLOCKED_COMMUNITY_GEAR ? s(Object(d.p)()) : v === a.POWERUPS_DEFAULT ? s(Object(d.v)()) : v === a.POWERUPS_COMMUNITY_GEAR ? s(Object(d.u)()) : v === a.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? s(Object(d.s)()) : void 0)(), Object(c.R)(w, e)
				}, [v, O, w, e, s, h]), v) {
					case a.POWERUPS_DEFAULT:
					case a.POWERUPS_COMMUNITY_GEAR:
						return o.a.createElement(Z, {
							className: t,
							subredditId: e,
							inFeedDisplayState: v
						});
					case a.UNLOCKED_UNAPPLIED_FROM_PREMIUM:
						return o.a.createElement(y, {
							className: t,
							subredditId: e
						});
					case a.UNLOCKED_COMMUNITY_GEAR:
						return o.a.createElement(H, {
							className: t,
							subredditId: e
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/constants/avatars.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = {
				legalCopy: () => a.fbt._("Avatars and avatar visual elements © Reddit and its licensors.", null, {
					hk: "ZgN7P"
				}),
				learnMoreText: () => a.fbt._("Learn more", null, {
					hk: "1rlvT"
				}),
				url: "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
			}
		},
		"./src/reddit/helpers/avatar/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/lodash/flatten.js"),
				r = s.n(a);
			const o = (e, t) => {
				const s = r()(t.map(e => e.assets.map(e => e.slot)));
				return [...e.filter(e => !e.assets.find(e => s.includes(e.slot))), ...t]
			}
		},
		"./src/reddit/models/Avatar/accessories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return n
			}));
			const a = {
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
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var a, r, o = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(a || (a = {})),
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
				capabilities: [a.PREMIUM],
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
							const s = e.split(":");
							if (!s.length && s.length < 3) return null;
							try {
								t[s[1]] = JSON.parse(s[2])
							} catch {
								t[s[1]] = s[2]
							}
						}
					}), t
				};
			var m = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				E = s("./src/reddit/constants/modals.ts");
			var v = (e = null, t) => {
				var s;
				switch (t.type) {
					case m.o:
						const {
							avatarMarketingEvents: a
						} = t.payload;
						return a ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: s,
									endsAt: a,
									webAssetUrls: r,
									tags: o
								} = e, n = s && new Date(s) <= new Date, i = !!a && new Date(a) < new Date, c = !!n && !i, d = o.includes(_);
								if (o && o.includes(l) && !d) {
									const {
										text: s,
										id: a
									} = e, n = r || null, i = p(o);
									t && (t.quickCreateV1 = {
										...i,
										id: a,
										text: s,
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
						}(a) : d;
					case b.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === E.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var O = (e = null, t) => {
				switch (t.type) {
					case n.a: {
						const {
							image: e,
							accessory_ids: s
						} = t.payload;
						return {
							image: e,
							accessoryIds: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: O
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(a.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				n = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				},
				i = e => {
					var t, s;
					return (null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.randomAvatar) || null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.f053adf312bc02935d03.js.map