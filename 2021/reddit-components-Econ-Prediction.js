// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.1d3f6f9f39479cf231e2.js
// Retrieved at 5/18/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
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
				return p
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

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: r,
				storageKey: d = c.a.nonDismissable,
				title: p
			}) {
				const b = d !== c.a.nonDismissable,
					[E, h] = Object(i.a)(d, !b || !1),
					[v, x] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					E || v || !r || (r(), x(!0))
				}, [E, v, r]), b && E ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, p), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), b && o.a.createElement(a.q, {
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
				return ke
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
				p = n("./src/reddit/actions/economics/helpers/index.ts"),
				b = n("./src/reddit/actions/economics/predictions/index.ts"),
				E = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				x = n("./src/reddit/helpers/trackers/predictions.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/poll/index.ts"),
				k = n("./src/reddit/selectors/postCreations.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
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
				R = n("./node_modules/fbt/lib/FbtPublic.js");

			function M() {
				const e = R.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = R.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(y.a, {
					title: e,
					message: t
				}))
			}
			var V = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				D = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				K = n.n(W);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Y({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: i
			}) {
				return e && !n ? o.a.createElement("div", null, o.a.createElement(y.a, {
					title: H._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, H._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && o.a.createElement("div", {
						className: K.a.wonOrLostAmountRow
					}, H._("You lost {lostAmount}", [H._param("lostAmount", o.a.createElement("div", {
						className: K.a.wonOrLostAmount
					}, t ? o.a.createElement(U.a, {
						className: K.a.coinIcon
					}) : o.a.createElement(D.a, {
						className: K.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !i ? o.a.createElement("div", null, o.a.createElement(y.a, {
					title: H._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, H._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: K.a.wonOrLostAmountRow
					}, H._("You've been refunded {refundedAmount}", [H._param("refundedAmount", o.a.createElement("div", {
						className: K.a.wonOrLostAmount
					}, t ? o.a.createElement(U.a, {
						className: K.a.coinIcon
					}) : o.a.createElement(D.a, {
						className: K.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? o.a.createElement("div", null, o.a.createElement(y.a, {
					title: H._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, H._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!i && o.a.createElement("div", {
						className: K.a.wonOrLostAmountRow
					}, H._("You won {wonAmount}", [H._param("wonAmount", o.a.createElement("div", {
						className: K.a.wonOrLostAmount
					}, t ? o.a.createElement(U.a, {
						className: K.a.coinIcon
					}) : o.a.createElement(D.a, {
						className: K.a.coinIcon
					}), s + i))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(y.a, {
					title: H._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: H._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			var Z = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				z = n.n(X);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? o.a.createElement("div", {
				className: z.a.statusBar
			}, n && o.a.createElement(Z.a, {
				className: z.a.clockIcon
			}), t ? G._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : G._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : o.a.createElement("div", {
				className: z.a.statusBar
			}, n && o.a.createElement(Z.a, {
				className: z.a.clockIcon
			}), G._("Prediction ends in {expirationDuration}", [G._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var q = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: s
				}) => o.a.createElement("div", null, n > 0 && s && o.a.createElement("div", {
					className: z.a.statusBar
				}, o.a.createElement(D.a, {
					className: z.a.coinIcon
				}), n, " ", G._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(J, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: s
				})),
				Q = n("./src/higherOrderComponents/asModal/index.tsx"),
				$ = n("./src/reddit/controls/Button/index.tsx"),
				ee = n("./src/reddit/icons/svgs/Close/index.tsx"),
				te = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(Q.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: ne.a.header
					}, o.a.createElement($.q, {
						className: ne.a.closeButton,
						Icon: ee.a,
						priority: $.b.Plain,
						onClick: n
					}), o.a.createElement("h1", null, se._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), o.a.createElement("div", {
						className: ne.a.content
					}, o.a.createElement("p", {
						className: ne.a.message
					}, t ? se._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : se._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), o.a.createElement("div", {
						className: ne.a.actions
					}, o.a.createElement($.l, {
						disabled: e,
						onClick: n,
						priority: $.b.Secondary,
						redditStyle: !0,
						size: $.c.S
					}, se._("Cancel", null, {
						hk: "4Gco5s"
					})), o.a.createElement($.i, {
						className: ne.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: $.c.S
					}, se._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				ie = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				ae = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				re = n.n(ae),
				ce = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				de = n("./src/reddit/controls/InternalLink/index.tsx"),
				le = n("./src/reddit/hooks/usePageLayer.ts"),
				ue = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				me = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				pe = n("./src/reddit/selectors/subreddit.ts"),
				be = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Ee = n.n(be);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ve({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(i.d)(),
					a = Object(g.a)(),
					r = Object(le.a)(),
					c = Object(i.e)(t => Object(pe.U)(t, {
						subredditId: e
					})),
					d = Object(i.e)(t => Object(me.g)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(me.a)(t, {
						subredditId: e
					})),
					p = Object(m.w)(r),
					E = Object(m.G)(r),
					h = Object(m.K)(r);
				if (Object(s.useEffect)(() => {
						d || n(Object(b.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: v,
					totalParticipantsCount: _
				} = u;
				return o.a.createElement(de.a, {
					className: Ee.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						a(Object(x.j)({
							pageType: p ? "post_detail" : h ? "community" : E ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(ce.a, {
					className: Ee.a.facepile,
					subredditId: e
				}), o.a.createElement("div", {
					className: Ee.a.info
				}, o.a.createElement("div", {
					className: Ee.a.tournamentName
				}, v), o.a.createElement("div", {
					className: Ee.a.totalPlayers
				}, _ > 0 ? he._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [he._param("totalPlayers", Object(l.b)(_)), he._plural(_)], {
					hk: "3eDpRH"
				}) : he._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(ue.a, {
					className: Ee.a.chevron
				}))
			}
			const {
				fbt: xe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = Object(a.c)({
				isAutoVoteEnabled: v.e,
				isEditing: k.K,
				isVoteAnimationEnabled: v.d,
				prediction: f.g,
				pollId: f.a,
				post: P.F,
				subredditOrProfile: P.R,
				userCoins: O.d,
				userIsLoggedIn: O.J,
				userId: O.ob
			}), _e = {
				onPredictionResolve: b.j,
				onPredictionVote: b.k,
				showToast: h.f,
				upvoteToggled: E.bb
			}, fe = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), ke = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: i,
				isPredictionsPage: a,
				isVoteAnimationEnabled: r,
				onPredictionResolve: m,
				onPredictionVote: b,
				post: E,
				prediction: h,
				pollId: v,
				subredditOrProfile: f,
				showToast: k,
				upvoteToggled: P,
				userCoins: O,
				userId: w,
				userIsLoggedIn: j
			}) => {
				var C;
				const [y, S] = Object(s.useState)(!1), [A, L] = Object(s.useState)(null), [R, D] = Object(s.useState)(null), [U, W] = Object(s.useState)(!1), K = Object(g.a)(), H = Object(s.useCallback)(() => {
					W(!1)
				}, []), Z = Object(s.useCallback)(() => {
					L(null), D(null)
				}, []);
				if (!v || !h || !f) return o.a.createElement(I, null);
				const {
					creatorId: X,
					endsAt: z,
					options: G,
					resolvedOptionId: J,
					totalStakeAmount: Q,
					totalVoters: $,
					tournamentId: ee,
					userSelection: te,
					userWonAmount: ne
				} = h, se = X === w, ae = z < Date.now(), ce = !c()(ee), de = ae && se && !J, le = G.find(({
					id: e
				}) => e === A), ue = n ? Object(d.a)(e, re.a.container, re.a.forCommentsPage, {
					[re.a.isEditing]: i
				}) : Object(d.a)(e, re.a.container);
				return o.a.createElement("div", {
					className: ue,
					onClick: e => {
						h && e.stopPropagation()
					}
				}, n ? ae ? J ? o.a.createElement(Y, {
					didParticipate: !!te,
					isTokens: ce,
					isWinner: J === te,
					predictedAmount: te && (null === (C = G.find(({
						id: e
					}) => e === te)) || void 0 === C ? void 0 : C.userStakeAmount) || 0,
					wonAmount: ne
				}) : de ? o.a.createElement(M, null) : o.a.createElement(T, {
					didParticipate: !!te
				}) : o.a.createElement(F.a, {
					isTokens: ce,
					storageKey: N.a.feature
				}) : null, o.a.createElement("div", {
					className: re.a.poll
				}, G.map(e => o.a.createElement(ie.a, {
					endsAt: z,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: U && te === e.id,
					onAnimationEnd: H
				}, o.a.createElement(V.a, {
					disabled: U,
					isEnded: ae,
					isSelected: A === e.id,
					needsResolution: de,
					option: e,
					onClick: () => (e => {
						(de || !ae && !te) && (de ? D(e.id) : L(e.id))
					})(e),
					resolvedOptionId: J,
					tournamentId: ee,
					userSelection: te,
					userIsLoggedOut: !j,
					votePercentage: (te || ae) && e.voteCount ? Math.floor(e.voteCount / $ * 100) : null
				}))), o.a.createElement("div", {
					className: re.a.predictionsCount
				}, ce && $ > 0 && xe._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [xe._param("total voters", Object(l.b)($)), xe._plural($)], {
					hk: "2u2Nv8"
				}), o.a.createElement(q, {
					isCoins: !ce,
					endsAt: z,
					resolvedOptionId: J,
					totalStakeAmount: Q
				}))), !!le && o.a.createElement(B.b, {
					className: re.a.modal,
					isCreatingVote: y,
					onOverlayClick: Z,
					onCancel: Z,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > O) return Object(p.promptUserToBuyMoreCoins)(), void K(x.a);
						const s = n ? n.id : e.id,
							o = n ? n.amount : e.coins;
						if (ae) return k({
							duration: 5e3,
							kind: _.b.Error,
							text: xe._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void L(null);
						if (!v || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						S(!0), K(ee ? Object(x.n)({
							pollId: v,
							selectedNumberTokens: o
						}) : Object(x.m)({
							pollId: v,
							selectedNumberCoins: o,
							totalStakeAmount: Q
						}));
						try {
							await b({
								coinPackageId: s,
								optionId: A,
								postId: v,
								price: o
							}), t && P(v), S(!1), L(null), r ? W(!0) : k({
								duration: 5e3,
								kind: _.b.SuccessCommunity,
								text: xe._("Thanks! See if you're right in {timeToResult}", [xe._param("timeToResult", Object(u.a)(new Date(z), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (i) {
							S(!1), L(null), k({
								duration: 5e3,
								kind: _.b.Error,
								text: xe._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: le,
					pollId: v,
					subredditId: E.belongsTo.id,
					tournamentId: ee,
					withOverlay: !0
				}), de && R && o.a.createElement(oe, {
					isResolving: y,
					isTokens: ce,
					onOverlayClick: Z,
					onCancel: Z,
					onResolve: async () => {
						if (S(!0), !R) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: R,
								postId: v
							})
						} catch (e) {
							k({
								duration: 5e3,
								kind: _.b.Error,
								text: xe._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						D(null), S(!1)
					},
					withOverlay: !0
				}), !a && ee && o.a.createElement(ve, {
					subredditId: E.belongsTo.id,
					tournamentId: ee
				}))
			};
			t.default = fe(Object(i.b)(ge, _e)(ke))
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
				p = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				b = n.n(p);

			function E({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const p = Object(i.e)(m.V),
					E = Object(i.e)(m.i),
					h = Object(i.e)(m.B),
					v = Object(i.e)(e => Object(u.a)(e, {
						subredditId: n
					}));
				return (null === (s = null == v ? void 0 : v.latestParticipants) || void 0 === s ? void 0 : s.length) ? o.a.createElement("div", {
					className: Object(a.a)(b.a.tournamentFacepile, e)
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
						backgroundClassName: b.a.snoovatarBackground,
						className: Object(a.a)(b.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(c.a, {
						key: v,
						className: Object(a.a)(b.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: i,
						isNSFW: m,
						isNightMode: p,
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.1d3f6f9f39479cf231e2.js.map