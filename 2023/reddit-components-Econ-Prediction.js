// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.6643c2546664fdacd7d3.js
// Retrieved at 5/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.yc, o.vb, o.E, o.V, o.qb, o.Xb],
				i = {
					[o.Xb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.qb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.V]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.E]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.vb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.yc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[o.Xb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.qb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.V]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.E]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.vb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.vb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const a = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.yc]: "",
						[o.vb]: "",
						[o.E]: "",
						[o.V]: "",
						[o.qb]: "",
						[o.Xb]: ""
					};
				let u = d - a;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? c : i)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(s.a)(i.a),
				a = Object(s.a)(i.b),
				d = Object(s.a)(i.c),
				l = Object(s.a)(i.d),
				u = Object(s.a)(i.e),
				m = Object(s.a)(i.f),
				b = Object(s.a)(i.g),
				p = Object(s.a)(i.h),
				f = Object(s.a)(i.i),
				E = e => Object(o.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(c.e, null, r.a.createElement(c.i, null, r.a.createElement(d.a, null, r.a.createElement(c.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(a.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(c.b, null)))), r.a.createElement(c.l, null, r.a.createElement(c.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(c.g, null, !e.hideCancelButton && r.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
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
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
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
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useLocalStorage.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				let {
					message: t,
					newBadge: n,
					onClose: l,
					onView: b,
					storageKey: p = d.a.nonDismissable,
					title: f,
					isFullWidth: E
				} = e;
				const h = p !== d.a.nonDismissable,
					[_, g] = Object(i.a)(p, !h || !1),
					[v, O] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					_ || v || !b || (b(), O(!0))
				}, [_, v, b]), h && _ ? null : o.a.createElement("div", {
					className: Object(r.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !E
					})
				}, o.a.createElement("div", {
					className: u.a.titleRow
				}, o.a.createElement("div", {
					className: u.a.header
				}, o.a.createElement("h3", {
					className: u.a.title
				}, f), n && o.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), h && o.a.createElement(c.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(a.b)("close"),
					onClick: () => {
						g(!0), l && l()
					},
					priority: c.c.Plain
				})), t)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_2681BT2Imfw1O3Zy_oLAcl"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(a.X)(t, {
						subredditId: e
					})),
					s = Object(r.e)(t => Object(c.i)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(c.k)(t, {
						subredditId: e
					})),
					l = o.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
					}, [n.name, t]);
				return o.a.useEffect(() => {
					d || s || l()
				}, [d, s, l]), {
					isFetching: d,
					isFetched: s,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/poll/index.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Prediction/helpers.ts"),
				p = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				f = n.n(p);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var h = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(c.a)(f.a.container, t)
					}, E._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				_ = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				v = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/experiments/econ/index.ts");
			var C = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				P = n("./src/reddit/hooks/useToast.tsx");
			var x = n("./src/reddit/actions/economics/helpers/index.ts"),
				S = n("./src/reddit/helpers/trackers/predictions.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/models/Prediction/index.ts");
			var j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				N = n("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const w = e => {
				let {
					isResolving: t,
					isTokens: n,
					onCancel: s,
					onResolve: r
				} = e;
				return o.a.createElement(N.a, {
					withOverlay: !0,
					onConfirm: r,
					onCancel: s,
					onClose: s,
					onOverlayClick: s,
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
			var M = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				A = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				B = n.n(A);
			const D = e => {
				let {
					post: t,
					prediction: n
				} = e;
				const i = Object(r.e)(m.Fb),
					{
						isLoading: c,
						selectedVoteOption: a,
						setVoteOptionId: d,
						predict: l
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [o, i] = Object(s.useState)(null), c = Object(I.a)(), a = Object(r.e)(m.g), d = Object(P.a)(), l = Object(r.d)(), u = e.options.find(e => {
							let {
								id: t
							} = e;
							return t === o
						});
						return {
							isLoading: t,
							selectedVoteOption: u,
							setVoteOptionId: i,
							predict: async t => {
								const s = e.id;
								if (!u) return;
								if (t.currency === k.a.Coins && t.amount > a) return Object(x.promptUserToBuyMoreCoins)(), void c(S.b);
								const o = t.amount;
								if (e.endsAt < Date.now()) d(C.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								}));
								else {
									e.tournamentId ? c(Object(S.n)({
										pollId: s,
										selectedNumberTokens: o
									})) : c(Object(S.m)({
										pollId: s,
										selectedNumberCoins: o,
										totalStakeAmount: e.totalStakeAmount
									})), n(!0);
									try {
										await l(Object(y.r)({
											coinPackageId: t.id,
											optionId: u.id,
											postId: s,
											price: o
										}))
									} catch (r) {
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
						resolveOptionId: b,
						setResolveOptionId: p,
						resolve: f
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [o, i] = Object(s.useState)(null), c = Object(P.a)(), a = Object(r.d)();
						return {
							isLoading: t,
							resolveOptionId: o,
							setResolveOptionId: i,
							resolve: async () => {
								if (n(!0), !o) throw new Error("Failed to create prediction, missing selected option");
								try {
									await a(Object(y.q)({
										optionId: o,
										postId: e
									}))
								} catch (t) {
									c(C.fbt._("Error: Failed to resolve prediction, please try again later", null, {
										hk: "3Ve2Mb"
									}))
								}
								i(null), n(!1)
							}
						}
					}(n.id),
					{
						upvote: E
					} = function(e) {
						const t = Object(r.d)(),
							n = Object(r.e)(O.h),
							{
								startDelayedUpvoteAnimation: s
							} = Object(g.a)(e.id);
						return {
							upvote: function() {
								n && e.voteState < v.a.upvoted && (t(Object(_.ib)(e.id)), s())
							}
						}
					}(t),
					h = Object(s.useCallback)(() => {
						d(null), p(null)
					}, []);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(M.a, {
					className: B.a.prediction,
					prediction: n,
					selectedOptionId: (null == a ? void 0 : a.id) || null,
					onSelectOption: e => {
						const {
							creatorId: t,
							endsAt: s,
							resolvedOptionId: o,
							userSelection: r
						} = n, c = s < Date.now();
						c && t === i && !o && p(e.id), c || r || d(e.id)
					}
				}), a && o.a.createElement(j.a, {
					className: B.a.modal,
					isCreatingVote: c,
					onOverlayClick: h,
					onCancel: h,
					onPredict: async e => {
						a && (await l(e), E())
					},
					option: a,
					pollId: n.id,
					tournamentId: n.tournamentId,
					withOverlay: !0
				}), b && o.a.createElement(w, {
					isResolving: u,
					isTokens: null !== n.tournamentId,
					onCancel: h,
					onResolve: f
				}))
			};
			var F = n("./node_modules/lodash/isNil.js"),
				L = n.n(F),
				T = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				G = n.n(U);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				let {
					didParticipate: t
				} = e;
				const n = W._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					s = o.a.createElement(o.a.Fragment, null, W._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), t && o.a.createElement("div", {
						className: G.a.notificationBlurb
					}, W._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return o.a.createElement("div", null, o.a.createElement(R.a, {
					title: n,
					message: s
				}))
			}

			function V(e) {
				let {
					isTokens: t,
					onClose: n,
					onView: s,
					storageKey: r
				} = e;
				const i = C.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = t ? C.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : C.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return o.a.createElement("div", null, o.a.createElement(R.a, {
					onClose: n,
					onView: s,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: r
				}))
			}

			function q() {
				const e = C.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = C.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(R.a, {
					title: e,
					message: t
				}))
			}
			var K = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				X = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				z = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				H = n.n(z);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = e => {
				let {
					prediction: t
				} = e;
				var n;
				const {
					tournamentId: s,
					resolvedOptionId: r,
					userSelection: i,
					userWonAmount: c,
					options: a
				} = t, d = Boolean(i), l = r === i, u = i && (null === (n = a.find(e => {
					let {
						id: t
					} = e;
					return t === i
				})) || void 0 === n ? void 0 : n.userStakeAmount) || 0, m = s ? o.a.createElement(K.a, {
					className: H.a.coinIcon,
					tournamentId: s
				}) : o.a.createElement(X.a, {
					className: H.a.coinIcon
				});
				return d && !l ? o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Z._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, Z._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!u && o.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, Z._("You lost {lostAmount}", [Z._param("lostAmount", o.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, m, u))], {
						hk: "6091x"
					})))
				})) : d && l && u && !c ? o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Z._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, Z._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, Z._("You've been refunded {refundedAmount}", [Z._param("refundedAmount", o.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, m, u))], {
						hk: "49bOe9"
					})))
				})) : d && l ? o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Z._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, Z._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!c && o.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, Z._("You won {wonAmount}", [Z._param("wonAmount", o.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, m, u + c))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Z._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: Z._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}, J = e => {
				let {
					prediction: t,
					isCreator: n
				} = e;
				const {
					endsAt: s,
					resolvedOptionId: r,
					tournamentId: i,
					userSelection: c
				} = t, a = s < Date.now(), d = !L()(i), l = a && n && !r;
				return a ? r ? o.a.createElement(Q, {
					prediction: t
				}) : l ? o.a.createElement(q, null) : o.a.createElement(Y, {
					didParticipate: !!c
				}) : o.a.createElement(V, {
					isTokens: d,
					storageKey: T.a.feature
				})
			};
			var $ = n("./src/lib/timeUntil/index.ts"),
				ee = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				te = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = e => {
				let {
					endsAt: t,
					resolvedOptionId: n,
					isCoins: s
				} = e;
				return Date.now() > t ? o.a.createElement("div", {
					className: ne.a.statusBar
				}, s && o.a.createElement(ee.a, {
					className: ne.a.clockIcon
				}), n ? se._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : se._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : o.a.createElement("div", {
					className: ne.a.statusBar
				}, s && o.a.createElement(ee.a, {
					className: ne.a.clockIcon
				}), se._("Prediction ends in {expirationDuration}", [se._param("expirationDuration", Object($.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				}))
			};
			var re = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = e => {
				let {
					totalVoters: t
				} = e;
				return ie._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [ie._param("total voters", Object(re.b)(t)), ie._plural(t)], {
					hk: "2u2Nv8"
				})
			}, {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				let {
					prediction: t
				} = e;
				const {
					endsAt: n,
					predictionStatus: s,
					resolvedOptionId: r,
					totalStakeAmount: i,
					tournamentId: a,
					totalVoters: d
				} = t, l = Boolean(a), u = !l;
				return Object(b.a)(s) ? o.a.createElement("div", {
					className: ne.a.container
				}, ae._("Canceled", null, {
					hk: "1SL2bC"
				})) : o.a.createElement("div", {
					className: Object(c.a)(ne.a.container, {
						[ne.a.coins]: u
					})
				}, l && d > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, {
					totalVoters: d
				}), o.a.createElement("span", null, "·")), u && i > 0 && o.a.createElement("div", {
					className: ne.a.statusBar
				}, o.a.createElement(X.a, {
					className: ne.a.coinIcon
				}), i, " ", ae._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(oe, {
					endsAt: n,
					resolvedOptionId: r,
					isCoins: u
				}))
			};
			var le = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				ue = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				me = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				be = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				pe = n("./src/reddit/models/User/index.ts"),
				fe = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Ee = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				he = n.n(Ee);

			function _e(e) {
				let {
					className: t,
					faceClassName: n,
					subredditId: s
				} = e;
				var i;
				const a = Object(r.e)(m.fb),
					d = Object(r.e)(m.m),
					l = Object(r.e)(m.H),
					u = Object(r.e)(e => Object(fe.f)(e, {
						subredditId: s
					}));
				return (null === (i = null == u ? void 0 : u.latestParticipants) || void 0 === i ? void 0 : i.length) ? o.a.createElement("div", {
					className: Object(c.a)(he.a.tournamentFacepile, t)
				}, u.latestParticipants.slice(0, 3).map(e => {
					let {
						icon: t,
						name: s,
						profile: r
					} = e;
					const i = !!d && Object(pe.e)(d) === s,
						{
							url: u
						} = t,
						{
							isNsfw: m
						} = r,
						b = `tournament-facepile-face-${s}`;
					return Object(be.a)(u) ? o.a.createElement(ue.a, {
						key: b,
						backgroundClassName: he.a.snoovatarBackground,
						className: Object(c.a)(he.a.snoovatar, n),
						headshot: u
					}) : o.a.createElement(me.b, {
						key: b,
						className: Object(c.a)(he.a.userIcon, n),
						iconUrl: u,
						isCurrentUser: i,
						isNSFW: m,
						isNightMode: a,
						shouldHideNSFW: l
					})
				})) : null
			}
			var ge = n("./src/reddit/controls/InternalLink/index.tsx"),
				ve = n("./src/reddit/hooks/usePageLayer.ts"),
				Oe = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Ce = n("./src/reddit/selectors/subreddit.ts"),
				ye = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Pe = n.n(ye);
			const {
				fbt: xe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Se(e) {
				let {
					subredditId: t,
					tournamentId: n
				} = e;
				const s = Object(I.a)(),
					i = Object(ve.a)(),
					c = Object(r.e)(e => Object(Ce.X)(e, {
						subredditId: t
					})),
					d = Object(r.e)(e => Object(fe.b)(e, {
						subredditId: t
					})),
					l = Object(a.y)(i),
					u = Object(a.L)(i),
					m = Object(a.Q)(i);
				if (Object(le.a)(c.name), (null == d ? void 0 : d.tournamentId) !== n) return null;
				const {
					name: b,
					totalParticipantsCount: p
				} = d;
				return o.a.createElement(ge.default, {
					className: Pe.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						s(Object(S.k)({
							pageType: l ? "post_detail" : m ? "community" : u ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(_e, {
					className: Pe.a.facepile,
					subredditId: t
				}), o.a.createElement("div", {
					className: Pe.a.info
				}, o.a.createElement("div", {
					className: Pe.a.tournamentName
				}, b), o.a.createElement("div", {
					className: Pe.a.totalPlayers
				}, p && p > 0 ? xe._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [xe._param("totalPlayers", Object(re.b)(p)), xe._plural(p)], {
					hk: "3eDpRH"
				}) : xe._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(Oe.a, {
					className: Pe.a.chevron
				}))
			}
			var Ie = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				ke = n.n(Ie);
			const je = Object(i.c)({
					isEditing: l.M,
					prediction: d.g,
					post: u.F,
					subredditOrProfile: u.U,
					userId: m.Fb
				}),
				Ne = Object(a.v)({
					isCommentsPage: a.y,
					isPredictionsPage: a.R
				}),
				we = e => {
					let {
						className: t,
						isCommentsPage: n,
						isEditing: s,
						isPredictionsPage: r,
						post: i,
						prediction: a,
						subredditOrProfile: d,
						userId: l
					} = e;
					if (!a || !d) return o.a.createElement(h, null);
					const {
						creatorId: u,
						tournamentId: m,
						predictionStatus: p
					} = a, f = u === l, E = n && !Object(b.a)(p);
					return o.a.createElement("div", {
						className: Object(c.a)(t, ke.a.container, {
							[ke.a.forCommentsPage]: n,
							[ke.a.isEditing]: n && s
						}),
						onClick: e => {
							a && (e.stopPropagation(), e.preventDefault())
						}
					}, E && o.a.createElement(J, {
						prediction: a,
						isCreator: f
					}), o.a.createElement(D, {
						post: i,
						prediction: a
					}), o.a.createElement(de, {
						prediction: a
					}), !r && m && o.a.createElement(Se, {
						subredditId: i.belongsTo.id,
						tournamentId: m
					}))
				};
			t.default = Ne(Object(r.b)(je)(we))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.loadingIcon, n, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(c.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				c = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r, i;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === c.a.First ? s[a.a.Loyalty][o] : s[a.a.Achievement][o] : l(e) ? s[a.a.Cosmetic][a.c.MyBadges][o] : s[a.a.Cosmetic][a.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
				})
			}

			function p(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[a.a.Loyalty]: b(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: b(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: b(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: b(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
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
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: p(n),
								status: s.Fetched
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
				return _
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "z", (function() {
				return S
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "p", (function() {
				return M
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "y", (function() {
				return T
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "w", (function() {
				return W
			})), n.d(t, "s", (function() {
				return Y
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "g", (function() {
				return X
			})), n.d(t, "m", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				E = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const h = [],
				_ = (e, t) => {
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
				g = (e, t) => {
					const n = _(e, t);
					return n && n.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const O = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = g(e, t),
							s = Date.now();
						return n && s < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				C = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[c.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[c.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[c.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[c.a.Loyalty]: void 0,
						[c.a.Achievement]: void 0,
						[c.a.Cosmetic]: void 0
					}
				};

			function y(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const P = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return h;
					return y(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				x = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function S(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function I(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === o) return n;
				const r = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					a = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(c).map(e => r[e]).find(e => e && e.type === a)
			}

			function k(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === c.a.Loyalty || n === c.a.Achievement) return o.data.collections[n];
					if (n === c.a.Cosmetic && s) return o.data.collections[n][s]
				}
				return h
			}

			function j(e, t) {
				const n = k(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function N(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return h
			}

			function w(e, t) {
				return k(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const M = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: a.a.SavedStripe
						})
					}
				}
				if (n.status === l.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				D = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				F = (e, t) => {
					if (!t) return {};
					const n = B.prices;
					D(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = _(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				L = (e, t) => {
					var n, s, o, r;
					const i = (null === (r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || B;
					return {
						prices: F(e, t),
						member: i.member || B.member,
						memberPlural: i.memberPlural || B.memberPlural,
						memberAlt: i.memberAlt || B.memberAlt,
						memberAltPlural: i.memberAltPlural || B.memberAltPlural,
						membership: i.membership || B.membership,
						membershipAlt: i.membershipAlt || B.membershipAlt
					}
				},
				T = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (!n) return;
					return e.economics.emotes[n]
				},
				W = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				Y = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				V = (e, t, n) => {
					if (Object(p.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!K(e, t) || !(!s.d.spGiphy(e) || !q(e, n)));
					if (!Object(E.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (q(e, n)) return !0;
					const o = s.d.spGiphy(e),
						r = W(e, t);
					return !!K(e, t) || o && r
				},
				q = (e, t) => {
					const n = "replyToPost" !== t && Object(b.c)(e, {
						commentId: t
					});
					if (n && Object(r.a)(n)) return !0
				},
				K = (e, t) => {
					const n = s.d.spGiphy(e),
						o = W(e, t);
					return n && o
				},
				X = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/models/Gold/Powerups/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, s;
					switch (t.type) {
						case r.mb:
						case r.nb: {
							const {
								benefitStatuses: s,
								subredditId: o
							} = t.payload;
							if (!s) return e;
							const r = null !== (n = e[o]) && void 0 !== n ? n : {},
								i = {};
							return s.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								i[t] = n
							}), {
								...e,
								[o]: {
									...r,
									...i
								}
							}
						}
						case r.L: {
							const {
								benefitStatuses: n,
								subredditId: o
							} = t.payload, r = null !== (s = e[o]) && void 0 !== s ? s : {}, i = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								i[t] = n
							}), {
								...e,
								[o]: {
									...r,
									...i
								}
							}
						}
						default:
							return e
					}
				},
				a = n("./node_modules/reselect/es/index.js");
			Object(o.a)({
				features: {
					powerupsBenefitSettings: c
				}
			});
			const d = (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? e.features.powerupsBenefitSettings[n] : null
				},
				l = (e => Object(a.a)(d, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.6643c2546664fdacd7d3.js.map