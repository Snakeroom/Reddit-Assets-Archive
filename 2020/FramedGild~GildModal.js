// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.79fc76a55c12d50671cd.js
// Retrieved at 1/28/2020, 6:10:13 PM by Reddit Dataminer v1.0.0
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
			var n = a("./src/lib/constants/index.ts"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/lib/messageIframeParent/index.ts"),
				c = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/reddit/models/Gold/Award.ts"),
				i = a("./src/reddit/models/Toast/index.ts"),
				o = a("./src/reddit/selectors/comments.ts"),
				l = a("./src/reddit/selectors/communityAwards.ts"),
				m = a("./src/reddit/selectors/gild.ts"),
				u = a("./src/reddit/selectors/posts.ts"),
				g = a("./src/reddit/selectors/subreddit.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				h = a("./src/graphql/operations/GildComment.json"),
				b = a("./src/graphql/operations/GildPost.json"),
				E = a("./src/lib/makeGqlRequest/index.ts"),
				w = a("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const C = (e, t, a) => Object(E.a)(e, Object.assign({}, b, {
					variables: t
				}), {
					query: a ? {} : Object(w.b)()
				}),
				A = (e, t, a) => Object(E.a)(e, Object.assign({}, h, {
					variables: t
				}), {
					query: a ? {} : Object(w.b)()
				});
			var v = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				x = a("./src/reddit/helpers/correlationIdTracker.ts"),
				O = a("./src/reddit/helpers/isPost.ts"),
				I = a("./src/reddit/helpers/trackers/gild.ts"),
				j = a("./src/reddit/i18n/utils.ts"),
				f = a("./src/telemetry/index.ts"),
				N = a("./src/reddit/actions/gold/constants.ts");
			a.d(t, "setIsAnonymous", (function() {
				return y
			})), a.d(t, "setIncludeMessage", (function() {
				return P
			})), a.d(t, "updateMessage", (function() {
				return S
			})), a.d(t, "gildGqlRequested", (function() {
				return M
			})), a.d(t, "triggerLoader", (function() {
				return _
			})), a.d(t, "gildPending", (function() {
				return T
			})), a.d(t, "gildFailed", (function() {
				return L
			})), a.d(t, "gildSuccessful", (function() {
				return F
			}));
			const y = Object(s.a)(N.p),
				P = Object(s.a)(N.o),
				S = Object(s.a)(N.s),
				M = (e, t) => async (a, n, s) => {
					let {
						gqlContext: r
					} = s;
					const c = n().gild;
					a(T());
					try {
						const n = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: c.message,
								nodeId: e
							},
							s = Object(O.a)(e) ? C : A,
							d = await s(r(), {
								input: n
							}, t);
						if (d.ok) {
							const t = d.body,
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
						} else await a(L(d))
					} catch (d) {
						await a(L(d))
					} finally {
						Object(x.b)(x.a.GildingFlow)
					}
				}, _ = Object(s.a)(N.r), k = Object(s.a)(N.n), T = () => async (e, t) => {
					e(k()), window.setTimeout(() => {
						t().gild.api.pending && e(_())
					}, 2e3)
				}, B = Object(s.a)(N.m), L = e => async (t, a) => {
					await t(B(e));
					const s = a().gild.api.error;
					if (s) {
						const a = ((e, t) => {
							const a = e.error && e.error.type,
								s = e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg;
							return a === n.i ? Object(j.c)("There was an authentication error") : s ? Object(j.c)(s) : Object(j.c)(t)
						})(e, s);
						t(Object(c.e)({
							kind: i.b.Error,
							duration: c.a,
							text: a
						}))
					}
				}, G = Object(s.a)(N.q), R = (e, t) => {
					const {
						id: a
					} = t, n = Object(O.a)(a) ? Object(u.I)(e, {
						postId: a
					}) : Object(o.n)(e, {
						commentId: a
					}), s = Object(p.i)(e), r = e.gild, {
						isAnonymous: c
					} = r, d = !c && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, i = n ? n.author : void 0, l = Object(g.K)(e, {
						thingId: a
					});
					return G(Object.assign({}, t, {
						gilder: d,
						gildee: i,
						subredditId: l && l.id
					}))
				}, F = e => async (t, a) => {
					const n = a(),
						{
							awardId: s,
							id: o
						} = e,
						u = Object(l.a)(n, s);
					if (Object(m.h)(n)) {
						const e = "success.gild",
							t = {},
							a = u.icon32 ? u.icon32.url : u.icon.url;
						t.awardId = s, t.awardIcon = a, Object(r.a)({
							type: e,
							data: t
						})
					}
					if (u.awardType === d.c.Moderator && void 0 === e.subredditCoins) {
						const t = Object(g.K)(n, {
								thingId: o
							}),
							a = t && Object(g.D)(n, {
								subredditName: t.name
							});
						a && (e.subredditCoins = a - u.coinPrice)
					}
					t(R(n, e)), (n.posts.instances[o] || []).forEach(a => {
						t(R(n, Object.assign({}, e, {
							id: a
						})))
					});
					const p = Object(O.a)(o) ? Object(j.c)("Success! You have given this post the ".concat(Object(j.b)("awardName", u.name), " Award")) : Object(j.c)("Success! You have given this comment the ".concat(Object(j.b)("awardName", u.name), " Award")),
						h = u.coinPrice;
					Object(f.a)(Object(I.viewSuccessAwardEvent)(o, h, u)(n)), t(Object(c.e)({
						kind: i.b.SuccessCommunity,
						text: p
					})), setTimeout(() => {
						const e = Object(v.a)(s, o),
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
				c = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = a("./src/reddit/i18n/components.tsx"),
				o = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = a("./src/reddit/components/CoinBalance/index.m.less"),
				m = a.n(l);
			t.a = e => r.a.createElement("div", {
				className: Object(c.a)(m.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(d.a)(Object(n.a)(e.language, "gold.coinBalance.coinBalance", {
				coinBalance: e.coinBalance.toLocaleString()
			}), {
				":coin:": r.a.createElement(o.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.a.createElement(i.c, null, "What are Coins?")))
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
				textArea: "_2kwFqYX6mikunS0um4uLJ8",
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
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/isPost.ts"),
				o = a("./src/reddit/helpers/localStorage/index.ts"),
				l = a("./src/reddit/helpers/trackers/gild.ts"),
				m = a("./src/reddit/models/Gold/Award.ts"),
				u = a("./src/reddit/actions/gold/communityAwards.ts"),
				g = a("./src/reddit/actions/gold/gild.ts"),
				p = a("./src/lib/makeActionCreator/index.ts"),
				h = a("./src/reddit/actions/gold/constants.ts");
			const b = Object(p.a)(h.J);
			var E = a("./src/reddit/actions/gold/modals.ts"),
				w = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				C = a("./src/reddit/actions/subreddit.ts"),
				A = a("./src/reddit/selectors/comments.ts"),
				v = a("./src/reddit/selectors/communityAwards.ts"),
				x = a("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				O = a("./src/reddit/selectors/experiments/publicAwarding.ts"),
				I = a("./src/reddit/selectors/gild.ts"),
				j = a("./src/reddit/selectors/gold/giveAwards.ts"),
				f = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				N = a("./src/reddit/selectors/posts.ts"),
				y = a("./src/reddit/selectors/subreddit.ts"),
				P = a("./src/reddit/selectors/user.ts"),
				S = a("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				M = a("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = a("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				k = a.n(_),
				T = a("./src/reddit/i18n/components.tsx"),
				B = a("./src/reddit/i18n/utils.ts"),
				L = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				G = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				R = a("./src/reddit/controls/RadioInput/index.tsx"),
				F = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				q = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				D = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				V = a("./src/app/strings/index.ts"),
				K = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				H = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				Q = a("./src/reddit/components/TimeLeft/index.m.less"),
				X = a.n(Q),
				J = a("./src/lib/timeAgo/index.ts"),
				W = a("./src/reddit/icons/svgs/Clock/index.tsx");
			var z = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), r = Object(J.b)(n);
				return s.a.createElement("div", {
					className: Object(d.a)(t)
				}, s.a.createElement(W.a, {
					className: X.a.clockIcon
				}), s.a.createElement("span", {
					className: X.a.timeLeft
				}, r))
			};
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			const Y = e => {
				const {
					award: t,
					postOrComment: a,
					subredditName: n
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(H.a, null), e)))
				}
				if (t.awardType === m.c.Community) return t.subredditCoinReward && t.coinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the post and grants "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community and "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "user-coins"
				}, t.coinReward), " to the recipient. Exclusive to ", s.a.createElement(T.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the comment and grants "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "subreddit-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(T.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : t.subredditCoinReward ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the post and grants "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(T.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the comment and grants "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "number-coins"
				}, t.subredditCoinReward), " to the community. Exclusive to ", s.a.createElement(T.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the post. Exclusive to ", s.a.createElement(T.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), ".")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the comment. Exclusive to ", s.a.createElement(T.b, {
					name: "subreddit-name"
				}, "r/".concat(n)), "."));
				if (t.awardType === m.c.Moderator) {
					const e = t.daysOfPremium ? Math.floor(t.daysOfPremium / 30) : 0;
					return "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the post and gives the recipient ", s.a.createElement(T.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(T.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
						name: "number-coins"
					}, "700 Coins"), " a month).")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Shows an Award on the comment and gives the recipient ", s.a.createElement(T.b, {
						name: "months-of-premium"
					}, e), " ", s.a.createElement(T.a, {
						name: "months-of-premium",
						singular: "month",
						plural: "months",
						count: e
					}), " of Premium (which includes "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
						name: "number-coins"
					}, "700 Coins"), " a month)."))
				}
				return "gid_1" === t.id ? "post" === a ? s.a.createElement(T.c, null, "Shows the Silver Award on the post... and that's it.") : s.a.createElement(T.c, null, "Shows the Silver Award on the comment... and that's it.") : "gid_2" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Gives the author a week of Reddit Premium, "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "number-coins"
				}, "100 Coins"), " to do with as they please, and shows a Gold Award on the comment.")) : "gid_3" === t.id ? "post" === a ? s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the post.")) : s.a.createElement(s.a.Fragment, null, s.a.createElement(T.c, null, "Gives the author a month of Reddit Premium, which includes "), s.a.createElement(H.a, null), s.a.createElement(T.c, null, s.a.createElement(T.b, {
					name: "number-coins"
				}, "700 Coins"), " for that month, and shows a Platinum Award on the comment.")) : null
			};
			class Z extends s.a.PureComponent {
				render() {
					const {
						award: e,
						className: t,
						language: a,
						postOrComment: n,
						subredditName: r
					} = this.props, c = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("div", {
						className: Object(d.a)(t, k.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: k.a.iconContainer
					}, s.a.createElement("img", {
						className: k.a.icon,
						src: c
					})), s.a.createElement("div", {
						className: k.a.awardName
					}, Object(V.a)(a, "gold.gildModal.awardNameAward", {
						awardName: e.name
					})), s.a.createElement("div", {
						className: k.a.coinPrice
					}, Object(K.a)(Object(V.a)(a, "gold.gildModal.spendCoin", {
						cost: e.coinPrice.toLocaleString()
					}), {
						":coin:": s.a.createElement(H.a, null)
					})), s.a.createElement("div", {
						className: k.a.benefits
					}, s.a.createElement(Y, {
						award: e,
						postOrComment: n,
						subredditName: r
					})), e.endsAt && s.a.createElement(z, {
						className: k.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var U, $ = Z;
			! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(U || (U = {}));
			class ee extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						messageTypeEventSent: !1
					}, this.handleClickMessageInput = () => this.props.sendEvent(Object(l.clickMessageInputEvent)(this.props.thingId)), this.handleTypeMessageInput = e => {
						this.setState(this.sendTypeMessageEvent), this.props.handleMessageInput(e)
					}, this.sendTypeMessageEvent = (e, t) => {
						if (!e.messageTypeEventSent) return t.sendEvent(Object(l.typeMessageInputEvent)(t.thingId)), {
							messageTypeEventSent: !0
						}
					}, this.handleToggleAnonymous = () => {
						const {
							isAnonymous: e,
							sendEvent: t,
							thingId: a,
							toggleIsAnonymous: n
						} = this.props;
						t(Object(l.triggerAnonymousEvent)(e ? "uncheck" : "check", a)), n()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: a,
							thingId: n,
							toggleIsAnonymous: s
						} = this.props, r = e === U.PRIVATE;
						(!t && r || t && !r) && (a(Object(l.triggerAnonymousEvent)(r ? "check" : "uncheck", n)), s())
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
						const e = "post" === a ? Object(B.c)("Show my username on post") : Object(B.c)("Show my username on comment");
						return s.a.createElement(R.a, {
							name: Object(B.c)("Privacy setting"),
							onChange: this.handleRadioChange,
							value: t ? U.PRIVATE : U.PUBLIC
						}, s.a.createElement(F.a, {
							className: Object(d.a)(k.a.radioOption, k.a.first),
							showButton: !0,
							value: U.PUBLIC
						}, e), s.a.createElement(F.a, {
							className: k.a.radioOption,
							showButton: !0,
							value: U.PRIVATE
						}, s.a.createElement(T.c, null, "Give anonymously")))
					}
					return s.a.createElement(G.a, {
						className: k.a.giver,
						isSelected: t,
						text: Object(B.c)("Make my gift anonymous"),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						forcePublic: e,
						message: t
					} = this.props;
					return e ? null : s.a.createElement(L.q, {
						className: k.a.textArea,
						"data-redditstyle": !0,
						maxLength: 2048,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						placeholder: Object(B.c)("Optional private message"),
						value: t
					})
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: k.a.publicIndicator
					}, s.a.createElement(q.a, {
						className: k.a.eyeIcon
					}), s.a.createElement(T.c, null, "Shows my username")) : null
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
						className: Object(d.a)(e, k.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: k.a.spacer
					}), s.a.createElement($, {
						award: n,
						language: t,
						postOrComment: a,
						subredditName: r
					}), n.awardType === m.c.Moderator ? s.a.createElement("span", {
						className: k.a.giver
					}, s.a.createElement(D.a, {
						className: k.a.modIcon
					}), s.a.createElement(T.c, null, "Given by a Moderator")) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var te = ee,
				ae = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/fbt/lib/FbtPublic.js")),
				ne = a("./src/config.ts"),
				se = a("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				re = a.n(se),
				ce = a("./src/reddit/components/SubredditIcon/index.tsx"),
				de = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				ie = a("./src/reddit/components/AnimatedPillBadge/index.m.less"),
				oe = a.n(ie),
				le = e => {
					const {
						className: t,
						text: a
					} = e;
					return s.a.createElement("div", {
						className: Object(d.a)(t, oe.a.AnimatedPillBadge)
					}, a, s.a.createElement("div", {
						className: oe.a.sheen
					}))
				};
			class me extends s.a.Component {
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
						isSelected: t,
						language: a
					} = this.props, n = t ? re.a.selected : "", r = e.icon128 ? e.icon128.url : e.icon.url;
					return s.a.createElement("button", {
						className: Object(d.a)(re.a.selectableAward, n),
						onClick: this.onOptionClick
					}, s.a.createElement("div", {
						className: re.a.buttonContent,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: re.a.iconContainer
					}, s.a.createElement("img", {
						className: re.a.icon,
						src: r
					}), e.isNew && s.a.createElement(le, {
						className: re.a.iconNewBadge,
						text: Object(B.c)("New")
					})), s.a.createElement("div", {
						className: re.a.title
					}, e.name), s.a.createElement("div", {
						className: re.a.metaText
					}, Object(K.a)(Object(V.a)(a, "gold.gildModal.spendCoin", {
						cost: e.coinPrice.toLocaleString()
					}), {
						":coin:": s.a.createElement(H.a, null)
					})), e.endsAt && s.a.createElement(z, {
						className: re.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var ue = me;
			class ge extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => s.a.createElement("div", {
						className: re.a.giveImageContainer
					}, s.a.createElement("img", {
						className: re.a.giveImage,
						src: "".concat(ne.a.assetPath, "/img/gold/award-give.png")
					})), this.rendererByAwardSubtype = {
						[m.b.Global]: this.renderGlobalAwards,
						[m.b.Moderator]: this.renderModAwards,
						[m.b.Community]: this.renderCommunityAwards,
						[m.b.Appreciation]: this.renderAppreciationAwards,
						[m.b.Premium]: this.renderPremiumAwards
					}
				}
				renderAppreciationAwards(e, t) {
					const {
						language: a,
						onSelect: n,
						selectedAward: r,
						sendEvent: c,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: re.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: re.a.awardSectionTitle
					}, ae.fbt._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), s.a.createElement("div", {
						className: re.a.awardSection
					}, e.map(e => s.a.createElement(ue, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						language: a,
						onSelect: n,
						sendEvent: c,
						thingId: d
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						language: a,
						onSelect: n,
						selectedAward: r,
						sendEvent: c,
						thingId: i
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: re.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: re.a.awardSectionTitle
					}, s.a.createElement(de.a, {
						className: Object(d.a)(re.a.premiumIcon, re.a.awardSectionIcon)
					}), ae.fbt._("Premium Awards", null, {
						hk: "35bhoK"
					})), s.a.createElement("div", {
						className: re.a.awardSection
					}, e.map(e => s.a.createElement(ue, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						language: a,
						onSelect: n,
						sendEvent: c,
						thingId: i
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						language: a,
						onSelect: n,
						selectedAward: r,
						sendEvent: c,
						thingId: d
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: re.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: re.a.awardSectionTitle
					}, ae.fbt._("Medals", null, {
						hk: "1RRXJc"
					})), s.a.createElement("div", {
						className: re.a.awardSection
					}, e.map(e => s.a.createElement(ue, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						language: a,
						onSelect: n,
						sendEvent: c,
						thingId: d
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						language: a,
						onSelect: n,
						selectedAward: r,
						sendEvent: c,
						subreddit: d,
						subredditName: i,
						thingId: o
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: re.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: re.a.awardSectionTitle
					}, s.a.createElement(ce.b, {
						className: re.a.awardSectionIcon,
						subredditOrProfile: d
					}), Object(V.a)(a, "gold.gildModal.subredditAwards", {
						subredditName: i
					})), s.a.createElement("div", {
						className: re.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return s.a.createElement(ue, {
							award: e,
							isSelected: t,
							key: e.id,
							language: a,
							onSelect: n,
							sendEvent: c,
							thingId: o
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						language: a,
						onSelect: n,
						selectedAward: r,
						sendEvent: c,
						subredditName: i,
						thingId: o
					} = this.props;
					return e.length ? s.a.createElement("div", {
						className: re.a.awardSectionContainer
					}, t && s.a.createElement("div", {
						className: re.a.awardSectionTitle
					}, s.a.createElement(D.a, {
						className: Object(d.a)(re.a.modIcon, re.a.awardSectionIcon)
					}), Object(V.a)(a, "gold.gildModal.modAwards", {
						subredditName: i
					})), s.a.createElement("div", {
						className: re.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return s.a.createElement(ue, {
							award: e,
							isSelected: t,
							key: e.id,
							language: a,
							onSelect: n,
							sendEvent: c,
							thingId: o
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
						className: Object(d.a)(a, re.a.awardSelectorPane)
					});
					const r = new Set,
						c = {
							[m.b.Global]: [],
							[m.b.Moderator]: [],
							[m.b.Community]: [],
							[m.b.Appreciation]: [],
							[m.b.Premium]: []
						};
					e.forEach(e => {
						r.add(e.awardSubType), c[e.awardSubType] || (c[e.awardSubType] = []), c[e.awardSubType].push(e)
					});
					const i = !!(c[m.b.Community].length || c[m.b.Moderator].length || c[m.b.Appreciation].length || n && c[m.b.Premium].length) || c[m.b.Global].length > 3;
					return s.a.createElement("div", {
						className: Object(d.a)(a, re.a.awardSelectorPane)
					}, !i && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== m.b.Premium || n) ? this.rendererByAwardSubtype[e].call(this, c[e], i) : null))
				}
			}
			var pe = ge,
				he = a("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				be = a.n(he),
				Ee = a("./src/reddit/components/CoinBalance/index.tsx"),
				we = a("./src/reddit/controls/Button/index.tsx"),
				Ce = a("./src/reddit/controls/LoadingIcon/index.tsx");
			const Ae = 10;
			class ve extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(l.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: a
					} = this.props, n = (t || 0).toLocaleString();
					return s.a.createElement("div", {
						className: be.a.coinBalanceSection
					}, s.a.createElement(ce.b, {
						className: be.a.subredditIcon,
						subredditOrProfile: e
					}), s.a.createElement(T.c, null, s.a.createElement(T.b, {
						name: "subreddit-name"
					}, "r/".concat(a)), " Coin balance: "), s.a.createElement("span", null, s.a.createElement(H.a, null), n))
				}
				renderButtonText() {
					const {
						canAfford: e,
						selectedAward: t,
						thingId: a
					} = this.props, n = t.awardType === m.c.Moderator;
					return e || n ? Object(i.a)(a) ? s.a.createElement(T.c, null, "Award post") : s.a.createElement(T.c, null, "Award comment") : s.a.createElement(T.c, null, "Next")
				}
				render() {
					const {
						canAfford: e,
						className: t,
						errorMessage: a,
						language: n,
						onCannotAfford: r,
						onGild: c,
						pending: i,
						selectedAward: o,
						subredditCoins: l,
						userCoins: u
					} = this.props, g = o.awardType === m.c.Moderator, p = (g ? l : u) || 0;
					return s.a.createElement("div", {
						className: Object(d.a)(t, be.a.gildFooter)
					}, s.a.createElement("div", {
						className: be.a.footerContent
					}, g ? this.renderCommunityBalance() : s.a.createElement(Ee.a, {
						className: be.a.coinBalanceSection,
						coinBalance: p,
						language: n,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), s.a.createElement(we.f, {
						className: be.a.gildButton,
						"data-redditstyle": !0,
						disabled: i || g && !e,
						onClick: e ? c : r
					}, i ? s.a.createElement(Ce.a, {
						className: be.a.loadingIcon,
						sizePx: Ae
					}) : this.renderButtonText())), a && s.a.createElement("div", {
						className: be.a.errorText
					}, a))
				}
			}
			var xe = ve,
				Oe = a("./src/reddit/components/GildModalContent/index.m.less"),
				Ie = a.n(Oe);
			class je extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(l.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						language: e,
						postOrComment: t
					} = this.props;
					return Object(K.a)(Object(V.a)(e, "gold.gildModal.spendCoinsToHighlightPostOrComment", {
						postOrComment: Object(V.a)(e, "gold.postOrComment.".concat(t))
					}), {
						":learnMoreLink:": s.a.createElement("a", {
							className: Ie.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, s.a.createElement(T.c, null, "How do Awards work?"))
					})
				}
				render() {
					const {
						className: e,
						language: t,
						postOrComment: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(d.a)(e, Ie.a.gildHeader)
					}, s.a.createElement("div", {
						className: Ie.a.headerText
					}, s.a.createElement("div", {
						className: Ie.a.mainText
					}, s.a.createElement("span", null, Object(V.a)(t, "gold.gildModal.giveAwardToThisPostOrComment", {
						postOrComment: Object(V.a)(t, "gold.postOrComment.".concat(a))
					}))), s.a.createElement("div", {
						className: Ie.a.subText
					}, this.renderEmojiSubText())), s.a.createElement("button", {
						className: Ie.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, s.a.createElement(L.b, {
						className: Ie.a.closeBtnIcon
					})))
				}
			}
			var fe = je;
			const Ne = Object(c.a)(Object(c.c)({
					awards: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(y.K)(e, {
								thingId: a
							});
							s = t && t.id
						}
						if (!s && Object(i.a)(a)) {
							const t = Object(N.I)(e, {
								postId: a
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(v.g)(e, {
							subredditId: s
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(y.K)(e, {
								thingId: a
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(v.f)(e, {
							subredditId: s
						})
					},
					currentUser: P.i,
					errorMessage: I.a,
					isAnonymous: I.g,
					iFramed: I.h,
					isEmployee: P.H,
					language: P.T,
					message: I.b,
					pending: I.e,
					postOrComment: (e, t) => {
						let {
							thingId: a
						} = t;
						return Object(i.a)(a) ? Object(N.I)(e, {
							postId: a
						}) : Object(A.n)(e, {
							commentId: a
						})
					},
					publicAwardingEnabled: e => !!Object(O.a)(e),
					showCoinPurchaseModal: f.d,
					showPremiumAwards: x.a,
					selectedAward: j.a,
					subreddit: y.K,
					subredditCoins: (e, t) => {
						let {
							thingId: a,
							subredditId: n
						} = t;
						const s = Object(y.K)(e, {
								thingId: a
							}),
							r = s ? s.id : n;
						return Object(y.C)(e, {
							subredditId: r
						})
					},
					userCoins: P.d
				}), e => {
					const {
						isEmployee: t,
						selectedAward: a,
						subredditCoins: n,
						userCoins: s
					} = e, {
						awardType: r,
						coinPrice: c
					} = a, d = r === m.c.Moderator, i = ((d ? n : s) || 0) >= c || t && !d;
					return Object.assign({}, e, {
						canAfford: i,
						cost: c
					})
				}),
				ye = ["pan_media", "pan2", "pan3"];
			class Pe extends s.a.Component {
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
						n(Object(l.clickNextButtonEvent)(s)), e(r, t, s, a), this.setState({
							showCoinPurchaseModalInThisInstance: !0
						})
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							selectedAward: a,
							sendEvent: n,
							thingId: s
						} = this.props;
						return n(Object(l.clickConfirmAwardEvent)(s, a)), e(t)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(o.N)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardsRequested: e,
						canAfford: t,
						forcePublic: a,
						isAnonymous: n,
						postOrComment: s,
						selectedAward: r,
						sendEvent: c,
						setIsAnonymous: d,
						subreddit: i,
						subredditAboutRequested: m,
						subredditId: u,
						subredditName: g,
						thingId: p
					} = this.props;
					c(Object(l.viewGildModalEvent)(r.id, n, p)), d(!a && Object(o.k)());
					const h = i ? i.id : u || (s && s.belongsTo ? s.belongsTo.id : void 0);
					if (h && e(h), i || g) {
						m(i ? i.name : g)
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
						closeGildModal: c,
						errorMessage: o,
						forcePublic: m,
						iFramed: u,
						isAnonymous: g,
						language: p,
						message: h,
						pending: b,
						postOrComment: E,
						publicAwardingEnabled: w,
						selectAward: C,
						selectedAward: A,
						sendEvent: v,
						showCoinPurchaseModal: x,
						showPremiumAwards: O,
						subreddit: I,
						subredditCoins: j,
						subredditName: f,
						thingId: N,
						userCoins: y
					} = this.props, {
						showCoinPurchaseModalInThisInstance: P
					} = this.state, M = E ? E.author : e, _ = Object(i.a)(N) ? "post" : "comment", k = x && P;
					if (k && (k && !u)) return s.a.createElement(S.a, {
						isCompletePaypal: !1
					});
					const T = I ? I.name : f,
						B = ye.includes(T) ? "pan" : T;
					return s.a.createElement("div", {
						className: Object(d.a)(r, Ie.a.gildModalContent)
					}, s.a.createElement(fe, {
						authorName: M,
						language: p,
						postOrComment: _,
						onCancel: c,
						sendEvent: v,
						thingId: N
					}), s.a.createElement("div", {
						className: Ie.a.modalMainContent
					}, s.a.createElement(pe, {
						awards: t,
						awardsPending: a,
						language: p,
						onSelect: e => {
							C(e), v(Object(l.clickSelectAwardEvent)(e, N))
						},
						selectedAward: A,
						sendEvent: v,
						showPremiumAwards: O,
						subreddit: I,
						subredditName: B,
						thingId: N
					}), s.a.createElement(te, {
						forcePublic: m,
						isAnonymous: g,
						language: p,
						message: h,
						postOrComment: _,
						publicAwardingEnabled: w,
						selectedAward: A,
						sendEvent: v,
						thingId: N,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						subredditName: B
					})), s.a.createElement(xe, {
						canAfford: n,
						errorMessage: o || void 0,
						language: p,
						onCannotAfford: this.onCannotAfford,
						onGild: this.onGildRequested,
						pending: b,
						selectedAward: A,
						sendEvent: v,
						subreddit: I,
						subredditName: B,
						subredditCoins: j,
						thingId: N,
						userCoins: y
					}), k && s.a.createElement(S.a, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(Ne, (e, t) => {
				let {
					thingId: a
				} = t;
				return {
					awardsRequested: t => e(Object(u.h)(t)),
					cannotAffordGildRequested: (t, a, n, s) => {
						e(Object(w.h)(t, a, n, s))
					},
					closeGildModal: () => e(Object(E.a)()),
					gildRequested: t => e(Object(g.gildGqlRequested)(a, t)),
					selectAward: t => e(b(t)),
					setIsAnonymous: t => {
						e(Object(g.setIsAnonymous)(t)), Object(o.N)(t)
					},
					subredditAboutRequested: t => e(Object(C.t)(t)),
					updateMessage: t => e(Object(g.updateMessage)(t))
				}
			})(Object(M.b)(Pe))
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
				c = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = a.n(c);
			t.a = e => {
				let {
					center: t,
					className: a,
					sizePx: n
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(d.a.loadingIcon, a, {
						[d.a.mCentered]: t
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
					experimentName: n.nb
				});
				return Object(n.Xb)(t) ? void 0 : t
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
//# sourceMappingURL=FramedGild~GildModal.79fc76a55c12d50671cd.js.map