// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.af395feb74ed1cf4e02b.js
// Retrieved at 4/13/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"e3fd25f3fd15"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"df757af47083"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return x
			})), s.d(t, "setIncludeMessage", (function() {
				return _
			})), s.d(t, "updateMessage", (function() {
				return y
			})), s.d(t, "gildGqlRequested", (function() {
				return k
			})), s.d(t, "triggerLoader", (function() {
				return S
			})), s.d(t, "gildPending", (function() {
				return T
			})), s.d(t, "gildFailed", (function() {
				return B
			})), s.d(t, "gildSuccessful", (function() {
				return F
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/messageIframeParent/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/models/Gold/Award.ts"),
				d = s("./src/reddit/models/Toast/index.ts"),
				o = s("./src/reddit/selectors/comments.ts"),
				l = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/graphql/operations/GildComment.json"),
				g = s("./src/graphql/operations/GildPost.json"),
				w = s("./src/lib/makeGqlRequest/index.ts"),
				E = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const f = (e, t, s) => Object(w.a)(e, Object.assign({}, g, {
					variables: t
				}), {
					query: s ? {} : Object(E.b)()
				}),
				j = (e, t, s) => Object(w.a)(e, Object.assign({}, h, {
					variables: t
				}), {
					query: s ? {} : Object(E.b)()
				});
			var v = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				N = s("./src/reddit/helpers/awards/message.ts"),
				O = s("./src/reddit/helpers/correlationIdTracker.ts"),
				A = s("./src/reddit/helpers/isPost.ts"),
				P = s("./src/reddit/helpers/trackers/gild.ts"),
				I = s("./src/telemetry/index.ts"),
				C = s("./src/reddit/actions/gold/constants.ts");
			const x = Object(a.a)(C.p),
				_ = Object(a.a)(C.o),
				y = Object(a.a)(C.s),
				k = (e, t) => async (s, a, r) => {
					let {
						gqlContext: i
					} = r;
					const c = a().gild,
						{
							isOldReddit: d,
							isLivestream: o
						} = t;
					s(T());
					try {
						const t = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: Object(N.d)(c.message, c.selectedAward, o),
								nodeId: e
							},
							a = Object(A.a)(e) ? f : j,
							r = await a(i(), {
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
								} = t.data,
								a = Object(A.a)(e) ? r.body.data.gild.postInfo : r.body.data.gild.comment,
								{
									awardings: i,
									treatmentTags: d
								} = a;
							await s(F({
								awardId: c.selectedAward.id,
								awardings: i,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins,
								treatmentTags: d
							}))
						} else {
							const e = m && m[0] && m[0].message,
								t = u && u[0] && u[0].message,
								a = e || t || n.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(B(a))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(B(t))
					} finally {
						Object(O.b)(O.a.GildingFlow)
					}
				}, S = Object(a.a)(C.r), M = Object(a.a)(C.n), T = () => async (e, t) => {
					e(M()), window.setTimeout(() => {
						t().gild.api.pending && e(S())
					}, 2e3)
				}, L = Object(a.a)(C.m), B = e => async (t, s) => {
					await t(L(e)), t(Object(i.e)({
						kind: d.b.Error,
						duration: i.a,
						text: e
					}))
				}, G = Object(a.a)(C.q), D = (e, t) => {
					const {
						id: s
					} = t, n = Object(A.a)(s) ? Object(u.N)(e, {
						postId: s
					}) : Object(o.n)(e, {
						commentId: s
					}), a = Object(b.i)(e), r = e.gild, {
						isAnonymous: i
					} = r, c = !i && a && (a.username || a.displayText) ? a.username || a.displayText : void 0, d = n ? n.author : void 0, l = Object(p.H)(e, {
						thingId: s
					});
					return G(Object.assign({}, t, {
						gilder: c,
						gildee: d,
						subredditId: l && l.id
					}))
				}, F = e => async (t, s) => {
					const a = s(),
						{
							awardId: o,
							id: u
						} = e,
						b = Object(l.a)(a, o);
					if (Object(m.h)(a)) {
						const e = "success.gild",
							t = {},
							s = b.icon32 ? b.icon32.url : b.icon.url;
						t.awardId = o, t.awardIcon = s, Object(r.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === c.d.Moderator && void 0 === e.subredditCoins) {
						const t = Object(p.H)(a, {
								thingId: u
							}),
							s = t && Object(p.A)(a, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - b.coinPrice)
					}
					t(D(a, e)), (a.posts.instances[u] || []).forEach(s => {
						t(D(a, Object.assign({}, e, {
							id: s
						})))
					});
					const h = Object(A.a)(u) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						g = b.coinPrice;
					Object(I.a)(Object(P.viewSuccessAwardEvent)(u, g, b)(a)), t(Object(i.e)({
						kind: d.b.SuccessCommunity,
						text: h
					})), setTimeout(() => {
						const e = Object(v.a)(o, u),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				o = s("./src/reddit/components/CoinBalance/index.m.less"),
				l = s.n(o);
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(n.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [n.fbt._param("Coin icon placeholder", ":coin:"), n.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
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
				premiumButton: "_3QiLbbTpb2izwuTyxaeqdY",
				gildButton: "_2qmjJbARve3fBrc8oz-Ufa",
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/gild.ts"),
				u = s("./src/reddit/models/Gold/Award.ts"),
				p = s("./src/reddit/actions/gold/communityAwards.ts"),
				b = s("./src/reddit/actions/gold/gild.ts"),
				h = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/gold/constants.ts");
			const w = Object(h.a)(g.K);
			var E = s("./src/reddit/actions/gold/modals.ts"),
				f = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				j = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				v = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/communityAwards.ts"),
				P = s("./src/reddit/selectors/experiments/goldPremiumAwards.ts"),
				I = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				C = s("./src/reddit/selectors/gild.ts"),
				x = s("./src/reddit/selectors/gold/giveAwards.ts"),
				_ = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				B = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				G = s("./src/lib/loadWithRetries/index.ts"),
				D = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const F = () => Object(G.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("CoinsPurchaseModal~PennyPurchaseModal"), s.e("PennyPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(D.c)()])).then(e => e[0].default);
			var R = Object(B.a)({
					getComponent: F,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				V = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./node_modules/fbt/lib/FbtPublic.js"),
				H = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				K = s.n(H),
				X = s("./src/reddit/helpers/awards/message.ts"),
				J = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				U = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				W = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				z = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				Y = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				Z = s("./src/reddit/components/TimeLeft/TimeLeft.tsx");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const $ = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return a.a.createElement(a.a.Fragment, null, e.map((e, t) => 0 === t ? e : a.a.createElement(a.a.Fragment, {
						key: t + e
					}, a.a.createElement(Y.a, null), e)))
				}
				return null
			};
			class ee extends a.a.PureComponent {
				render() {
					const {
						award: e,
						className: t
					} = this.props, s = e.icon128 ? e.icon128.url : e.icon.url, n = !!e.pennyPrice;
					return a.a.createElement("div", {
						className: Object(c.a)(t, K.a.awardDescriptionContainer)
					}, a.a.createElement("div", {
						className: K.a.iconContainer
					}, a.a.createElement("img", {
						className: K.a.icon,
						src: s
					})), a.a.createElement("div", {
						className: K.a.awardName
					}, q.fbt._("{awardName} Award", [q.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), a.a.createElement("div", {
						className: K.a.price
					}, n ? q.fbt._("Purchase for ${dollarPrice}", [q.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : Object(z.a)(q.fbt._("Spend :coin:{coinPrice}", [q.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": a.a.createElement(Y.a, null)
					})), a.a.createElement("div", {
						className: K.a.benefits
					}, a.a.createElement($, {
						award: e
					})), e.endsAt && a.a.createElement(Z.a, {
						className: K.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var te, se = ee;

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(te || (te = {}));
			class ae extends a.a.PureComponent {
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
							toggleIsAnonymous: n
						} = this.props;
						t(Object(m.triggerAnonymousEvent)(e ? "uncheck" : "check", s)), n()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: s,
							thingId: n,
							toggleIsAnonymous: a
						} = this.props, r = e === te.PRIVATE;
						(!t && r || t && !r) && (s(Object(m.triggerAnonymousEvent)(r ? "check" : "uncheck", n)), a())
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : a.a.createElement(U.a, {
						className: K.a.giver,
						isSelected: t,
						text: q.fbt._("Make my gift anonymous", null, {
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
					} = this.props, n = {
						disabled: !1,
						maxLength: Object(X.c)(t, e),
						placeholder: q.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = q.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = q.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || n.maxLength > 0,
						i = r && s.length > n.maxLength;
					return a.a.createElement("div", {
						className: Object(c.a)(K.a.textAreaWrapper, {
							[K.a.messageTooLong]: i
						})
					}, a.a.createElement(J.q, ne({
						className: K.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? s : ""
					}, n)), r && a.a.createElement("div", {
						className: K.a.characterCountdown
					}, n.maxLength - s.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? a.a.createElement("div", {
						className: K.a.publicIndicator
					}, a.a.createElement(W.a, {
						className: K.a.eyeIcon
					}), q.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				render() {
					const {
						className: e,
						selectedAward: t
					} = this.props;
					return a.a.createElement("div", {
						className: Object(c.a)(e, K.a.awardDetailsPane)
					}, a.a.createElement("div", {
						className: K.a.spacer
					}), a.a.createElement(se, {
						award: t
					}), t.awardType === u.d.Moderator ? a.a.createElement("span", {
						className: K.a.giver
					}, a.a.createElement(Q.a, {
						className: K.a.modIcon
					}), q.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator())
				}
			}
			var re = ae,
				ie = s("./src/config.ts"),
				ce = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				de = s.n(ce),
				oe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				le = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				me = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				ue = s.n(me),
				pe = e => {
					const {
						className: t,
						text: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(t, ue.a.AnimatedPillBadge)
					}, s, a.a.createElement("div", {
						className: ue.a.sheen
					}))
				};
			class be extends a.a.Component {
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
					} = this.props, s = t ? de.a.selected : "", n = e.icon128 ? e.icon128.url : e.icon.url;
					return a.a.createElement("button", {
						className: Object(c.a)(de.a.selectableAward, s),
						onClick: this.onOptionClick
					}, a.a.createElement("div", {
						className: de.a.buttonContent,
						tabIndex: -1
					}, a.a.createElement("div", {
						className: de.a.iconContainer
					}, a.a.createElement("img", {
						className: de.a.icon,
						src: n
					}), a.a.createElement("div", {
						className: de.a.badgeContainer
					}, e.awardSubType !== u.c.Premium && e.isNew && a.a.createElement(pe, {
						className: de.a.iconNewBadge,
						text: q.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === u.c.Premium && a.a.createElement("div", {
						className: de.a.iconPremiumBadgeContainer
					}, a.a.createElement(le.a, {
						className: de.a.iconPremiumBadge
					})))), a.a.createElement("div", {
						className: de.a.title
					}, e.name), a.a.createElement("div", {
						className: de.a.metaText
					}, e.pennyPrice ? q.fbt._("Purchase for ${cost}", [q.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(z.a)(q.fbt._("Spend :coin:{cost}", [q.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": a.a.createElement(Y.a, null)
					})), e.endsAt && a.a.createElement(Z.a, {
						className: de.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var he = be;
			const {
				fbt: ge
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class we extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => a.a.createElement("div", {
						className: de.a.giveImageContainer
					}, a.a.createElement("img", {
						className: de.a.giveImage,
						src: "".concat(ie.a.assetPath, "/img/gold/award-give.png")
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
						selectedAward: n,
						sendEvent: r,
						thingId: i
					} = this.props;
					return e.length ? a.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && a.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, ge._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), a.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => a.a.createElement(he, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: s,
						sendEvent: r,
						thingId: i
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: n,
						sendEvent: r,
						thingId: i
					} = this.props;
					return e.length ? a.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && a.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, a.a.createElement(le.a, {
						className: Object(c.a)(de.a.premiumIcon, de.a.awardSectionIcon)
					}), ge._("Premium Awards", null, {
						hk: "35bhoK"
					})), a.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => a.a.createElement(he, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: s,
						sendEvent: r,
						thingId: i
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: n,
						sendEvent: r,
						thingId: i
					} = this.props;
					return e.length ? a.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && a.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, ge._("Medals", null, {
						hk: "1RRXJc"
					})), a.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => a.a.createElement(he, {
						award: e,
						isSelected: e.id === n.id,
						key: e.id,
						onSelect: s,
						sendEvent: r,
						thingId: i
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: s,
						selectedAward: n,
						sendEvent: r,
						subreddit: i,
						subredditName: c,
						thingId: d
					} = this.props;
					return e.length ? a.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && a.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, a.a.createElement(oe.b, {
						className: de.a.awardSectionIcon,
						subredditOrProfile: i
					}), ge._("r/{subredditName} Awards", [ge._param("subredditName", c)], {
						hk: "2nKNHH"
					})), a.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return a.a.createElement(he, {
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
						selectedAward: n,
						sendEvent: r,
						subredditName: i,
						thingId: d
					} = this.props;
					return e.length ? a.a.createElement("div", {
						className: de.a.awardSectionContainer
					}, t && a.a.createElement("div", {
						className: de.a.awardSectionTitle
					}, a.a.createElement(Q.a, {
						className: Object(c.a)(de.a.modIcon, de.a.awardSectionIcon)
					}), ge._("r/{subredditName} Moderator Awards", [ge._param("subredditName", i)], {
						hk: "4vVQ2A"
					})), a.a.createElement("div", {
						className: de.a.awardSection
					}, e.map(e => {
						const t = e.id === n.id;
						return a.a.createElement(he, {
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
					return this.props.isLivestream && this.props.inViewerFeedTheMeter ? a.a.createElement("div", {
						className: de.a.banner
					}, "RPAN is supported by contributions ", a.a.createElement("br", null), "from viewers like you.") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: s,
						showPremiumAwards: n
					} = this.props;
					if (t || !e.length) return a.a.createElement("div", {
						className: Object(c.a)(s, de.a.awardSelectorPane)
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
					const d = !!(i[u.c.Community].length || i[u.c.Moderator].length || i[u.c.Appreciation].length || n && i[u.c.Premium].length) || i[u.c.Global].length > 3;
					return a.a.createElement("div", {
						className: Object(c.a)(s, de.a.awardSelectorPane)
					}, this.renderBanner(), !d && this.renderSnooImage(), [...r].map(e => this.rendererByAwardSubtype[e] && (e !== u.c.Premium || n) ? this.rendererByAwardSubtype[e].call(this, i[e], d) : null))
				}
			}
			var Ee = we,
				fe = s("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				je = s.n(fe),
				ve = s("./src/reddit/components/CoinBalance/index.tsx"),
				Ne = s("./src/reddit/controls/Button/index.tsx"),
				Oe = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: Ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pe = 10;
			class Ie extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(m.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: s
					} = this.props, n = (t || 0).toLocaleString();
					return a.a.createElement("div", {
						className: je.a.coinBalanceSection
					}, a.a.createElement(oe.b, {
						className: je.a.subredditIcon,
						subredditOrProfile: e
					}), Ae._("r/{subredditName} Coin balance:", [Ae._param("subredditName", s)], {
						hk: "2ktWRF"
					}), a.a.createElement("span", null, a.a.createElement(Y.a, null), n))
				}
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: s,
						thingId: n
					} = this.props, a = s.awardType === u.d.Moderator;
					return t ? Ae._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || a ? Object(o.a)(n) ? Ae._("Award post", null, {
						hk: "1Ydq4H"
					}) : Ae._("Award comment", null, {
						hk: "4CfMGF"
					}) : Ae._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						className: e,
						errorMessage: t,
						needPayment: s,
						needPremium: n,
						onGetPremium: r,
						onGild: i,
						onNeedPayment: d,
						pending: o,
						selectedAward: l,
						subredditCoins: m,
						userCoins: p
					} = this.props, b = l.awardType === u.d.Moderator, h = (b ? m : p) || 0;
					return a.a.createElement("div", {
						className: Object(c.a)(e, je.a.gildFooter)
					}, a.a.createElement("div", {
						className: je.a.footerContent
					}, b ? this.renderCommunityBalance() : a.a.createElement(ve.a, {
						className: je.a.coinBalanceSection,
						coinBalance: h,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), a.a.createElement(Ne.f, {
						className: n ? je.a.premiumButton : je.a.gildButton,
						"data-redditstyle": !0,
						disabled: o || b && s,
						onClick: n ? r : s ? d : i
					}, o ? a.a.createElement(Oe.a, {
						className: je.a.loadingIcon,
						sizePx: Pe
					}) : this.renderButtonText())), t && a.a.createElement("div", {
						className: je.a.errorText
					}, t))
				}
			}
			var Ce = Ie,
				xe = s("./src/reddit/components/GildModalContent/index.m.less"),
				_e = s.n(xe);
			class ye extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(m.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						postOrComment: e
					} = this.props;
					return Object(z.a)(q.fbt._("Spend Coins to highlight this {Post or comment} for all to see! :learnMoreLink:", [q.fbt._param("Post or comment", e)], {
						hk: "2srS0W"
					}), {
						":learnMoreLink:": a.a.createElement("a", {
							className: _e.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, q.fbt._("How do Awards work?", null, {
							hk: "2zRUgX"
						}))
					})
				}
				render() {
					const {
						className: e,
						postOrComment: t
					} = this.props;
					return a.a.createElement("div", {
						className: Object(c.a)(e, _e.a.gildHeader)
					}, a.a.createElement("div", {
						className: _e.a.headerText
					}, a.a.createElement("div", {
						className: _e.a.mainText
					}, a.a.createElement("span", null, q.fbt._("Give an Award to this {Post or comment}!", [q.fbt._param("Post or comment", t)], {
						hk: "4qJ474"
					}))), a.a.createElement("div", {
						className: _e.a.subText
					}, this.renderEmojiSubText())), a.a.createElement("button", {
						className: _e.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, a.a.createElement(J.b, {
						className: _e.a.closeBtnIcon
					})))
				}
			}
			var ke = ye;
			const Se = Object(i.a)(Object(i.c)({
					awards: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t, a = n;
						if (!n) {
							const t = Object(M.H)(e, {
								thingId: s
							});
							a = t && t.id
						}
						if (!a && Object(o.a)(s)) {
							const t = Object(k.N)(e, {
								postId: s
							});
							a = t && t.belongsTo.id
						}
						return a ? Object(A.g)(e, {
							subredditId: a
						}) : []
					},
					awardsPending: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t, a = n;
						if (!n) {
							const t = Object(M.H)(e, {
								thingId: s
							});
							if (!t) return !1;
							a = t.id
						}
						return Object(A.f)(e, {
							subredditId: a
						})
					},
					currentUser: T.i,
					errorMessage: C.a,
					isAnonymous: C.g,
					iFramed: C.h,
					isEmployee: T.D,
					message: C.b,
					pending: C.e,
					postOrComment: (e, t) => {
						let {
							thingId: s
						} = t;
						return Object(o.a)(s) ? Object(k.N)(e, {
							postId: s
						}) : Object(O.n)(e, {
							commentId: s
						})
					},
					purchaseCatalogPending: _.e,
					showPremiumAwards: P.a,
					showPurchaseModal: y.r,
					selectedAward: x.a,
					subreddit: M.H,
					subredditCoins: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t;
						const a = Object(M.H)(e, {
								thingId: s
							}),
							r = a ? a.id : n;
						return Object(M.z)(e, {
							subredditId: r
						})
					},
					userCoins: T.d,
					inViewerFeedTheMeter: (e, t) => {
						let {
							thingId: s
						} = t;
						return Object(I.d)(e, s, S.k)
					}
				}), e => {
					const {
						awards: t,
						isEmployee: s,
						postOrComment: n,
						selectedAward: a,
						subredditCoins: r,
						userCoins: i
					} = e, {
						awardType: c,
						coinPrice: d,
						pennyPrice: l
					} = a, m = c === u.d.Moderator, p = !!l || ((m ? r : i) || 0) < d && !(s && !m), b = n && n.media && "rpan" === n.media.type, h = n ? ((e, t) => {
						const s = Object(o.a)(t.id);
						return s ? e.filter(e => !(e => {
							for (const t of e)
								if (t.startsWith("econ:transferable:econ:render:")) return !0;
							return !1
						})(e.tags || [])) : e
					})(t, n) : t;
					return Object.assign({}, e, {
						awards: h,
						needPayment: p,
						cost: l || d,
						isRpanPost: !!b
					})
				}),
				Me = ["pan_media", "pan2", "pan3"];
			class Te extends a.a.Component {
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
							sendEvent: n,
							thingId: a,
							userCoins: r
						} = this.props;
						n(Object(m.clickNextButtonEvent)(a)), t(r, e, a, !!s.pennyPrice), this.setState({
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
							selectedAward: n,
							sendEvent: a,
							thingId: r
						} = this.props;
						return a(Object(m.clickConfirmAwardEvent)(r, n)), e(t, !!s)
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
						isRpanPost: s,
						needPayment: n,
						postOrComment: a,
						purchaseCatalogPending: r,
						purchaseCatalogRequested: i,
						selectedAward: c,
						sendEvent: d,
						setIsAnonymous: o,
						subreddit: u,
						subredditAboutRequested: p,
						subredditId: b,
						subredditName: h,
						thingId: g
					} = this.props;
					d(Object(m.viewGildModalEvent)(c.id, t, g)), o(!s && Object(l.k)());
					const w = u ? u.id : b || (a && a.belongsTo ? a.belongsTo.id : void 0);
					if (w && e(w), u || h) {
						p(u ? u.name : h)
					}
					n && (c.pennyPrice ? F() : Object(L.b)(), r || i())
				}
				render() {
					const {
						author: e,
						awards: t,
						awardsPending: s,
						className: n,
						closeGildModal: r,
						currentUser: i,
						errorMessage: d,
						iFramed: l,
						isAnonymous: p,
						isRpanPost: b,
						inViewerFeedTheMeter: h,
						message: g,
						needPayment: w,
						pending: E,
						postOrComment: f,
						selectAward: j,
						selectedAward: v,
						sendEvent: N,
						showPurchaseModal: O,
						showPremiumAwards: A,
						subreddit: P,
						subredditCoins: I,
						subredditName: C,
						thingId: x,
						userCoins: _
					} = this.props, {
						showPurchaseModalInThisInstance: y
					} = this.state, k = f ? f.author : e, S = Object(o.a)(x) ? "post" : "comment", M = O && y, T = M && !v.pennyPrice, B = M && !!v.pennyPrice, G = (T || B) && !l;
					if (T && G) return a.a.createElement(L.a, {
						isCompletePaypal: !1
					});
					if (B && G) return a.a.createElement(R, {
						isCompletePaypal: !1
					});
					const D = P ? P.name : C,
						F = Me.includes(D) ? "pan" : D,
						V = !i || !i.isGold && v.awardSubType === u.c.Premium;
					return a.a.createElement("div", {
						className: Object(c.a)(n, _e.a.gildModalContent)
					}, a.a.createElement(ke, {
						authorName: k,
						postOrComment: S,
						onCancel: r,
						sendEvent: N,
						thingId: x
					}), a.a.createElement("div", {
						className: _e.a.modalMainContent
					}, a.a.createElement(Ee, {
						awards: t,
						awardsPending: s,
						onSelect: e => {
							j(e), N(Object(m.clickSelectAwardEvent)(e, x))
						},
						selectedAward: v,
						sendEvent: N,
						showPremiumAwards: A,
						subreddit: P,
						subredditName: F,
						thingId: x,
						isLivestream: b,
						inViewerFeedTheMeter: h
					}), a.a.createElement(re, {
						forcePublic: b,
						isAnonymous: p,
						isLivestream: b,
						message: g,
						selectedAward: v,
						sendEvent: N,
						thingId: x,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput
					})), a.a.createElement(Ce, {
						errorMessage: d || void 0,
						needPayment: w,
						needPremium: V,
						onNeedPayment: this.onNeedPayment,
						onGetPremium: this.onGetPremium,
						onGild: this.onGildRequested,
						pending: E,
						selectedAward: v,
						sendEvent: N,
						subreddit: P,
						subredditName: F,
						subredditCoins: I,
						thingId: x,
						userCoins: _
					}), T && a.a.createElement(L.a, {
						isCompletePaypal: !1
					}), B && a.a.createElement(R, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(Se, (e, t) => {
				let {
					thingId: s
				} = t;
				return {
					awardsRequested: t => e(Object(p.h)(t)),
					closeGildModal: () => e(Object(E.a)()),
					gildRequested: (t, n) => e(Object(b.gildGqlRequested)(s, {
						isOldReddit: t,
						isLivestream: n
					})),
					needPaymentRequested: (t, s, n, a) => {
						e(a ? Object(j.e)(s, n) : Object(f.g)(t, s, n))
					},
					purchaseCatalogRequested: () => e(Object(v.a)()),
					selectAward: t => e(w(t)),
					setIsAnonymous: t => {
						e(Object(b.setIsAnonymous)(t)), Object(l.J)(t)
					},
					subredditAboutRequested: t => e(Object(N.t)(t)),
					updateMessage: t => e(Object(b.updateMessage)(t))
				}
			})(Object(V.c)(Te))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/TimeLeft/index.m.less"),
				i = s.n(r),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: s
				} = e, n = Math.floor(s.getTime() / 1e3), r = Object(d.b)(n);
				return a.a.createElement("div", {
					className: Object(c.a)(t)
				}, a.a.createElement(o.a, {
					className: i.a.clockIcon
				}), a.a.createElement("span", {
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
				return n
			}));
			const n = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = 500,
				a = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < a ? 50 : 100 : 2048
				},
				i = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = r(t, s);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e, t) {
				const s = e.toString().split(":");
				return s.length % 2 == 0 ? e : s.reduce((e, s, n) => (n % 2 == 0 ? e.push(s) : "" === s ? e.push(":") : ":".concat(s, ":") in t ? e.push(t[":".concat(s, ":")]) : e.push(":".concat(s, ":")), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return O
			})), s.d(t, "l", (function() {
				return I
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
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(a.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				w = e => e.publicAccessNetwork.history.cursor,
				E = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				j = Object(n.a)(f, e => e.ended),
				v = Object(n.a)(f, e => e.removed),
				N = Object(n.a)(e => e.publicAccessNetwork.models, j, v, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = F(n, c.b.ENDED) ? c.b.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !0 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: a,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = F(n, c.b.ENDED) ? c.b.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !1 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: a,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				O = (e, t) => {
					return N(e)[Object(i.g)(t)]
				},
				A = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), N, h, d.h, o.b, (e, t, s, n, a, d) => {
					if (d) {
						const r = [];
						if (e) {
							const t = Object(i.g)(e);
							s[t] && r.push(t)
						}
						const d = r.concat(t),
							o = [...new Set(d)],
							l = new Set([...n, ...a]);
						return o.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.b.KILLED && t.stream.state !== c.b.PURGED
						})
					}
					const o = new Set([...n, ...a]);
					return Object.keys(s).filter(e => !o.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.b.KILLED && e.stream.state !== c.b.PURGED).map(e => e.post.id)
				}),
				P = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, N, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return A(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				I = Object(n.a)(N, P, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === c.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				C = Object(n.a)(N, P, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === c.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				x = Object(n.a)(E, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return P(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				_ = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, N, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return P(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = a.find(e => e.stream.state === c.b.IS_LIVE);
					if (r) return r.post.id;
					const i = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				y = Object(a.a)(Object(n.a)(_, N, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, _, h, d.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return P(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t, s, n, a) => !e || s.includes(e) || n.includes(e) ? t || a[0] : e),
				S = Object(n.a)(w, E, x, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(n.a)(w, E, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(a.a)(Object(n.a)(k, N, (e, t) => e ? t[e] : void 0)),
				L = Object(a.a)(Object(n.a)(S, N, (e, t) => e ? t[e] : void 0)),
				B = Object(a.a)(Object(n.a)(M, N, (e, t) => e ? t[e] : void 0)),
				G = (Object(a.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, N, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				D = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? O(e, s) : void 0
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
			const R = Object(n.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const q = Object(n.a)(k, N, b.b, (e, t, s) => {
					if (s) return V.INTRO;
					const n = e && t[e];
					if (!n) return V.UNAVAILABLE;
					const a = n.stream.state;
					return a === c.b.IS_LIVE || a === c.b.DISCONNECTED ? V.LIVE : a === c.b.ENDED && n.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				H = Object(n.a)(T, q, b.b, l.c, l.p, (e, t, s, n, a) => s ? n : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : a : void 0),
				K = Object(n.a)(T, q, R, (e, t, s) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && s < e.broadcast_time ? s : 0 : 0)
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
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				c = Object(n.a)(i, r.o, (e, t) => t && !e.isIntroFinished),
				d = Object(n.a)(i, e => e.lastChatActivityUtcTs),
				o = e => !!e && e + a.a > Date.now()
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=FramedGild~GildModal.af395feb74ed1cf4e02b.js.map