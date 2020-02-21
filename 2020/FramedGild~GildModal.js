// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.9416efe170d4aa4d56b8.js
// Retrieved at 2/20/2020, 8:50:20 PM by Reddit Dataminer v1.0.0
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
				p = a("./src/reddit/selectors/posts.ts"),
				h = a("./src/reddit/selectors/subreddit.ts"),
				b = a("./src/reddit/selectors/user.ts"),
				g = a("./src/graphql/operations/GildComment.json"),
				w = a("./src/graphql/operations/GildPost.json"),
				E = a("./src/lib/makeGqlRequest/index.ts"),
				C = a("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const v = (e, t, a) => Object(E.a)(e, Object.assign({}, w, {
					variables: t
				}), {
					query: a ? {} : Object(C.b)()
				}),
				A = (e, t, a) => Object(E.a)(e, Object.assign({}, g, {
					variables: t
				}), {
					query: a ? {} : Object(C.b)()
				});
			var x = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				f = a("./src/reddit/helpers/awards/message.ts"),
				O = a("./src/reddit/helpers/correlationIdTracker.ts"),
				I = a("./src/reddit/helpers/isPost.ts"),
				j = a("./src/reddit/helpers/trackers/gild.ts"),
				N = a("./src/reddit/i18n/utils.ts"),
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
				return B
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
					a(B());
					try {
						const t = {
								gildingTypeId: d.selectedAward.id,
								isAnonymous: d.isAnonymous,
								isGildFunded: !1,
								message: Object(f.d)(d.message, d.selectedAward, c),
								nodeId: e
							},
							n = Object(I.a)(e) ? v : A,
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
				}, T = Object(r.a)(y.r), L = Object(r.a)(y.n), B = () => async (e, t) => {
					e(L()), window.setTimeout(() => {
						t().gild.api.pending && e(T())
					}, 2e3)
				}, G = Object(r.a)(y.m), R = e => async (t, a) => {
					await t(G(e));
					const n = a().gild.api.error;
					if (n) {
						const a = ((e, t) => {
							const a = e.error && e.error.type,
								n = e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg;
							return a === s.i ? Object(N.c)("There was an authentication error") : n ? Object(N.c)(n) : Object(N.c)(t)
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
					} = t, n = Object(I.a)(a) ? Object(p.I)(e, {
						postId: a
					}) : Object(l.n)(e, {
						commentId: a
					}), s = Object(b.i)(e), r = e.gild, {
						isAnonymous: d
					} = r, i = !d && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = n ? n.author : void 0, o = Object(h.H)(e, {
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
						p = Object(m.a)(s, r);
					if (Object(u.h)(s)) {
						const e = "success.gild",
							t = {},
							a = p.icon32 ? p.icon32.url : p.icon.url;
						t.awardId = r, t.awardIcon = a, Object(d.a)({
							type: e,
							data: t
						})
					}
					if (p.awardType === c.c.Moderator && void 0 === e.subredditCoins) {
						const t = Object(h.H)(s, {
								thingId: l
							}),
							a = t && Object(h.A)(s, {
								subredditName: t.name
							});
						a && (e.subredditCoins = a - p.coinPrice)
					}
					t(q(s, e)), (s.posts.instances[l] || []).forEach(a => {
						t(q(s, Object.assign({}, e, {
							id: a
						})))
					});
					const b = Object(I.a)(l) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", p.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", p.name)], {
							hk: "2sIK9Y"
						}),
						g = p.coinPrice;
					Object(P.a)(Object(j.viewSuccessAwardEvent)(l, g, p)(s)), t(Object(i.e)({
						kind: o.b.SuccessCommunity,
						text: b
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
			var n = a("./src/app/strings/index.ts"),
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
			}, Object(i.a)(Object(n.a)(e.language, "gold.coinBalance.coinBalance", {
				coinBalance: e.coinBalance.toLocaleString()
			}), {
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
				p = a("./src/reddit/actions/gold/communityAwards.ts"),
				h = a("./src/reddit/actions/gold/gild.ts"),
				b = a("./src/lib/makeActionCreator/index.ts"),
				g = a("./src/reddit/actions/gold/constants.ts");
			const w = Object(b.a)(g.K);
			var E = a("./src/reddit/actions/gold/modals.ts"),
				C = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = a("./src/reddit/actions/subreddit.ts"),
				A = a("./src/reddit/selectors/comments.ts"),
				x = a("./src/reddit/selectors/communityAwards.ts"),
				f = a("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				O = a("./src/reddit/selectors/experiments/publicAwarding.ts"),
				I = a("./src/reddit/selectors/gild.ts"),
				j = a("./src/reddit/selectors/gold/giveAwards.ts"),
				N = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = a("./src/reddit/selectors/posts.ts"),
				y = a("./src/reddit/selectors/subreddit.ts"),
				_ = a("./src/reddit/selectors/user.ts"),
				S = a("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				M = a("./src/reddit/components/TrackingHelper/index.tsx"),
				k = a("./node_modules/fbt/lib/FbtPublic.js"),
				T = a("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				L = a.n(T),
				B = a("./src/reddit/helpers/awards/message.ts"),
				G = a("./src/reddit/i18n/components.tsx"),
				R = a("./src/reddit/i18n/utils.ts"),
				F = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				q = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				D = a("./src/reddit/controls/RadioInput/index.tsx"),
				H = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				V = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				K = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = a("./src/app/strings/index.ts"),
				W = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				z = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				J = a("./src/reddit/components/TimeLeft/index.m.less"),
				X = a.n(J),
				Y = a("./src/lib/timeAgo/index.ts"),
				U = a("./src/reddit/icons/svgs/Clock/index.tsx");
			var Z = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), r = Object(Y.b)(n);
				return s.a.createElement("div", {
					className: Object(i.a)(t)
				}, s.a.createElement(U.a, {
					className: X.a.clockIcon
				}), s.a.createElement("span", {
					className: X.a.timeLeft
				}, r))
			};
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			const $ = e => {
				const {
					award: t,
					postOrComment: a,
					subredditName: n
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(z.a, null), e)))
				}
				if (t.awardType === u.c.Community) return t.subredditCoinReward && t.coinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the post and grants "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community and "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "user-coins"
				}, t.coinReward), " to the recipient. Exclusive to ", s.a.createElement(G.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the comment and grants "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(G.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : t.subredditCoinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the post and grants "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(G.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the comment and grants "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(G.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the post. Exclusive to ", s.a.createElement(G.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the comment. Exclusive to ", s.a.createElement(G.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), "."));
				if (t.awardType === u.c.Moderator) {
					const e = t.daysOfPremium ? Math.floor(t.daysOfPremium / 30) : 0;
					return "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the post and gives the recipient ", s.a.createElement(G.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(G.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
						name: "number-coins"
					}, "700 Coins"), " a month).")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Shows an Award on the comment and gives the recipient ", s.a.createElement(G.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(G.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
						name: "number-coins"
					}, "700 Coins"), " a month)."))
				}
				return "gid_1" === t.id ? "post" === a ? s.a.createElement(G.c, null, "Shows the Silver Award on the post... and that's it.") : s.a.createElement(G.c, null, "Shows the Silver Award on the comment... and that's it.") : "gid_2" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the comment.")) : "gid_3" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(G.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(z.a, null), s.a.createElement(G.c, null, s.a.createElement(G.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the comment.")) : null
			};
			class ee extends s.a.PureComponent {
				render() {
					const {
						award: e,
						className: t,
						language: a,
						postOrComment: n,
						subredditName: r
					} = this.props, d = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("div", {
						className: Object(i.a)(t, L.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: L.a.iconContainer
					}, s.a.createElement("img", {
						className: L.a.icon,
						src: d
					})), s.a.createElement("div", {
						className: L.a.awardName
					}, Object(Q.a)(a, "gold.gildModal.awardNameAward", {
						awardName: e.name
					})), s.a.createElement("div", {
						className: L.a.coinPrice
					}, Object(W.a)(Object(Q.a)(a, "gold.gildModal.spendCoin", {
						cost: e.coinPrice.toLocaleString()
					}), {
						":coin:": s.a.createElement(z.a, null)
					})), s.a.createElement("div", {
						className: L.a.benefits
					}, s.a.createElement($, {
						award: e,
						postOrComment: n,
						subredditName: r
					})), e.endsAt && s.a.createElement(Z, {
						className: L.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var te, ae = ee;

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(te || (te = {}));
			class se extends s.a.PureComponent {
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
						} = this.props, r = e === te.PRIVATE;
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
						const e = "post" === a ? Object(R.c)("Show my username on post") : Object(R.c)("Show my username on comment");
						return s.a.createElement(D.a, {
							name: Object(R.c)("Privacy setting"),
							onChange: this.handleRadioChange,
							value: t ? te.PRIVATE : te.PUBLIC
						}, s.a.createElement(H.a, {
							className: Object(i.a)(L.a.radioOption, L.a.first),
							showButton: !0,
							value: te.PUBLIC
						}, e), s.a.createElement(H.a, {
							className: L.a.radioOption,
							showButton: !0,
							value: te.PRIVATE
						}, s.a.createElement(G.c, null, "Give anonymously")))
					}
					return s.a.createElement(q.a, {
						className: L.a.giver,
						isSelected: t,
						text: Object(R.c)("Make my gift anonymous"),
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
						maxLength: Object(B.c)(t, e),
						placeholder: k.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = k.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = k.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || n.maxLength > 0,
						d = r && a.length > n.maxLength;
					return s.a.createElement("div", {
						className: Object(i.a)(L.a.textAreaWrapper, {
							[L.a.messageTooLong]: d
						})
					}, s.a.createElement(F.q, ne({
						className: L.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? a : ""
					}, n)), r && s.a.createElement("div", {
						className: L.a.characterCountdown
					}, n.maxLength - a.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: L.a.publicIndicator
					}, s.a.createElement(V.a, {
						className: L.a.eyeIcon
					}), s.a.createElement(G.c, null, "Shows my username")) : null
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
						className: Object(i.a)(e, L.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: L.a.spacer
					}), s.a.createElement(ae, {
						award: n,
						language: t,
						postOrComment: a,
						subredditName: r
					}), n.awardType === u.c.Moderator ? s.a.createElement("span", {
						className: L.a.giver
					}, s.a.createElement(K.a, {
						className: L.a.modIcon
					}), s.a.createElement(G.c, null, "Given by a Moderator")) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var re = se,
				de = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/config.ts")),
				ie = a("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				ce = a.n(ie),
				oe = a("./src/reddit/components/SubredditIcon/index.tsx"),
				le = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				me = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				ue = a.n(me),
				pe = e => {
					const {
						className: t,
						text: a
					} = e;
					return s.a.createElement("div", {
						className: Object(i.a)(t, ue.a.AnimatedPillBadge)
					}, a, s.a.createElement("div", {
						className: ue.a.sheen
					}))
				};
			class he extends s.a.Component {
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
					} = this.props, a = t ? ce.a.selected : "", n = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("button", {
						className: Object(i.a)(ce.a.selectableAward, a),
						onClick: this.onOptionClick
					}, s.a.createElement("div", {
						className: ce.a.buttonContent,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: ce.a.iconContainer
					}, s.a.createElement("img", {
						className: ce.a.icon,
						src: n
					}), s.a.createElement("div", {
						className: ce.a.badgeContainer
					}, e.awardSubType !== u.b.Premium && e.isNew && s.a.createElement(pe, {
						className: ce.a.iconNewBadge,
						text: k.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.b.Premium && s.a.createElement("div", {
						className: ce.a.iconPremiumBadgeContainer
					}, s.a.createElement(le.a, {
						className: ce.a.iconPremiumBadge
					})))), s.a.createElement("div", {
						className: ce.a.title
					}, e.name), s.a.createElement("div", {
						className: ce.a.metaText
					}, Object(W.a)(k.fbt._("Spend :coin:{cost}", [k.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": s.a.createElement(z.a, null)
					})), e.endsAt && s.a.createElement(Z, {
						className: ce.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var be = he;
			const {
				fbt: ge
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class we extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => s.a.createElement("div", {
						className: ce.a.giveImageContainer
					}, s.a.createElement("img", {
						className: ce.a.giveImage,
						src: "".concat(de.a.assetPath, "/img/gold/award-give.png")
					})), this.rendererByAwardSubtype = {
						[u.b.Global]: this.renderGlobalAwards,
						[u.b.Moderator]: this.renderModAwards,
						[u.b.Community]: this.renderCommunityAwards,
						[u.b.Appreciation]: this.renderAppreciationAwards,
						[u.b.Premium]: this.renderPremiumAwards
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
						className: ce.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: ce.a.awardSectionTitle
					}, ge._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), s.a.createElement("div", {
						className: ce.a.awardSection
					}, e.map(e => s.a.createElement(be, {
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
						className: ce.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: ce.a.awardSectionTitle
					}, s.a.createElement(le.a, {
						className: Object(i.a)(ce.a.premiumIcon, ce.a.awardSectionIcon)
					}), ge._("Premium Awards", null, {
						hk: "35bhoK"
					})), s.a.createElement("div", {
						className: ce.a.awardSection
					}, e.map(e => s.a.createElement(be, {
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
						className: ce.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: ce.a.awardSectionTitle
					}, ge._("Medals", null, {
						hk: "1RRXJc"
					})), s.a.createElement("div", {
						className: ce.a.awardSection
					}, e.map(e => s.a.createElement(be, {
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
						className: ce.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: ce.a.awardSectionTitle
					}, s.a.createElement(oe.b, {
						className: ce.a.awardSectionIcon,
						subredditOrProfile: d
					}), ge._("r/{subredditName} Awards", [ge._param("subredditName", i)], {
						hk: "2nKNHH"
					})), s.a.createElement("div", {
						className: ce.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(be, {
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
						className: ce.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: ce.a.awardSectionTitle
					}, s.a.createElement(K.a, {
						className: Object(i.a)(ce.a.modIcon, ce.a.awardSectionIcon)
					}), ge._("r/{subredditName} Moderator Awards", [ge._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), s.a.createElement("div", {
						className: ce.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return s.a.createElement(be, {
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
						className: Object(i.a)(a, ce.a.awardSelectorPane)
					});
					const r = new Set,
						d = {
							[u.b.Global]: [],
							[u.b.Moderator]: [],
							[u.b.Community]: [],
							[u.b.Appreciation]: [],
							[u.b.Premium]: []
						};
					e.forEach(e => {
						r.add(e.awardSubType), d[e.awardSubType] || (d[e.awardSubType] = []), d[e.awardSubType].push(e)
					});
					const c = !!(d[u.b.Community].length || d[u.b.Moderator].length || d[u.b.Appreciation].length || n && d[u.b.Premium].length) || d[u.b.Global].length > 3;
					return s.a.createElement("div", {
						className: Object(i.a)(a, ce.a.awardSelectorPane)
					}, !c && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== u.b.Premium || n) ? this.rendererByAwardSubtype[e].call(this, d[e], c) : null))
				}
			}
			var Ee = we,
				Ce = a("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				ve = a.n(Ce),
				Ae = a("./src/reddit/components/CoinBalance/index.tsx"),
				xe = a("./src/reddit/controls/Button/index.tsx"),
				fe = a("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: Oe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Ie = 10;
			class je extends s.a.PureComponent {
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
						className: ve.a.coinBalanceSection
					}, s.a.createElement(oe.b, {
						className: ve.a.subredditIcon,
						subredditOrProfile: e
					}), Oe._("r/{subredditName} Coin balance:", [Oe._param("subredditName", a)], {
						hk: "2ktWRF"
					}), s.a.createElement("span", null, s.a.createElement(z.a, null), n))
				}
				renderButtonText() {
					const {
						canAfford: e,
						needPremium: t,
						selectedAward: a,
						thingId: n
					} = this.props, s = a.awardType === u.c.Moderator;
					return t ? Oe._("Get Premium", null, {
						hk: "3VB1S9"
					}) : e || s ? Object(o.a)(n) ? Oe._("Award post", null, {
						hk: "1Ydq4H"
					}) : Oe._("Award comment", null, {
						hk: "4CfMGF"
					}) : Oe._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						canAfford: e,
						className: t,
						errorMessage: a,
						language: n,
						needPremium: r,
						onCannotAfford: d,
						onGetPremium: c,
						onGild: o,
						pending: l,
						selectedAward: m,
						subredditCoins: p,
						userCoins: h
					} = this.props, b = m.awardType === u.c.Moderator, g = (b ? p : h) || 0;
					return s.a.createElement("div", {
						className: Object(i.a)(t, ve.a.gildFooter)
					}, s.a.createElement("div", {
						className: ve.a.footerContent
					}, b ? this.renderCommunityBalance() : s.a.createElement(Ae.a, {
						className: ve.a.coinBalanceSection,
						coinBalance: g,
						language: n,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), s.a.createElement(xe.f, {
						className: r ? ve.a.premiumButton : ve.a.gildButton,
						"data-redditstyle": !0,
						disabled: l || b && !e,
						onClick: r ? c : e ? o : d
					}, l ? s.a.createElement(fe.a, {
						className: ve.a.loadingIcon,
						sizePx: Ie
					}) : this.renderButtonText())), a && s.a.createElement("div", {
						className: ve.a.errorText
					}, a))
				}
			}
			var Ne = je,
				Pe = a("./src/reddit/components/GildModalContent/index.m.less"),
				ye = a.n(Pe);
			class _e extends s.a.PureComponent {
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
					return Object(W.a)(Object(Q.a)(e, "gold.gildModal.spendCoinsToHighlightPostOrComment", {
						postOrComment: Object(Q.a)(e, "gold.postOrComment.".concat(t))
					}), {
						":learnMoreLink:": s.a.createElement("a", {
							className: ye.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, s.a.createElement(G.c, null, "How do Awards work?"))
					})
				}
				render() {
					const {
						className: e,
						language: t,
						postOrComment: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(e, ye.a.gildHeader)
					}, s.a.createElement("div", {
						className: ye.a.headerText
					}, s.a.createElement("div", {
						className: ye.a.mainText
					}, s.a.createElement("span", null, Object(Q.a)(t, "gold.gildModal.giveAwardToThisPostOrComment", {
						postOrComment: Object(Q.a)(t, "gold.postOrComment.".concat(a))
					}))), s.a.createElement("div", {
						className: ye.a.subText
					}, this.renderEmojiSubText())), s.a.createElement("button", {
						className: ye.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, s.a.createElement(F.b, {
						className: ye.a.closeBtnIcon
					})))
				}
			}
			var Se = _e;
			const Me = Object(d.a)(Object(d.c)({
					awards: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(y.H)(e, {
								thingId: a
							});
							s = t && t.id
						}
						if (!s && Object(o.a)(a)) {
							const t = Object(P.I)(e, {
								postId: a
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(x.g)(e, {
							subredditId: s
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(y.H)(e, {
								thingId: a
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(x.f)(e, {
							subredditId: s
						})
					},
					currentUser: _.i,
					errorMessage: I.a,
					isAnonymous: I.g,
					iFramed: I.h,
					isEmployee: _.D,
					language: _.P,
					message: I.b,
					pending: I.e,
					postOrComment: (e, t) => {
						let {
							thingId: a
						} = t;
						return Object(o.a)(a) ? Object(P.I)(e, {
							postId: a
						}) : Object(A.n)(e, {
							commentId: a
						})
					},
					publicAwardingEnabled: e => !!Object(O.a)(e),
					showCoinPurchaseModal: N.d,
					showPremiumAwards: f.a,
					selectedAward: j.a,
					subreddit: y.H,
					subredditCoins: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t;
						const s = Object(y.H)(e, {
								thingId: a
							}),
							r = s ? s.id : n;
						return Object(y.z)(e, {
							subredditId: r
						})
					},
					userCoins: _.d
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
					} = n, c = d === u.c.Moderator, o = ((c ? s : r) || 0) >= i || t && !c, l = a && a.media && "rpan" === a.media.type;
					return Object.assign({}, e, {
						canAfford: o,
						cost: i,
						isRpanPost: !!l
					})
				}),
				ke = ["pan_media", "pan2", "pan3"];
			class Te extends s.a.Component {
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
							iFramed: a,
							sendEvent: n,
							thingId: s,
							userCoins: r
						} = this.props;
						n(Object(m.clickNextButtonEvent)(s)), e(r, t, s, a), this.setState({
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
						canAfford: t,
						isAnonymous: a,
						isRpanPost: n,
						postOrComment: s,
						selectedAward: r,
						sendEvent: d,
						setIsAnonymous: i,
						subreddit: c,
						subredditAboutRequested: o,
						subredditId: u,
						subredditName: p,
						thingId: h
					} = this.props;
					d(Object(m.viewGildModalEvent)(r.id, a, h)), i(!n && Object(l.k)());
					const b = c ? c.id : u || (s && s.belongsTo ? s.belongsTo.id : void 0);
					if (b && e(b), c || p) {
						o(c ? c.name : p)
					}
					t || Object(S.b)()
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
						iFramed: p,
						isAnonymous: h,
						isRpanPost: b,
						language: g,
						message: w,
						pending: E,
						postOrComment: C,
						publicAwardingEnabled: v,
						selectAward: A,
						selectedAward: x,
						sendEvent: f,
						showCoinPurchaseModal: O,
						showPremiumAwards: I,
						subreddit: j,
						subredditCoins: N,
						subredditName: P,
						thingId: y,
						userCoins: _
					} = this.props, {
						showCoinPurchaseModalInThisInstance: M
					} = this.state, k = C ? C.author : e, T = Object(o.a)(y) ? "post" : "comment", L = O && M;
					if (L && (L && !p)) return s.a.createElement(S.a, {
						isCompletePaypal: !1
					});
					const B = j ? j.name : P,
						G = ke.includes(B) ? "pan" : B,
						R = !c || !c.isGold && x.awardSubType === u.b.Premium;
					return s.a.createElement("div", {
						className: Object(i.a)(r, ye.a.gildModalContent)
					}, s.a.createElement(Se, {
						authorName: k,
						language: g,
						postOrComment: T,
						onCancel: d,
						sendEvent: f,
						thingId: y
					}), s.a.createElement("div", {
						className: ye.a.modalMainContent
					}, s.a.createElement(Ee, {
						awards: t,
						awardsPending: a,
						onSelect: e => {
							A(e), f(Object(m.clickSelectAwardEvent)(e, y))
						},
						selectedAward: x,
						sendEvent: f,
						showPremiumAwards: I,
						subreddit: j,
						subredditName: G,
						thingId: y
					}), s.a.createElement(re, {
						forcePublic: b,
						isAnonymous: h,
						isLivestream: b,
						language: g,
						message: w,
						postOrComment: T,
						publicAwardingEnabled: v,
						selectedAward: x,
						sendEvent: f,
						thingId: y,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						subredditName: G
					})), s.a.createElement(Ne, {
						canAfford: n,
						errorMessage: l || void 0,
						language: g,
						needPremium: R,
						onCannotAfford: this.onCannotAfford,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: E,
						selectedAward: x,
						sendEvent: f,
						subreddit: j,
						subredditName: G,
						subredditCoins: N,
						thingId: y,
						userCoins: _
					}), L && s.a.createElement(S.a, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(Me, (e, t) => {
				let {
					thingId: a
				} = t;
				return {
					awardsRequested: t => e(Object(p.h)(t)),
					cannotAffordGildRequested: (t, a, n, s) => {
						e(Object(C.h)(t, a, n, s))
					},
					closeGildModal: () => e(Object(E.a)()),
					gildRequested: (t, n) => e(Object(h.gildGqlRequested)(a, {
						isOldReddit: t,
						isLivestream: n
					})),
					selectAward: t => e(w(t)),
					setIsAnonymous: t => {
						e(Object(h.setIsAnonymous)(t)), Object(l.N)(t)
					},
					subredditAboutRequested: t => e(Object(v.t)(t)),
					updateMessage: t => e(Object(h.updateMessage)(t))
				}
			})(Object(M.b)(Te))
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, a) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = a.n(d);
			t.a = e => {
				let {
					center: t,
					className: a,
					sizePx: n
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(i.a.loadingIcon, a, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
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
					experimentName: n.eb
				});
				return Object(n.Lb)(t) ? void 0 : t
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
//# sourceMappingURL=FramedGild~GildModal.9416efe170d4aa4d56b8.js.map