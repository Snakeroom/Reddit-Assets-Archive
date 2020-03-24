// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.14fbd5c51d698637b49c.js
// Retrieved at 3/24/2020, 3:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"516dddc80998"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"603abd7f2e1b"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/lib/messageIframeParent/index.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/models/Gold/Award.ts"),
				i = a("./src/reddit/models/Toast/index.ts"),
				o = a("./src/reddit/selectors/comments.ts"),
				l = a("./src/reddit/selectors/communityAwards.ts"),
				m = a("./src/reddit/selectors/gild.ts"),
				u = a("./src/reddit/selectors/posts.ts"),
				p = a("./src/reddit/selectors/subreddit.ts"),
				h = a("./src/reddit/selectors/user.ts"),
				b = a("./src/graphql/operations/GildComment.json"),
				g = a("./src/graphql/operations/GildPost.json"),
				w = a("./src/lib/makeGqlRequest/index.ts"),
				E = a("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const C = (e, t, a) => Object(w.a)(e, Object.assign({}, g, {
					variables: t
				}), {
					query: a ? {} : Object(E.b)()
				}),
				v = (e, t, a) => Object(w.a)(e, Object.assign({}, b, {
					variables: t
				}), {
					query: a ? {} : Object(E.b)()
				});
			var x = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				A = a("./src/reddit/helpers/awards/message.ts"),
				P = a("./src/reddit/helpers/correlationIdTracker.ts"),
				f = a("./src/reddit/helpers/isPost.ts"),
				O = a("./src/reddit/helpers/trackers/gild.ts"),
				y = a("./src/telemetry/index.ts"),
				j = a("./src/reddit/actions/gold/constants.ts");
			a.d(t, "setIsAnonymous", (function() {
				return N
			})), a.d(t, "setIncludeMessage", (function() {
				return I
			})), a.d(t, "updateMessage", (function() {
				return _
			})), a.d(t, "gildGqlRequested", (function() {
				return S
			})), a.d(t, "triggerLoader", (function() {
				return k
			})), a.d(t, "gildPending", (function() {
				return T
			})), a.d(t, "gildFailed", (function() {
				return B
			})), a.d(t, "gildSuccessful", (function() {
				return F
			}));
			const N = Object(s.a)(j.p),
				I = Object(s.a)(j.o),
				_ = Object(s.a)(j.s),
				S = (e, t) => async (a, s, r) => {
					let {
						gqlContext: d
					} = r;
					const c = s().gild,
						{
							isOldReddit: i,
							isLivestream: o
						} = t;
					a(T());
					try {
						const t = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: Object(A.d)(c.message, c.selectedAward, o),
								nodeId: e
							},
							s = Object(f.a)(e) ? C : v,
							r = await s(d(), {
								input: t
							}, i);
						let l = !1,
							m = null,
							u = null;
						if (r.ok) {
							const e = r.body;
							l = e.data.gild.ok, m = e.data.gild.fieldErrors, u = e.data.gild.errors
						}
						if (l) {
							const t = r.body,
								{
									gild: n
								} = t.data;
							await a(F({
								awardId: c.selectedAward.id,
								awardings: n.awardings,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins
							}))
						} else {
							const e = m && m[0] && m[0].message,
								t = u && u[0] && u[0].message,
								s = e || t || n.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await a(B(s))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await a(B(t))
					} finally {
						Object(P.b)(P.a.GildingFlow)
					}
				}, k = Object(s.a)(j.r), M = Object(s.a)(j.n), T = () => async (e, t) => {
					e(M()), window.setTimeout(() => {
						t().gild.api.pending && e(k())
					}, 2e3)
				}, L = Object(s.a)(j.m), B = e => async (t, a) => {
					await t(L(e)), t(Object(d.e)({
						kind: i.b.Error,
						duration: d.a,
						text: e
					}))
				}, G = Object(s.a)(j.q), R = (e, t) => {
					const {
						id: a
					} = t, n = Object(f.a)(a) ? Object(u.M)(e, {
						postId: a
					}) : Object(o.n)(e, {
						commentId: a
					}), s = Object(h.i)(e), r = e.gild, {
						isAnonymous: d
					} = r, c = !d && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, i = n ? n.author : void 0, l = Object(p.H)(e, {
						thingId: a
					});
					return G(Object.assign({}, t, {
						gilder: c,
						gildee: i,
						subredditId: l && l.id
					}))
				}, F = e => async (t, a) => {
					const s = a(),
						{
							awardId: o,
							id: u
						} = e,
						h = Object(l.a)(s, o);
					if (Object(m.h)(s)) {
						const e = "success.gild",
							t = {},
							a = h.icon32 ? h.icon32.url : h.icon.url;
						t.awardId = o, t.awardIcon = a, Object(r.a)({
							type: e,
							data: t
						})
					}
					if (h.awardType === c.d.Moderator && void 0 === e.subredditCoins) {
						const t = Object(p.H)(s, {
								thingId: u
							}),
							a = t && Object(p.A)(s, {
								subredditName: t.name
							});
						a && (e.subredditCoins = a - h.coinPrice)
					}
					t(R(s, e)), (s.posts.instances[u] || []).forEach(a => {
						t(R(s, Object.assign({}, e, {
							id: a
						})))
					});
					const b = Object(f.a)(u) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", h.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", h.name)], {
							hk: "2sIK9Y"
						}),
						g = h.coinPrice;
					Object(y.a)(Object(O.viewSuccessAwardEvent)(u, g, h)(s)), t(Object(d.e)({
						kind: i.b.SuccessCommunity,
						text: b
					})), setTimeout(() => {
						const e = Object(x.a)(o, u),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10)
				}
		},
		"./src/reddit/components/AnimatedPillBadge/index.m.less": function(e, t, a) {
			e.exports = {
				AnimatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				animatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				sizePulse: "_2xnejTzOKwD2N2wduYh5VS",
				sheen: "_3wsB6VQlSpMQ1YYy0RWWyw",
				sheenTraverse: "tJhGfB7_BsM9oPrnBPZJR"
			}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, a) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				d = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				o = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(o);
			t.a = e => r.a.createElement("div", {
				className: Object(d.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(n.fbt._("Coin balance:: :coin:{coinBalance}", [n.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "3rsL0j"
			}), {
				":coin:": r.a.createElement(i.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, n.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, a) {
			e.exports = {
				awardDetailsPane: "_3kvsmRpyGMATPOVdwZT7NB",
				spacer: "_1bEDhH7kWsaZekdaMFildR",
				awardDescriptionContainer: "_3q3pzHD6q6zVtVG4TNE7im",
				iconContainer: "_3b5NcSKHOalQQEfFSNiCQX",
				icon: "_2PvjA-cEeom6ZfDceMtNHp",
				awardName: "sadK4Fq7Cy1wo7YWoEAWl",
				price: "_1WoiOSy_qo9S285gNnGevf",
				giver: "_2GgPzgt-vZL36vYFyKbbDN",
				modIcon: "_2IlAShkKouN-v5V35IWs47",
				textAreaWrapper: "uJbtvFCFnUiXwhJ2M7rOh",
				textArea: "_2kwFqYX6mikunS0um4uLJ8",
				messageTooLong: "MS5s5QAaxgdOHp-DI58GJ",
				characterCountdown: "_2f01wl-r9Wp_fMxTHtthb",
				benefits: "_-1asi_lAFSc_bekrVlSw6",
				radioOption: "_2KyAhxe7cKmNPAMvJXwX63",
				first: "_1fd9HSzaaDMBQ2FNj1OAMF",
				expiresText: "_30TeowkJPm0r4HctIm_NMA",
				publicIndicator: "_2iCTmZfj38gd9FcYQjeZ1",
				eyeIcon: "_3n416iaPD0uJ-VKssuS9AK"
			}
		},
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, a) {
			e.exports = {
				awardSelectorPane: "_2WXA0nl6cBwDItweBzw_ti",
				awardSectionContainer: "_3NYoLrOG4zXqg1zXIMJkoW",
				giveImageContainer: "_1sHh-7km01-N4HLeIWaybi",
				giveImage: "FLoLVujMMrzIkHLTgOCuF",
				awardSectionTitle: "_2GIl80IqHieDGcuHXQN3F_",
				awardSectionIcon: "_2m-TTm5fwqPU3uIV2Lt1cO",
				modIcon: "_21cqpAOcJlWztiWf3esYKt",
				premiumIcon: "_2dPX5MkVgsrETdoMuwFJxS",
				awardSection: "_1oscYfN5Pn1j0E5xXJ1MSK",
				selectableAward: "_10errIUo7wzwfnjkiqXfXP",
				selected: "_2lQtvMp2JZ_WdVme_P3L2Z",
				buttonContent: "_3kHQ1I2tn6294gyzXBCjA",
				iconContainer: "_28Lwrc4mxY4O_sSndFYb5J",
				icon: "_3SgOtgb_CcNWbsKiej-_GG",
				badgeContainer: "_3rOiiCMO2cjJ30zIm2EfQM",
				iconPremiumBadgeContainer: "_2UdsJkb9LtCk2QjvrXdNxj",
				iconPremiumBadge: "ei3aGesWsPP3R4R52oZth",
				iconNewBadge: "OGmnek6E-ANi8AL_-IF6G",
				title: "_3kL2pbywe3kDMsoF0jNBgP",
				expiresText: "_1dmzIdaTbPPXBcOA1si82v",
				metaText: "_1fAgvSQNrmCwASgfLrvYpP",
				disabled: "Cbw55II_5-hqVMilDR3rN"
			}
		},
		"./src/reddit/components/GildModalContent/GildFooter/index.m.less": function(e, t, a) {
			e.exports = {
				gildFooter: "habPwBVb49a3L6odC1o_2",
				footerContent: "p9n6xR53geDkMMJLRLxsQ",
				coinBalanceSection: "_3R4j1vmZgkT6keOmp5osiV",
				premiumButton: "_3QiLbbTpb2izwuTyxaeqdY",
				gildButton: "_2qmjJbARve3fBrc8oz-Ufa",
				subredditIcon: "_1gm264-SD6RxF8VJfulxIL",
				errorText: "_2K7QjhTDibWfT4O2YOQyLh",
				loadingIcon: "OrV3EYarwTthoNCBGxsel"
			}
		},
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, a) {
			e.exports = {
				gildModalContent: "_13s1q9tBn7qddM-UPVtpnC",
				gildHeader: "_3h_M405QYml7IuBRy1n4lL",
				headerText: "_1vd1jn6DqtTEKTl4xSH0eg",
				mainText: "_2429EA7gBgE6hEksMuhPVP",
				subText: "_19RVbjJ3B6hhL3-uZizjXb",
				learnLink: "z3GNA_yQcyIxHXpxgkmXH",
				closeBtn: "_2L2jSgTcQXf7PIBArs84GE",
				closeBtnIcon: "_2Vo_1piQFr0B95tN6ZKE-f",
				modalMainContent: "_1-n44O8_Kquo1Wl43y39VQ"
			}
		},
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/opener/index.ts"),
				o = a("./src/reddit/helpers/isPost.ts"),
				l = a("./src/reddit/helpers/localStorage/index.ts"),
				m = a("./src/reddit/helpers/trackers/gild.ts"),
				u = a("./src/reddit/models/Gold/Award.ts"),
				p = a("./src/reddit/actions/gold/communityAwards.ts"),
				h = a("./src/reddit/actions/gold/gild.ts"),
				b = a("./src/lib/makeActionCreator/index.ts"),
				g = a("./src/reddit/actions/gold/constants.ts");
			const w = Object(b.a)(g.K);
			var E = a("./src/reddit/actions/gold/modals.ts"),
				C = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				x = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				A = a("./src/reddit/actions/subreddit.ts"),
				P = a("./src/reddit/selectors/comments.ts"),
				f = a("./src/reddit/selectors/communityAwards.ts"),
				O = a("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				y = a("./src/reddit/selectors/experiments/publicAwarding.ts"),
				j = a("./src/reddit/selectors/gild.ts"),
				N = a("./src/reddit/selectors/gold/giveAwards.ts"),
				I = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				_ = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				S = a("./src/reddit/selectors/posts.ts"),
				k = a("./src/reddit/selectors/subreddit.ts"),
				M = a("./src/reddit/selectors/user.ts"),
				T = a("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				L = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/higherOrderComponents/makeAsync.tsx")),
				B = a("./src/lib/loadWithRetries/index.ts"),
				G = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			const R = () => Object(B.a)(() => Promise.all([Promise.all([a.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), a.e("CoinsPurchaseModal~PennyPurchaseModal"), a.e("PennyPurchaseModal")]).then(a.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(G.c)()])).then(e => e[0].default);
			var F = Object(L.a)({
					getComponent: R,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				q = a("./src/reddit/components/TrackingHelper/index.tsx"),
				D = a("./node_modules/fbt/lib/FbtPublic.js"),
				H = a("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				V = a.n(H),
				Q = a("./src/reddit/helpers/awards/message.ts"),
				J = a("./src/reddit/i18n/components.tsx"),
				K = a("./src/reddit/i18n/utils.ts"),
				W = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				z = a("./src/reddit/controls/RadioInput/index.tsx"),
				Y = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				U = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				Z = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				$ = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				ee = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				te = a("./src/reddit/components/TimeLeft/TimeLeft.tsx");
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			const ae = e => {
				const {
					award: t,
					postOrComment: a,
					subredditName: n
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(ee.a, null), e)))
				}
				if (t.awardType === u.d.Community) return t.subredditCoinReward && t.coinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the post and grants "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community and "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "user-coins"
				}, t.coinReward), " to the recipient. Exclusive to ", s.a.createElement(J.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the comment and grants "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(J.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : t.subredditCoinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the post and grants "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(J.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the comment and grants "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(J.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the post. Exclusive to ", s.a.createElement(J.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the comment. Exclusive to ", s.a.createElement(J.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), "."));
				if (t.awardType === u.d.Moderator) {
					const e = t.daysOfPremium ? Math.floor(t.daysOfPremium / 30) : 0;
					return "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the post and gives the recipient ", s.a.createElement(J.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(J.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
						name: "number-coins"
					}, "700 Coins"), " a month).")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Shows an Award on the comment and gives the recipient ", s.a.createElement(J.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(J.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
						name: "number-coins"
					}, "700 Coins"), " a month)."))
				}
				return "gid_1" === t.id ? "post" === a ? s.a.createElement(J.c, null, "Shows the Silver Award on the post... and that's it.") : s.a.createElement(J.c, null, "Shows the Silver Award on the comment... and that's it.") : "gid_2" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the comment.")) : "gid_3" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(J.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(ee.a, null), s.a.createElement(J.c, null, s.a.createElement(J.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the comment.")) : null
			};
			class ne extends s.a.PureComponent {
				render() {
					const {
						award: e,
						className: t,
						postOrComment: a,
						subredditName: n
					} = this.props, r = e.icon128 ? e.icon128.url : e.icon.url, d = !!e.pennyPrice;
					return s.a.createElement("div", {
						className: Object(c.a)(t, V.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: V.a.iconContainer
					}, s.a.createElement("img", {
						className: V.a.icon,
						src: r
					})), s.a.createElement("div", {
						className: V.a.awardName
					}, D.fbt._("{awardName} Award", [D.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), s.a.createElement("div", {
						className: V.a.price
					}, d ? D.fbt._("Purchase for ${dollarPrice}", [D.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : Object($.a)(D.fbt._("Spend :coin:{coinPrice}", [D.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": s.a.createElement(ee.a, null)
					})), s.a.createElement("div", {
						className: V.a.benefits
					}, s.a.createElement(ae, {
						award: e,
						postOrComment: a,
						subredditName: n
					})), e.endsAt && s.a.createElement(te.a, {
						className: V.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var se, re = ne;

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(se || (se = {}));
			class ce extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						messageTypeEventSent: !1
					}, this.handleClickMessageInput = () => this.props.sendEvent(Object(m.clickMessageInputEvent)(this.props.thingId)), this.handleTypeMessageInput = e => {
						this.setState(this.sendTypeMessageEvent), this.props.handleMessageInput(e)
					}, this.sendTypeMessageEvent = (e, t) => {
						if (!e.messageTypeEventSent) return t.sendEvent(Object(m.typeMessageInputEvent)(t.thingId)), {
							messageTypeEventSent: !0
						}
					}, this.handleToggleAnonymous = () => {
						const {
							isAnonymous: e,
							sendEvent: t,
							thingId: a,
							toggleIsAnonymous: n
						} = this.props;
						t(Object(m.triggerAnonymousEvent)(e ? "uncheck" : "check", a)), n()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: a,
							thingId: n,
							toggleIsAnonymous: s
						} = this.props, r = e === se.PRIVATE;
						(!t && r || t && !r) && (a(Object(m.triggerAnonymousEvent)(r ? "check" : "uncheck", n)), s())
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t,
						postOrComment: a,
						publicAwardingEnabled: n
					} = this.props;
					if (e) return null;
					if (n) {
						const e = "post" === a ? Object(K.c)("Show my username on post") : Object(K.c)("Show my username on comment");
						return s.a.createElement(z.a, {
							name: Object(K.c)("Privacy setting"),
							onChange: this.handleRadioChange,
							value: t ? se.PRIVATE : se.PUBLIC
						}, s.a.createElement(Y.a, {
							className: Object(c.a)(V.a.radioOption, V.a.first),
							showButton: !0,
							value: se.PUBLIC
						}, e), s.a.createElement(Y.a, {
							className: V.a.radioOption,
							showButton: !0,
							value: se.PRIVATE
						}, s.a.createElement(J.c, null, "Give anonymously")))
					}
					return s.a.createElement(X.a, {
						className: V.a.giver,
						isSelected: t,
						text: Object(K.c)("Make my gift anonymous"),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						isLivestream: e,
						selectedAward: t,
						message: a
					} = this.props, n = {
						disabled: !1,
						maxLength: Object(Q.c)(t, e),
						placeholder: D.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = D.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = D.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || n.maxLength > 0,
						d = r && a.length > n.maxLength;
					return s.a.createElement("div", {
						className: Object(c.a)(V.a.textAreaWrapper, {
							[V.a.messageTooLong]: d
						})
					}, s.a.createElement(W.q, de({
						className: V.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? a : ""
					}, n)), r && s.a.createElement("div", {
						className: V.a.characterCountdown
					}, n.maxLength - a.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: V.a.publicIndicator
					}, s.a.createElement(U.a, {
						className: V.a.eyeIcon
					}), s.a.createElement(J.c, null, "Shows my username")) : null
				}
				render() {
					const {
						className: e,
						postOrComment: t,
						selectedAward: a,
						subredditName: n
					} = this.props;
					return s.a.createElement("div", {
						className: Object(c.a)(e, V.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: V.a.spacer
					}), s.a.createElement(re, {
						award: a,
						postOrComment: t,
						subredditName: n
					}), a.awardType === u.d.Moderator ? s.a.createElement("span", {
						className: V.a.giver
					}, s.a.createElement(Z.a, {
						className: V.a.modIcon
					}), s.a.createElement(J.c, null, "Given by a Moderator")) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var ie = ce,
				oe = a("./src/config.ts"),
				le = a("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				me = a.n(le),
				ue = a("./src/reddit/components/SubredditIcon/index.tsx"),
				pe = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				he = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				be = a.n(he),
				ge = e => {
					const {
						className: t,
						text: a
					} = e;
					return s.a.createElement("div", {
						className: Object(c.a)(t, be.a.AnimatedPillBadge)
					}, a, s.a.createElement("div", {
						className: be.a.sheen
					}))
				};
			class we extends s.a.Component {
				constructor() {
					super(...arguments), this.onOptionClick = () => {
						const {
							award: e,
							onSelect: t
						} = this.props;
						return t(e)
					}
				}
				render() {
					const {
						award: e,
						isSelected: t
					} = this.props, a = t ? me.a.selected : "", n = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("button", {
						className: Object(c.a)(me.a.selectableAward, a),
						onClick: this.onOptionClick
					}, s.a.createElement("div", {
						className: me.a.buttonContent,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: me.a.iconContainer
					}, s.a.createElement("img", {
						className: me.a.icon,
						src: n
					}), s.a.createElement("div", {
						className: me.a.badgeContainer
					}, e.awardSubType !== u.c.Premium && e.isNew && s.a.createElement(ge, {
						className: me.a.iconNewBadge,
						text: D.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.c.Premium && s.a.createElement("div", {
						className: me.a.iconPremiumBadgeContainer
					}, s.a.createElement(pe.a, {
						className: me.a.iconPremiumBadge
					})))), s.a.createElement("div", {
						className: me.a.title
					}, e.name), s.a.createElement("div", {
						className: me.a.metaText
					}, e.pennyPrice ? D.fbt._("Purchase for ${cost}", [D.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object($.a)(D.fbt._("Spend :coin:{cost}", [D.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": s.a.createElement(ee.a, null)
					})), e.endsAt && s.a.createElement(te.a, {
						className: me.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var Ee = we;
			const {
				fbt: Ce
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class ve extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => s.a.createElement("div", {
						className: me.a.giveImageContainer
					}, s.a.createElement("img", {
						className: me.a.giveImage,
						src: "".concat(oe.a.assetPath, "/img/gold/award-give.png")
					})), this.rendererByAwardSubtype = {
						[u.c.Global]: this.renderGlobalAwards,
						[u.c.Moderator]: this.renderModAwards,
						[u.c.Community]: this.renderCommunityAwards,
						[u.c.Appreciation]: this.renderAppreciationAwards,
						[u.c.Premium]: this.renderPremiumAwards
					}
				}
				renderAppreciationAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: me.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: me.a.awardSectionTitle
					}, Ce._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), s.a.createElement("div", {
						className: me.a.awardSection
					}, e.map(e => s.a.createElement(Ee, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: a,
						sendEvent: r,
						thingId: d
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: me.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: me.a.awardSectionTitle
					}, s.a.createElement(pe.a, {
						className: Object(c.a)(me.a.premiumIcon, me.a.awardSectionIcon)
					}), Ce._("Premium Awards", null, {
						hk: "35bhoK"
					})), s.a.createElement("div", {
						className: me.a.awardSection
					}, e.map(e => s.a.createElement(Ee, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: a,
						sendEvent: r,
						thingId: d
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: me.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: me.a.awardSectionTitle
					}, Ce._("Medals", null, {
						hk: "1RRXJc"
					})), s.a.createElement("div", {
						className: me.a.awardSection
					}, e.map(e => s.a.createElement(Ee, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: a,
						sendEvent: r,
						thingId: d
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						subreddit: d,
						subredditName: c,
						thingId: i
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: me.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: me.a.awardSectionTitle
					}, s.a.createElement(ue.b, {
						className: me.a.awardSectionIcon,
						subredditOrProfile: d
					}), Ce._("r/{subredditName} Awards", [Ce._param("subredditName", c)], {
						hk: "2nKNHH"
					})), s.a.createElement("div", {
						className: me.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(Ee, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							sendEvent: r,
							thingId: i
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						subredditName: d,
						thingId: i
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: me.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: me.a.awardSectionTitle
					}, s.a.createElement(Z.a, {
						className: Object(c.a)(me.a.modIcon, me.a.awardSectionIcon)
					}), Ce._("r/{subredditName} Moderator Awards", [Ce._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), s.a.createElement("div", {
						className: me.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(Ee, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							sendEvent: r,
							thingId: i
						})
					}))) : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: a,
						showPremiumAwards: n
					} = this.props;
					if (t || !e.length) return s.a.createElement("div", {
						className: Object(c.a)(a, me.a.awardSelectorPane)
					});
					const r = new Set,
						d = {
							[u.c.Global]: [],
							[u.c.Moderator]: [],
							[u.c.Community]: [],
							[u.c.Appreciation]: [],
							[u.c.Premium]: []
						};
					e.forEach(e => {
						r.add(e.awardSubType), d[e.awardSubType] || (d[e.awardSubType] = []), d[e.awardSubType].push(e)
					});
					const i = !!(d[u.c.Community].length || d[u.c.Moderator].length || d[u.c.Appreciation].length || n && d[u.c.Premium].length) || d[u.c.Global].length > 3;
					return s.a.createElement("div", {
						className: Object(c.a)(a, me.a.awardSelectorPane)
					}, !i && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== u.c.Premium || n) ? this.rendererByAwardSubtype[e].call(this, d[e], i) : null))
				}
			}
			var xe = ve,
				Ae = a("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				Pe = a.n(Ae),
				fe = a("./src/reddit/components/CoinBalance/index.tsx"),
				Oe = a("./src/reddit/controls/Button/index.tsx"),
				ye = a("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: je
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Ne = 10;
			class Ie extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(m.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: a
					} = this.props, n = (t || 0).toLocaleString();
					return s.a.createElement("div", {
						className: Pe.a.coinBalanceSection
					}, s.a.createElement(ue.b, {
						className: Pe.a.subredditIcon,
						subredditOrProfile: e
					}), je._("r/{subredditName} Coin balance:", [je._param("subredditName", a)], {
						hk: "2ktWRF"
					}), s.a.createElement("span", null, s.a.createElement(ee.a, null), n))
				}
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: a,
						thingId: n
					} = this.props, s = a.awardType === u.d.Moderator;
					return t ? je._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || s ? Object(o.a)(n) ? je._("Award post", null, {
						hk: "1Ydq4H"
					}) : je._("Award comment", null, {
						hk: "4CfMGF"
					}) : je._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						className: e,
						errorMessage: t,
						needPayment: a,
						needPremium: n,
						onGetPremium: r,
						onGild: d,
						onNeedPayment: i,
						pending: o,
						selectedAward: l,
						subredditCoins: m,
						userCoins: p
					} = this.props, h = l.awardType === u.d.Moderator, b = (h ? m : p) || 0;
					return s.a.createElement("div", {
						className: Object(c.a)(e, Pe.a.gildFooter)
					}, s.a.createElement("div", {
						className: Pe.a.footerContent
					}, h ? this.renderCommunityBalance() : s.a.createElement(fe.a, {
						className: Pe.a.coinBalanceSection,
						coinBalance: b,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), s.a.createElement(Oe.f, {
						className: n ? Pe.a.premiumButton : Pe.a.gildButton,
						"data-redditstyle": !0,
						disabled: o || h && a,
						onClick: n ? r : a ? i : d
					}, o ? s.a.createElement(ye.a, {
						className: Pe.a.loadingIcon,
						sizePx: Ne
					}) : this.renderButtonText())), t && s.a.createElement("div", {
						className: Pe.a.errorText
					}, t))
				}
			}
			var _e = Ie,
				Se = a("./src/reddit/components/GildModalContent/index.m.less"),
				ke = a.n(Se),
				Me = a("./src/app/strings/index.ts");
			class Te extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(m.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						language: e,
						postOrComment: t
					} = this.props;
					return Object($.a)(Object(Me.a)(e, "gold.gildModal.spendCoinsToHighlightPostOrComment", {
						postOrComment: Object(Me.a)(e, "gold.postOrComment.".concat(t))
					}), {
						":learnMoreLink:": s.a.createElement("a", {
							className: ke.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, s.a.createElement(J.c, null, "How do Awards work?"))
					})
				}
				render() {
					const {
						className: e,
						language: t,
						postOrComment: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(c.a)(e, ke.a.gildHeader)
					}, s.a.createElement("div", {
						className: ke.a.headerText
					}, s.a.createElement("div", {
						className: ke.a.mainText
					}, s.a.createElement("span", null, Object(Me.a)(t, "gold.gildModal.giveAwardToThisPostOrComment", {
						postOrComment: Object(Me.a)(t, "gold.postOrComment.".concat(a))
					}))), s.a.createElement("div", {
						className: ke.a.subText
					}, this.renderEmojiSubText())), s.a.createElement("button", {
						className: ke.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, s.a.createElement(W.b, {
						className: ke.a.closeBtnIcon
					})))
				}
			}
			var Le = Te;
			const Be = Object(d.a)(Object(d.c)({
					awards: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(k.H)(e, {
								thingId: a
							});
							s = t && t.id
						}
						if (!s && Object(o.a)(a)) {
							const t = Object(S.M)(e, {
								postId: a
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(f.g)(e, {
							subredditId: s
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(k.H)(e, {
								thingId: a
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(f.f)(e, {
							subredditId: s
						})
					},
					currentUser: M.i,
					errorMessage: j.a,
					isAnonymous: j.g,
					iFramed: j.h,
					isEmployee: M.D,
					language: M.O,
					message: j.b,
					pending: j.e,
					postOrComment: (e, t) => {
						let {
							thingId: a
						} = t;
						return Object(o.a)(a) ? Object(S.M)(e, {
							postId: a
						}) : Object(P.n)(e, {
							commentId: a
						})
					},
					publicAwardingEnabled: e => !!Object(y.a)(e),
					purchaseCatalogPending: I.e,
					showPremiumAwards: O.a,
					showPurchaseModal: _.q,
					selectedAward: N.a,
					subreddit: k.H,
					subredditCoins: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t;
						const s = Object(k.H)(e, {
								thingId: a
							}),
							r = s ? s.id : n;
						return Object(k.z)(e, {
							subredditId: r
						})
					},
					userCoins: M.d
				}), e => {
					const {
						isEmployee: t,
						postOrComment: a,
						selectedAward: n,
						subredditCoins: s,
						userCoins: r
					} = e, {
						awardType: d,
						coinPrice: c,
						pennyPrice: i
					} = n, o = d === u.d.Moderator, l = t && !o, m = !!i && !l || ((o ? s : r) || 0) < c && !l, p = a && a.media && "rpan" === a.media.type;
					return Object.assign({}, e, {
						needPayment: m,
						cost: i || c,
						isRpanPost: !!p
					})
				}),
				Ge = ["pan_media", "pan2", "pan3"];
			class Re extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showPurchaseModal: a
						} = this.props;
						if (27 === e.keyCode && !a) return t()
					}, this.toggleIsAnonymous = () => {
						const {
							isAnonymous: e,
							setIsAnonymous: t
						} = this.props;
						t(!e)
					}, this.handleMessageInput = e => {
						this.props.updateMessage(e.target.value)
					}, this.onNeedPayment = () => {
						const {
							cost: e,
							needPaymentRequested: t,
							selectedAward: a,
							sendEvent: n,
							thingId: s,
							userCoins: r
						} = this.props;
						n(Object(m.clickNextButtonEvent)(s)), t(r, e, s, !!a.pennyPrice), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: a
						} = this.props;
						t(Object(m.clickGetPremiumEvent)(a, e)), Object(i.d)("/premium", i.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: a,
							selectedAward: n,
							sendEvent: s,
							thingId: r
						} = this.props;
						return s(Object(m.clickConfirmAwardEvent)(r, n)), e(t, !!a)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(l.L)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardsRequested: e,
						isAnonymous: t,
						isRpanPost: a,
						needPayment: n,
						postOrComment: s,
						purchaseCatalogPending: r,
						purchaseCatalogRequested: d,
						selectedAward: c,
						sendEvent: i,
						setIsAnonymous: o,
						subreddit: u,
						subredditAboutRequested: p,
						subredditId: h,
						subredditName: b,
						thingId: g
					} = this.props;
					i(Object(m.viewGildModalEvent)(c.id, t, g)), o(!a && Object(l.k)());
					const w = u ? u.id : h || (s && s.belongsTo ? s.belongsTo.id : void 0);
					if (w && e(w), u || b) {
						p(u ? u.name : b)
					}
					n && (c.pennyPrice ? R() : Object(T.b)(), r || d())
				}
				render() {
					const {
						author: e,
						awards: t,
						awardsPending: a,
						className: n,
						closeGildModal: r,
						currentUser: d,
						errorMessage: i,
						iFramed: l,
						isAnonymous: p,
						isRpanPost: h,
						language: b,
						message: g,
						needPayment: w,
						pending: E,
						postOrComment: C,
						publicAwardingEnabled: v,
						selectAward: x,
						selectedAward: A,
						sendEvent: P,
						showPurchaseModal: f,
						showPremiumAwards: O,
						subreddit: y,
						subredditCoins: j,
						subredditName: N,
						thingId: I,
						userCoins: _
					} = this.props, {
						showPurchaseModalInThisInstance: S
					} = this.state, k = C ? C.author : e, M = Object(o.a)(I) ? "post" : "comment", L = f && S, B = L && !A.pennyPrice, G = L && !!A.pennyPrice, R = (B || G) && !l;
					if (B && R) return s.a.createElement(T.a, {
						isCompletePaypal: !1
					});
					if (G && R) return s.a.createElement(F, {
						isCompletePaypal: !1
					});
					const q = y ? y.name : N,
						D = Ge.includes(q) ? "pan" : q,
						H = !d || !d.isGold && A.awardSubType === u.c.Premium;
					return s.a.createElement("div", {
						className: Object(c.a)(n, ke.a.gildModalContent)
					}, s.a.createElement(Le, {
						authorName: k,
						language: b,
						postOrComment: M,
						onCancel: r,
						sendEvent: P,
						thingId: I
					}), s.a.createElement("div", {
						className: ke.a.modalMainContent
					}, s.a.createElement(xe, {
						awards: t,
						awardsPending: a,
						onSelect: e => {
							x(e), P(Object(m.clickSelectAwardEvent)(e, I))
						},
						selectedAward: A,
						sendEvent: P,
						showPremiumAwards: O,
						subreddit: y,
						subredditName: D,
						thingId: I
					}), s.a.createElement(ie, {
						forcePublic: h,
						isAnonymous: p,
						isLivestream: h,
						message: g,
						postOrComment: M,
						publicAwardingEnabled: v,
						selectedAward: A,
						sendEvent: P,
						thingId: I,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						subredditName: D
					})), s.a.createElement(_e, {
						errorMessage: i || void 0,
						needPayment: w,
						needPremium: H,
						onNeedPayment: this.onNeedPayment,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: E,
						selectedAward: A,
						sendEvent: P,
						subreddit: y,
						subredditName: D,
						subredditCoins: j,
						thingId: I,
						userCoins: _
					}), B && s.a.createElement(T.a, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(Be, (e, t) => {
				let {
					thingId: a
				} = t;
				return {
					awardsRequested: t => e(Object(p.h)(t)),
					closeGildModal: () => e(Object(E.a)()),
					gildRequested: (t, n) => e(Object(h.gildGqlRequested)(a, {
						isOldReddit: t,
						isLivestream: n
					})),
					needPaymentRequested: (t, a, n, s) => {
						e(s ? Object(v.e)(a, n) : Object(C.g)(t, a, n))
					},
					purchaseCatalogRequested: () => e(Object(x.a)()),
					selectAward: t => e(w(t)),
					setIsAnonymous: t => {
						e(Object(h.setIsAnonymous)(t)), Object(l.L)(t)
					},
					subredditAboutRequested: t => e(Object(A.t)(t)),
					updateMessage: t => e(Object(h.updateMessage)(t))
				}
			})(Object(q.c)(Re))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/components/TimeLeft/index.m.less"),
				d = a.n(r),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/timeAgo/index.ts"),
				o = a("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), r = Object(i.b)(n);
				return s.a.createElement("div", {
					className: Object(c.a)(t)
				}, s.a.createElement(o.a, {
					className: d.a.clockIcon
				}), s.a.createElement("span", {
					className: d.a.timeLeft
				}, r))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, a) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "d", (function() {
				return d
			}));
			const n = 500,
				s = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				d = function(e, t) {
					let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = r(t, a);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./src/reddit/constants/experiments.ts"),
				s = a("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.nb
				});
				return Object(n.Tb)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=FramedGild~GildModal.14fbd5c51d698637b49c.js.map