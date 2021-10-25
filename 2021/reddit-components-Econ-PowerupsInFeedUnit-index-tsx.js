// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.2ab97224d9be8b3ba14c.js
// Retrieved at 10/25/2021, 5:10:04 PM by Reddit Dataminer v1.0.0
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
				return w
			})), s.d(t, "d", (function() {
				return h
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				n = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
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
				b = Object(o.a)(m),
				E = "RANDOM_AVATAR_LOADED",
				v = Object(o.a)(E),
				O = (e, t, s) => async (a, o, {
					apiContext: r
				}) => {
					var u, m, b, E;
					const v = Object(_.b)(o()),
						O = await (async (e, t, s, a, o) => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatar`,
							method: c.ib.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: s,
								...a
							}
						}))(r(), e, t, s, v);
					if (!O.ok) throw new Error("User avatar failed to save");
					return a(Object(p.A)(O.body)), {
						accountIcon: null === (m = null === (u = O.body) || void 0 === u ? void 0 : u.avatar) || void 0 === m ? void 0 : m.headshot_image_url,
						fullBodySnoovatar: null === (E = null === (b = O.body) || void 0 === b ? void 0 : b.avatar) || void 0 === E ? void 0 : E.image_url
					}
				}, w = () => async (e, t, {
					apiContext: s
				}) => {
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/account`,
							method: c.ib.GET
						}))(s());
						t.ok && e(b(t.body))
					} catch (a) {
						r.c.captureException(a)
					}
				}, h = () => async (e, t, {
					apiContext: s
				}) => {
					try {
						const t = await (async e => Object(i.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${n.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: c.ib.GET
						}))(s());
						t.ok && e(v(t.body))
					} catch (a) {
						r.c.captureException(a)
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
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
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
				const a = Object(r.e)(e => Object(d.k)(e, {
						subredditId: t
					})),
					l = Object(r.e)(e => Object(d.m)(e, {
						subredditId: t
					}));
				if (!a) return null;
				const {
					tier: p,
					count: m,
					tiersInfo: b,
					supportersCount: E
				} = a, v = b[1].powerupsCost, O = p >= 2, w = (null == l ? void 0 : l.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], h = Math.min(m, v) / v, f = v - m;
				return o.a.createElement("div", {
					className: Object(n.a)(u.a.container, e, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(m)
				}, o.a.createElement("div", {
					className: u.a.heroes
				}, !!w.length && o.a.createElement("div", {
					className: Object(n.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: w.length > 1
					})
				}, w.map(e => {
					var t, s;
					return o.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(i.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => E ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(E, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), o.a.createElement("p", {
					className: u.a.title
				}, O ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [_._param("powerups needed", f), _._plural(f)], {
					hk: "2aHf4k"
				})), o.a.createElement(c.a, {
					className: u.a.progressBar,
					progress: h
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => r.a.createElement("button", {
				onClick: t,
				className: Object(a.a)(e, i.a.closeButton),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, r.a.createElement(n.b, {
				className: i.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(n);
			const i = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement("picture", null, r.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), r.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), r.a.createElement("img", {
				className: c.a.image,
				src: `${a.a.assetPath}/img/powerups/powerup.png`,
				alt: "Rotating Powerups bolt"
			})))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less": function(e, t, s) {
			e.exports = {
				container: "_3tZDqkm04pN0jRZCQWdnnj",
				powerupsIcon: "_2uNsATPrzL4yprAYn1bgAq",
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
			var a, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/constants/localStorage.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
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
			var E = s("./src/lib/classNames/index.ts"),
				v = s("./src/reddit/actions/gold/powerups.ts"),
				O = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				w = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				h = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less"),
				f = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var N = ({
					subredditId: e,
					className: t
				}) => {
					const s = Object(n.d)(),
						a = Object(l.a)(),
						o = Object(n.e)(t => Object(p.Q)(t, {
							subredditId: e
						}).displayText);
					return r.a.createElement("div", {
						className: Object(E.a)(f.a.container, t)
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement(O.a, {
						className: f.a.powerupsIcon
					}), r.a.createElement("h2", {
						className: f.a.title
					}, g._("Use your Powerup to support {subreddit name}", [g._param("subreddit name", o)], {
						hk: "2OMTwG"
					})), r.a.createElement("h3", {
						className: f.a.subtitle
					}, g._("Go ahead, show them some love!", null, {
						hk: "3NzF6j"
					}))), r.a.createElement(w.a, {
						className: f.a.button,
						onClick: () => {
							a(Object(d.r)()), s(Object(v.f)("in_feed_unit"))
						}
					}))
				},
				y = s("./src/config.ts"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				U = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/CommunityGearUnit.m.less"),
				C = s.n(U),
				I = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/lib/opener/index.ts"),
				j = s("./src/reddit/actions/snoovatar.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				R = s("./src/reddit/actions/urlRequested.ts"),
				D = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				M = s("./src/reddit/constants/gold.ts"),
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
			var Y = Object(I.a)(({
				subredditId: e,
				closeModal: t
			}) => {
				const s = Object(l.a)(),
					a = Object(n.d)(),
					c = Object(n.e)(B.a),
					[i, u] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					s(Object(d.o)()), a(Object(j.c)())
				}, [a, s]);
				const _ = async () => a(Object(R.a)("/user/me", !0)), p = G._("Nice! Ready to update your avatar?", null, {
					hk: "20KFjx"
				}), m = G._("Avatars and avatar visual elements © Reddit.", null, {
					hk: "2Y4y3g"
				}), b = G._("Learn more", null, {
					hk: "2S4fxr"
				});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: W.a.modal
				}, r.a.createElement("div", {
					className: W.a.header
				}, p, r.a.createElement(D.a, {
					onClick: t
				})), r.a.createElement("div", {
					className: W.a.contentWrapper
				}, r.a.createElement("img", {
					alt: "Avatar wearing community gear top",
					className: W.a.avatarTop,
					"data-testid": "community-gear-avatar",
					src: `${y.a.assetPath}/img/powerups/communityGear/${e}.png`
				}), r.a.createElement("div", {
					className: W.a.legalTextContainer
				}, r.a.createElement("span", null, m), r.a.createElement("a", {
					href: M.c,
					target: x.d.BLANK,
					className: W.a.learnMoreLink,
					rel: x.c
				}, b))), r.a.createElement("div", {
					className: W.a.buttonsRow
				}, r.a.createElement(A.s, {
					className: W.a.button,
					priority: A.b.Secondary,
					onClick: t
				}, G._("Go Back", null, {
					hk: "1EHXc5"
				})), r.a.createElement(A.s, {
					className: W.a.button,
					priority: A.b.Primary,
					onClick: async () => {
						if (s(Object(d.n)()), !c) return;
						const o = c.snoovatar,
							r = (null == o ? void 0 : o.styles) || {},
							n = (null == o ? void 0 : o.accessories) || [],
							i = Object(T.a)(n, [L.d[e]]).map(e => e.id);
						try {
							u(!0);
							const e = await a(Object(j.e)(i, r, {
								set_avatar_to_profile: !0,
								source: "powerups_post_upsell"
							}));
							u(!1), t(), a(Object(k.f)({
								customIconAsset: e.accountIcon,
								duration: k.a,
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
							u(!1), a(Object(k.f)({
								duration: k.a,
								kind: F.b.Error,
								text: G._("Something went wrong!", null, {
									hk: "qD6OP"
								})
							}))
						}
					},
					disabled: i
				}, i ? r.a.createElement(S.a, {
					sizePx: 12,
					center: !0
				}) : r.a.createElement(r.a.Fragment, null, G._("Yes", null, {
					hk: "27lXsL"
				}))))))
			});
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var K = ({
					className: e,
					subredditId: t
				}) => {
					const s = Object(l.a)(),
						[a, n] = Object(o.useState)(!1),
						c = () => n(!1);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(E.a)(C.a.container, e)
					}, r.a.createElement("div", {
						className: C.a.header
					}, r.a.createElement(P.a, {
						className: C.a.powerupsBolt
					}), r.a.createElement("div", {
						className: C.a.headerText
					}, r.a.createElement("h2", {
						className: C.a.title
					}, H._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), r.a.createElement("h3", {
						className: C.a.subtitle
					}, H._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), r.a.createElement("div", {
						className: C.a.contentWrapper
					}, r.a.createElement("img", {
						alt: "Avatar wearing community gear top",
						className: C.a.avatarTop,
						"data-testid": "community-gear-avatar",
						src: `${y.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
					})), r.a.createElement("div", {
						className: C.a.buttonWrapper
					}, r.a.createElement(A.s, {
						priority: A.b.Secondary,
						onClick: () => {
							s(Object(d.m)()), (() => n(!0))()
						},
						isFullWidth: !0
					}, H._("Wear your community gear", null, {
						hk: "1Tt2q6"
					})))), a && r.a.createElement(Y, {
						withOverlay: !0,
						closeModal: c,
						onOverlayClick: c,
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
				const o = Object(n.d)(),
					c = Object(l.a)(),
					i = Object(n.e)(e => Object(p.Q)(e, {
						subredditId: t
					}));
				if (s === a.HIDDEN) return null;
				const u = J._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return r.a.createElement("div", {
					className: Object(E.a)(Q.a.container, e)
				}, s === a.POWERUPS_DEFAULT ? r.a.createElement(() => r.a.createElement(r.a.Fragment, null, r.a.createElement(O.a, {
					className: Q.a.powerupsIcon
				}), r.a.createElement("h2", {
					className: Q.a.title
				}, J._("Powerup {subreddit name}", [J._param("subreddit name", i.displayText)], {
					hk: "2zwNZk"
				})), r.a.createElement("h3", {
					className: Q.a.subtitle
				}, u)), null) : r.a.createElement(() => r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					alt: "Avatar wearing community gear",
					className: Q.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					src: `${y.a.assetPath}/img/powerups/communityGear/withoutLegs/${t}.png`
				}), r.a.createElement("h2", {
					className: Q.a.title
				}, J._("Unlock gear for {subreddit name}", [J._param("subreddit name", i.displayText)], {
					hk: "208mAS"
				}))), null), r.a.createElement(z.a, {
					className: Q.a.supporters,
					subredditId: t,
					onClick: e => {
						c(Object(d.e)("post_upsell")), o(e ? Object(v.h)(t) : Object(v.f)("in_feed_unit"))
					}
				}), r.a.createElement(w.a, {
					className: Q.a.button,
					onClick: () => {
						s === a.POWERUPS_DEFAULT ? c(Object(d.q)()) : c(Object(d.t)()), o(Object(v.f)("in_feed_unit"))
					}
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
					[v, O] = Object(o.useState)(a.HIDDEN),
					w = Object(n.e)(e => ((e, {
						subredditId: t,
						subredditName: s
					}) => {
						const o = Object(b.w)(e, {
								subredditId: t
							}),
							r = Object(p.cb)(e, {
								identifier: {
									name: s,
									type: u.a.SUBREDDIT
								}
							}),
							n = Object(b.l)(e, {
								subredditId: t
							}),
							c = Object(b.q)(e, {
								subredditId: t
							}),
							i = Object(b.g)(e, {
								subredditId: t
							}),
							d = Object(b.v)(e) && Object(m.s)(e);
						return n || o ? c && r && Object(_.j)(e) ? a.UNLOCKED_COMMUNITY_GEAR : d ? a.UNLOCKED_UNAPPLIED_FROM_PREMIUM : a.HIDDEN : i && r && Object(_.j)(e) ? a.POWERUPS_COMMUNITY_GEAR : a.POWERUPS_DEFAULT
					})(e, {
						subredditId: E.id,
						subredditName: E.name
					})),
					h = (e => e === a.POWERUPS_DEFAULT || e === a.POWERUPS_COMMUNITY_GEAR ? c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE : e === a.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? c.b.POWERUPS_UNAPPLIED_PREMIUM_INFEED_UNIT_VISIBILITY_STORE : e === a.UNLOCKED_COMMUNITY_GEAR ? c.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : null)(w);
				switch (Object(o.useEffect)(() => {
					const t = ((e, t) => {
						if (!t) return !0;
						return Object(i.j)(t, e) >= 2
					})(e, h) ? a.HIDDEN : w;
					O(t)
				}, [e, h, w, O]), Object(o.useEffect)(() => {
					if (v === a.HIDDEN) return;
					(() => v === a.UNLOCKED_COMMUNITY_GEAR ? s(Object(d.p)()) : v === a.POWERUPS_DEFAULT ? s(Object(d.v)()) : v === a.POWERUPS_COMMUNITY_GEAR ? s(Object(d.u)()) : v === a.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? s(Object(d.s)()) : void 0)(), Object(i.R)(h, e)
				}, [v, O, h, e, s, w]), v) {
					case a.POWERUPS_DEFAULT:
					case a.POWERUPS_COMMUNITY_GEAR:
						return r.a.createElement(Z, {
							className: t,
							subredditId: e,
							inFeedDisplayState: v
						});
					case a.UNLOCKED_UNAPPLIED_FROM_PREMIUM:
						return r.a.createElement(N, {
							className: t,
							subredditId: e
						});
					case a.UNLOCKED_COMMUNITY_GEAR:
						return r.a.createElement(K, {
							className: t,
							subredditId: e
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return n
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "c", (function() {
				return _
			}));
			const a = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				n = 4,
				c = 1e4,
				i = .2,
				d = .1,
				l = .1,
				u = 500,
				_ = "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
		},
		"./src/reddit/helpers/avatar/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/lodash/flatten.js"),
				o = s.n(a);
			const r = (e, t) => {
				const s = o()(t.map(e => e.assets.map(e => e.slot)));
				return [...e.filter(e => !e.assets.find(e => s.includes(e.slot))), ...t]
			}
		},
		"./src/reddit/models/Avatar/accessories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
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
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var a, o, r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(a || (a = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const c = {
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
			var i = (e = c, t) => {
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
									webAssetUrls: o,
									tags: r
								} = e, n = s && new Date(s) <= new Date, c = !!a && new Date(a) < new Date, i = !!n && !c, d = r.includes(_);
								if (r && r.includes(l) && !d) {
									const {
										text: s,
										id: a
									} = e, n = o || null, c = p(r);
									t && (t.quickCreateV1 = {
										...c,
										id: a,
										text: s,
										active: i && !!n,
										webAssetUrls: n
									})
								}
								if (r && r.includes(u) && !d) {
									const e = o || null;
									t && (t.marketingEvent = {
										active: i && !!e,
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
			t.a = Object(r.c)({
				marketing: v,
				avatarUser: i,
				randomAvatar: O
			})
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return c
			}));
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(a.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				n = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				},
				c = e => {
					var t, s;
					return (null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.randomAvatar) || null
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.2ab97224d9be8b3ba14c.js.map