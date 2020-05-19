// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.a1bdbfeed38f6ac2182a.js
// Retrieved at 5/19/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"e3fd25f3fd15"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"df757af47083"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return M
			})), s.d(t, "setIncludeMessage", (function() {
				return T
			})), s.d(t, "updateMessage", (function() {
				return L
			})), s.d(t, "gildGqlRequested", (function() {
				return B
			})), s.d(t, "triggerLoader", (function() {
				return G
			})), s.d(t, "gildPending", (function() {
				return F
			})), s.d(t, "gildFailed", (function() {
				return V
			})), s.d(t, "gildSuccessful", (function() {
				return K
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/messageIframeParent/index.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				c = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/models/Gold/Award.ts"),
				l = s("./src/reddit/models/Gold/Coins/index.ts"),
				m = s("./src/reddit/models/Post/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/communityAwards.ts"),
				h = s("./src/reddit/selectors/gild.ts"),
				g = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/graphql/operations/GildComment.json"),
				j = s("./src/graphql/operations/GildPost.json"),
				v = s("./src/lib/makeGqlRequest/index.ts"),
				I = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const A = (e, t, s) => Object(v.a)(e, Object.assign({}, j, {
					variables: t
				}), {
					query: s ? {} : Object(I.b)()
				}),
				N = (e, t, s) => Object(v.a)(e, Object.assign({}, O, {
					variables: t
				}), {
					query: s ? {} : Object(I.b)()
				});
			var P = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				C = s("./src/reddit/helpers/awards/message.ts"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				y = s("./src/reddit/helpers/trackers/gild.ts"),
				k = s("./src/telemetry/index.ts"),
				S = s("./src/reddit/actions/gold/constants.ts");
			const M = Object(n.a)(S.p),
				T = Object(n.a)(S.o),
				L = Object(n.a)(S.s),
				B = (e, t) => async (s, n, r) => {
					let {
						gqlContext: i
					} = r;
					const c = n().gild,
						{
							isOldReddit: d,
							isLivestream: o
						} = t;
					s(F());
					try {
						const t = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: Object(C.d)(c.message, c.selectedAward, o),
								nodeId: e
							},
							n = Object(_.a)(e) ? A : N,
							r = await n(i(), {
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
									gild: a
								} = t.data,
								n = Object(_.a)(e) ? r.body.data.gild.postInfo : r.body.data.gild.comment,
								{
									awardings: i,
									treatmentTags: d
								} = n;
							await s(K({
								awardId: c.selectedAward.id,
								awardings: i,
								coins: a.coins,
								id: e,
								subredditCoins: a.subredditCoins,
								treatmentTags: d
							}))
						} else {
							const e = m && m[0] && m[0].message,
								t = u && u[0] && u[0].message,
								n = e || t || a.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(V(n))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || a.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(V(t))
					} finally {
						Object(x.b)(x.a.GildingFlow)
					}
				}, G = Object(n.a)(S.r), D = Object(n.a)(S.n), F = () => async (e, t) => {
					e(D()), window.setTimeout(() => {
						t().gild.api.pending && e(G())
					}, 2e3)
				}, R = Object(n.a)(S.m), V = e => async (t, s) => {
					await t(R(e)), t(Object(d.e)({
						kind: u.b.Error,
						duration: d.a,
						text: e
					}))
				}, q = Object(n.a)(S.q), H = (e, t) => {
					const {
						id: s
					} = t, a = Object(_.a)(s) ? Object(w.O)(e, {
						postId: s
					}) : Object(b.n)(e, {
						commentId: s
					}), n = Object(f.i)(e), r = e.gild, {
						isAnonymous: i
					} = r, c = !i && n && (n.username || n.displayText) ? n.username || n.displayText : void 0, d = a ? a.author : void 0, o = Object(E.I)(e, {
						thingId: s
					});
					return q(Object.assign({}, t, {
						gilder: c,
						gildee: d,
						subredditId: o && o.id
					}))
				}, K = e => async (t, s) => {
					const n = s(),
						{
							awardId: b,
							id: f
						} = e,
						O = Object(p.a)(n, b);
					if (Object(h.h)(n)) {
						const e = "success.gild",
							t = {},
							s = O.icon32 ? O.icon32.url : O.icon.url;
						t.awardId = b, t.awardIcon = s, Object(r.a)({
							type: e,
							data: t
						})
					}
					if (O.awardType === o.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(E.I)(n, {
								thingId: f
							}),
							s = t && Object(E.B)(n, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - O.coinPrice)
					}
					t(H(n, e)), (n.posts.instances[f] || []).forEach(s => {
						t(H(n, Object.assign({}, e, {
							id: s
						})))
					});
					const j = Object(_.a)(f) ? a.fbt._("Success! You have given this post the {awardName} Award", [a.fbt._param("awardName", O.name)], {
							hk: "1Ndi4Z"
						}) : a.fbt._("Success! You have given this comment the {awardName} Award", [a.fbt._param("awardName", O.name)], {
							hk: "2sIK9Y"
						}),
						v = O.coinPrice;
					Object(k.a)(Object(y.viewSuccessAwardEvent)(f, v, O)(n)), t(Object(d.e)({
						kind: u.b.SuccessCommunity,
						text: j
					})), setTimeout(() => {
						const e = Object(P.a)(b, f),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const I = Object(_.a)(f) && Object(m.i)(Object(w.O)(n, {
						postId: f
					}));
					await t(Object(c.a)());
					const A = Object(g.d)(s()).filter(e => l.a.has(e.dealInfo.type));
					A.length && setTimeout(() => t(Object(i.h)({
						packageId: A[0].mobileId
					})), I ? 600 : 10)
				}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/actions/gold/constants.ts");
			const c = Object(a.a)(i.K),
				d = () => async e => {
					e(Object(n.i)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				o = s("./src/reddit/components/CoinBalance/index.m.less"),
				l = s.n(o);
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(a.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [a.fbt._param("Coin icon placeholder", ":coin:"), a.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": r.a.createElement(d.a, null)
			}), " ", r.a.createElement("a", {
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
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/gild.ts"),
				u = s("./src/reddit/models/Gold/Award.ts"),
				b = s("./src/reddit/actions/gold/communityAwards.ts"),
				p = s("./src/reddit/actions/gold/gild.ts"),
				h = s("./src/reddit/actions/gold/giveAward.ts"),
				g = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				f = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				O = s("./src/reddit/actions/subreddit.ts"),
				j = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/communityAwards.ts"),
				I = s("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				A = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				N = s("./src/reddit/selectors/gild.ts"),
				P = s("./src/reddit/selectors/gold/giveAwards.ts"),
				C = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				x = s("./src/reddit/selectors/goldPurchaseModals.ts"),
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
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./node_modules/fbt/lib/FbtPublic.js"),
				V = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				q = s.n(V),
				H = s("./src/reddit/helpers/awards/message.ts"),
				K = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				U = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				W = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				J = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				Q = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				z = s("./src/reddit/components/TimeLeft/TimeLeft.tsx");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const Y = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return n.a.createElement(n.a.Fragment, null, e.map((e, t) => 0 === t ? e : n.a.createElement(n.a.Fragment, {
						key: t + e
					}, n.a.createElement(Q.a, null), e)))
				}
				return null
			};
			class Z extends n.a.PureComponent {
				render() {
					const {
						award: e,
						className: t
					} = this.props, s = e.icon128 ? e.icon128.url : e.icon.url, a = !!e.pennyPrice;
					return n.a.createElement("div", {
						className: Object(c.a)(t, q.a.awardDescriptionContainer)
					}, n.a.createElement("div", {
						className: q.a.iconContainer
					}, n.a.createElement("img", {
						className: q.a.icon,
						src: s
					})), n.a.createElement("div", {
						className: q.a.awardName
					}, R.fbt._("{awardName} Award", [R.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), n.a.createElement("div", {
						className: q.a.price
					}, a ? R.fbt._("Purchase for ${dollarPrice}", [R.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : Object(J.a)(R.fbt._("Spend :coin:{coinPrice}", [R.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": n.a.createElement(Q.a, null)
					})), n.a.createElement("div", {
						className: q.a.benefits
					}, n.a.createElement(Y, {
						award: e
					})), e.endsAt && n.a.createElement(z.a, {
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
			class se extends n.a.PureComponent {
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
							toggleIsAnonymous: n
						} = this.props, r = e === $.PRIVATE;
						(!t && r || t && !r) && (s(Object(m.triggerAnonymousEvent)(r ? "check" : "uncheck", a)), n())
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : n.a.createElement(X.a, {
						className: q.a.giver,
						isSelected: t,
						text: R.fbt._("Make my gift anonymous", null, {
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
						maxLength: Object(H.c)(t, e),
						placeholder: R.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === a.maxLength ? (a.disabled = !0, a.placeholder = R.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : a.placeholder = R.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || a.maxLength > 0,
						i = r && s.length > a.maxLength;
					return n.a.createElement("div", {
						className: Object(c.a)(q.a.textAreaWrapper, {
							[q.a.messageTooLong]: i
						})
					}, n.a.createElement(K.s, te({
						className: q.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? s : ""
					}, a)), r && n.a.createElement("div", {
						className: q.a.characterCountdown
					}, a.maxLength - s.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? n.a.createElement("div", {
						className: q.a.publicIndicator
					}, n.a.createElement(U.a, {
						className: q.a.eyeIcon
					}), R.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				render() {
					const {
						className: e,
						selectedAward: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(c.a)(e, q.a.awardDetailsPane)
					}, n.a.createElement("div", {
						className: q.a.spacer
					}), n.a.createElement(ee, {
						award: t
					}), t.awardType === u.e.Moderator ? n.a.createElement("span", {
						className: q.a.giver
					}, n.a.createElement(W.a, {
						className: q.a.modIcon
					}), R.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var ae = se,
				ne = s("./src/config.ts"),
				re = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				ie = s.n(re),
				ce = s("./src/reddit/components/SubredditIcon/index.tsx"),
				de = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				oe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				le = s.n(oe),
				me = e => {
					const {
						className: t,
						text: s
					} = e;
					return n.a.createElement("div", {
						className: Object(c.a)(t, le.a.AnimatedPillBadge)
					}, s, n.a.createElement("div", {
						className: le.a.sheen
					}))
				};
			class ue extends n.a.Component {
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
					} = this.props, s = t ? ie.a.selected : "", a = e.icon128 ? e.icon128.url : e.icon.url;
					return n.a.createElement("button", {
						className: Object(c.a)(ie.a.selectableAward, s),
						onClick: this.onOptionClick
					}, n.a.createElement("div", {
						className: ie.a.buttonContent,
						tabIndex: -1
					}, n.a.createElement("div", {
						className: ie.a.iconContainer
					}, n.a.createElement("img", {
						className: ie.a.icon,
						src: a
					}), n.a.createElement("div", {
						className: ie.a.badgeContainer
					}, e.awardSubType !== u.c.Premium && e.isNew && n.a.createElement(me, {
						className: ie.a.iconNewBadge,
						text: R.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.c.Premium && n.a.createElement("div", {
						className: ie.a.iconPremiumBadgeContainer
					}, n.a.createElement(de.a, {
						className: ie.a.iconPremiumBadge
					})))), n.a.createElement("div", {
						className: ie.a.title
					}, e.name), n.a.createElement("div", {
						className: ie.a.metaText
					}, e.pennyPrice ? R.fbt._("Purchase for ${cost}", [R.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(J.a)(R.fbt._("Spend :coin:{cost}", [R.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": n.a.createElement(Q.a, null)
					})), e.endsAt && n.a.createElement(z.a, {
						className: ie.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var be = ue;
			const {
				fbt: pe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class he extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => n.a.createElement("div", {
						className: ie.a.giveImageContainer
					}, n.a.createElement("img", {
						className: ie.a.giveImage,
						src: "".concat(ne.a.assetPath, "/img/gold/award-give.png")
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
						onSelect: s,
						selectedAward: a,
						sendEvent: r,
						thingId: i
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ie.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ie.a.awardSectionTitle
					}, pe._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), n.a.createElement("div", {
						className: ie.a.awardSection
					}, e.map(e => n.a.createElement(be, {
						award: e,
						isSelected: e.id === a.id,
						key: e.id,
						onSelect: s,
						sendEvent: r,
						thingId: i
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: r,
						thingId: i
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ie.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ie.a.awardSectionTitle
					}, n.a.createElement(de.a, {
						className: Object(c.a)(ie.a.premiumIcon, ie.a.awardSectionIcon)
					}), pe._("Premium Awards", null, {
						hk: "35bhoK"
					})), n.a.createElement("div", {
						className: ie.a.awardSection
					}, e.map(e => n.a.createElement(be, {
						award: e,
						isSelected: e.id === a.id,
						key: e.id,
						onSelect: s,
						sendEvent: r,
						thingId: i
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: r,
						thingId: i
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ie.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ie.a.awardSectionTitle
					}, pe._("Medals", null, {
						hk: "1RRXJc"
					})), n.a.createElement("div", {
						className: ie.a.awardSection
					}, e.map(e => n.a.createElement(be, {
						award: e,
						isSelected: e.id === a.id,
						key: e.id,
						onSelect: s,
						sendEvent: r,
						thingId: i
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: r,
						subreddit: i,
						subredditName: c,
						thingId: d
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ie.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ie.a.awardSectionTitle
					}, n.a.createElement(ce.b, {
						className: ie.a.awardSectionIcon,
						subredditOrProfile: i
					}), pe._("r/{subredditName} Awards", [pe._param("subredditName", c)], {
						hk: "2nKNHH"
					})), n.a.createElement("div", {
						className: ie.a.awardSection
					}, e.map(e => {
						const t = e.id === a.id;
						return n.a.createElement(be, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: s,
							sendEvent: r,
							thingId: d
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: a,
						sendEvent: r,
						subredditName: i,
						thingId: d
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ie.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ie.a.awardSectionTitle
					}, n.a.createElement(W.a, {
						className: Object(c.a)(ie.a.modIcon, ie.a.awardSectionIcon)
					}), pe._("r/{subredditName} Moderator Awards", [pe._param("subredditName", i)], {
						hk: "4vVQ2A"
					})), n.a.createElement("div", {
						className: ie.a.awardSection
					}, e.map(e => {
						const t = e.id === a.id;
						return n.a.createElement(be, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: s,
							sendEvent: r,
							thingId: d
						})
					}))) : null
				}
				renderBanner() {
					return this.props.isLivestream && this.props.inViewerFeedTheMeter ? n.a.createElement("div", {
						className: ie.a.banner
					}, "Give your favorite broadcasts ", n.a.createElement("br", null), "more airtime with awards!") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: s,
						showPremiumAwards: a
					} = this.props;
					if (t || !e.length) return n.a.createElement("div", {
						className: Object(c.a)(s, ie.a.awardSelectorPane)
					});
					const r = new Set,
						i = {
							[u.c.Global]: [],
							[u.c.Moderator]: [],
							[u.c.Community]: [],
							[u.c.Appreciation]: [],
							[u.c.Premium]: []
						};
					e.forEach(e => {
						r.add(e.awardSubType), i[e.awardSubType] || (i[e.awardSubType] = []), i[e.awardSubType].push(e)
					});
					const d = !!(i[u.c.Community].length || i[u.c.Moderator].length || i[u.c.Appreciation].length || a && i[u.c.Premium].length) || i[u.c.Global].length > 3;
					return n.a.createElement("div", {
						className: Object(c.a)(s, ie.a.awardSelectorPane)
					}, this.renderBanner(), !d && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== u.c.Premium || a) ? this.rendererByAwardSubtype[e].call(this, i[e], d) : null))
				}
			}
			var ge = he,
				we = s("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				Ee = s.n(we),
				fe = s("./src/reddit/components/CoinBalance/index.tsx"),
				Oe = s("./src/reddit/controls/Button/index.tsx"),
				je = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = 10;
			class Ae extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(m.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: s
					} = this.props, a = (t || 0).toLocaleString();
					return n.a.createElement("div", {
						className: Ee.a.coinBalanceSection
					}, n.a.createElement(ce.b, {
						className: Ee.a.subredditIcon,
						subredditOrProfile: e
					}), ve._("r/{subredditName} Coin balance:", [ve._param("subredditName", s)], {
						hk: "2ktWRF"
					}), n.a.createElement("span", null, n.a.createElement(Q.a, null), a))
				}
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: s,
						thingId: a
					} = this.props, n = s.awardType === u.e.Moderator;
					return t ? ve._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || n ? Object(o.a)(a) ? ve._("Award post", null, {
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
						onGetPremium: r,
						onGild: i,
						onNeedPayment: d,
						pending: o,
						selectedAward: l,
						subredditCoins: m,
						userCoins: b
					} = this.props, p = l.awardType === u.e.Moderator, h = (p ? m : b) || 0;
					return n.a.createElement("div", {
						className: Object(c.a)(e, Ee.a.gildFooter)
					}, n.a.createElement("div", {
						className: Ee.a.footerContent
					}, p ? this.renderCommunityBalance() : n.a.createElement(fe.a, {
						className: Ee.a.coinBalanceSection,
						coinBalance: h,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), n.a.createElement(Oe.f, {
						className: a ? Ee.a.premiumButton : Ee.a.gildButton,
						"data-redditstyle": !0,
						disabled: o || p && s,
						onClick: a ? r : s ? d : i
					}, o ? n.a.createElement(je.a, {
						className: Ee.a.loadingIcon,
						sizePx: Ie
					}) : this.renderButtonText())), t && n.a.createElement("div", {
						className: Ee.a.errorText
					}, t))
				}
			}
			var Ne = Ae,
				Pe = s("./src/reddit/components/GildModalContent/index.m.less"),
				Ce = s.n(Pe);
			class xe extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(m.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						postOrComment: e
					} = this.props;
					return Object(J.a)(R.fbt._("Spend Coins to highlight this {Post or comment} for all to see! :learnMoreLink:", [R.fbt._param("Post or comment", e)], {
						hk: "2srS0W"
					}), {
						":learnMoreLink:": n.a.createElement("a", {
							className: Ce.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, R.fbt._("How do Awards work?", null, {
							hk: "2zRUgX"
						}))
					})
				}
				render() {
					const {
						className: e,
						postOrComment: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(c.a)(e, Ce.a.gildHeader)
					}, n.a.createElement("div", {
						className: Ce.a.headerText
					}, n.a.createElement("div", {
						className: Ce.a.mainText
					}, n.a.createElement("span", null, R.fbt._("Give an Award to this {Post or comment}!", [R.fbt._param("Post or comment", t)], {
						hk: "4qJ474"
					}))), n.a.createElement("div", {
						className: Ce.a.subText
					}, this.renderEmojiSubText())), n.a.createElement("button", {
						className: Ce.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, n.a.createElement(K.b, {
						className: Ce.a.closeBtnIcon
					})))
				}
			}
			var _e = xe;
			const ye = Object(i.a)(Object(i.c)({
					awards: (e, t) => {
						let {
							thingId: s,
							subredditId: a
						} = t, n = a;
						if (!a) {
							const t = Object(k.I)(e, {
								thingId: s
							});
							n = t && t.id
						}
						if (!n && Object(o.a)(s)) {
							const t = Object(_.O)(e, {
								postId: s
							});
							n = t && t.belongsTo.id
						}
						return n ? Object(v.g)(e, {
							subredditId: n
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: s,
							subredditId: a
						} = t, n = a;
						if (!a) {
							const t = Object(k.I)(e, {
								thingId: s
							});
							if (!t) return !1;
							n = t.id
						}
						return Object(v.f)(e, {
							subredditId: n
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
						}) : Object(j.n)(e, {
							commentId: s
						})
					},
					purchaseCatalogPending: C.g,
					showPremiumAwards: I.a,
					showPurchaseModal: x.r,
					selectedAward: P.a,
					subreddit: k.I,
					subredditCoins: (e, t) => {
						let {
							thingId: s,
							subredditId: a
						} = t;
						const n = Object(k.I)(e, {
								thingId: s
							}),
							r = n ? n.id : a;
						return Object(k.A)(e, {
							subredditId: r
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
						selectedAward: n,
						subredditCoins: r,
						userCoins: i
					} = e, {
						awardType: c,
						coinPrice: d,
						pennyPrice: l
					} = n, m = c === u.e.Moderator, b = !!l || ((m ? r : i) || 0) < d && !(s && !m), p = a && a.media && "rpan" === a.media.type, h = a ? ((e, t) => {
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
						cost: l || d,
						isRpanPost: !!p
					})
				}),
				ke = ["pan_media", "pan2", "pan3"];
			class Se extends n.a.Component {
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
							thingId: n,
							userCoins: r
						} = this.props;
						a(Object(m.clickNextButtonEvent)(n)), t(r, e, n, !!s.pennyPrice), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: s
						} = this.props;
						t(Object(m.clickGetPremiumEvent)(s, e)), Object(d.d)("/premium", d.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: s,
							selectedAward: a,
							sendEvent: n,
							thingId: r
						} = this.props;
						return n(Object(m.clickConfirmAwardEvent)(r, a)), e(t, !!s)
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
						postOrComment: n,
						purchaseCatalogPending: r,
						purchaseCatalogRequested: i,
						selectedAward: c,
						sendEvent: d,
						setIsAnonymous: o,
						subreddit: u,
						subredditAboutRequested: b,
						subredditId: p,
						subredditName: h,
						thingId: g
					} = this.props;
					d(Object(m.viewGildModalEvent)(c.id, t, g)), o(!s && Object(l.k)());
					const w = u ? u.id : p || (n && n.belongsTo ? n.belongsTo.id : void 0);
					if (w && e(w), u || h) {
						b(u ? u.name : h)
					}
					a && (c.pennyPrice ? G() : Object(M.b)(), r || i())
				}
				render() {
					const {
						author: e,
						awards: t,
						awardsPending: s,
						className: a,
						closeGildModal: r,
						currentUser: i,
						errorMessage: d,
						iFramed: l,
						isAnonymous: b,
						isRpanPost: p,
						inViewerFeedTheMeter: h,
						message: g,
						needPayment: w,
						pending: E,
						postOrComment: f,
						selectAward: O,
						selectedAward: j,
						sendEvent: v,
						showPurchaseModal: I,
						showPremiumAwards: A,
						subreddit: N,
						subredditCoins: P,
						subredditName: C,
						thingId: x,
						userCoins: _
					} = this.props, {
						showPurchaseModalInThisInstance: y
					} = this.state, k = f ? f.author : e, S = Object(o.a)(x) ? "post" : "comment", T = I && y, L = T && !j.pennyPrice, B = T && !!j.pennyPrice, G = (L || B) && !l;
					if (L && G) return n.a.createElement(M.a, {
						isCompletePaypal: !1
					});
					if (B && G) return n.a.createElement(D, {
						isCompletePaypal: !1
					});
					const F = N ? N.name : C,
						R = ke.includes(F) ? "pan" : F,
						V = !i || !i.isGold && j.awardSubType === u.c.Premium;
					return n.a.createElement("div", {
						className: Object(c.a)(a, Ce.a.gildModalContent)
					}, n.a.createElement(_e, {
						authorName: k,
						postOrComment: S,
						onCancel: r,
						sendEvent: v,
						thingId: x
					}), n.a.createElement("div", {
						className: Ce.a.modalMainContent
					}, n.a.createElement(ge, {
						awards: t,
						awardsPending: s,
						onSelect: e => {
							O(e), v(Object(m.clickSelectAwardEvent)(e, x))
						},
						selectedAward: j,
						sendEvent: v,
						showPremiumAwards: A,
						subreddit: N,
						subredditName: R,
						thingId: x,
						isLivestream: p,
						inViewerFeedTheMeter: h
					}), n.a.createElement(ae, {
						forcePublic: p,
						isAnonymous: b,
						isLivestream: p,
						message: g,
						selectedAward: j,
						sendEvent: v,
						thingId: x,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput
					})), n.a.createElement(Ne, {
						errorMessage: d || void 0,
						needPayment: w,
						needPremium: V,
						onNeedPayment: this.onNeedPayment,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: E,
						selectedAward: j,
						sendEvent: v,
						subreddit: N,
						subredditName: R,
						subredditCoins: P,
						thingId: x,
						userCoins: _
					}), L && n.a.createElement(M.a, {
						isCompletePaypal: !1
					}), B && n.a.createElement(D, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(ye, (e, t) => {
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
					needPaymentRequested: (t, s, a, n) => {
						e(n ? Object(E.e)(s, a) : Object(w.g)(t, s, a))
					},
					purchaseCatalogRequested: () => e(Object(f.a)()),
					selectAward: t => e(Object(h.a)(t)),
					setIsAnonymous: t => {
						e(Object(p.setIsAnonymous)(t)), Object(l.M)(t)
					},
					subredditAboutRequested: t => e(Object(O.t)(t)),
					updateMessage: t => e(Object(p.updateMessage)(t))
				}
			})(Object(F.c)(Se))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/components/TimeLeft/index.m.less"),
				i = s.n(r),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: s
				} = e, a = Math.floor(s.getTime() / 1e3), r = Object(d.b)(a);
				return n.a.createElement("div", {
					className: Object(c.a)(t)
				}, n.a.createElement(o.a, {
					className: i.a.clockIcon
				}), n.a.createElement("span", {
					className: i.a.timeLeft
				}, r))
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
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			}));
			const a = 500,
				n = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < a ? 0 : e.coinPrice < n ? 50 : 100 : 2048
				},
				i = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const a = r(t, s);
					return e.slice(0, a)
				}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function r(e, t) {
				const s = e.toString().split(":");
				return s.length % 2 == 0 ? e : s.reduce((e, s, a) => (a % 2 == 0 ? e.push(s) : "" === s ? e.push(":") : ":".concat(s, ":") in t ? e.push(t[":".concat(s, ":")]) : e.push(":".concat(s, ":")), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, n.a.createElement("g", null, n.a.createElement("path", {
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
				return C
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
				return H
			})), s.d(t, "d", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				b = s.n(m)()(e => Object(n.a)(Object(a.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				w = e => e.publicAccessNetwork.history.cursor,
				E = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				O = Object(a.a)(f, e => e.ended),
				j = Object(a.a)(f, e => e.removed),
				v = Object(a.a)(e => e.publicAccessNetwork.models, O, j, (e, t, s) => {
					const a = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = F(a, c.b.ENDED) ? c.b.ENDED : a,
							r = s.stream.vod_accessible;
						return n === a && !0 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = F(a, c.b.ENDED) ? c.b.ENDED : a,
							r = s.stream.vod_accessible;
						return n === a && !1 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, a)
				}),
				I = (e, t) => {
					return v(e)[Object(i.g)(t)]
				},
				A = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => b(t.listingName)(e, t), v, h, d.i, o.b, (e, t, s, a, n, d) => {
					if (d) {
						const r = [];
						if (e) {
							const t = Object(i.g)(e);
							s[t] && r.push(t)
						}
						const d = r.concat(t),
							o = [...new Set(d)],
							l = new Set([...a, ...n]);
						return o.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.b.KILLED && t.stream.state !== c.b.PURGED
						})
					}
					const o = new Set([...a, ...n]);
					return Object.keys(s).filter(e => !o.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.b.KILLED && e.stream.state !== c.b.PURGED).map(e => e.post.id)
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
						return !!s && s.stream.state === c.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				C = Object(a.a)(v, N, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === c.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				x = Object(a.a)(E, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return N(e, {
						listingName: s || n,
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
						subreddit: n
					} = t;
					return N(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, g, (e, t, s, a) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === c.b.IS_LIVE);
					if (r) return r.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (a.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				y = Object(n.a)(Object(a.a)(_, v, (e, t) => e ? t[e] : void 0)),
				k = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, _, h, d.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return N(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, (e, t, s, a, n) => !e || s.includes(e) || a.includes(e) ? t || n[0] : e),
				S = Object(a.a)(w, E, x, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(a.a)(w, E, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(n.a)(Object(a.a)(k, v, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(a.a)(S, v, (e, t) => e ? t[e] : void 0)),
				B = Object(n.a)(Object(a.a)(M, v, (e, t) => e ? t[e] : void 0)),
				G = (Object(n.a)(Object(a.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
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

			function F(e, t) {
				const s = {
					[c.b.NOT_STARTED]: 0,
					[c.b.PUBLISHED]: 1,
					[c.b.IS_LIVE]: 2,
					[c.b.DISCONNECTED]: 2,
					[c.b.ENDED]: 3,
					[c.b.KILLED]: 4,
					[c.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(a.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const q = Object(a.a)(k, v, p.b, (e, t, s) => {
					if (s) return V.INTRO;
					const a = e && t[e];
					if (!a) return V.UNAVAILABLE;
					const n = a.stream.state;
					return n === c.b.IS_LIVE || n === c.b.DISCONNECTED ? V.LIVE : n === c.b.ENDED && a.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				H = Object(a.a)(T, q, p.b, l.c, l.p, (e, t, s, a, n) => s ? a : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : n : void 0),
				K = Object(a.a)(T, q, R, (e, t, s) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				c = Object(a.a)(i, r.o, (e, t) => t && !e.isIntroFinished),
				d = Object(a.a)(i, e => e.lastChatActivityUtcTs),
				o = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=FramedGild~GildModal.a1bdbfeed38f6ac2182a.js.map