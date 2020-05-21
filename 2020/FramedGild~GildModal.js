// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.0a94d5f9f482b1e2df39.js
// Retrieved at 5/21/2020, 7:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return F
			})), s.d(t, "setIncludeMessage", (function() {
				return V
			})), s.d(t, "updateMessage", (function() {
				return q
			})), s.d(t, "gildGqlRequested", (function() {
				return K
			})), s.d(t, "triggerLoader", (function() {
				return H
			})), s.d(t, "gildPending", (function() {
				return X
			})), s.d(t, "gildFailed", (function() {
				return W
			})), s.d(t, "gildSuccessful", (function() {
				return Y
			})), s.d(t, "awardKarmaUpdated", (function() {
				return Z
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/messageIframeParent/index.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				o = s("./node_modules/react/index.js"),
				l = s.n(o),
				m = s("./src/reddit/models/Gold/Award.ts"),
				u = s("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				b = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => p._("Sent! You earned {=awarder karma}", [p._param("=awarder karma", l.a.createElement("a", {
				className: b.a.karmaLink,
				href: m.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, p._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [p._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var g = s("./src/reddit/models/Gold/Coins/index.ts"),
				w = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/comments.ts"),
				j = s("./src/reddit/selectors/communityAwards.ts"),
				O = s("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				v = s("./src/reddit/selectors/gild.ts"),
				I = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				x = s("./src/graphql/operations/GildComment.json"),
				C = s("./src/graphql/operations/GildPost.json"),
				_ = s("./src/lib/makeGqlRequest/index.ts"),
				y = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const k = (e, t, s) => Object(_.a)(e, Object.assign({}, C, {
					variables: t
				}), {
					query: s ? {} : Object(y.b)()
				}),
				S = (e, t, s) => Object(_.a)(e, Object.assign({}, x, {
					variables: t
				}), {
					query: s ? {} : Object(y.b)()
				});
			var M = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				T = s("./src/reddit/helpers/awards/message.ts"),
				L = s("./src/reddit/helpers/correlationIdTracker.ts"),
				B = s("./src/reddit/helpers/isPost.ts"),
				G = s("./src/reddit/helpers/trackers/gild.ts"),
				D = s("./src/telemetry/index.ts"),
				R = s("./src/reddit/actions/gold/constants.ts");
			const F = Object(r.a)(R.q),
				V = Object(r.a)(R.p),
				q = Object(r.a)(R.t),
				K = (e, t) => async (s, r, n) => {
					let {
						gqlContext: d
					} = n;
					const i = r().gild,
						{
							isOldReddit: c,
							isLivestream: o
						} = t;
					s(X());
					try {
						const t = {
								gildingTypeId: i.selectedAward.id,
								isAnonymous: i.isAnonymous,
								isGildFunded: !1,
								message: Object(T.d)(i.message, i.selectedAward, o),
								nodeId: e
							},
							r = Object(B.a)(e) ? k : S,
							n = await r(d(), {
								input: t
							}, c);
						let l = !1,
							m = null,
							u = null;
						if (n.ok) {
							const e = n.body;
							l = e.data.gild.ok, m = e.data.gild.fieldErrors, u = e.data.gild.errors
						}
						if (l) {
							const t = n.body,
								{
									gild: a
								} = t.data,
								r = Object(B.a)(e) ? n.body.data.gild.postInfo : n.body.data.gild.comment,
								{
									awardings: d,
									treatmentTags: c
								} = r;
							await s(Y({
								awardId: i.selectedAward.id,
								awardings: d,
								awardKarmaReceived: a.awardKarmaReceived,
								coins: a.coins,
								id: e,
								subredditCoins: a.subredditCoins,
								treatmentTags: c
							}))
						} else {
							const e = m && m[0] && m[0].message,
								t = u && u[0] && u[0].message,
								r = e || t || a.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(W(r))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || a.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(W(t))
					} finally {
						Object(L.b)(L.a.GildingFlow)
					}
				}, H = Object(r.a)(R.s), U = Object(r.a)(R.o), X = () => async (e, t) => {
					e(U()), window.setTimeout(() => {
						t().gild.api.pending && e(H())
					}, 2e3)
				}, Q = Object(r.a)(R.n), W = e => async (t, s) => {
					await t(Q(e)), t(Object(c.e)({
						kind: f.b.Error,
						duration: c.a,
						text: e
					}))
				}, J = Object(r.a)(R.r), z = (e, t) => {
					const {
						id: s
					} = t, a = Object(B.a)(s) ? Object(A.O)(e, {
						postId: s
					}) : Object(E.n)(e, {
						commentId: s
					}), r = Object(P.i)(e), n = e.gild, {
						isAnonymous: d
					} = n, i = !d && r && (r.username || r.displayText) ? r.username || r.displayText : void 0, c = a ? a.author : void 0, o = Object(N.I)(e, {
						thingId: s
					});
					return J(Object.assign({}, t, {
						gilder: i,
						gildee: c,
						subredditId: o && o.id
					}))
				}, Y = e => async (t, s) => {
					const r = s(),
						{
							awardId: o,
							id: l
						} = e,
						u = Object(j.a)(r, o),
						b = Object(O.a)(r),
						p = e.awardKarmaReceived,
						E = Object(P.i)(r);
					if (Object(v.h)(r)) {
						const e = "success.gild",
							t = {},
							s = u.icon32 ? u.icon32.url : u.icon.url;
						t.awardId = o, t.awardIcon = s, Object(n.a)({
							type: e,
							data: t
						})
					}
					if (u.awardType === m.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(N.I)(r, {
								thingId: l
							}),
							s = t && Object(N.B)(r, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - u.coinPrice)
					}
					if (t(z(r, e)), E && E.displayName) {
						const e = E.awarderKarma + p;
						t(Z({
							userName: E.displayName,
							awarderKarma: e
						}))
					}(r.posts.instances[l] || []).forEach(s => {
						t(z(r, Object.assign({}, e, {
							id: s
						})))
					});
					const x = Object(B.a)(l) ? a.fbt._("Success! You have given this post the {awardName} Award", [a.fbt._param("awardName", u.name)], {
							hk: "1Ndi4Z"
						}) : a.fbt._("Success! You have given this comment the {awardName} Award", [a.fbt._param("awardName", u.name)], {
							hk: "2sIK9Y"
						}),
						C = u.coinPrice;
					Object(D.a)(Object(G.viewSuccessAwardEvent)(l, C, u)(r));
					const _ = u.icon64 ? u.icon64.url : u.icon.url;
					t(Object(c.e)({
						customIconAsset: _,
						kind: f.b.SuccessAward,
						text: b && p > 0 ? h({
							awarderKarmaReceived: p
						}) : x
					})), setTimeout(() => {
						const e = Object(M.a)(o, l),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const y = Object(B.a)(l) && Object(w.i)(Object(A.O)(r, {
						postId: l
					}));
					await t(Object(i.a)());
					const k = Object(I.d)(s()).filter(e => g.a.has(e.dealInfo.type));
					k.length && setTimeout(() => t(Object(d.h)({
						packageId: k[0].mobileId
					})), y ? 600 : 10)
				}, Z = Object(r.a)(R.a)
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				n = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/actions/gold/constants.ts");
			const i = Object(a.a)(d.L),
				c = () => async e => {
					e(Object(r.h)(n.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/components/AnimatedPillBadge/index.m.less": function(e, t, s) {
			e.exports = {
				AnimatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				animatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				sizePulse: "_2xnejTzOKwD2N2wduYh5VS",
				sheen: "_3wsB6VQlSpMQ1YYy0RWWyw",
				sheenTraverse: "tJhGfB7_BsM9oPrnBPZJR"
			}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, s) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				c = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				o = s("./src/reddit/components/CoinBalance/index.m.less"),
				l = s.n(o);
			t.a = e => n.a.createElement("div", {
				className: Object(d.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(i.a)(a.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [a.fbt._param("Coin icon placeholder", ":coin:"), a.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": n.a.createElement(c.a, null)
			}), " ", n.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, a.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GildModalContent/GildFooter/index.m.less": function(e, t, s) {
			e.exports = {
				gildFooter: "habPwBVb49a3L6odC1o_2",
				footerContent: "p9n6xR53geDkMMJLRLxsQ",
				coinBalanceSection: "_3R4j1vmZgkT6keOmp5osiV",
				gildButton: "_2qmjJbARve3fBrc8oz-Ufa",
				premiumButton: "_3QiLbbTpb2izwuTyxaeqdY",
				subredditIcon: "_1gm264-SD6RxF8VJfulxIL",
				errorText: "_2K7QjhTDibWfT4O2YOQyLh",
				loadingIcon: "OrV3EYarwTthoNCBGxsel"
			}
		},
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/opener/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/gild.ts"),
				u = s("./src/reddit/models/Gold/Award.ts"),
				b = s("./src/reddit/actions/gold/communityAwards.ts"),
				p = s("./src/reddit/actions/gold/gild.ts"),
				h = s("./src/reddit/actions/gold/giveAward.ts"),
				g = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				f = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				E = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				j = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/communityAwards.ts"),
				I = s("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				A = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				N = s("./src/reddit/selectors/gild.ts"),
				P = s("./src/reddit/selectors/gold/giveAwards.ts"),
				x = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				C = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				T = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				L = s("./src/lib/loadWithRetries/index.ts"),
				B = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const G = () => Object(L.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e3dfa4ce"), s.e("CoinsPurchaseModal~PennyPurchaseModal"), s.e("PennyPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(B.c)()])).then(e => e[0].default);
			var D = Object(T.a)({
					getComponent: G,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				R = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./node_modules/fbt/lib/FbtPublic.js"),
				V = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				q = s.n(V),
				K = s("./src/reddit/helpers/awards/message.ts"),
				H = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				U = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				X = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				W = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				J = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				z = s("./src/reddit/components/TimeLeft/TimeLeft.tsx");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const Y = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return r.a.createElement(r.a.Fragment, null, e.map((e, t) => 0 === t ? e : r.a.createElement(r.a.Fragment, {
						key: t + e
					}, r.a.createElement(J.a, null), e)))
				}
				return null
			};
			class Z extends r.a.PureComponent {
				render() {
					const {
						award: e,
						className: t
					} = this.props, s = e.icon128 ? e.icon128.url : e.icon.url, a = !!e.pennyPrice;
					return r.a.createElement("div", {
						className: Object(i.a)(t, q.a.awardDescriptionContainer)
					}, r.a.createElement("div", {
						className: q.a.iconContainer
					}, r.a.createElement("img", {
						className: q.a.icon,
						src: s
					})), r.a.createElement("div", {
						className: q.a.awardName
					}, F.fbt._("{awardName} Award", [F.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), r.a.createElement("div", {
						className: q.a.price
					}, a ? F.fbt._("Purchase for ${dollarPrice}", [F.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : Object(W.a)(F.fbt._("Spend :coin:{coinPrice}", [F.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": r.a.createElement(J.a, null)
					})), r.a.createElement("div", {
						className: q.a.benefits
					}, r.a.createElement(Y, {
						award: e
					})), e.endsAt && r.a.createElement(z.a, {
						className: q.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var $, ee = Z;

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}($ || ($ = {}));
			class se extends r.a.PureComponent {
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
							thingId: s,
							toggleIsAnonymous: a
						} = this.props;
						t(Object(m.triggerAnonymousEvent)(e ? "uncheck" : "check", s)), a()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: s,
							thingId: a,
							toggleIsAnonymous: r
						} = this.props, n = e === $.PRIVATE;
						(!t && n || t && !n) && (s(Object(m.triggerAnonymousEvent)(n ? "check" : "uncheck", a)), r())
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : r.a.createElement(U.a, {
						className: q.a.giver,
						isSelected: t,
						text: F.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						isLivestream: e,
						selectedAward: t,
						message: s
					} = this.props, a = {
						disabled: !1,
						maxLength: Object(K.c)(t, e),
						placeholder: F.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === a.maxLength ? (a.disabled = !0, a.placeholder = F.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : a.placeholder = F.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const n = !e || a.maxLength > 0,
						d = n && s.length > a.maxLength;
					return r.a.createElement("div", {
						className: Object(i.a)(q.a.textAreaWrapper, {
							[q.a.messageTooLong]: d
						})
					}, r.a.createElement(H.s, te({
						className: q.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: n ? s : ""
					}, a)), n && r.a.createElement("div", {
						className: q.a.characterCountdown
					}, a.maxLength - s.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? r.a.createElement("div", {
						className: q.a.publicIndicator
					}, r.a.createElement(X.a, {
						className: q.a.eyeIcon
					}), F.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				render() {
					const {
						className: e,
						selectedAward: t
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(e, q.a.awardDetailsPane)
					}, r.a.createElement("div", {
						className: q.a.spacer
					}), r.a.createElement(ee, {
						award: t
					}), t.awardType === u.f.Moderator ? r.a.createElement("span", {
						className: q.a.giver
					}, r.a.createElement(Q.a, {
						className: q.a.modIcon
					}), F.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var ae = se,
				re = s("./src/config.ts"),
				ne = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				de = s.n(ne),
				ie = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				oe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				le = s.n(oe),
				me = e => {
					const {
						className: t,
						text: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(t, le.a.AnimatedPillBadge)
					}, s, r.a.createElement("div", {
						className: le.a.sheen
					}))
				};
			class ue extends r.a.Component {
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
					} = this.props, s = t ? de.a.selected : "", a = e.icon128 ? e.icon128.url : e.icon.url;
					return r.a.createElement("button", {
						className: Object(i.a)(de.a.selectableAward, s),
						onClick: this.onOptionClick
					}, r.a.createElement("div", {
						className: de.a.buttonContent,
						tabIndex: -1
					}, r.a.createElement("div", {
						className: de.a.iconContainer
					}, r.a.createElement("img", {
						className: de.a.icon,
						src: a
					}), r.a.createElement("div", {
						className: de.a.badgeContainer
					}, e.awardSubType !== u.d.Premium && e.isNew && r.a.createElement(me, {
						className: de.a.iconNewBadge,
						text: F.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.d.Premium && r.a.createElement("div", {
						className: de.a.iconPremiumBadgeContainer
					}, r.a.createElement(ce.a, {
						className: de.a.iconPremiumBadge
					})))), r.a.createElement("div", {
						className: de.a.title
					}, e.name), r.a.createElement("div", {
						className: de.a.metaText
					}, e.pennyPrice ? F.fbt._("Purchase for ${cost}", [F.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(W.a)(F.fbt._("Spend :coin:{cost}", [F.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": r.a.createElement(J.a, null)
					})), e.endsAt && r.a.createElement(z.a, {
						className: de.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var be = ue;
			const {
				fbt: pe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class he extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => r.a.createElement("div", {
						className: de.a.giveImageContainer
					}, r.a.createElement("img", {
						className: de.a.giveImage,
						src: "".concat(re.a.assetPath, "/img/gold/award-give.png")
					})), this.rendererByAwardSubtype = {
						[u.d.Global]: this.renderGlobalAwards,
						[u.d.Moderator]: this.renderModAwards,
						[u.d.Community]: this.renderCommunityAwards,
						[u.d.Appreciation]: this.renderAppreciationAwards,
						[u.d.Premium]: this.renderPremiumAwards
					}
				}
				renderAppreciationAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: n,
						thingId: d
					} = this.props;
					return e.length ? r.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && r.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, pe._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), r.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => r.a.createElement(be, {
						award: e,
						isSelected: e.id === a.id,
						key: e.id,
						onSelect: s,
						sendEvent: n,
						thingId: d
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: n,
						thingId: d
					} = this.props;
					return e.length ? r.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && r.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, r.a.createElement(ce.a, {
						className: Object(i.a)(de.a.premiumIcon, de.a.awardSectionIcon)
					}), pe._("Premium Awards", null, {
						hk: "35bhoK"
					})), r.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => r.a.createElement(be, {
						award: e,
						isSelected: e.id === a.id,
						key: e.id,
						onSelect: s,
						sendEvent: n,
						thingId: d
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: n,
						thingId: d
					} = this.props;
					return e.length ? r.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && r.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, pe._("Medals", null, {
						hk: "1RRXJc"
					})), r.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => r.a.createElement(be, {
						award: e,
						isSelected: e.id === a.id,
						key: e.id,
						onSelect: s,
						sendEvent: n,
						thingId: d
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: n,
						subreddit: d,
						subredditName: i,
						thingId: c
					} = this.props;
					return e.length ? r.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && r.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, r.a.createElement(ie.b, {
						className: de.a.awardSectionIcon,
						subredditOrProfile: d
					}), pe._("r/{subredditName} Awards", [pe._param("subredditName", i)], {
						hk: "2nKNHH"
					})), r.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => {
						const t = e.id === a.id;
						return r.a.createElement(be, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: s,
							sendEvent: n,
							thingId: c
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: n,
						subredditName: d,
						thingId: c
					} = this.props;
					return e.length ? r.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && r.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, r.a.createElement(Q.a, {
						className: Object(i.a)(de.a.modIcon, de.a.awardSectionIcon)
					}), pe._("r/{subredditName} Moderator Awards", [pe._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), r.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => {
						const t = e.id === a.id;
						return r.a.createElement(be, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: s,
							sendEvent: n,
							thingId: c
						})
					}))) : null
				}
				renderBanner() {
					return this.props.isLivestream && this.props.inViewerFeedTheMeter ? r.a.createElement("div", {
						className: de.a.banner
					}, "Give your favorite broadcasts ", r.a.createElement("br", null), "more airtime with awards!") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: s,
						showPremiumAwards: a
					} = this.props;
					if (t || !e.length) return r.a.createElement("div", {
						className: Object(i.a)(s, de.a.awardSelectorPane)
					});
					const n = new Set,
						d = {
							[u.d.Global]: [],
							[u.d.Moderator]: [],
							[u.d.Community]: [],
							[u.d.Appreciation]: [],
							[u.d.Premium]: []
						};
					e.forEach(e => {
						n.add(e.awardSubType), d[e.awardSubType] || (d[e.awardSubType] = []), d[e.awardSubType].push(e)
					});
					const c = !!(d[u.d.Community].length || d[u.d.Moderator].length || d[u.d.Appreciation].length || a && d[u.d.Premium].length) || d[u.d.Global].length > 3;
					return r.a.createElement("div", {
						className: Object(i.a)(s, de.a.awardSelectorPane)
					}, this.renderBanner(), !c && this.renderSnooImage(), [...n].map(e => this.rendererByAwardSubtype[e] && (e !== u.d.Premium || a) ? this.rendererByAwardSubtype[e].call(this, d[e], c) : null))
				}
			}
			var ge = he,
				we = s("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				fe = s.n(we),
				Ee = s("./src/reddit/components/CoinBalance/index.tsx"),
				je = s("./src/reddit/controls/Button/index.tsx"),
				Oe = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = 10;
			class Ae extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(m.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: s
					} = this.props, a = (t || 0).toLocaleString();
					return r.a.createElement("div", {
						className: fe.a.coinBalanceSection
					}, r.a.createElement(ie.b, {
						className: fe.a.subredditIcon,
						subredditOrProfile: e
					}), ve._("r/{subredditName} Coin balance:", [ve._param("subredditName", s)], {
						hk: "2ktWRF"
					}), r.a.createElement("span", null, r.a.createElement(J.a, null), a))
				}
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: s,
						thingId: a
					} = this.props, r = s.awardType === u.f.Moderator;
					return t ? ve._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || r ? Object(o.a)(a) ? ve._("Award post", null, {
						hk: "1Ydq4H"
					}) : ve._("Award comment", null, {
						hk: "4CfMGF"
					}) : ve._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						className: e,
						errorMessage: t,
						needPayment: s,
						needPremium: a,
						onGetPremium: n,
						onGild: d,
						onNeedPayment: c,
						pending: o,
						selectedAward: l,
						subredditCoins: m,
						userCoins: b
					} = this.props, p = l.awardType === u.f.Moderator, h = (p ? m : b) || 0;
					return r.a.createElement("div", {
						className: Object(i.a)(e, fe.a.gildFooter)
					}, r.a.createElement("div", {
						className: fe.a.footerContent
					}, p ? this.renderCommunityBalance() : r.a.createElement(Ee.a, {
						className: fe.a.coinBalanceSection,
						coinBalance: h,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), r.a.createElement(je.f, {
						className: a ? fe.a.premiumButton : fe.a.gildButton,
						"data-redditstyle": !0,
						disabled: o || p && s,
						onClick: a ? n : s ? c : d
					}, o ? r.a.createElement(Oe.a, {
						className: fe.a.loadingIcon,
						sizePx: Ie
					}) : this.renderButtonText())), t && r.a.createElement("div", {
						className: fe.a.errorText
					}, t))
				}
			}
			var Ne = Ae,
				Pe = s("./src/reddit/components/GildModalContent/index.m.less"),
				xe = s.n(Pe);
			class Ce extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(m.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						postOrComment: e
					} = this.props;
					return Object(W.a)(F.fbt._("Spend Coins to highlight this {Post or comment} for all to see! :learnMoreLink:", [F.fbt._param("Post or comment", e)], {
						hk: "2srS0W"
					}), {
						":learnMoreLink:": r.a.createElement("a", {
							className: xe.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, F.fbt._("How do Awards work?", null, {
							hk: "2zRUgX"
						}))
					})
				}
				render() {
					const {
						className: e,
						postOrComment: t
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(e, xe.a.gildHeader)
					}, r.a.createElement("div", {
						className: xe.a.headerText
					}, r.a.createElement("div", {
						className: xe.a.mainText
					}, r.a.createElement("span", null, F.fbt._("Give an Award to this {Post or comment}!", [F.fbt._param("Post or comment", t)], {
						hk: "4qJ474"
					}))), r.a.createElement("div", {
						className: xe.a.subText
					}, this.renderEmojiSubText())), r.a.createElement("button", {
						className: xe.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, r.a.createElement(H.b, {
						className: xe.a.closeBtnIcon
					})))
				}
			}
			var _e = Ce;
			const ye = Object(d.a)(Object(d.c)({
					awards: (e, t) => {
						let {
							thingId: s,
							subredditId: a
						} = t, r = a;
						if (!a) {
							const t = Object(k.I)(e, {
								thingId: s
							});
							r = t && t.id
						}
						if (!r && Object(o.a)(s)) {
							const t = Object(_.O)(e, {
								postId: s
							});
							r = t && t.belongsTo.id
						}
						return r ? Object(v.g)(e, {
							subredditId: r
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: s,
							subredditId: a
						} = t, r = a;
						if (!a) {
							const t = Object(k.I)(e, {
								thingId: s
							});
							if (!t) return !1;
							r = t.id
						}
						return Object(v.f)(e, {
							subredditId: r
						})
					},
					currentUser: S.i,
					errorMessage: N.a,
					isAnonymous: N.g,
					iFramed: N.h,
					isEmployee: S.E,
					message: N.b,
					pending: N.e,
					postOrComment: (e, t) => {
						let {
							thingId: s
						} = t;
						return Object(o.a)(s) ? Object(_.O)(e, {
							postId: s
						}) : Object(O.n)(e, {
							commentId: s
						})
					},
					purchaseCatalogPending: x.g,
					showPremiumAwards: I.a,
					showPurchaseModal: C.r,
					selectedAward: P.a,
					subreddit: k.I,
					subredditCoins: (e, t) => {
						let {
							thingId: s,
							subredditId: a
						} = t;
						const r = Object(k.I)(e, {
								thingId: s
							}),
							n = r ? r.id : a;
						return Object(k.A)(e, {
							subredditId: n
						})
					},
					userCoins: S.d,
					inViewerFeedTheMeter: (e, t) => {
						let {
							thingId: s
						} = t;
						return Object(A.d)(e, s, y.k)
					}
				}), e => {
					const {
						awards: t,
						isEmployee: s,
						postOrComment: a,
						selectedAward: r,
						subredditCoins: n,
						userCoins: d
					} = e, {
						awardType: i,
						coinPrice: c,
						pennyPrice: l
					} = r, m = i === u.f.Moderator, b = !!l || ((m ? n : d) || 0) < c && !(s && !m), p = a && a.media && "rpan" === a.media.type, h = a ? ((e, t) => {
						const s = Object(o.a)(t.id);
						return s ? e.filter(e => !(e => {
							for (const t of e)
								if (t.startsWith("econ:transferable:econ:render:")) return !0;
							return !1
						})(e.tags || [])) : e
					})(t, a) : t;
					return Object.assign({}, e, {
						awards: h,
						needPayment: b,
						cost: l || c,
						isRpanPost: !!p
					})
				}),
				ke = ["pan_media", "pan2", "pan3"];
			class Se extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showPurchaseModal: s
						} = this.props;
						if (27 === e.keyCode && !s) return t()
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
							selectedAward: s,
							sendEvent: a,
							thingId: r,
							userCoins: n
						} = this.props;
						a(Object(m.clickNextButtonEvent)(r)), t(n, e, r, !!s.pennyPrice), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: s
						} = this.props;
						t(Object(m.clickGetPremiumEvent)(s, e)), Object(c.d)("/premium", c.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: s,
							selectedAward: a,
							sendEvent: r,
							thingId: n
						} = this.props;
						return r(Object(m.clickConfirmAwardEvent)(n, a)), e(t, !!s)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(l.M)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardsRequested: e,
						isAnonymous: t,
						isRpanPost: s,
						needPayment: a,
						postOrComment: r,
						purchaseCatalogPending: n,
						purchaseCatalogRequested: d,
						selectedAward: i,
						sendEvent: c,
						setIsAnonymous: o,
						subreddit: u,
						subredditAboutRequested: b,
						subredditId: p,
						subredditName: h,
						thingId: g
					} = this.props;
					c(Object(m.viewGildModalEvent)(i.id, t, g)), o(!s && Object(l.k)());
					const w = u ? u.id : p || (r && r.belongsTo ? r.belongsTo.id : void 0);
					if (w && e(w), u || h) {
						b(u ? u.name : h)
					}
					a && (i.pennyPrice ? G() : Object(M.b)(), n || d())
				}
				render() {
					const {
						author: e,
						awards: t,
						awardsPending: s,
						className: a,
						closeGildModal: n,
						currentUser: d,
						errorMessage: c,
						iFramed: l,
						isAnonymous: b,
						isRpanPost: p,
						inViewerFeedTheMeter: h,
						message: g,
						needPayment: w,
						pending: f,
						postOrComment: E,
						selectAward: j,
						selectedAward: O,
						sendEvent: v,
						showPurchaseModal: I,
						showPremiumAwards: A,
						subreddit: N,
						subredditCoins: P,
						subredditName: x,
						thingId: C,
						userCoins: _
					} = this.props, {
						showPurchaseModalInThisInstance: y
					} = this.state, k = E ? E.author : e, S = Object(o.a)(C) ? "post" : "comment", T = I && y, L = T && !O.pennyPrice, B = T && !!O.pennyPrice, G = (L || B) && !l;
					if (L && G) return r.a.createElement(M.a, {
						isCompletePaypal: !1
					});
					if (B && G) return r.a.createElement(D, {
						isCompletePaypal: !1
					});
					const R = N ? N.name : x,
						F = ke.includes(R) ? "pan" : R,
						V = !d || !d.isGold && O.awardSubType === u.d.Premium;
					return r.a.createElement("div", {
						className: Object(i.a)(a, xe.a.gildModalContent)
					}, r.a.createElement(_e, {
						authorName: k,
						postOrComment: S,
						onCancel: n,
						sendEvent: v,
						thingId: C
					}), r.a.createElement("div", {
						className: xe.a.modalMainContent
					}, r.a.createElement(ge, {
						awards: t,
						awardsPending: s,
						onSelect: e => {
							j(e), v(Object(m.clickSelectAwardEvent)(e, C))
						},
						selectedAward: O,
						sendEvent: v,
						showPremiumAwards: A,
						subreddit: N,
						subredditName: F,
						thingId: C,
						isLivestream: p,
						inViewerFeedTheMeter: h
					}), r.a.createElement(ae, {
						forcePublic: p,
						isAnonymous: b,
						isLivestream: p,
						message: g,
						selectedAward: O,
						sendEvent: v,
						thingId: C,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput
					})), r.a.createElement(Ne, {
						errorMessage: c || void 0,
						needPayment: w,
						needPremium: V,
						onNeedPayment: this.onNeedPayment,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: f,
						selectedAward: O,
						sendEvent: v,
						subreddit: N,
						subredditName: F,
						subredditCoins: P,
						thingId: C,
						userCoins: _
					}), L && r.a.createElement(M.a, {
						isCompletePaypal: !1
					}), B && r.a.createElement(D, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(n.b)(ye, (e, t) => {
				let {
					thingId: s
				} = t;
				return {
					awardsRequested: t => e(Object(b.h)(t)),
					closeGildModal: () => e(Object(g.a)()),
					gildRequested: (t, a) => e(Object(p.gildGqlRequested)(s, {
						isOldReddit: t,
						isLivestream: a
					})),
					needPaymentRequested: (t, s, a, r) => {
						e(r ? Object(f.e)(s, a) : Object(w.g)(t, s, a))
					},
					purchaseCatalogRequested: () => e(Object(E.a)()),
					selectAward: t => e(Object(h.a)(t)),
					setIsAnonymous: t => {
						e(Object(p.setIsAnonymous)(t)), Object(l.M)(t)
					},
					subredditAboutRequested: t => e(Object(j.t)(t)),
					updateMessage: t => e(Object(p.updateMessage)(t))
				}
			})(Object(R.c)(Se))
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, s) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/reddit/components/TimeLeft/index.m.less"),
				d = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: s
				} = e, a = Math.floor(s.getTime() / 1e3), n = Object(c.b)(a);
				return r.a.createElement("div", {
					className: Object(i.a)(t)
				}, r.a.createElement(o.a, {
					className: d.a.clockIcon
				}), r.a.createElement("span", {
					className: d.a.timeLeft
				}, n))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, s) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			const a = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return d
			}));
			const a = 500,
				r = 1800,
				n = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < a ? 0 : e.coinPrice < r ? 50 : 100 : 2048
				},
				d = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const a = n(t, s);
					return e.slice(0, a)
				}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function n(e, t) {
				const s = e.toString().split(":");
				return s.length % 2 == 0 ? e : s.reduce((e, s, a) => (a % 2 == 0 ? e.push(s) : "" === s ? e.push(":") : ":".concat(s, ":") in t ? e.push(t[":".concat(s, ":")]) : e.push(":".concat(s, ":")), e), []).map((e, t) => r.a.createElement(r.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return I
			})), s.d(t, "l", (function() {
				return P
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "j", (function() {
				return B
			})), s.d(t, "i", (function() {
				return G
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "b", (function() {
				return K
			})), s.d(t, "d", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				b = s.n(m)()(e => Object(r.a)(Object(a.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				w = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				E = e => e.publicAccessNetwork.hlsStreams,
				j = Object(a.a)(E, e => e.ended),
				O = Object(a.a)(E, e => e.removed),
				v = Object(a.a)(e => e.publicAccessNetwork.models, j, O, (e, t, s) => {
					const a = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							r = R(a, i.b.ENDED) ? i.b.ENDED : a,
							n = s.stream.vod_accessible;
						return r === a && !0 === n ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							r = R(a, i.b.ENDED) ? i.b.ENDED : a,
							n = s.stream.vod_accessible;
						return r === a && !1 === n ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, a)
				}),
				I = (e, t) => {
					return v(e)[Object(d.g)(t)]
				},
				A = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => b(t.listingName)(e, t), v, h, c.i, o.b, (e, t, s, a, r, c) => {
					if (c) {
						const n = [];
						if (e) {
							const t = Object(d.g)(e);
							s[t] && n.push(t)
						}
						const c = n.concat(t),
							o = [...new Set(c)],
							l = new Set([...a, ...r]);
						return o.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const o = new Set([...a, ...r]);
					return Object.keys(s).filter(e => !o.has(e)).map(e => s[e]).filter(e => e.rank !== n.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				N = Object(a.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, v, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: a
					} = t;
					return A(e, {
						listingName: s,
						streamIdFromPath: a
					})
				}, (e, t, s) => {
					const a = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? a.slice(0, e) : a
				}),
				P = Object(a.a)(v, N, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === i.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				x = Object(a.a)(v, N, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				C = Object(a.a)(f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: r
					} = t;
					return N(e, {
						listingName: s || r,
						streamIdFromPath: a
					})
				}, (e, t) => {
					const s = new Set(e),
						a = t.filter(e => !s.has(e));
					if (a.length) return a[0]
				}),
				_ = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, v, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: r
					} = t;
					return N(e, {
						listingName: s || r,
						streamIdFromPath: a
					})
				}, g, (e, t, s, a) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						n = r.find(e => e.stream.state === i.b.IS_LIVE);
					if (n) return n.post.id;
					const d = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (a.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return d ? d.post.id : void 0
				}),
				y = Object(r.a)(Object(a.a)(_, v, (e, t) => e ? t[e] : void 0)),
				k = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(d.g)(s) : void 0
				}, _, h, c.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: r
					} = t;
					return N(e, {
						listingName: s || r,
						streamIdFromPath: a
					})
				}, (e, t, s, a, r) => !e || s.includes(e) || a.includes(e) ? t || r[0] : e),
				S = Object(a.a)(w, f, C, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(a.a)(w, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(r.a)(Object(a.a)(k, v, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(a.a)(S, v, (e, t) => e ? t[e] : void 0)),
				B = Object(r.a)(Object(a.a)(M, v, (e, t) => e ? t[e] : void 0)),
				G = (Object(r.a)(Object(a.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(a.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				D = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? I(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(a.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const q = Object(a.a)(k, v, p.b, (e, t, s) => {
					if (s) return V.INTRO;
					const a = e && t[e];
					if (!a) return V.UNAVAILABLE;
					const r = a.stream.state;
					return r === i.b.IS_LIVE || r === i.b.DISCONNECTED ? V.LIVE : r === i.b.ENDED && a.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				K = Object(a.a)(T, q, p.b, l.c, l.p, (e, t, s, a, r) => s ? a : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : r : void 0),
				H = Object(a.a)(T, q, F, (e, t, s) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = e => e.publicAccessNetwork.theaterSettings,
				i = Object(a.a)(d, n.o, (e, t) => t && !e.isIntroFinished),
				c = Object(a.a)(d, e => e.lastChatActivityUtcTs),
				o = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/econAwardKarma.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/user.ts");
			const d = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: n.H,
					experimentName: a.U
				});
				return !(!t || Object(a.rc)(t))
			}
		}
	}
]);
//# sourceMappingURL=FramedGild~GildModal.0a94d5f9f482b1e2df39.js.map