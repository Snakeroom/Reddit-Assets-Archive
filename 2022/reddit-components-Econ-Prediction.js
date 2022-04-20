// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.8452693dd418b3fe5410.js
// Retrieved at 4/20/2022, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = "custom"
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const s = [r.tc, r.qb, r.C, r.R, r.lb, r.Tb],
				i = {
					[r.Tb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.lb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.R]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.C]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.qb]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.tc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Tb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.lb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.R]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.C]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.qb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.tc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.qb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.tc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.tc]: "",
						[r.qb]: "",
						[r.C]: "",
						[r.R]: "",
						[r.lb]: "",
						[r.Tb]: ""
					};
				let u = d - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of s) {
					const e = Math.floor(u / o);
					e && (l[o] = (t ? a : i)[o](e).toString()), u -= e * o
				}
				const m = s.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const o = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(o.a)(i.a),
				c = Object(o.a)(i.b),
				d = Object(o.a)(i.c),
				l = Object(o.a)(i.d),
				u = Object(o.a)(i.e),
				m = Object(o.a)(i.f),
				p = Object(o.a)(i.g),
				b = Object(o.a)(i.h),
				f = Object(o.a)(i.i),
				h = e => Object(r.h)(s.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(a.e, null, s.a.createElement(a.i, null, s.a.createElement(d.a, null, s.a.createElement(a.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(a.b, null)))), s.a.createElement(a.l, null, s.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(a.g, null, !e.hideCancelButton && s.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1emfQRdFOsxY7Pi5Cn4JD1",
				prediction: "_1e08NSBa-ExjEnRYLJAvTs"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_3fy4maW8GQWdzcWGdeMbsa",
				isShortWidth: "_28YkWXOPICkzcS5IobwdZx",
				titleRow: "_1OeK7ZGX2fnKzdqjn-5gQD",
				header: "_1Y7_NWRItnxdsOq9DSlCDi",
				title: "_2ZZDhQ9qffZd-pGxZE6R4I",
				newBadge: "_1cHmK8KSQMLT0mELC910oM",
				closeButton: "_1C2XLQWgnLb_MVlB0fwAc_"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useLocalStorage.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p(e) {
				let {
					message: t,
					newBadge: n,
					onClose: l,
					onView: p,
					storageKey: b = d.a.nonDismissable,
					title: f,
					isFullWidth: h
				} = e;
				const _ = b !== d.a.nonDismissable,
					[E, g] = Object(i.a)(b, !_ || !1),
					[x, v] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					E || x || !p || (p(), v(!0))
				}, [E, x, p]), _ && E ? null : r.a.createElement("div", {
					className: Object(s.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !h
					})
				}, r.a.createElement("div", {
					className: u.a.titleRow
				}, r.a.createElement("div", {
					className: u.a.header
				}, r.a.createElement("h3", {
					className: u.a.title
				}, f), n && r.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), _ && r.a.createElement(a.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						g(!0), l && l()
					},
					priority: a.c.Plain
				})), t)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_2681BT2Imfw1O3Zy_oLAcl"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function a(e) {
				let {
					isTokens: t,
					onClose: n,
					onView: r,
					storageKey: a
				} = e;
				const c = o.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					d = t ? o.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : o.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return s.a.createElement("div", null, s.a.createElement(i.a, {
					onClose: n,
					onView: r,
					title: c,
					newBadge: !0,
					message: d,
					storageKey: a
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "zSh1egnQOovr8gIxiO-BE",
				wonOrLostAmountRow: "_3f80EjeUjSRy5-WqzqE7VJ",
				wonOrLostAmount: "_2nXf3pIf7lmCE6_ZAQXdt5"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2N8sOpL8HjMfaKS_SGauz6",
				coins: "CvW1XMcWem6aeEGMT6-XB",
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF",
				divider: "SZcaijbNtMWo_Hks5p9cB",
				clockIcon: "DzRACNzo9EG6-6h40DhZA"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentLink: "_2X1xXN9kuDF2WycNRjjS0o",
				facepile: "C5uVjjS8VPK59_iUkW5-Z",
				info: "_2-zYCnFNOSR-_DgPdIuM7",
				tournamentName: "_3L_97it52YmEJXxNI0ZFK-",
				totalPlayers: "_2PSisUxPboRQYsMf4jIvx1",
				chevron: "ONgeKJIGzxybfGzxK1J1s"
			}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(s.d)(),
					n = Object(s.e)(t => Object(c.T)(t, {
						subredditId: e
					})),
					o = Object(s.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					d = Object(s.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
					}, [n.name, t]);
				return r.a.useEffect(() => {
					d || o || l()
				}, [d, o, l]), {
					isFetching: d,
					isFetched: o,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return we
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/poll/index.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Prediction/helpers.ts"),
				b = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				f = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(a.a)(f.a.container, t)
					}, h._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				E = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				x = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/experiments/econ/index.ts");
			var C = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				O = n("./src/reddit/hooks/useToast.tsx");
			var P = n("./src/reddit/actions/economics/helpers/index.ts"),
				S = n("./src/reddit/helpers/trackers/predictions.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/models/Prediction/index.ts");
			var M = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				k = n("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const w = e => {
				let {
					isResolving: t,
					isTokens: n,
					onCancel: o,
					onResolve: s
				} = e;
				return r.a.createElement(k.a, {
					withOverlay: !0,
					onConfirm: s,
					onCancel: o,
					onClose: o,
					onOverlayClick: o,
					isDisabled: t,
					actionText: C.fbt._("Submit", null, {
						hk: "4aU3dh"
					}),
					cancelActionText: C.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					headerText: C.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}),
					modalText: n ? C.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : C.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})
				})
			};
			var N = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				T = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				A = n.n(T);
			const B = e => {
				let {
					post: t,
					prediction: n
				} = e;
				const i = Object(s.e)(m.Db),
					{
						isLoading: a,
						selectedVoteOption: c,
						setVoteOptionId: d,
						predict: l
					} = function(e) {
						const [t, n] = Object(o.useState)(!1), [r, i] = Object(o.useState)(null), a = Object(j.a)(), c = Object(s.e)(m.e), d = Object(O.a)(), l = Object(s.d)(), u = e.options.find(e => {
							let {
								id: t
							} = e;
							return t === r
						});
						return {
							isLoading: t,
							selectedVoteOption: u,
							setVoteOptionId: i,
							predict: async t => {
								const o = e.id;
								if (!u) return;
								if (t.currency === I.a.Coins && t.amount > c) return Object(P.promptUserToBuyMoreCoins)(), void a(S.b);
								const r = t.amount;
								if (e.endsAt < Date.now()) d(C.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								}));
								else {
									e.tournamentId ? a(Object(S.o)({
										pollId: o,
										selectedNumberTokens: r
									})) : a(Object(S.n)({
										pollId: o,
										selectedNumberCoins: r,
										totalStakeAmount: e.totalStakeAmount
									})), n(!0);
									try {
										await l(Object(y.r)({
											coinPackageId: t.id,
											optionId: u.id,
											postId: o,
											price: r
										}))
									} catch (s) {
										d(C.fbt._("Error: Failed to make prediction, please try again later", null, {
											hk: "1tECsx"
										}))
									}
									n(!1), i(null)
								}
							}
						}
					}(n),
					{
						isLoading: u,
						resolveOptionId: p,
						setResolveOptionId: b,
						resolve: f
					} = function(e) {
						const [t, n] = Object(o.useState)(!1), [r, i] = Object(o.useState)(null), a = Object(O.a)(), c = Object(s.d)();
						return {
							isLoading: t,
							resolveOptionId: r,
							setResolveOptionId: i,
							resolve: async () => {
								if (n(!0), !r) throw new Error("Failed to create prediction, missing selected option");
								try {
									await c(Object(y.q)({
										optionId: r,
										postId: e
									}))
								} catch (t) {
									a(C.fbt._("Error: Failed to resolve prediction, please try again later", null, {
										hk: "3Ve2Mb"
									}))
								}
								i(null), n(!1)
							}
						}
					}(n.id),
					{
						upvote: h
					} = function(e) {
						const t = Object(s.d)(),
							n = Object(s.e)(v.m),
							{
								startDelayedUpvoteAnimation: o
							} = Object(g.a)(e.id);
						return {
							upvote: function() {
								n && e.voteState < x.a.upvoted && (t(Object(E.kb)(e.id)), o())
							}
						}
					}(t),
					_ = Object(o.useCallback)(() => {
						d(null), b(null)
					}, []);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(N.a, {
					className: A.a.prediction,
					prediction: n,
					selectedOptionId: (null == c ? void 0 : c.id) || null,
					onSelectOption: e => {
						const {
							creatorId: t,
							endsAt: o,
							resolvedOptionId: r,
							userSelection: s
						} = n, a = o < Date.now();
						a && t === i && !r && b(e.id), a || s || d(e.id)
					}
				}), c && r.a.createElement(M.a, {
					className: A.a.modal,
					isCreatingVote: a,
					onOverlayClick: _,
					onCancel: _,
					onPredict: async e => {
						c && (await l(e), h())
					},
					option: c,
					pollId: n.id,
					tournamentId: n.tournamentId,
					withOverlay: !0
				}), p && r.a.createElement(w, {
					isResolving: u,
					isTokens: null !== n.tournamentId,
					onCancel: _,
					onResolve: f
				}))
			};
			var F = n("./node_modules/lodash/isNil.js"),
				L = n.n(F),
				D = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				W = n.n(U);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				let {
					didParticipate: t
				} = e;
				const n = G._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					o = r.a.createElement(r.a.Fragment, null, G._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), t && r.a.createElement("div", {
						className: W.a.notificationBlurb
					}, G._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return r.a.createElement("div", null, r.a.createElement(R.a, {
					title: n,
					message: o
				}))
			}
			var V = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx");

			function q() {
				const e = C.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = C.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return r.a.createElement("div", null, r.a.createElement(R.a, {
					title: e,
					message: t
				}))
			}
			var H = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				K = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				z = n.n(X);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					prediction: t
				} = e;
				var n;
				const {
					tournamentId: o,
					resolvedOptionId: s,
					userSelection: i,
					userWonAmount: a,
					options: c
				} = t, d = Boolean(i), l = s === i, u = i && (null === (n = c.find(e => {
					let {
						id: t
					} = e;
					return t === i
				})) || void 0 === n ? void 0 : n.userStakeAmount) || 0, m = o ? r.a.createElement(H.a, {
					className: z.a.coinIcon,
					tournamentId: o
				}) : r.a.createElement(K.a, {
					className: z.a.coinIcon
				});
				return d && !l ? r.a.createElement("div", null, r.a.createElement(R.a, {
					title: Q._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: r.a.createElement(r.a.Fragment, null, Q._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!u && r.a.createElement("div", {
						className: z.a.wonOrLostAmountRow
					}, Q._("You lost {lostAmount}", [Q._param("lostAmount", r.a.createElement("div", {
						className: z.a.wonOrLostAmount
					}, m, u))], {
						hk: "6091x"
					})))
				})) : d && l && u && !a ? r.a.createElement("div", null, r.a.createElement(R.a, {
					title: Q._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: r.a.createElement(r.a.Fragment, null, Q._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), r.a.createElement("div", {
						className: z.a.wonOrLostAmountRow
					}, Q._("You've been refunded {refundedAmount}", [Q._param("refundedAmount", r.a.createElement("div", {
						className: z.a.wonOrLostAmount
					}, m, u))], {
						hk: "49bOe9"
					})))
				})) : d && l ? r.a.createElement("div", null, r.a.createElement(R.a, {
					title: Q._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: r.a.createElement(r.a.Fragment, null, Q._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!a && r.a.createElement("div", {
						className: z.a.wonOrLostAmountRow
					}, Q._("You won {wonAmount}", [Q._param("wonAmount", r.a.createElement("div", {
						className: z.a.wonOrLostAmount
					}, m, u + a))], {
						hk: "1zg0cH"
					})))
				})) : r.a.createElement("div", null, r.a.createElement(R.a, {
					title: Q._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: Q._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}, J = e => {
				let {
					prediction: t,
					isCreator: n
				} = e;
				const {
					endsAt: o,
					resolvedOptionId: s,
					tournamentId: i,
					userSelection: a
				} = t, c = o < Date.now(), d = !L()(i), l = c && n && !s;
				return c ? s ? r.a.createElement(Z, {
					prediction: t
				}) : l ? r.a.createElement(q, null) : r.a.createElement(Y, {
					didParticipate: !!a
				}) : r.a.createElement(V.a, {
					isTokens: d,
					storageKey: D.a.feature
				})
			};
			var $ = n("./src/lib/timeUntil/index.ts"),
				ee = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				te = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ne = n.n(te);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = e => {
				let {
					endsAt: t,
					resolvedOptionId: n,
					isCoins: o
				} = e;
				return Date.now() > t ? r.a.createElement("div", {
					className: ne.a.statusBar
				}, o && r.a.createElement(ee.a, {
					className: ne.a.clockIcon
				}), n ? oe._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : oe._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : r.a.createElement("div", {
					className: ne.a.statusBar
				}, o && r.a.createElement(ee.a, {
					className: ne.a.clockIcon
				}), oe._("Prediction ends in {expirationDuration}", [oe._param("expirationDuration", Object($.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				}))
			};
			var se = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ae = e => {
				let {
					totalVoters: t
				} = e;
				return ie._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [ie._param("total voters", Object(se.b)(t)), ie._plural(t)], {
					hk: "2u2Nv8"
				})
			}, {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				let {
					prediction: t
				} = e;
				const {
					endsAt: n,
					predictionStatus: o,
					resolvedOptionId: s,
					totalStakeAmount: i,
					tournamentId: c,
					totalVoters: d
				} = t, l = Boolean(c), u = !l;
				return Object(p.a)(o) ? r.a.createElement("div", {
					className: ne.a.container
				}, ce._("Canceled", null, {
					hk: "1SL2bC"
				})) : r.a.createElement("div", {
					className: Object(a.a)(ne.a.container, {
						[ne.a.coins]: u
					})
				}, l && d > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae, {
					totalVoters: d
				}), r.a.createElement("span", null, "·")), u && i > 0 && r.a.createElement("div", {
					className: ne.a.statusBar
				}, r.a.createElement(K.a, {
					className: ne.a.coinIcon
				}), i, " ", ce._("added by participants", null, {
					hk: "PSq3T"
				})), r.a.createElement(re, {
					endsAt: n,
					resolvedOptionId: s,
					isCoins: u
				}))
			};
			var le = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				ue = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				me = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				pe = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				be = n("./src/reddit/models/User/index.ts"),
				fe = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				he = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				_e = n.n(he);

			function Ee(e) {
				let {
					className: t,
					faceClassName: n,
					subredditId: o
				} = e;
				var i;
				const c = Object(s.e)(m.eb),
					d = Object(s.e)(m.l),
					l = Object(s.e)(m.G),
					u = Object(s.e)(e => Object(fe.f)(e, {
						subredditId: o
					}));
				return (null === (i = null == u ? void 0 : u.latestParticipants) || void 0 === i ? void 0 : i.length) ? r.a.createElement("div", {
					className: Object(a.a)(_e.a.tournamentFacepile, t)
				}, u.latestParticipants.slice(0, 3).map(e => {
					let {
						icon: t,
						name: o,
						profile: s
					} = e;
					const i = !!d && Object(be.e)(d) === o,
						{
							url: u
						} = t,
						{
							isNsfw: m
						} = s,
						p = `tournament-facepile-face-${o}`;
					return Object(pe.b)(u) ? r.a.createElement(ue.a, {
						key: p,
						backgroundClassName: _e.a.snoovatarBackground,
						className: Object(a.a)(_e.a.snoovatar, n),
						headshot: u
					}) : r.a.createElement(me.b, {
						key: p,
						className: Object(a.a)(_e.a.userIcon, n),
						iconUrl: u,
						isCurrentUser: i,
						isNSFW: m,
						isNightMode: c,
						shouldHideNSFW: l
					})
				})) : null
			}
			var ge = n("./src/reddit/controls/InternalLink/index.tsx"),
				xe = n("./src/reddit/hooks/usePageLayer.ts"),
				ve = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Ce = n("./src/reddit/selectors/subreddit.ts"),
				ye = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Oe = n.n(ye);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Se(e) {
				let {
					subredditId: t,
					tournamentId: n
				} = e;
				const o = Object(j.a)(),
					i = Object(xe.a)(),
					a = Object(s.e)(e => Object(Ce.T)(e, {
						subredditId: t
					})),
					d = Object(s.e)(e => Object(fe.b)(e, {
						subredditId: t
					})),
					l = Object(c.x)(i),
					u = Object(c.J)(i),
					m = Object(c.N)(i);
				if (Object(le.a)(a.name), (null == d ? void 0 : d.tournamentId) !== n) return null;
				const {
					name: p,
					totalParticipantsCount: b
				} = d;
				return r.a.createElement(ge.a, {
					className: Oe.a.tournamentLink,
					to: `${a.url}predictions/`,
					onClick: () => {
						o(Object(S.l)({
							pageType: l ? "post_detail" : m ? "community" : u ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, r.a.createElement(Ee, {
					className: Oe.a.facepile,
					subredditId: t
				}), r.a.createElement("div", {
					className: Oe.a.info
				}, r.a.createElement("div", {
					className: Oe.a.tournamentName
				}, p), r.a.createElement("div", {
					className: Oe.a.totalPlayers
				}, b && b > 0 ? Pe._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Pe._param("totalPlayers", Object(se.b)(b)), Pe._plural(b)], {
					hk: "3eDpRH"
				}) : Pe._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), r.a.createElement(ve.a, {
					className: Oe.a.chevron
				}))
			}
			var je = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Ie = n.n(je);
			const Me = Object(i.c)({
					isEditing: l.M,
					prediction: d.g,
					post: u.G,
					subredditOrProfile: u.U,
					userId: m.Db
				}),
				ke = Object(c.u)({
					isCommentsPage: c.x,
					isPredictionsPage: c.O
				}),
				we = e => {
					let {
						className: t,
						isCommentsPage: n,
						isEditing: o,
						isPredictionsPage: s,
						post: i,
						prediction: c,
						subredditOrProfile: d,
						userId: l
					} = e;
					if (!c || !d) return r.a.createElement(_, null);
					const {
						creatorId: u,
						tournamentId: m,
						predictionStatus: b
					} = c, f = u === l, h = n && !Object(p.a)(b);
					return r.a.createElement("div", {
						className: Object(a.a)(t, Ie.a.container, {
							[Ie.a.forCommentsPage]: n,
							[Ie.a.isEditing]: n && o
						}),
						onClick: e => {
							c && e.stopPropagation()
						}
					}, h && r.a.createElement(J, {
						prediction: c,
						isCreator: f
					}), r.a.createElement(B, {
						post: i,
						prediction: c
					}), r.a.createElement(de, {
						prediction: c
					}), !s && m && r.a.createElement(Se, {
						subredditId: i.belongsTo.id,
						tournamentId: m
					}))
				};
			t.default = ke(Object(s.b)(Me)(we))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "t", (function() {
				return I
			})), n.d(t, "u", (function() {
				return M
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "c", (function() {
				return T
			}));
			var o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(d.a, "CloseIcon", u.a),
				b = r.a.section("ModalBody", u.a),
				f = r.a.section("ModalPostPreview", u.a),
				h = r.a.p("ModalText", u.a),
				_ = r.a.div("ModalSmallText", u.a),
				E = r.a.div("ModalDescriptionText", u.a),
				g = r.a.div("ModalMetaText", u.a),
				x = r.a.label("ModalFormItem", u.a),
				v = r.a.wrapped(c.a, "ModalInput", u.a),
				C = r.a.label("ModalInputLabel", u.a),
				y = r.a.footer("ModalFooter", u.a),
				O = r.a.header("ModalHeader", u.a),
				P = r.a.div("ModalTitle", u.a),
				S = r.a.div("ModalAnnotation", u.a),
				j = r.a.div("ModalMain", u.a),
				I = r.a.textarea("TextArea", u.a),
				M = r.a.wrapped(a.l, "WarningButton", u.a),
				k = r.a.wrapped(a.l, "PrimaryButton", u.a),
				w = r.a.wrapped(a.o, "CancelButton", u.a),
				N = r.a.wrapped(a.r, "RemoveButton", u.a),
				T = e => {
					let {
						className: t,
						...n
					} = e;
					return i.a.createElement(a.t, m({
						kind: a.b.Button,
						priority: a.c.Primary,
						className: Object(o.a)(u.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: o = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${o}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function o(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(o)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				s = "emote|",
				i = "|downsized";

			function a(e, t) {
				return r + e + (t ? i : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(r))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, o.F).map(e => e.id)
			}

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return p(e, e => e.e === o.o || t && e.e === o.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.fb
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(s.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var o, r, s = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(o || (o = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[o.Loyalty]: s.a.First,
					[o.Achievement]: s.a.Second,
					[o.Cosmetic]: void 0
				},
				a = e => e === s.a.First ? o.Loyalty : e === s.a.Second ? o.Achievement : o.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var o, r, s, i;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(o || (o = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(o || (o = {}));
			const s = {
				status: o.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						if (e.status === o.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: o,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === o.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: o,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: o.Failure
						};
					case r.c:
						return {
							data: t.payload, status: o.Fetched
						};
					case r.d:
						return {
							status: o.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, r = n("./src/lib/constants/specialMembership.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(o || (o = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, o) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let s;
						(s = e.placement ? e.placement === a.a.First ? o[c.a.Loyalty][r] : o[c.a.Achievement][r] : l(e) ? o[c.a.Cosmetic][c.c.MyBadges][r] : o[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? n.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						o = parseInt(t.price || "0");
					return n === o ? Object(i.b)(e, t) : n - o
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const o = t[e.id],
						r = t[n.id];
					return Object(i.b)(o, r)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const o = e.collections[n],
						r = {
							description: o.description,
							highlight: o.extra && o.extra.style && o.extra.style.color,
							id: o.id,
							locked: [],
							title: o.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const o = e.badges[t];
					o && n.add(o.type)
				});
				const o = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, o, t), u(Object.keys(e.products).map(t => e.products[t]), n, o, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === o.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case s.h: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === o.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case s.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: o.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "z", (function() {
				return O
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "s", (function() {
				return W
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "g", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				s = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/gold/powerups/index.ts"),
				b = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				h = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				_ = (e, t) => {
					const n = h(e, t);
					return n && n.endsAt || null
				};
			var E;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(E || (E = {}));
			const g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = _(e, t),
							o = Date.now();
						return n && o < n ? E.Subscribed : E.NotSubscribed
					}
					return E.DontKnow
				},
				x = (e, t) => {
					const n = e.user.account,
						o = e.economics.subredditPremium[t];
					if (n && o && o.status === u.a.Fetched) {
						const o = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (o) return {
							[a.a.Loyalty]: o.find(e => e.placement === i.a.First),
							[a.a.Achievement]: o.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: o.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function v(e, t) {
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const C = (e, t, n) => {
					var r;
					if (!o.d.spBadges(e)) return f;
					return v(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
				},
				y = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function O(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function P(e, t) {
				const {
					badge: n,
					subredditId: o
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === r) return n;
				const s = e.badges.models,
					a = e.user.ownedBadges[o] || {},
					c = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(a).map(e => s[e]).find(e => e && e.type === c)
			}

			function S(e, t, n, o) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return r.data.collections[n];
					if (n === a.a.Cosmetic && o) return r.data.collections[n][o]
				}
				return f
			}

			function j(e, t) {
				const n = S(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function I(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function M(e, t) {
				return S(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const k = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const o = e[n];
						t.push({
							display: `${o.brand} •••• ${o.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === l.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const o = e[n];
						"PayPal" === o.brand && t.push({
							display: "PayPal",
							id: o.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var w;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(w || (w = {}));
			const N = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				A = (e, t) => {
					if (!t) return {};
					const n = N.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const o = h(e, t);
					return o && o.price && o.currency && (n[o.currency] = o.price), n
				},
				B = (e, t) => {
					var n, o, r, s;
					const i = (null === (s = null === (r = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === r ? void 0 : r[t || ""]) || void 0 === s ? void 0 : s.nomenclature) || N;
					return {
						prices: A(e, t),
						member: i.member || N.member,
						memberPlural: i.memberPlural || N.memberPlural,
						memberAlt: i.memberAlt || N.memberAlt,
						memberAltPlural: i.memberAltPlural || N.memberAltPlural,
						membership: i.membership || N.membership,
						membershipAlt: i.membershipAlt || N.membershipAlt
					}
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				R = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (!n) return;
					return e.economics.emotes[n]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				W = (e, t, n) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!o || !Object(s.a)(o))
				},
				G = (e, t, n) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (r && Object(s.b)(r)) return !0;
					const i = o.d.spGiphy(e),
						a = U(e, t);
					return !(!i || !a) || i && a
				},
				Y = (e, t, n) => {
					if (t) {
						const o = e.economics.banners.dismissedBanners[t];
						if (o && o.data) return !!o.data[n]
					}
				},
				V = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.8452693dd418b3fe5410.js.map