// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.d0b995455df0016e29c1.js
// Retrieved at 4/2/2020, 4:50:04 PM by Reddit Dataminer v1.0.0
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
			a.r(t), a.d(t, "setIsAnonymous", (function() {
				return x
			})), a.d(t, "setIncludeMessage", (function() {
				return y
			})), a.d(t, "updateMessage", (function() {
				return _
			})), a.d(t, "gildGqlRequested", (function() {
				return k
			})), a.d(t, "triggerLoader", (function() {
				return S
			})), a.d(t, "gildPending", (function() {
				return T
			})), a.d(t, "gildFailed", (function() {
				return B
			})), a.d(t, "gildSuccessful", (function() {
				return F
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/lib/messageIframeParent/index.ts"),
				c = a("./src/reddit/actions/toaster.ts"),
				i = a("./src/reddit/models/Gold/Award.ts"),
				d = a("./src/reddit/models/Toast/index.ts"),
				o = a("./src/reddit/selectors/comments.ts"),
				l = a("./src/reddit/selectors/communityAwards.ts"),
				m = a("./src/reddit/selectors/gild.ts"),
				u = a("./src/reddit/selectors/posts.ts"),
				b = a("./src/reddit/selectors/subreddit.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				h = a("./src/graphql/operations/GildComment.json"),
				g = a("./src/graphql/operations/GildPost.json"),
				w = a("./src/lib/makeGqlRequest/index.ts"),
				E = a("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const O = (e, t, a) => Object(w.a)(e, Object.assign({}, g, {
					variables: t
				}), {
					query: a ? {} : Object(E.b)()
				}),
				v = (e, t, a) => Object(w.a)(e, Object.assign({}, h, {
					variables: t
				}), {
					query: a ? {} : Object(E.b)()
				});
			var A = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				f = a("./src/reddit/helpers/awards/message.ts"),
				j = a("./src/reddit/helpers/correlationIdTracker.ts"),
				C = a("./src/reddit/helpers/isPost.ts"),
				N = a("./src/reddit/helpers/trackers/gild.ts"),
				P = a("./src/telemetry/index.ts"),
				I = a("./src/reddit/actions/gold/constants.ts");
			const x = Object(s.a)(I.p),
				y = Object(s.a)(I.o),
				_ = Object(s.a)(I.s),
				k = (e, t) => async (a, s, r) => {
					let {
						gqlContext: c
					} = r;
					const i = s().gild,
						{
							isOldReddit: d,
							isLivestream: o
						} = t;
					a(T());
					try {
						const t = {
								gildingTypeId: i.selectedAward.id,
								isAnonymous: i.isAnonymous,
								isGildFunded: !1,
								message: Object(f.d)(i.message, i.selectedAward, o),
								nodeId: e
							},
							s = Object(C.a)(e) ? O : v,
							r = await s(c(), {
								input: t
							}, d);
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
								awardId: i.selectedAward.id,
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
						Object(j.b)(j.a.GildingFlow)
					}
				}, S = Object(s.a)(I.r), M = Object(s.a)(I.n), T = () => async (e, t) => {
					e(M()), window.setTimeout(() => {
						t().gild.api.pending && e(S())
					}, 2e3)
				}, L = Object(s.a)(I.m), B = e => async (t, a) => {
					await t(L(e)), t(Object(c.e)({
						kind: d.b.Error,
						duration: c.a,
						text: e
					}))
				}, G = Object(s.a)(I.q), R = (e, t) => {
					const {
						id: a
					} = t, n = Object(C.a)(a) ? Object(u.N)(e, {
						postId: a
					}) : Object(o.n)(e, {
						commentId: a
					}), s = Object(p.i)(e), r = e.gild, {
						isAnonymous: c
					} = r, i = !c && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, d = n ? n.author : void 0, l = Object(b.H)(e, {
						thingId: a
					});
					return G(Object.assign({}, t, {
						gilder: i,
						gildee: d,
						subredditId: l && l.id
					}))
				}, F = e => async (t, a) => {
					const s = a(),
						{
							awardId: o,
							id: u
						} = e,
						p = Object(l.a)(s, o);
					if (Object(m.h)(s)) {
						const e = "success.gild",
							t = {},
							a = p.icon32 ? p.icon32.url : p.icon.url;
						t.awardId = o, t.awardIcon = a, Object(r.a)({
							type: e,
							data: t
						})
					}
					if (p.awardType === i.d.Moderator && void 0 === e.subredditCoins) {
						const t = Object(b.H)(s, {
								thingId: u
							}),
							a = t && Object(b.A)(s, {
								subredditName: t.name
							});
						a && (e.subredditCoins = a - p.coinPrice)
					}
					t(R(s, e)), (s.posts.instances[u] || []).forEach(a => {
						t(R(s, Object.assign({}, e, {
							id: a
						})))
					});
					const h = Object(C.a)(u) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", p.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", p.name)], {
							hk: "2sIK9Y"
						}),
						g = p.coinPrice;
					Object(P.a)(Object(N.viewSuccessAwardEvent)(u, g, p)(s)), t(Object(c.e)({
						kind: d.b.SuccessCommunity,
						text: h
					})), setTimeout(() => {
						const e = Object(A.a)(o, u),
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
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				o = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(o);
			t.a = e => r.a.createElement("div", {
				className: Object(c.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(i.a)(n.fbt._("Coin balance:: :coin:{coinBalance}", [n.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "3rsL0j"
			}), {
				":coin:": r.a.createElement(d.a, null)
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
				disabled: "Cbw55II_5-hqVMilDR3rN",
				banner: "_2DXf1id0rEhidKxC88jyko"
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
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/opener/index.ts"),
				o = a("./src/reddit/helpers/isPost.ts"),
				l = a("./src/reddit/helpers/localStorage/index.ts"),
				m = a("./src/reddit/helpers/trackers/gild.ts"),
				u = a("./src/reddit/models/Gold/Award.ts"),
				b = a("./src/reddit/actions/gold/communityAwards.ts"),
				p = a("./src/reddit/actions/gold/gild.ts"),
				h = a("./src/lib/makeActionCreator/index.ts"),
				g = a("./src/reddit/actions/gold/constants.ts");
			const w = Object(h.a)(g.K);
			var E = a("./src/reddit/actions/gold/modals.ts"),
				O = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				A = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				f = a("./src/reddit/actions/subreddit.ts"),
				j = a("./src/reddit/selectors/comments.ts"),
				C = a("./src/reddit/selectors/communityAwards.ts"),
				N = a("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				P = a("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				I = a("./src/reddit/selectors/experiments/publicAwarding.ts"),
				x = a("./src/reddit/selectors/gild.ts"),
				y = a("./src/reddit/selectors/gold/giveAwards.ts"),
				_ = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				S = a("./src/reddit/selectors/posts.ts"),
				M = a("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				T = a("./src/reddit/selectors/subreddit.ts"),
				L = a("./src/reddit/selectors/user.ts"),
				B = a("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				G = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/higherOrderComponents/makeAsync.tsx")),
				R = a("./src/lib/loadWithRetries/index.ts"),
				F = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			const D = () => Object(R.a)(() => Promise.all([Promise.all([a.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), a.e("CoinsPurchaseModal~PennyPurchaseModal"), a.e("PennyPurchaseModal")]).then(a.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(F.c)()])).then(e => e[0].default);
			var V = Object(G.a)({
					getComponent: D,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				q = a("./src/reddit/components/TrackingHelper/index.tsx"),
				H = a("./node_modules/fbt/lib/FbtPublic.js"),
				K = a("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				U = a.n(K),
				J = a("./src/reddit/helpers/awards/message.ts"),
				Q = a("./src/reddit/i18n/components.tsx"),
				W = a("./src/reddit/i18n/utils.ts"),
				X = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				z = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Y = a("./src/reddit/controls/RadioInput/index.tsx"),
				Z = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				$ = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				ee = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				te = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				ae = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				ne = a("./src/reddit/components/TimeLeft/TimeLeft.tsx");
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			const se = e => {
				const {
					award: t,
					postOrComment: a,
					subredditName: n
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(ae.a, null), e)))
				}
				if (t.awardType === u.d.Community) return t.subredditCoinReward && t.coinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the post and grants "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community and "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "user-coins"
				}, t.coinReward), " to the recipient. Exclusive to ", s.a.createElement(Q.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the comment and grants "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(Q.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : t.subredditCoinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the post and grants "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(Q.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the comment and grants "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(Q.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the post. Exclusive to ", s.a.createElement(Q.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the comment. Exclusive to ", s.a.createElement(Q.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), "."));
				if (t.awardType === u.d.Moderator) {
					const e = t.daysOfPremium ? Math.floor(t.daysOfPremium / 30) : 0;
					return "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the post and gives the recipient ", s.a.createElement(Q.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(Q.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
						name: "number-coins"
					}, "700 Coins"), " a month).")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Shows an Award on the comment and gives the recipient ", s.a.createElement(Q.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(Q.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
						name: "number-coins"
					}, "700 Coins"), " a month)."))
				}
				return "gid_1" === t.id ? "post" === a ? s.a.createElement(Q.c, null, "Shows the Silver Award on the post... and that's it.") : s.a.createElement(Q.c, null, "Shows the Silver Award on the comment... and that's it.") : "gid_2" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the comment.")) : "gid_3" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(ae.a, null), s.a.createElement(Q.c, null, s.a.createElement(Q.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the comment.")) : null
			};
			class re extends s.a.PureComponent {
				render() {
					const {
						award: e,
						className: t,
						postOrComment: a,
						subredditName: n
					} = this.props, r = e.icon128 ? e.icon128.url : e.icon.url, c = !!e.pennyPrice;
					return s.a.createElement("div", {
						className: Object(i.a)(t, U.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: U.a.iconContainer
					}, s.a.createElement("img", {
						className: U.a.icon,
						src: r
					})), s.a.createElement("div", {
						className: U.a.awardName
					}, H.fbt._("{awardName} Award", [H.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), s.a.createElement("div", {
						className: U.a.price
					}, c ? H.fbt._("Purchase for ${dollarPrice}", [H.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : Object(te.a)(H.fbt._("Spend :coin:{coinPrice}", [H.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": s.a.createElement(ae.a, null)
					})), s.a.createElement("div", {
						className: U.a.benefits
					}, s.a.createElement(se, {
						award: e,
						postOrComment: a,
						subredditName: n
					})), e.endsAt && s.a.createElement(ne.a, {
						className: U.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var ce, ie = re;

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
			}(ce || (ce = {}));
			class oe extends s.a.PureComponent {
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
						} = this.props, r = e === ce.PRIVATE;
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
						const e = "post" === a ? Object(W.c)("Show my username on post") : Object(W.c)("Show my username on comment");
						return s.a.createElement(Y.a, {
							name: Object(W.c)("Privacy setting"),
							onChange: this.handleRadioChange,
							value: t ? ce.PRIVATE : ce.PUBLIC
						}, s.a.createElement(Z.a, {
							className: Object(i.a)(U.a.radioOption, U.a.first),
							showButton: !0,
							value: ce.PUBLIC
						}, e), s.a.createElement(Z.a, {
							className: U.a.radioOption,
							showButton: !0,
							value: ce.PRIVATE
						}, s.a.createElement(Q.c, null, "Give anonymously")))
					}
					return s.a.createElement(z.a, {
						className: U.a.giver,
						isSelected: t,
						text: Object(W.c)("Make my gift anonymous"),
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
						maxLength: Object(J.c)(t, e),
						placeholder: H.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = H.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = H.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || n.maxLength > 0,
						c = r && a.length > n.maxLength;
					return s.a.createElement("div", {
						className: Object(i.a)(U.a.textAreaWrapper, {
							[U.a.messageTooLong]: c
						})
					}, s.a.createElement(X.q, de({
						className: U.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? a : ""
					}, n)), r && s.a.createElement("div", {
						className: U.a.characterCountdown
					}, n.maxLength - a.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: U.a.publicIndicator
					}, s.a.createElement($.a, {
						className: U.a.eyeIcon
					}), s.a.createElement(Q.c, null, "Shows my username")) : null
				}
				render() {
					const {
						className: e,
						postOrComment: t,
						selectedAward: a,
						subredditName: n
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(e, U.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: U.a.spacer
					}), s.a.createElement(ie, {
						award: a,
						postOrComment: t,
						subredditName: n
					}), a.awardType === u.d.Moderator ? s.a.createElement("span", {
						className: U.a.giver
					}, s.a.createElement(ee.a, {
						className: U.a.modIcon
					}), s.a.createElement(Q.c, null, "Given by a Moderator")) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var le = oe,
				me = a("./src/config.ts"),
				ue = a("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				be = a.n(ue),
				pe = a("./src/reddit/components/SubredditIcon/index.tsx"),
				he = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				ge = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				we = a.n(ge),
				Ee = e => {
					const {
						className: t,
						text: a
					} = e;
					return s.a.createElement("div", {
						className: Object(i.a)(t, we.a.AnimatedPillBadge)
					}, a, s.a.createElement("div", {
						className: we.a.sheen
					}))
				};
			class Oe extends s.a.Component {
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
					} = this.props, a = t ? be.a.selected : "", n = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("button", {
						className: Object(i.a)(be.a.selectableAward, a),
						onClick: this.onOptionClick
					}, s.a.createElement("div", {
						className: be.a.buttonContent,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: be.a.iconContainer
					}, s.a.createElement("img", {
						className: be.a.icon,
						src: n
					}), s.a.createElement("div", {
						className: be.a.badgeContainer
					}, e.awardSubType !== u.c.Premium && e.isNew && s.a.createElement(Ee, {
						className: be.a.iconNewBadge,
						text: H.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.c.Premium && s.a.createElement("div", {
						className: be.a.iconPremiumBadgeContainer
					}, s.a.createElement(he.a, {
						className: be.a.iconPremiumBadge
					})))), s.a.createElement("div", {
						className: be.a.title
					}, e.name), s.a.createElement("div", {
						className: be.a.metaText
					}, e.pennyPrice ? H.fbt._("Purchase for ${cost}", [H.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(te.a)(H.fbt._("Spend :coin:{cost}", [H.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": s.a.createElement(ae.a, null)
					})), e.endsAt && s.a.createElement(ne.a, {
						className: be.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var ve = Oe;
			const {
				fbt: Ae
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class fe extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => s.a.createElement("div", {
						className: be.a.giveImageContainer
					}, s.a.createElement("img", {
						className: be.a.giveImage,
						src: "".concat(me.a.assetPath, "/img/gold/award-give.png")
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
						thingId: c
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: be.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: be.a.awardSectionTitle
					}, Ae._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), s.a.createElement("div", {
						className: be.a.awardSection
					}, e.map(e => s.a.createElement(ve, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: a,
						sendEvent: r,
						thingId: c
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						thingId: c
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: be.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: be.a.awardSectionTitle
					}, s.a.createElement(he.a, {
						className: Object(i.a)(be.a.premiumIcon, be.a.awardSectionIcon)
					}), Ae._("Premium Awards", null, {
						hk: "35bhoK"
					})), s.a.createElement("div", {
						className: be.a.awardSection
					}, e.map(e => s.a.createElement(ve, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: a,
						sendEvent: r,
						thingId: c
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						thingId: c
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: be.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: be.a.awardSectionTitle
					}, Ae._("Medals", null, {
						hk: "1RRXJc"
					})), s.a.createElement("div", {
						className: be.a.awardSection
					}, e.map(e => s.a.createElement(ve, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: a,
						sendEvent: r,
						thingId: c
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						subreddit: c,
						subredditName: i,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: be.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: be.a.awardSectionTitle
					}, s.a.createElement(pe.b, {
						className: be.a.awardSectionIcon,
						subredditOrProfile: c
					}), Ae._("r/{subredditName} Awards", [Ae._param("subredditName", i)], {
						hk: "2nKNHH"
					})), s.a.createElement("div", {
						className: be.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(ve, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							sendEvent: r,
							thingId: d
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						subredditName: c,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: be.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: be.a.awardSectionTitle
					}, s.a.createElement(ee.a, {
						className: Object(i.a)(be.a.modIcon, be.a.awardSectionIcon)
					}), Ae._("r/{subredditName} Moderator Awards", [Ae._param("subredditName", c)], {
						hk: "4vVQ2A"
					})), s.a.createElement("div", {
						className: be.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(ve, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							sendEvent: r,
							thingId: d
						})
					}))) : null
				}
				renderBanner() {
					return this.props.isLivestream && this.props.inViewerFeedTheMeter ? s.a.createElement("div", {
						className: be.a.banner
					}, "RPAN is supported by contributions ", s.a.createElement("br", null), "from viewers like you.") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: a,
						showPremiumAwards: n
					} = this.props;
					if (t || !e.length) return s.a.createElement("div", {
						className: Object(i.a)(a, be.a.awardSelectorPane)
					});
					const r = new Set,
						c = {
							[u.c.Global]: [],
							[u.c.Moderator]: [],
							[u.c.Community]: [],
							[u.c.Appreciation]: [],
							[u.c.Premium]: []
						};
					e.forEach(e => {
						r.add(e.awardSubType), c[e.awardSubType] || (c[e.awardSubType] = []), c[e.awardSubType].push(e)
					});
					const d = !!(c[u.c.Community].length || c[u.c.Moderator].length || c[u.c.Appreciation].length || n && c[u.c.Premium].length) || c[u.c.Global].length > 3;
					return s.a.createElement("div", {
						className: Object(i.a)(a, be.a.awardSelectorPane)
					}, this.renderBanner(), !d && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== u.c.Premium || n) ? this.rendererByAwardSubtype[e].call(this, c[e], d) : null))
				}
			}
			var je = fe,
				Ce = a("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				Ne = a.n(Ce),
				Pe = a("./src/reddit/components/CoinBalance/index.tsx"),
				Ie = a("./src/reddit/controls/Button/index.tsx"),
				xe = a("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: ye
			} = a("./node_modules/fbt/lib/FbtPublic.js"), _e = 10;
			class ke extends s.a.PureComponent {
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
						className: Ne.a.coinBalanceSection
					}, s.a.createElement(pe.b, {
						className: Ne.a.subredditIcon,
						subredditOrProfile: e
					}), ye._("r/{subredditName} Coin balance:", [ye._param("subredditName", a)], {
						hk: "2ktWRF"
					}), s.a.createElement("span", null, s.a.createElement(ae.a, null), n))
				}
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: a,
						thingId: n
					} = this.props, s = a.awardType === u.d.Moderator;
					return t ? ye._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || s ? Object(o.a)(n) ? ye._("Award post", null, {
						hk: "1Ydq4H"
					}) : ye._("Award comment", null, {
						hk: "4CfMGF"
					}) : ye._("Next", null, {
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
						onGild: c,
						onNeedPayment: d,
						pending: o,
						selectedAward: l,
						subredditCoins: m,
						userCoins: b
					} = this.props, p = l.awardType === u.d.Moderator, h = (p ? m : b) || 0;
					return s.a.createElement("div", {
						className: Object(i.a)(e, Ne.a.gildFooter)
					}, s.a.createElement("div", {
						className: Ne.a.footerContent
					}, p ? this.renderCommunityBalance() : s.a.createElement(Pe.a, {
						className: Ne.a.coinBalanceSection,
						coinBalance: h,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), s.a.createElement(Ie.f, {
						className: n ? Ne.a.premiumButton : Ne.a.gildButton,
						"data-redditstyle": !0,
						disabled: o || p && a,
						onClick: n ? r : a ? d : c
					}, o ? s.a.createElement(xe.a, {
						className: Ne.a.loadingIcon,
						sizePx: _e
					}) : this.renderButtonText())), t && s.a.createElement("div", {
						className: Ne.a.errorText
					}, t))
				}
			}
			var Se = ke,
				Me = a("./src/reddit/components/GildModalContent/index.m.less"),
				Te = a.n(Me),
				Le = a("./src/app/strings/index.ts");
			class Be extends s.a.PureComponent {
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
					return Object(te.a)(Object(Le.a)(e, "gold.gildModal.spendCoinsToHighlightPostOrComment", {
						postOrComment: Object(Le.a)(e, "gold.postOrComment.".concat(t))
					}), {
						":learnMoreLink:": s.a.createElement("a", {
							className: Te.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, s.a.createElement(Q.c, null, "How do Awards work?"))
					})
				}
				render() {
					const {
						className: e,
						language: t,
						postOrComment: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(e, Te.a.gildHeader)
					}, s.a.createElement("div", {
						className: Te.a.headerText
					}, s.a.createElement("div", {
						className: Te.a.mainText
					}, s.a.createElement("span", null, Object(Le.a)(t, "gold.gildModal.giveAwardToThisPostOrComment", {
						postOrComment: Object(Le.a)(t, "gold.postOrComment.".concat(a))
					}))), s.a.createElement("div", {
						className: Te.a.subText
					}, this.renderEmojiSubText())), s.a.createElement("button", {
						className: Te.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, s.a.createElement(X.b, {
						className: Te.a.closeBtnIcon
					})))
				}
			}
			var Ge = Be;
			const Re = Object(c.a)(Object(c.c)({
					awards: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(T.H)(e, {
								thingId: a
							});
							s = t && t.id
						}
						if (!s && Object(o.a)(a)) {
							const t = Object(S.N)(e, {
								postId: a
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(C.g)(e, {
							subredditId: s
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(T.H)(e, {
								thingId: a
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(C.f)(e, {
							subredditId: s
						})
					},
					currentUser: L.i,
					errorMessage: x.a,
					isAnonymous: x.g,
					iFramed: x.h,
					isEmployee: L.D,
					language: L.O,
					message: x.b,
					pending: x.e,
					postOrComment: (e, t) => {
						let {
							thingId: a
						} = t;
						return Object(o.a)(a) ? Object(S.N)(e, {
							postId: a
						}) : Object(j.n)(e, {
							commentId: a
						})
					},
					publicAwardingEnabled: e => !!Object(I.a)(e),
					purchaseCatalogPending: _.e,
					showPremiumAwards: N.a,
					showPurchaseModal: k.r,
					selectedAward: y.a,
					subreddit: T.H,
					subredditCoins: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t;
						const s = Object(T.H)(e, {
								thingId: a
							}),
							r = s ? s.id : n;
						return Object(T.z)(e, {
							subredditId: r
						})
					},
					userCoins: L.d,
					inViewerFeedTheMeter: (e, t) => {
						let {
							thingId: a
						} = t;
						return Object(P.d)(e, a, M.k)
					}
				}), e => {
					const {
						isEmployee: t,
						postOrComment: a,
						selectedAward: n,
						subredditCoins: s,
						userCoins: r
					} = e, {
						awardType: c,
						coinPrice: i,
						pennyPrice: d
					} = n, o = c === u.d.Moderator, l = !!d || ((o ? s : r) || 0) < i && !(t && !o), m = a && a.media && "rpan" === a.media.type;
					return Object.assign({}, e, {
						needPayment: l,
						cost: d || i,
						isRpanPost: !!m
					})
				}),
				Fe = ["pan_media", "pan2", "pan3"];
			class De extends s.a.Component {
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
						t(Object(m.clickGetPremiumEvent)(a, e)), Object(d.d)("/premium", d.c.BLANK)
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
					Object(l.J)(e)
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
						purchaseCatalogRequested: c,
						selectedAward: i,
						sendEvent: d,
						setIsAnonymous: o,
						subreddit: u,
						subredditAboutRequested: b,
						subredditId: p,
						subredditName: h,
						thingId: g
					} = this.props;
					d(Object(m.viewGildModalEvent)(i.id, t, g)), o(!a && Object(l.k)());
					const w = u ? u.id : p || (s && s.belongsTo ? s.belongsTo.id : void 0);
					if (w && e(w), u || h) {
						b(u ? u.name : h)
					}
					n && (i.pennyPrice ? D() : Object(B.b)(), r || c())
				}
				render() {
					const {
						author: e,
						awards: t,
						awardsPending: a,
						className: n,
						closeGildModal: r,
						currentUser: c,
						errorMessage: d,
						iFramed: l,
						isAnonymous: b,
						isRpanPost: p,
						inViewerFeedTheMeter: h,
						language: g,
						message: w,
						needPayment: E,
						pending: O,
						postOrComment: v,
						publicAwardingEnabled: A,
						selectAward: f,
						selectedAward: j,
						sendEvent: C,
						showPurchaseModal: N,
						showPremiumAwards: P,
						subreddit: I,
						subredditCoins: x,
						subredditName: y,
						thingId: _,
						userCoins: k
					} = this.props, {
						showPurchaseModalInThisInstance: S
					} = this.state, M = v ? v.author : e, T = Object(o.a)(_) ? "post" : "comment", L = N && S, G = L && !j.pennyPrice, R = L && !!j.pennyPrice, F = (G || R) && !l;
					if (G && F) return s.a.createElement(B.a, {
						isCompletePaypal: !1
					});
					if (R && F) return s.a.createElement(V, {
						isCompletePaypal: !1
					});
					const D = I ? I.name : y,
						q = Fe.includes(D) ? "pan" : D,
						H = !c || !c.isGold && j.awardSubType === u.c.Premium;
					return s.a.createElement("div", {
						className: Object(i.a)(n, Te.a.gildModalContent)
					}, s.a.createElement(Ge, {
						authorName: M,
						language: g,
						postOrComment: T,
						onCancel: r,
						sendEvent: C,
						thingId: _
					}), s.a.createElement("div", {
						className: Te.a.modalMainContent
					}, s.a.createElement(je, {
						awards: t,
						awardsPending: a,
						onSelect: e => {
							f(e), C(Object(m.clickSelectAwardEvent)(e, _))
						},
						selectedAward: j,
						sendEvent: C,
						showPremiumAwards: P,
						subreddit: I,
						subredditName: q,
						thingId: _,
						isLivestream: p,
						inViewerFeedTheMeter: h
					}), s.a.createElement(le, {
						forcePublic: p,
						isAnonymous: b,
						isLivestream: p,
						message: w,
						postOrComment: T,
						publicAwardingEnabled: A,
						selectedAward: j,
						sendEvent: C,
						thingId: _,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						subredditName: q
					})), s.a.createElement(Se, {
						errorMessage: d || void 0,
						needPayment: E,
						needPremium: H,
						onNeedPayment: this.onNeedPayment,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: O,
						selectedAward: j,
						sendEvent: C,
						subreddit: I,
						subredditName: q,
						subredditCoins: x,
						thingId: _,
						userCoins: k
					}), G && s.a.createElement(B.a, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(Re, (e, t) => {
				let {
					thingId: a
				} = t;
				return {
					awardsRequested: t => e(Object(b.h)(t)),
					closeGildModal: () => e(Object(E.a)()),
					gildRequested: (t, n) => e(Object(p.gildGqlRequested)(a, {
						isOldReddit: t,
						isLivestream: n
					})),
					needPaymentRequested: (t, a, n, s) => {
						e(s ? Object(v.e)(a, n) : Object(O.g)(t, a, n))
					},
					purchaseCatalogRequested: () => e(Object(A.a)()),
					selectAward: t => e(w(t)),
					setIsAnonymous: t => {
						e(Object(p.setIsAnonymous)(t)), Object(l.J)(t)
					},
					subredditAboutRequested: t => e(Object(f.t)(t)),
					updateMessage: t => e(Object(p.updateMessage)(t))
				}
			})(Object(q.c)(De))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/components/TimeLeft/index.m.less"),
				c = a.n(r),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/timeAgo/index.ts"),
				o = a("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), r = Object(d.b)(n);
				return s.a.createElement("div", {
					className: Object(i.a)(t)
				}, s.a.createElement(o.a, {
					className: c.a.clockIcon
				}), s.a.createElement("span", {
					className: c.a.timeLeft
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
				return c
			}));
			const n = 500,
				s = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				c = function(e, t) {
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
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, a) {
			"use strict";
			a.d(t, "k", (function() {
				return j
			})), a.d(t, "l", (function() {
				return P
			})), a.d(t, "m", (function() {
				return I
			})), a.d(t, "g", (function() {
				return _
			})), a.d(t, "c", (function() {
				return T
			})), a.d(t, "f", (function() {
				return L
			})), a.d(t, "j", (function() {
				return B
			})), a.d(t, "i", (function() {
				return G
			})), a.d(t, "e", (function() {
				return R
			})), a.d(t, "a", (function() {
				return V
			})), a.d(t, "h", (function() {
				return q
			})), a.d(t, "b", (function() {
				return H
			})), a.d(t, "d", (function() {
				return K
			}));
			a("./node_modules/core-js/modules/es6.array.sort.js"), a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/reselect/es/index.js"),
				s = a("./src/lib/objectSelector/index.ts"),
				r = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = a("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = a("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = a("./src/reddit/selectors/posts.ts"),
				o = a("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = a("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = a("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				b = a.n(m)()(e => Object(s.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = a("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				w = e => e.publicAccessNetwork.history.cursor,
				E = e => e.publicAccessNetwork.history.visitOrder,
				O = e => e.publicAccessNetwork.hlsStreams,
				v = Object(n.a)(O, e => e.ended),
				A = Object(n.a)(O, e => e.removed),
				f = Object(n.a)(e => e.publicAccessNetwork.models, v, A, (e, t, a) => {
					const n = t.reduce((e, t) => {
						const a = e[t];
						if (!a) return e;
						const n = a.stream.state,
							s = F(n, i.b.ENDED) ? i.b.ENDED : n,
							r = a.stream.vod_accessible;
						return s === n && !0 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, a, {
								stream: Object.assign({}, a.stream, {
									state: s,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return a.reduce((e, t) => {
						const a = e[t];
						if (!a) return e;
						const n = a.stream.state,
							s = F(n, i.b.ENDED) ? i.b.ENDED : n,
							r = a.stream.vod_accessible;
						return s === n && !1 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, a, {
								stream: Object.assign({}, a.stream, {
									state: s,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				j = (e, t) => {
					return f(e)[Object(c.g)(t)]
				},
				C = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a
				}, (e, t) => b(t.listingName)(e, t), f, h, d.h, o.b, (e, t, a, n, s, d) => {
					if (d) {
						const r = [];
						if (e) {
							const t = Object(c.g)(e);
							a[t] && r.push(t)
						}
						const d = r.concat(t),
							o = [...new Set(d)],
							l = new Set([...n, ...s]);
						return o.filter(e => {
							const t = a[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const o = new Set([...n, ...s]);
					return Object.keys(a).filter(e => !o.has(e)).map(e => a[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				N = Object(n.a)((e, t) => {
					let {
						count: a
					} = t;
					return a
				}, f, (e, t) => {
					let {
						listingName: a,
						streamIdFromPath: n
					} = t;
					return C(e, {
						listingName: a,
						streamIdFromPath: n
					})
				}, (e, t, a) => {
					const n = a.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				P = Object(n.a)(f, N, (e, t) => {
					const a = t.find(t => {
						const a = e[t];
						return !!a && a.stream.state === i.b.IS_LIVE
					});
					if (a) return e[a]
				}),
				I = Object(n.a)(f, N, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				x = Object(n.a)(E, (e, t) => {
					let {
						related: a,
						streamIdFromPath: n,
						subreddit: s
					} = t;
					return N(e, {
						listingName: a || s,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const a = new Set(e),
						n = t.filter(e => !a.has(e));
					if (n.length) return n[0]
				}),
				y = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a
				}, f, (e, t) => {
					let {
						related: a,
						streamIdFromPath: n,
						subreddit: s
					} = t;
					return N(e, {
						listingName: a || s,
						streamIdFromPath: n
					})
				}, g, (e, t, a, n) => {
					if (!a.length) return;
					const s = a.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = s.find(e => e.stream.state === i.b.IS_LIVE);
					if (r) return r.post.id;
					const c = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return c ? c.post.id : void 0
				}),
				_ = Object(s.a)(Object(n.a)(y, f, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a ? Object(c.g)(a) : void 0
				}, y, h, d.h, (e, t) => {
					let {
						related: a,
						streamIdFromPath: n,
						subreddit: s
					} = t;
					return N(e, {
						listingName: a || s,
						streamIdFromPath: n
					})
				}, (e, t, a, n, s) => !e || a.includes(e) || n.includes(e) ? t || s[0] : e),
				S = Object(n.a)(w, E, x, (e, t, a) => e < t.length - 1 ? t[e + 1] : a),
				M = Object(n.a)(w, E, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(s.a)(Object(n.a)(k, f, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(n.a)(S, f, (e, t) => e ? t[e] : void 0)),
				B = Object(s.a)(Object(n.a)(M, f, (e, t) => e ? t[e] : void 0)),
				G = (Object(s.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, f, (e, t) => Object.keys(e).filter(e => !!t[e]).map(a => Object.assign({}, t[a], {
					preloadedPreviewUrl: e[a]
				})))), Object(n.a)((e, t) => {
					let {
						streamId: a
					} = t;
					return a
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				R = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a ? j(e, a) : void 0
				}, e => !e || e.chat_disabled);

			function F(e, t) {
				const a = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return a[t] >= a[e]
			}
			const D = Object(n.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const q = Object(n.a)(k, f, p.b, (e, t, a) => {
					if (a) return V.INTRO;
					const n = e && t[e];
					if (!n) return V.UNAVAILABLE;
					const s = n.stream.state;
					return s === i.b.IS_LIVE || s === i.b.DISCONNECTED ? V.LIVE : s === i.b.ENDED && n.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				H = Object(n.a)(T, q, p.b, l.c, l.p, (e, t, a, n, s) => a ? n : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : s : void 0),
				K = Object(n.a)(T, q, D, (e, t, a) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && a < e.broadcast_time ? a : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return i
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/reselect/es/index.js"),
				s = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = a("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(c, r.o, (e, t) => t && !e.isIntroFinished),
				d = Object(n.a)(c, e => e.lastChatActivityUtcTs),
				o = e => !!e && e + s.a > Date.now()
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
					experimentName: n.rb
				});
				return Object(n.Zb)(t) ? void 0 : t
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
//# sourceMappingURL=FramedGild~GildModal.d0b995455df0016e29c1.js.map