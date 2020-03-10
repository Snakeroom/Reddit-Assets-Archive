// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.81e9731cb325d2de29b6.js
// Retrieved at 3/10/2020, 11:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"2b054ab61ac3"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"57310c14f742"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/constants/index.ts"),
				r = a("./src/lib/makeActionCreator/index.ts"),
				d = a("./src/lib/messageIframeParent/index.ts"),
				i = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/models/Gold/Award.ts"),
				o = a("./src/reddit/models/Toast/index.ts"),
				l = a("./src/reddit/selectors/comments.ts"),
				m = a("./src/reddit/selectors/communityAwards.ts"),
				u = a("./src/reddit/selectors/gild.ts"),
				h = a("./src/reddit/selectors/posts.ts"),
				p = a("./src/reddit/selectors/subreddit.ts"),
				g = a("./src/reddit/selectors/user.ts"),
				b = a("./src/graphql/operations/GildComment.json"),
				w = a("./src/graphql/operations/GildPost.json"),
				E = a("./src/lib/makeGqlRequest/index.ts"),
				C = a("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const v = (e, t, a) => Object(E.a)(e, Object.assign({}, w, {
					variables: t
				}), {
					query: a ? {} : Object(C.b)()
				}),
				A = (e, t, a) => Object(E.a)(e, Object.assign({}, b, {
					variables: t
				}), {
					query: a ? {} : Object(C.b)()
				});
			var x = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				f = a("./src/reddit/helpers/awards/message.ts"),
				O = a("./src/reddit/helpers/correlationIdTracker.ts"),
				j = a("./src/reddit/helpers/isPost.ts"),
				N = a("./src/reddit/helpers/trackers/gild.ts"),
				I = a("./src/reddit/i18n/utils.ts"),
				P = a("./src/telemetry/index.ts"),
				y = a("./src/reddit/actions/gold/constants.ts");
			a.d(t, "setIsAnonymous", (function() {
				return _
			})), a.d(t, "setIncludeMessage", (function() {
				return S
			})), a.d(t, "updateMessage", (function() {
				return M
			})), a.d(t, "gildGqlRequested", (function() {
				return k
			})), a.d(t, "triggerLoader", (function() {
				return T
			})), a.d(t, "gildPending", (function() {
				return L
			})), a.d(t, "gildFailed", (function() {
				return R
			})), a.d(t, "gildSuccessful", (function() {
				return D
			}));
			const _ = Object(r.a)(y.p),
				S = Object(r.a)(y.o),
				M = Object(r.a)(y.s),
				k = (e, t) => async (a, n, s) => {
					let {
						gqlContext: r
					} = s;
					const d = n().gild,
						{
							isOldReddit: i,
							isLivestream: c
						} = t;
					a(L());
					try {
						const t = {
								gildingTypeId: d.selectedAward.id,
								isAnonymous: d.isAnonymous,
								isGildFunded: !1,
								message: Object(f.d)(d.message, d.selectedAward, c),
								nodeId: e
							},
							n = Object(j.a)(e) ? v : A,
							s = await n(r(), {
								input: t
							}, i);
						if (s.ok) {
							const t = s.body,
								{
									gild: n
								} = t.data;
							await a(D({
								awardId: d.selectedAward.id,
								awardings: n.awardings,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins
							}))
						} else await a(R(s))
					} catch (o) {
						await a(R(o))
					} finally {
						Object(O.b)(O.a.GildingFlow)
					}
				}, T = Object(r.a)(y.r), G = Object(r.a)(y.n), L = () => async (e, t) => {
					e(G()), window.setTimeout(() => {
						t().gild.api.pending && e(T())
					}, 2e3)
				}, B = Object(r.a)(y.m), R = e => async (t, a) => {
					await t(B(e));
					const n = a().gild.api.error;
					if (n) {
						const a = ((e, t) => {
							const a = e.error && e.error.type,
								n = e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg;
							return a === s.i ? Object(I.c)("There was an authentication error") : n ? Object(I.c)(n) : Object(I.c)(t)
						})(e, n);
						t(Object(i.e)({
							kind: o.b.Error,
							duration: i.a,
							text: a
						}))
					}
				}, F = Object(r.a)(y.q), q = (e, t) => {
					const {
						id: a
					} = t, n = Object(j.a)(a) ? Object(h.M)(e, {
						postId: a
					}) : Object(l.n)(e, {
						commentId: a
					}), s = Object(g.i)(e), r = e.gild, {
						isAnonymous: d
					} = r, i = !d && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = n ? n.author : void 0, o = Object(p.H)(e, {
						thingId: a
					});
					return F(Object.assign({}, t, {
						gilder: i,
						gildee: c,
						subredditId: o && o.id
					}))
				}, D = e => async (t, a) => {
					const s = a(),
						{
							awardId: r,
							id: l
						} = e,
						h = Object(m.a)(s, r);
					if (Object(u.h)(s)) {
						const e = "success.gild",
							t = {},
							a = h.icon32 ? h.icon32.url : h.icon.url;
						t.awardId = r, t.awardIcon = a, Object(d.a)({
							type: e,
							data: t
						})
					}
					if (h.awardType === c.d.Moderator && void 0 === e.subredditCoins) {
						const t = Object(p.H)(s, {
								thingId: l
							}),
							a = t && Object(p.A)(s, {
								subredditName: t.name
							});
						a && (e.subredditCoins = a - h.coinPrice)
					}
					t(q(s, e)), (s.posts.instances[l] || []).forEach(a => {
						t(q(s, Object.assign({}, e, {
							id: a
						})))
					});
					const g = Object(j.a)(l) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", h.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", h.name)], {
							hk: "2sIK9Y"
						}),
						b = h.coinPrice;
					Object(P.a)(Object(N.viewSuccessAwardEvent)(l, b, h)(s)), t(Object(i.e)({
						kind: o.b.SuccessCommunity,
						text: g
					})), setTimeout(() => {
						const e = Object(x.a)(r, l),
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
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				c = a("./src/reddit/i18n/components.tsx"),
				o = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = a("./src/reddit/components/CoinBalance/index.m.less"),
				m = a.n(l);
			t.a = e => r.a.createElement("div", {
				className: Object(d.a)(m.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(i.a)(n.fbt._("Coin balance:: {Coin balance}", [n.fbt._param("Coin balance", ":coin:".concat(e.coinBalance.toLocaleString()))], {
				hk: "4zRCac"
			}).toString(), {
				":coin:": r.a.createElement(o.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.a.createElement(c.c, null, "What are Coins?")))
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, a) {
			e.exports = {
				awardDetailsPane: "_3kvsmRpyGMATPOVdwZT7NB",
				spacer: "_1bEDhH7kWsaZekdaMFildR",
				awardDescriptionContainer: "_3q3pzHD6q6zVtVG4TNE7im",
				iconContainer: "_3b5NcSKHOalQQEfFSNiCQX",
				icon: "_2PvjA-cEeom6ZfDceMtNHp",
				awardName: "sadK4Fq7Cy1wo7YWoEAWl",
				coinPrice: "_21jyKnc3-eFXE3ZuWE1PPQ",
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
				i = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/opener/index.ts"),
				o = a("./src/reddit/helpers/isPost.ts"),
				l = a("./src/reddit/helpers/localStorage/index.ts"),
				m = a("./src/reddit/helpers/trackers/gild.ts"),
				u = a("./src/reddit/models/Gold/Award.ts"),
				h = a("./src/reddit/actions/gold/communityAwards.ts"),
				p = a("./src/reddit/actions/gold/gild.ts"),
				g = a("./src/lib/makeActionCreator/index.ts"),
				b = a("./src/reddit/actions/gold/constants.ts");
			const w = Object(g.a)(b.K);
			var E = a("./src/reddit/actions/gold/modals.ts"),
				C = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				A = a("./src/reddit/actions/subreddit.ts"),
				x = a("./src/reddit/selectors/comments.ts"),
				f = a("./src/reddit/selectors/communityAwards.ts"),
				O = a("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				j = a("./src/reddit/selectors/experiments/publicAwarding.ts"),
				N = a("./src/reddit/selectors/gild.ts"),
				I = a("./src/reddit/selectors/gold/giveAwards.ts"),
				P = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = a("./src/reddit/selectors/posts.ts"),
				S = a("./src/reddit/selectors/subreddit.ts"),
				M = a("./src/reddit/selectors/user.ts"),
				k = a("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				T = a("./src/reddit/components/TrackingHelper/index.tsx"),
				G = a("./node_modules/fbt/lib/FbtPublic.js"),
				L = a("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				B = a.n(L),
				R = a("./src/reddit/helpers/awards/message.ts"),
				F = a("./src/reddit/i18n/components.tsx"),
				q = a("./src/reddit/i18n/utils.ts"),
				D = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				H = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				V = a("./src/reddit/controls/RadioInput/index.tsx"),
				Q = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				K = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				z = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				J = a("./src/app/strings/index.ts"),
				W = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				X = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				Y = a("./src/reddit/components/TimeLeft/index.m.less"),
				U = a.n(Y),
				Z = a("./src/lib/timeAgo/index.ts"),
				$ = a("./src/reddit/icons/svgs/Clock/index.tsx");
			var ee = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), r = Object(Z.b)(n);
				return s.a.createElement("div", {
					className: Object(i.a)(t)
				}, s.a.createElement($.a, {
					className: U.a.clockIcon
				}), s.a.createElement("span", {
					className: U.a.timeLeft
				}, r))
			};
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			const te = e => {
				const {
					award: t,
					postOrComment: a,
					subredditName: n
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(X.a, null), e)))
				}
				if (t.awardType === u.d.Community) return t.subredditCoinReward && t.coinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the post and grants "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community and "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "user-coins"
				}, t.coinReward), " to the recipient. Exclusive to ", s.a.createElement(F.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the comment and grants "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(F.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : t.subredditCoinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the post and grants "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(F.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the comment and grants "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(F.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the post. Exclusive to ", s.a.createElement(F.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the comment. Exclusive to ", s.a.createElement(F.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), "."));
				if (t.awardType === u.d.Moderator) {
					const e = t.daysOfPremium ? Math.floor(t.daysOfPremium / 30) : 0;
					return "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the post and gives the recipient ", s.a.createElement(F.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(F.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
						name: "number-coins"
					}, "700 Coins"), " a month).")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Shows an Award on the comment and gives the recipient ", s.a.createElement(F.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(F.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
						name: "number-coins"
					}, "700 Coins"), " a month)."))
				}
				return "gid_1" === t.id ? "post" === a ? s.a.createElement(F.c, null, "Shows the Silver Award on the post... and that's it.") : s.a.createElement(F.c, null, "Shows the Silver Award on the comment... and that's it.") : "gid_2" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the comment.")) : "gid_3" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(F.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(X.a, null), s.a.createElement(F.c, null, s.a.createElement(F.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the comment.")) : null
			};
			class ae extends s.a.PureComponent {
				render() {
					const {
						award: e,
						className: t,
						language: a,
						postOrComment: n,
						subredditName: r
					} = this.props, d = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("div", {
						className: Object(i.a)(t, B.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: B.a.iconContainer
					}, s.a.createElement("img", {
						className: B.a.icon,
						src: d
					})), s.a.createElement("div", {
						className: B.a.awardName
					}, Object(J.a)(a, "gold.gildModal.awardNameAward", {
						awardName: e.name
					})), s.a.createElement("div", {
						className: B.a.coinPrice
					}, Object(W.a)(Object(J.a)(a, "gold.gildModal.spendCoin", {
						cost: e.coinPrice.toLocaleString()
					}), {
						":coin:": s.a.createElement(X.a, null)
					})), s.a.createElement("div", {
						className: B.a.benefits
					}, s.a.createElement(te, {
						award: e,
						postOrComment: n,
						subredditName: r
					})), e.endsAt && s.a.createElement(ee, {
						className: B.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var ne, se = ae;

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(ne || (ne = {}));
			class de extends s.a.PureComponent {
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
						} = this.props, r = e === ne.PRIVATE;
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
						const e = "post" === a ? Object(q.c)("Show my username on post") : Object(q.c)("Show my username on comment");
						return s.a.createElement(V.a, {
							name: Object(q.c)("Privacy setting"),
							onChange: this.handleRadioChange,
							value: t ? ne.PRIVATE : ne.PUBLIC
						}, s.a.createElement(Q.a, {
							className: Object(i.a)(B.a.radioOption, B.a.first),
							showButton: !0,
							value: ne.PUBLIC
						}, e), s.a.createElement(Q.a, {
							className: B.a.radioOption,
							showButton: !0,
							value: ne.PRIVATE
						}, s.a.createElement(F.c, null, "Give anonymously")))
					}
					return s.a.createElement(H.a, {
						className: B.a.giver,
						isSelected: t,
						text: Object(q.c)("Make my gift anonymous"),
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
						maxLength: Object(R.c)(t, e),
						placeholder: G.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = G.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = G.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || n.maxLength > 0,
						d = r && a.length > n.maxLength;
					return s.a.createElement("div", {
						className: Object(i.a)(B.a.textAreaWrapper, {
							[B.a.messageTooLong]: d
						})
					}, s.a.createElement(D.q, re({
						className: B.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? a : ""
					}, n)), r && s.a.createElement("div", {
						className: B.a.characterCountdown
					}, n.maxLength - a.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: B.a.publicIndicator
					}, s.a.createElement(K.a, {
						className: B.a.eyeIcon
					}), s.a.createElement(F.c, null, "Shows my username")) : null
				}
				render() {
					const {
						className: e,
						language: t,
						postOrComment: a,
						selectedAward: n,
						subredditName: r
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(e, B.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: B.a.spacer
					}), s.a.createElement(se, {
						award: n,
						language: t,
						postOrComment: a,
						subredditName: r
					}), n.awardType === u.d.Moderator ? s.a.createElement("span", {
						className: B.a.giver
					}, s.a.createElement(z.a, {
						className: B.a.modIcon
					}), s.a.createElement(F.c, null, "Given by a Moderator")) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var ie = de,
				ce = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/config.ts")),
				oe = a("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				le = a.n(oe),
				me = a("./src/reddit/components/SubredditIcon/index.tsx"),
				ue = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				he = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				pe = a.n(he),
				ge = e => {
					const {
						className: t,
						text: a
					} = e;
					return s.a.createElement("div", {
						className: Object(i.a)(t, pe.a.AnimatedPillBadge)
					}, a, s.a.createElement("div", {
						className: pe.a.sheen
					}))
				};
			class be extends s.a.Component {
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
					} = this.props, a = t ? le.a.selected : "", n = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("button", {
						className: Object(i.a)(le.a.selectableAward, a),
						onClick: this.onOptionClick
					}, s.a.createElement("div", {
						className: le.a.buttonContent,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: le.a.iconContainer
					}, s.a.createElement("img", {
						className: le.a.icon,
						src: n
					}), s.a.createElement("div", {
						className: le.a.badgeContainer
					}, e.awardSubType !== u.c.Premium && e.isNew && s.a.createElement(ge, {
						className: le.a.iconNewBadge,
						text: G.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.c.Premium && s.a.createElement("div", {
						className: le.a.iconPremiumBadgeContainer
					}, s.a.createElement(ue.a, {
						className: le.a.iconPremiumBadge
					})))), s.a.createElement("div", {
						className: le.a.title
					}, e.name), s.a.createElement("div", {
						className: le.a.metaText
					}, Object(W.a)(G.fbt._("Spend :coin:{cost}", [G.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": s.a.createElement(X.a, null)
					})), e.endsAt && s.a.createElement(ee, {
						className: le.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var we = be;
			const {
				fbt: Ee
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class Ce extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => s.a.createElement("div", {
						className: le.a.giveImageContainer
					}, s.a.createElement("img", {
						className: le.a.giveImage,
						src: "".concat(ce.a.assetPath, "/img/gold/award-give.png")
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
						className: le.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: le.a.awardSectionTitle
					}, Ee._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), s.a.createElement("div", {
						className: le.a.awardSection
					}, e.map(e => s.a.createElement(we, {
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
						className: le.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: le.a.awardSectionTitle
					}, s.a.createElement(ue.a, {
						className: Object(i.a)(le.a.premiumIcon, le.a.awardSectionIcon)
					}), Ee._("Premium Awards", null, {
						hk: "35bhoK"
					})), s.a.createElement("div", {
						className: le.a.awardSection
					}, e.map(e => s.a.createElement(we, {
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
						className: le.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: le.a.awardSectionTitle
					}, Ee._("Medals", null, {
						hk: "1RRXJc"
					})), s.a.createElement("div", {
						className: le.a.awardSection
					}, e.map(e => s.a.createElement(we, {
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
						subredditName: i,
						thingId: c
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: le.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: le.a.awardSectionTitle
					}, s.a.createElement(me.b, {
						className: le.a.awardSectionIcon,
						subredditOrProfile: d
					}), Ee._("r/{subredditName} Awards", [Ee._param("subredditName", i)], {
						hk: "2nKNHH"
					})), s.a.createElement("div", {
						className: le.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(we, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							sendEvent: r,
							thingId: c
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: a,
						selectedAward: n,
						sendEvent: r,
						subredditName: d,
						thingId: c
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: le.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: le.a.awardSectionTitle
					}, s.a.createElement(z.a, {
						className: Object(i.a)(le.a.modIcon, le.a.awardSectionIcon)
					}), Ee._("r/{subredditName} Moderator Awards", [Ee._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), s.a.createElement("div", {
						className: le.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(we, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							sendEvent: r,
							thingId: c
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
						className: Object(i.a)(a, le.a.awardSelectorPane)
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
					const c = !!(d[u.c.Community].length || d[u.c.Moderator].length || d[u.c.Appreciation].length || n && d[u.c.Premium].length) || d[u.c.Global].length > 3;
					return s.a.createElement("div", {
						className: Object(i.a)(a, le.a.awardSelectorPane)
					}, !c && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== u.c.Premium || n) ? this.rendererByAwardSubtype[e].call(this, d[e], c) : null))
				}
			}
			var ve = Ce,
				Ae = a("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				xe = a.n(Ae),
				fe = a("./src/reddit/components/CoinBalance/index.tsx"),
				Oe = a("./src/reddit/controls/Button/index.tsx"),
				je = a("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: Ne
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Ie = 10;
			class Pe extends s.a.PureComponent {
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
						className: xe.a.coinBalanceSection
					}, s.a.createElement(me.b, {
						className: xe.a.subredditIcon,
						subredditOrProfile: e
					}), Ne._("r/{subredditName} Coin balance:", [Ne._param("subredditName", a)], {
						hk: "2ktWRF"
					}), s.a.createElement("span", null, s.a.createElement(X.a, null), n))
				}
				renderButtonText() {
					const {
						canAfford: e,
						needPremium: t,
						selectedAward: a,
						thingId: n
					} = this.props, s = a.awardType === u.d.Moderator;
					return t ? Ne._("Get Premium", null, {
						hk: "3VB1S9"
					}) : e || s ? Object(o.a)(n) ? Ne._("Award post", null, {
						hk: "1Ydq4H"
					}) : Ne._("Award comment", null, {
						hk: "4CfMGF"
					}) : Ne._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						canAfford: e,
						className: t,
						errorMessage: a,
						needPremium: n,
						onCannotAfford: r,
						onGetPremium: d,
						onGild: c,
						pending: o,
						selectedAward: l,
						subredditCoins: m,
						userCoins: h
					} = this.props, p = l.awardType === u.d.Moderator, g = (p ? m : h) || 0;
					return s.a.createElement("div", {
						className: Object(i.a)(t, xe.a.gildFooter)
					}, s.a.createElement("div", {
						className: xe.a.footerContent
					}, p ? this.renderCommunityBalance() : s.a.createElement(fe.a, {
						className: xe.a.coinBalanceSection,
						coinBalance: g,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), s.a.createElement(Oe.f, {
						className: n ? xe.a.premiumButton : xe.a.gildButton,
						"data-redditstyle": !0,
						disabled: o || p && !e,
						onClick: n ? d : e ? c : r
					}, o ? s.a.createElement(je.a, {
						className: xe.a.loadingIcon,
						sizePx: Ie
					}) : this.renderButtonText())), a && s.a.createElement("div", {
						className: xe.a.errorText
					}, a))
				}
			}
			var ye = Pe,
				_e = a("./src/reddit/components/GildModalContent/index.m.less"),
				Se = a.n(_e);
			class Me extends s.a.PureComponent {
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
					return Object(W.a)(Object(J.a)(e, "gold.gildModal.spendCoinsToHighlightPostOrComment", {
						postOrComment: Object(J.a)(e, "gold.postOrComment.".concat(t))
					}), {
						":learnMoreLink:": s.a.createElement("a", {
							className: Se.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, s.a.createElement(F.c, null, "How do Awards work?"))
					})
				}
				render() {
					const {
						className: e,
						language: t,
						postOrComment: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(e, Se.a.gildHeader)
					}, s.a.createElement("div", {
						className: Se.a.headerText
					}, s.a.createElement("div", {
						className: Se.a.mainText
					}, s.a.createElement("span", null, Object(J.a)(t, "gold.gildModal.giveAwardToThisPostOrComment", {
						postOrComment: Object(J.a)(t, "gold.postOrComment.".concat(a))
					}))), s.a.createElement("div", {
						className: Se.a.subText
					}, this.renderEmojiSubText())), s.a.createElement("button", {
						className: Se.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, s.a.createElement(D.b, {
						className: Se.a.closeBtnIcon
					})))
				}
			}
			var ke = Me;
			const Te = Object(d.a)(Object(d.c)({
					awards: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(S.H)(e, {
								thingId: a
							});
							s = t && t.id
						}
						if (!s && Object(o.a)(a)) {
							const t = Object(_.M)(e, {
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
							const t = Object(S.H)(e, {
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
					errorMessage: N.a,
					isAnonymous: N.g,
					iFramed: N.h,
					isEmployee: M.D,
					language: M.O,
					message: N.b,
					pending: N.e,
					postOrComment: (e, t) => {
						let {
							thingId: a
						} = t;
						return Object(o.a)(a) ? Object(_.M)(e, {
							postId: a
						}) : Object(x.n)(e, {
							commentId: a
						})
					},
					publicAwardingEnabled: e => !!Object(j.a)(e),
					purchaseCatalogPending: P.e,
					showCoinPurchaseModal: y.c,
					showPremiumAwards: O.a,
					selectedAward: I.a,
					subreddit: S.H,
					subredditCoins: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t;
						const s = Object(S.H)(e, {
								thingId: a
							}),
							r = s ? s.id : n;
						return Object(S.z)(e, {
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
						coinPrice: i
					} = n, c = d === u.d.Moderator, o = ((c ? s : r) || 0) >= i || t && !c, l = a && a.media && "rpan" === a.media.type;
					return Object.assign({}, e, {
						canAfford: o,
						cost: i,
						isRpanPost: !!l
					})
				}),
				Ge = ["pan_media", "pan2", "pan3"];
			class Le extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showCoinPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showCoinPurchaseModal: a
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
					}, this.onCannotAfford = () => {
						const {
							cannotAffordGildRequested: e,
							cost: t,
							sendEvent: a,
							thingId: n,
							userCoins: s
						} = this.props;
						a(Object(m.clickNextButtonEvent)(n)), e(s, t, n), this.setState({
							showCoinPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: a
						} = this.props;
						t(Object(m.clickGetPremiumEvent)(a, e)), Object(c.d)("/premium", c.c.BLANK)
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
					Object(l.N)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardsRequested: e,
						isAnonymous: t,
						isRpanPost: a,
						postOrComment: n,
						purchaseCatalogPending: s,
						purchaseCatalogRequested: r,
						selectedAward: d,
						sendEvent: i,
						setIsAnonymous: c,
						subreddit: o,
						subredditAboutRequested: u,
						subredditId: h,
						subredditName: p,
						thingId: g
					} = this.props;
					i(Object(m.viewGildModalEvent)(d.id, t, g)), c(!a && Object(l.k)());
					const b = o ? o.id : h || (n && n.belongsTo ? n.belongsTo.id : void 0);
					if (b && e(b), o || p) {
						u(o ? o.name : p)
					}
					Object(k.b)(), s || r()
				}
				render() {
					const {
						author: e,
						awards: t,
						awardsPending: a,
						canAfford: n,
						className: r,
						closeGildModal: d,
						currentUser: c,
						errorMessage: l,
						iFramed: h,
						isAnonymous: p,
						isRpanPost: g,
						language: b,
						message: w,
						pending: E,
						postOrComment: C,
						publicAwardingEnabled: v,
						selectAward: A,
						selectedAward: x,
						sendEvent: f,
						showCoinPurchaseModal: O,
						showPremiumAwards: j,
						subreddit: N,
						subredditCoins: I,
						subredditName: P,
						thingId: y,
						userCoins: _
					} = this.props, {
						showCoinPurchaseModalInThisInstance: S
					} = this.state, M = C ? C.author : e, T = Object(o.a)(y) ? "post" : "comment", G = O && S;
					if (G && (G && !h)) return s.a.createElement(k.a, {
						isCompletePaypal: !1
					});
					const L = N ? N.name : P,
						B = Ge.includes(L) ? "pan" : L,
						R = !c || !c.isGold && x.awardSubType === u.c.Premium;
					return s.a.createElement("div", {
						className: Object(i.a)(r, Se.a.gildModalContent)
					}, s.a.createElement(ke, {
						authorName: M,
						language: b,
						postOrComment: T,
						onCancel: d,
						sendEvent: f,
						thingId: y
					}), s.a.createElement("div", {
						className: Se.a.modalMainContent
					}, s.a.createElement(ve, {
						awards: t,
						awardsPending: a,
						onSelect: e => {
							A(e), f(Object(m.clickSelectAwardEvent)(e, y))
						},
						selectedAward: x,
						sendEvent: f,
						showPremiumAwards: j,
						subreddit: N,
						subredditName: B,
						thingId: y
					}), s.a.createElement(ie, {
						forcePublic: g,
						isAnonymous: p,
						isLivestream: g,
						language: b,
						message: w,
						postOrComment: T,
						publicAwardingEnabled: v,
						selectedAward: x,
						sendEvent: f,
						thingId: y,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						subredditName: B
					})), s.a.createElement(ye, {
						canAfford: n,
						errorMessage: l || void 0,
						needPremium: R,
						onCannotAfford: this.onCannotAfford,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: E,
						selectedAward: x,
						sendEvent: f,
						subreddit: N,
						subredditName: B,
						subredditCoins: I,
						thingId: y,
						userCoins: _
					}), G && s.a.createElement(k.a, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(Te, (e, t) => {
				let {
					thingId: a
				} = t;
				return {
					awardsRequested: t => e(Object(h.h)(t)),
					cannotAffordGildRequested: (t, a, n) => {
						e(Object(C.g)(t, a, n))
					},
					closeGildModal: () => e(Object(E.a)()),
					gildRequested: (t, n) => e(Object(p.gildGqlRequested)(a, {
						isOldReddit: t,
						isLivestream: n
					})),
					purchaseCatalogRequested: () => e(Object(v.b)()),
					selectAward: t => e(w(t)),
					setIsAnonymous: t => {
						e(Object(p.setIsAnonymous)(t)), Object(l.N)(t)
					},
					subredditAboutRequested: t => e(Object(A.t)(t)),
					updateMessage: t => e(Object(p.updateMessage)(t))
				}
			})(Object(T.b)(Le))
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
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e, t) {
				const a = e.split(":");
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
					experimentName: n.gb
				});
				return Object(n.Nb)(t) ? void 0 : t
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
//# sourceMappingURL=FramedGild~GildModal.81e9731cb325d2de29b6.js.map