// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.dfe7ba178d0028b0c9f0.js
// Retrieved at 5/18/2021, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_26GJLzgfE0wgM-CnXwauPN",
				titleRow: "vZoXjCnTHVyUauLNVGVfk",
				header: "_27PnGSqq2_i7iJirZpjlvp",
				title: "_3tXfrHlKYl3OfwzJeHj2TF",
				newBadge: "_2xWQI6x-vSCyMVG0rWrUv",
				closeButton: "_2fuSvPWThjhQeduKzDNNsl"
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/hooks/useLocalStorage.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				isFilled: e,
				...t
			}) => o.a.createElement(r.a, t);

			function b({
				message: e,
				newBadge: t,
				onClose: n,
				onView: r,
				storageKey: d = c.a.nonDismissable,
				title: b
			}) {
				const p = d !== c.a.nonDismissable,
					[E, h] = Object(i.a)(d, !p || !1),
					[v, x] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					E || v || !r || (r(), x(!0))
				}, [E, v, r]), p && E ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, b), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), p && o.a.createElement(a.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: m,
					onClick: () => {
						h(!0), n && n()
					},
					priority: a.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_7xN79rTmvLDGpKHFIZtZp"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function r({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const r = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return i.a.createElement("div", null, i.a.createElement(a.a, {
					onClose: t,
					onView: n,
					title: r,
					newBadge: !0,
					message: c,
					storageKey: o
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "Q621mV5971l_mCH7u6xH2",
				wonOrLostAmountRow: "_2fSjP0uCCM6rDX2NTgXmZZ",
				wonOrLostAmount: "fpuXaOlXcTLRb8FScJmfB"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF",
				divider: "SZcaijbNtMWo_Hks5p9cB",
				clockIcon: "DzRACNzo9EG6-6h40DhZA"
			}
		},
		"./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2n_V3eaYinaIoTbG9ikkK0",
				closeButton: "_3pPuZ3I3wkPK0d8WNh2m51",
				content: "_3HRJlgO-JoezNvYzRP_Ld0",
				message: "_1DLbjgapmKO0sh19JkECbB",
				actions: "tbnzhK1drOMaacYuMtJhT",
				submitButton: "A3dSYyITh_D79x6Fvr_IZ"
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
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				poll: "_1iOvuGeyccWW1Hv9HUTB4H",
				predictionsCount: "_2x07LX5L46mw32ZNGDtzd4",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h",
				modal: "_2Bs1wJm82uxVUlTlni0EgW"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return je
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./node_modules/lodash/isNil.js"),
				c = n.n(r),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeUntil/index.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/actions/economics/helpers/index.ts"),
				p = n("./src/reddit/actions/economics/predictions/index.ts"),
				E = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				x = n("./src/reddit/helpers/trackers/predictions.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/poll/index.ts"),
				k = n("./src/reddit/selectors/postCreations.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				w = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				j = n.n(w);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var I = ({
					className: e
				}) => o.a.createElement("div", {
					className: Object(d.a)(j.a.container, e)
				}, C._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				y = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx"),
				S = n("./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less"),
				A = n.n(S);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function T({
				didParticipate: e
			}) {
				const t = L._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = o.a.createElement(o.a.Fragment, null, L._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && o.a.createElement("div", {
						className: A.a.notificationBlurb
					}, L._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return o.a.createElement("div", null, o.a.createElement(y.a, {
					title: t,
					message: n
				}))
			}
			var F = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				B = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				M = n("./node_modules/fbt/lib/FbtPublic.js");

			function R() {
				const e = M.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = M.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(y.a, {
					title: e,
					message: t
				}))
			}
			var V = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				D = n("./src/reddit/icons/svgs/Lightbulb/index.tsx"),
				H = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				U = n.n(H);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var z = ({
					disabled: e,
					isEnded: t,
					userSelection: n,
					isShowingHint: s,
					onClick: a
				}) => {
					return !Object(i.e)(v.f) || t || n && !s ? null : o.a.createElement("div", {
						className: U.a.optionButtonWrapper
					}, o.a.createElement("button", {
						"aria-label": "Get a hint",
						className: Object(d.a)(U.a.hintButton, {
							[U.a.canGetHint]: !e
						}),
						disabled: e,
						onClick: a
					}, o.a.createElement("div", {
						className: U.a.optionBody
					}, o.a.createElement("div", {
						className: U.a.optionText
					}, o.a.createElement(D.a, {
						className: U.a.bulbIcon
					}), W._("Get Hint", null, {
						hk: "1Vk6qX"
					})))))
				},
				K = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				Y = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				Z = n.n(Y);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function J({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: i
			}) {
				return e && !n ? o.a.createElement("div", null, o.a.createElement(y.a, {
					title: G._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, G._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && o.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, G._("You lost {lostAmount}", [G._param("lostAmount", o.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, t ? o.a.createElement(X.a, {
						className: Z.a.coinIcon
					}) : o.a.createElement(K.a, {
						className: Z.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !i ? o.a.createElement("div", null, o.a.createElement(y.a, {
					title: G._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, G._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, G._("You've been refunded {refundedAmount}", [G._param("refundedAmount", o.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, t ? o.a.createElement(X.a, {
						className: Z.a.coinIcon
					}) : o.a.createElement(K.a, {
						className: Z.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? o.a.createElement("div", null, o.a.createElement(y.a, {
					title: G._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, G._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!i && o.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, G._("You won {wonAmount}", [G._param("wonAmount", o.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, t ? o.a.createElement(X.a, {
						className: Z.a.coinIcon
					}) : o.a.createElement(K.a, {
						className: Z.a.coinIcon
					}), s + i))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(y.a, {
					title: G._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: G._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			var q = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				Q = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				$ = n.n(Q);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? o.a.createElement("div", {
				className: $.a.statusBar
			}, n && o.a.createElement(q.a, {
				className: $.a.clockIcon
			}), t ? ee._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : ee._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : o.a.createElement("div", {
				className: $.a.statusBar
			}, n && o.a.createElement(q.a, {
				className: $.a.clockIcon
			}), ee._("Prediction ends in {expirationDuration}", [ee._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var ne = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: s
				}) => o.a.createElement("div", null, n > 0 && s && o.a.createElement("div", {
					className: $.a.statusBar
				}, o.a.createElement(K.a, {
					className: $.a.coinIcon
				}), n, " ", ee._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(te, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: s
				})),
				se = n("./src/higherOrderComponents/asModal/index.tsx"),
				oe = n("./src/reddit/controls/Button/index.tsx"),
				ie = n("./src/reddit/icons/svgs/Close/index.tsx"),
				ae = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				re = n.n(ae);
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = Object(se.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: re.a.header
					}, o.a.createElement(oe.q, {
						className: re.a.closeButton,
						Icon: ie.a,
						priority: oe.b.Plain,
						onClick: n
					}), o.a.createElement("h1", null, ce._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), o.a.createElement("div", {
						className: re.a.content
					}, o.a.createElement("p", {
						className: re.a.message
					}, t ? ce._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : ce._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), o.a.createElement("div", {
						className: re.a.actions
					}, o.a.createElement(oe.l, {
						disabled: e,
						onClick: n,
						priority: oe.b.Secondary,
						redditStyle: !0,
						size: oe.c.S
					}, ce._("Cancel", null, {
						hk: "4Gco5s"
					})), o.a.createElement(oe.i, {
						className: re.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: oe.c.S
					}, ce._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				le = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				ue = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				me = n.n(ue),
				be = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				pe = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ee = n("./src/reddit/hooks/usePageLayer.ts"),
				he = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				ve = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				ge = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				_e = n.n(ge);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ke({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(i.d)(),
					a = Object(g.a)(),
					r = Object(Ee.a)(),
					c = Object(i.e)(t => Object(xe.U)(t, {
						subredditId: e
					})),
					d = Object(i.e)(t => Object(ve.g)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(ve.a)(t, {
						subredditId: e
					})),
					b = Object(m.w)(r),
					E = Object(m.G)(r),
					h = Object(m.K)(r);
				if (Object(s.useEffect)(() => {
						d || n(Object(p.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: v,
					totalParticipantsCount: _
				} = u;
				return o.a.createElement(pe.a, {
					className: _e.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						a(Object(x.j)({
							pageType: b ? "post_detail" : h ? "community" : E ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(be.a, {
					className: _e.a.facepile,
					subredditId: e
				}), o.a.createElement("div", {
					className: _e.a.info
				}, o.a.createElement("div", {
					className: _e.a.tournamentName
				}, v), o.a.createElement("div", {
					className: _e.a.totalPlayers
				}, _ > 0 ? fe._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [fe._param("totalPlayers", Object(l.b)(_)), fe._plural(_)], {
					hk: "3eDpRH"
				}) : fe._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(he.a, {
					className: _e.a.chevron
				}))
			}
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ne = Object(a.c)({
				isAutoVoteEnabled: v.e,
				isEditing: k.K,
				isVoteAnimationEnabled: v.d,
				prediction: f.g,
				pollId: f.a,
				post: P.F,
				subredditOrProfile: P.R,
				userCoins: N.d,
				userIsLoggedIn: N.J,
				userId: N.ob
			}), Oe = {
				onPredictionResolve: p.j,
				onPredictionVote: p.k,
				showToast: h.f,
				upvoteToggled: E.bb
			}, we = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), je = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: i,
				isPredictionsPage: a,
				isVoteAnimationEnabled: r,
				onPredictionResolve: m,
				onPredictionVote: p,
				post: E,
				prediction: h,
				pollId: v,
				subredditOrProfile: f,
				showToast: k,
				upvoteToggled: P,
				userCoins: N,
				userId: w,
				userIsLoggedIn: j
			}) => {
				var C;
				const [y, S] = Object(s.useState)(!1), [A, L] = Object(s.useState)(null), [M, D] = Object(s.useState)(null), [H, U] = Object(s.useState)(!1), [W, K] = Object(s.useState)(!1), X = Object(g.a)(), Y = Object(s.useCallback)(() => {
					U(!1)
				}, []), Z = Object(s.useCallback)(() => {
					L(null), D(null)
				}, []);
				if (!v || !h || !f) return o.a.createElement(I, null);
				const {
					creatorId: G,
					endsAt: q,
					options: Q,
					resolvedOptionId: $,
					totalStakeAmount: ee,
					totalVoters: te,
					tournamentId: se,
					userSelection: oe,
					userWonAmount: ie
				} = h, ae = G === w, re = q < Date.now(), ce = !c()(se), ue = re && ae && !$, be = Q.find(({
					id: e
				}) => e === A), pe = n ? Object(d.a)(e, me.a.container, me.a.forCommentsPage, {
					[me.a.isEditing]: i
				}) : Object(d.a)(e, me.a.container);
				return o.a.createElement("div", {
					className: pe,
					onClick: e => {
						h && e.stopPropagation()
					}
				}, n ? re ? $ ? o.a.createElement(J, {
					didParticipate: !!oe,
					isTokens: ce,
					isWinner: $ === oe,
					predictedAmount: oe && (null === (C = Q.find(({
						id: e
					}) => e === oe)) || void 0 === C ? void 0 : C.userStakeAmount) || 0,
					wonAmount: ie
				}) : ue ? o.a.createElement(R, null) : o.a.createElement(T, {
					didParticipate: !!oe
				}) : o.a.createElement(F.a, {
					isTokens: ce,
					storageKey: O.a.feature
				}) : null, o.a.createElement("div", {
					className: me.a.poll
				}, Q.map(e => o.a.createElement(le.a, {
					endsAt: q,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: H && oe === e.id,
					onAnimationEnd: Y
				}, o.a.createElement(V.a, {
					disabled: H,
					isEnded: re,
					isSelected: A === e.id,
					needsResolution: ue,
					option: e,
					onClick: () => (e => {
						(ue || !re && !oe) && (ue ? D(e.id) : L(e.id))
					})(e),
					resolvedOptionId: $,
					tournamentId: se,
					userSelection: oe,
					userIsLoggedOut: !j,
					votePercentage: (oe || re || W) && e.voteCount ? Math.floor(e.voteCount / te * 100) : null,
					isShowingHint: W
				}))), o.a.createElement(z, {
					disabled: H || W || !!oe,
					isEnded: re,
					userSelection: oe,
					isShowingHint: W,
					onClick: () => K(!0)
				}), o.a.createElement("div", {
					className: me.a.predictionsCount
				}, ce && te > 0 && Pe._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [Pe._param("total voters", Object(l.b)(te)), Pe._plural(te)], {
					hk: "2u2Nv8"
				}), o.a.createElement(ne, {
					isCoins: !ce,
					endsAt: q,
					resolvedOptionId: $,
					totalStakeAmount: ee
				}))), !!be && o.a.createElement(B.b, {
					className: me.a.modal,
					isCreatingVote: y,
					onOverlayClick: Z,
					onCancel: Z,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > N) return Object(b.promptUserToBuyMoreCoins)(), void X(x.a);
						const s = n ? n.id : e.id,
							o = n ? n.amount : e.coins;
						if (re) return k({
							duration: 5e3,
							kind: _.b.Error,
							text: Pe._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void L(null);
						if (!v || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						S(!0), X(se ? Object(x.n)({
							pollId: v,
							selectedNumberTokens: o
						}) : Object(x.m)({
							pollId: v,
							selectedNumberCoins: o,
							totalStakeAmount: ee
						}));
						try {
							await p({
								coinPackageId: s,
								optionId: A,
								postId: v,
								price: o
							}), t && P(v), S(!1), L(null), r ? U(!0) : k({
								duration: 5e3,
								kind: _.b.SuccessCommunity,
								text: Pe._("Thanks! See if you're right in {timeToResult}", [Pe._param("timeToResult", Object(u.a)(new Date(q), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (i) {
							S(!1), L(null), k({
								duration: 5e3,
								kind: _.b.Error,
								text: Pe._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: be,
					pollId: v,
					subredditId: E.belongsTo.id,
					tournamentId: se,
					withOverlay: !0
				}), ue && M && o.a.createElement(de, {
					isResolving: y,
					isTokens: ce,
					onOverlayClick: Z,
					onCancel: Z,
					onResolve: async () => {
						if (S(!0), !M) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: M,
								postId: v
							})
						} catch (e) {
							k({
								duration: 5e3,
								kind: _.b.Error,
								text: Pe._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						D(null), S(!1)
					},
					withOverlay: !0
				}), !a && se && o.a.createElement(ke, {
					subredditId: E.belongsTo.id,
					tournamentId: se
				}))
			};
			t.default = we(Object(i.b)(Ne, Oe)(je))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				p = n.n(b);

			function E({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const b = Object(i.e)(m.V),
					E = Object(i.e)(m.i),
					h = Object(i.e)(m.B),
					v = Object(i.e)(e => Object(u.a)(e, {
						subredditId: n
					}));
				return (null === (s = null == v ? void 0 : v.latestParticipants) || void 0 === s ? void 0 : s.length) ? o.a.createElement("div", {
					className: Object(a.a)(p.a.tournamentFacepile, e)
				}, v.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const i = !!E && Object(l.e)(E) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = s,
						v = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? o.a.createElement(r.a, {
						key: v,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(a.a)(p.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(c.a, {
						key: v,
						className: Object(a.a)(p.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: i,
						isNSFW: m,
						isNightMode: b,
						shouldHideNSFW: h
					})
				})) : null
			}
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function i(e, t) {
				let n;
				n = Object(o.v)(e);
				const [i, a] = Object(s.useState)(null != n ? n : t);
				return [i, function(t) {
					Object(o.sb)(e, t), a(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.Z
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(i.a)(r.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Lightbulb/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M8 19.625H6a.625.625 0 010-1.25h2a.625.625 0 110 1.25zm1-2.5H5a.625.625 0 010-1.25h4a.625.625 0 010 1.25zm.134-2.5H4.917a.623.623 0 01-.612-.5 3.1 3.1 0 00-1.119-1.864 6.62 6.62 0 117.727.234c-.58.398-.997.991-1.176 1.67a.625.625 0 01-.603.46zM5.4 13.375h3.285a4.144 4.144 0 011.529-1.918 5.382 5.382 0 10-6.269-.191A4.26 4.26 0 015.4 13.375z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.dfe7ba178d0028b0c9f0.js.map