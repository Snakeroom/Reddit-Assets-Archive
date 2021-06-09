// https://www.redditstatic.com/desktop2x/reddit-components-Poll.e6a3f354ce11247e14b5.js
// Retrieved at 6/9/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Poll"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t),
					o = new s.BigNumber(n.dividedBy(r)),
					i = new s.BigNumber("100").multipliedBy(o);
				return new s.BigNumber(i).toNumber()
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = [r.kc, r.nb, r.z, r.O, r.ib, r.Nb],
				i = {
					[r.Nb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.ib]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.O]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.z]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.nb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.kc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Nb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.ib]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.O]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.z]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.nb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.nb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[r.kc]: "",
						[r.nb]: "",
						[r.z]: "",
						[r.O]: "",
						[r.ib]: "",
						[r.Nb]: ""
					};
				let u = l - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of o) {
					const e = Math.floor(u / s);
					e && (d[s] = (t ? a : i)[s](e).toString()), u -= e * s
				}
				const m = o.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				r = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				r = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return I
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				r = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				a = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				l = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				d = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				h = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				v = "GOVERNANCE__TRANSFER_FAILURE",
				g = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				N = "GOVERNANCE__TRANSFER_PENDING",
				O = "GOVERNANCE__TRANSFER_SUCCESS",
				C = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				x = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				I = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(r.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "h", (function() {
				return D
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/config.ts"),
				d = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/crypto/points.ts"),
				h = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			const g = Object(r.a)(h.b),
				N = Object(r.a)(h.c),
				O = Object(r.a)(h.e),
				C = (Object(r.a)(h.f), Object(r.a)(h.g), Object(r.a)(h.h)),
				y = Object(r.a)(h.i),
				x = Object(r.a)(h.j),
				I = Object(r.a)(h.k),
				P = Object(r.a)(h.q),
				j = Object(r.a)(h.r),
				T = Object(r.a)(h.s),
				S = Object(r.a)(h.t),
				R = Object(r.a)(h.u),
				k = Object(r.a)(h.v),
				A = Object(r.a)(h.w),
				w = Object(r.a)(h.x),
				L = (e, t) => async (n, s, {
					apiContext: r,
					gqlContext: o
				}) => {
					let i, c = s().polls.models[e];
					if (n(x({
							pollId: e
						})), (i = c.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...d,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(o(), e, t) : await
							function(e, t, n, s) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${l.a.metaUrl}/polls/${t}/${n}/votes/me/${s}`
								})
							}(r(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							n(O({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(I(i.body));
						const r = s();
						if ((c = r.polls.models[e]) && Object(m.d)(c)) {
							const {
								postId: e
							} = c, t = r.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(a.bb)(e))
						}
					} else n(y({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(v.a)(n, i.error || i.errors[0].messsage)
				}, V = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					var d;
					n(T());
					const u = r().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${l.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(a(), {
						...e,
						contentId: u
					});
					m.ok ? (n(S({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: _.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(o.a)(e.amount)), s.fbt._param("tokenName", (null === (d = Object(E.b)(r(), e.subredditId)) || void 0 === d ? void 0 : d.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(P({
						error: m.error
					})), Object(v.a)(n, m.error))
				}, D = e => async (t, n, {
					apiContext: s
				}) => {
					t(k());
					const r = await Object(b.a)(s(), e);
					r.ok ? t(A(r.body)) : t(R({
						error: r.error
					}))
				}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const s = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${a.a.assetPath}/${s}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: o
				})
			}))
		},
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/Poll/NoPollError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1GQmtINEsR_SdpSSF6bpXb"
			}
		},
		"./src/reddit/components/Poll/PollBody/ClosedPoll/index.m.less": function(e, t, n) {
			e.exports = {
				metaData: "_1_SfHuVt3khOe_W7bpBBF-",
				option: "F6DiZ5J29ymRMLV0hey1x"
			}
		},
		"./src/reddit/components/Poll/PollBody/OpenPoll/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContainer: "_1IRL40baisCHOgVx5-nRcF",
				loggedOutTooltip: "_2axyMw1olyQSpdOj7sKW77",
				controlRow: "_2LKDAlxxxbXH_38i2yALsT",
				loadingIcon: "_2iHqhPeqQTiw5pMYbTUZHG",
				metaData: "_1BTyR2Gat3WNT1TAbkbU_B",
				option: "_3ST8iDYI6GqAhFV9WjoLVm",
				optionRadio: "_1XF21rwglMWrx_A4Hl9AvH",
				optionText: "_2i69-XcdWxCweTZ_Q5eQsd"
			}
		},
		"./src/reddit/components/Poll/PollBody/ResultOption/index.m.less": function(e, t, n) {
			e.exports = {
				bar: "Jz1mV4fpTSzPIgl2ROwml",
				"m-winning": "_2wpQ1j9eHY-iHtoB3CNMNY",
				mWinning: "_2wpQ1j9eHY-iHtoB3CNMNY",
				check: "_1D-ia-yMo19N_oSZaVggIv",
				container: "_3f1Zkm31y61HQ9s9cdWAHR",
				count: "_1InAvR50xXN8IvYYJXBzeH",
				percent: "_1V-VNtbEGMHmoE45-09_eG",
				hide: "_1EdyqT4CnmoOTKziCl7qt9",
				show: "_3WiWUjWY37G6rkAm78JTLd",
				text: "_3P07HZTvGYr8jZJqBNVWlC"
			}
		},
		"./src/reddit/components/Poll/PollBody/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_1CZXOKckzvDhqvsGORFh7t"
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? s.fbt._("Voting closed {timeAgo}", [s.fbt._param("timeAgo", Object(r.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, n) {
			e.exports = {
				emptyPie: "_13LKAM0J8rM-sl9oCfTamT",
				fullPie: "_2kIyFj6AYX8fcdxJh-JELn",
				checkIcon: "_1YcbTQQX9kkjDWt3piMMnR",
				container: "_1gZV2_MTn0h35g1S6igHHP",
				decisionIcon: "_2yz-Hy7oZ4f9R5QScnSNIs",
				decisionThreshold: "_1njozTIqraTA0aiVrpF2NU",
				pie: "_3mElAd4S8IaS6F20zlT1B2",
				pieContainer: "_2ieuDftvrAcKEs4yT-OO3V",
				pieInvertedMask: "_2AFpyAuuVYWzVFWd-6W0CP",
				pieMask: "fnT0KCJBKGwD0KAWx25rB",
				pieSwap: "_1A-p2ROi_a8tq5Rt3up670",
				text: "_2LG7O4xP5Z4aoyQCeabv0n"
			}
		},
		"./src/reddit/components/Poll/ResultsSelector/Tab/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3-DDmk9bdzkd5bJq2Objai",
				selectable: "_2IAfMBuHLukYQTLI5_Z5Nu",
				selected: "DTBgaoab9JdaywJZPiOUg"
			}
		},
		"./src/reddit/components/Poll/ResultsSelector/index.m.less": function(e, t, n) {
			e.exports = {
				container: "xRxxwCB5DyVUCeHnmQ7yX"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_17oataQxiAOm0EtiuxeElR",
				govIcon: "_2VIAfqUJAT1ou7_nYQP70C",
				poll: "_1-QPevrR8hVMYmv4IGpuXA",
				resultsSelector: "_3j5JtY0pholzCspdR5ojF8",
				votingReward: "_3TiVqp4KIK-7VvtjJhnbNw",
				ForCommentsPage: "_3x3Wvtd6gnKaGIsNplnp4h",
				forCommentsPage: "_3x3Wvtd6gnKaGIsNplnp4h",
				isEditing: "_3Y0u2_WUa7aI3rI1Xm_Ub9",
				ForNonCommentsPage: "_2GSZ9288ptEDvgEc8_vmqv",
				forNonCommentsPage: "_2GSZ9288ptEDvgEc8_vmqv",
				ContainerForNonCommentsPage: "_130BhnfNfKn0dAZDxniNMK",
				containerForNonCommentsPage: "_130BhnfNfKn0dAZDxniNMK",
				noPollError: "_16oxzoeKcycPKn8-8xcack",
				mHasNotVoted: "_1DTkqI8Vr3R16ii_iA0eHV",
				mGAPoll: "_2PigoiHEUbgM9csai63tLu",
				mGaPoll: "_2PigoiHEUbgM9csai63tLu",
				mPollIsClosed: "_2Csk4tjvy8QfMLR2GyemBp"
			}
		},
		"./src/reddit/components/Poll/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				u = n("./src/reddit/components/Governance/VotingReward/index.m.less"),
				m = n.n(u);

			function p(e) {
				return i.a.createElement("div", {
					className: Object(l.a)(m.a.container, e.className)
				}, i.a.createElement("div", {
					className: m.a.pill
				}, i.a.createElement(d.a, {
					className: m.a.token,
					subredditId: e.subredditId
				}), i.a.createElement("span", {
					className: m.a.amount
				}, "+", e.amount)))
			}
			var b, _ = n("./src/lib/bigNumberUtils/percent.ts"),
				f = n("./src/lib/prettyPrintNumber/index.ts"),
				E = n("./src/reddit/helpers/governance/tokens.ts"),
				h = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				v = n("./src/reddit/components/Poll/PollBody/ResultOption/index.m.less"),
				g = n.n(v);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var N = function(e) {
					var t, n;
					const r = e.poll.options.filter(t => t.id === e.optionId)[0],
						o = e.result.totalVotes,
						a = e.result.options[e.optionId],
						c = new s.BigNumber(o).isZero() ? 0 : Object(_.a)(a.votes, o),
						d = Object(E.c)(a.votes, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion);
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, g.a.container),
						title: e.displayType === b.Count ? a.votes : `${c.toFixed(2)}% (${d} ${null===(n=null==e?void 0:e.pointsDetails)||void 0===n?void 0:n.name})`
					}, i.a.createElement("div", {
						className: g.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: `${c}%`
						}
					}), i.a.createElement("div", {
						className: Object(l.a)(g.a.count, {
							[g.a.hide]: e.displayType !== b.Count,
							[g.a.show]: e.displayType === b.Count
						})
					}, Object(f.b)(parseInt(a.votes))), i.a.createElement("div", {
						className: Object(l.a)(g.a.percent, {
							[g.a.hide]: e.displayType === b.Count,
							[g.a.show]: e.displayType !== b.Count
						})
					}, `${c.toFixed(1)}%`), i.a.createElement("div", {
						className: g.a.text
					}, r.text), a.userSelected && i.a.createElement(h.a, {
						className: g.a.check
					}))
				},
				O = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				C = n("./src/reddit/models/Poll/index.ts"),
				y = n("./src/reddit/selectors/poll/index.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				P = n("./src/reddit/components/Poll/NoPollError/index.m.less"),
				j = n.n(P);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function S(e) {
				return i.a.createElement("div", {
					className: Object(l.a)(j.a.container, e.className)
				}, T._("Error: Could not load poll", null, {
					hk: "WWRIU"
				}))
			}
			var R = n("./src/reddit/actions/governance/index.ts"),
				k = n("./src/reddit/components/TrackingHelper/index.tsx"),
				A = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/helpers/trackers/post.ts"),
				L = n("./src/reddit/selectors/crypto/points.ts"),
				V = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				D = n("./src/reddit/components/Poll/PollBody/ClosedPoll/index.m.less"),
				B = n.n(D);

			function G(e) {
				let t;
				const {
					pointsDetails: n
				} = Object(L.c)();
				return e.poll.options.forEach(n => {
					t || (t = n);
					const r = e.result.options[n.id],
						o = e.result.options[t.id];
					new s.BigNumber(o.votes).isLessThan(new s.BigNumber(r.votes)) && (t = n)
				}), i.a.createElement("div", {
					className: e.className
				}, e.poll.options.map((s, r) => i.a.createElement(N, {
					key: r,
					className: B.a.option,
					displayType: e.displayType,
					isWinningOption: s === t,
					optionId: s.id,
					poll: e.poll,
					result: e.result,
					pointsDetails: n
				})), i.a.createElement(V.a, {
					className: B.a.metaData,
					poll: e.poll
				}))
			}
			var M = n("./node_modules/lodash/isNil.js"),
				U = n.n(M),
				F = n("./src/reddit/constants/elementClassNames.ts"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				q = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				W = n("./src/reddit/components/Poll/PollBody/OpenPoll/index.m.less"),
				$ = n.n(W);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z(e) {
				return "INPUT" === e.tagName
			}
			class Z extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						optionIsSelected: !1
					}, this.handleOptionSelected = () => this.setState({
						optionIsSelected: !0
					}), this.handleSubmit = e => {
						const {
							poll: t
						} = this.props;
						e.preventDefault();
						const n = e.currentTarget,
							s = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(n.elements).filter(z));
						U()(s) || (this.props.onVoteSelection(t.options[s]), this.props.sendEvent(Object(w.f)(t.id, t.postId, s)))
					}
				}
				render() {
					return i.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, i.a.createElement("div", null, this.props.poll.options.map((e, t) => i.a.createElement("label", {
						key: t,
						className: $.a.option
					}, i.a.createElement("input", {
						className: $.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), i.a.createElement("div", {
						className: $.a.optionText
					}, e.text)))), i.a.createElement("div", {
						className: $.a.controlRow
					}, i.a.createElement("div", {
						className: $.a.buttonContainer
					}, i.a.createElement(H.l, {
						className: F.n,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? i.a.createElement(q.a, {
						className: $.a.loadingIcon,
						sizePx: 20
					}) : i.a.createElement(o.Fragment, null, this.props.votingIcon, K._("Vote", null, {
						hk: "4gs6FY"
					}))), !this.props.userIsLoggedIn && i.a.createElement("div", {
						className: $.a.loggedOutTooltip
					}, K._("You must be logged in to vote", null, {
						hk: "MnQpC"
					}))), i.a.createElement(V.a, {
						className: $.a.metaData,
						poll: this.props.poll
					})))
				}
			}
			const Y = Object(c.c)({
				userIsLoggedIn: e => !!e.user.account
			});
			var J = Object(a.b)(Y)(Object(k.c)(Z)),
				Q = n("./src/reddit/components/Poll/PollBody/index.m.less"),
				X = n.n(Q);
			class ee extends i.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(C.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(w.e)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: n
					} = this.props;
					e && this.userAlreadyMadeSelection(t, n) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: n,
						poll: s,
						result: r,
						subredditId: o,
						title: a,
						voteInProgress: c,
						votingIcon: l
					} = this.props;
					return s ? i.a.createElement("div", {
						className: e
					}, a && i.a.createElement("div", {
						className: X.a.title
					}, a), r && Object(C.e)(s, r) ? i.a.createElement(G, {
						displayType: t,
						poll: s,
						result: r,
						subredditId: o
					}) : i.a.createElement(J, {
						poll: s,
						onVoteSelection: n,
						voteInProgress: c,
						votingIcon: l
					})) : null
				}
			}
			const te = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var ne = Object(A.t)({
					isCommentsPage: A.w
				})(Object(a.b)(te, (e, t) => ({
					onVoteSelection: n => e(Object(R.d)(t.pollId, n.id))
				}))(Object(k.c)(ee))),
				se = n("./src/reddit/selectors/gov.ts"),
				re = n("./src/reddit/icons/svgs/DynamicThreshold/index.tsx"),
				oe = n("./src/reddit/components/Poll/ResultsSelector/DecisionThreshold/index.m.less"),
				ie = n.n(oe),
				ae = n("./node_modules/fbt/lib/FbtPublic.js");

			function ce(e) {
				return i.a.createElement(o.Fragment, null, i.a.createElement("div", {
					className: ie.a.text
				}, ae.fbt._("Achieved Decision Threshold", null, {
					hk: "vyCtz"
				})), i.a.createElement("div", {
					className: ie.a.decisionIcon,
					title: e.votes
				}, i.a.createElement(re.a, {
					className: ie.a.decisionThreshold
				})))
			}

			function le(e) {
				return i.a.createElement(o.Fragment, null, i.a.createElement("div", {
					className: ie.a.text
				}, ae.fbt._("Decision Threshold: {amount}", [ae.fbt._param("amount", Object(f.b)(parseInt(Object(E.b)(e.threshold, e.tokenDisplayConversion))))], {
					hk: "4p3578"
				})), i.a.createElement(de, {
					percent: e.percent
				}))
			}

			function de(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return i.a.createElement("div", {
					className: ie.a.pieContainer,
					title: `${e.percent}%`
				}, i.a.createElement("div", {
					className: ie.a.pie
				}), i.a.createElement("div", {
					className: ie.a.pieInvertedMask
				}), i.a.createElement("div", {
					className: Object(l.a)(ie.a.pieMask, {
						[ie.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? `rotate(${t}deg)` : `rotate(${t-180}deg)`
					}
				}))
			}
			const ue = Object(c.c)({
				poll: (e, {
					pollId: t
				}) => e.polls.models[t],
				pollResult: (e, {
					pollId: t
				}) => e.polls.results.byVotingPower[t],
				pointsDetails: (e, {
					subredditId: t
				}) => Object(L.b)(e, t)
			});
			var me = Object(a.b)(ue)((function(e) {
					var t;
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const n = Object(C.c)(e.poll, e.pollResult),
						s = new r.a(e.pollResult.options[n.id].votes),
						o = e.poll.decisionThreshold,
						a = s.isGreaterThanOrEqualTo(new r.a(o)),
						c = Object(_.a)(e.pollResult.options[n.id].votes, o);
					return i.a.createElement("div", {
						className: Object(l.a)(ie.a.container, e.className)
					}, a ? i.a.createElement(ce, {
						votes: s.toString()
					}) : i.a.createElement(le, {
						threshold: o,
						percent: c,
						tokenDisplayConversion: null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion
					}))
				})),
				pe = n("./src/reddit/components/Poll/ResultsSelector/index.m.less"),
				be = n.n(pe),
				_e = n("./src/reddit/components/Poll/ResultsSelector/Tab/index.m.less"),
				fe = n.n(_e);

			function Ee(e) {
				return i.a.createElement("a", {
					className: Object(l.a)(e.className, fe.a.container, {
						[fe.a.selectable]: !!e.selectable,
						[fe.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ve = Object(c.c)({
				distribution: (e, {
					subredditId: t
				}) => e.subreddits.gov.distributions[t],
				pointsDetails: (e, {
					subredditId: t
				}) => Object(L.b)(e, t),
				poll: (e, {
					pollId: t
				}) => e.polls.models[t],
				pollIsClosed: (e, {
					pollId: t,
					resultsByVoters: n
				}) => {
					const s = e.polls.models[t];
					return !!(s && n && Object(C.e)(s, n))
				},
				wallet: se.d
			});
			var ge = Object(a.b)(ve)((function(e) {
					const {
						distribution: t,
						pointsDetails: n,
						poll: r,
						resultsByVoters: o,
						resultsByVotingPower: a,
						wallet: c
					} = e, d = a ? a.totalVotes : "0", u = !new s.BigNumber(d).isZero() && c && t ? Object(_.a)(d, t.totalAvailable) : 0, m = o ? o.totalVotes : "0", p = Object(E.c)(d, null == n ? void 0 : n.displayConversion), b = Object(f.b)(parseInt(m)), h = null == n ? void 0 : n.name;
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, be.a.container)
					}, i.a.createElement("div", null, r.type !== C.a.GA && i.a.createElement(Ee, {
						isSelected: e.currentResultType === C.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: `${p} ${h}`,
						tooltipText: he._("{count} {tokenName} ({percent}% of all {tokenNameAgain})", [he._param("count", p), he._param("tokenName", h), he._param("percent", u.toFixed(2)), he._param("tokenNameAgain", h)], {
							hk: "3R2TN1"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVotingPower)
					}), i.a.createElement(Ee, {
						isSelected: e.currentResultType === C.b.ByVoters,
						selectable: e.pollIsClosed,
						text: he._({
							"*": "{count} votes",
							_1: "{count} vote"
						}, [he._param("count", b), he._plural(parseInt(m))], {
							hk: "3oK0a3"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVoters)
					})), Object(C.d)(r) && i.a.createElement(me, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				Ne = n("./src/reddit/components/Poll/index.m.less"),
				Oe = n.n(Ne);
			class Ce extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll && this.props.poll.type === C.a.GA ? C.b.ByVoters : C.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll && this.props.poll.type === C.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new s.BigNumber(this.props.pollReward).isZero()) {
						const n = ye(e, t.resultType),
							s = ye(this.props, this.state.resultType);
						if (n && s && e.poll && this.props.poll) {
							const t = !Object(C.e)(e.poll, n),
								r = Object(C.e)(this.props.poll, s);
							t && r && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					const {
						isCommentsPage: e,
						isEditing: t,
						poll: n,
						resultsByVoters: s,
						pollId: r,
						subredditOrProfile: o,
						post: a,
						className: c,
						resultsByVotingPower: d,
						pollReward: u
					} = this.props;
					if (!r || !n || !o) return null;
					if (a.isMeta && (!r || !n || !o)) return i.a.createElement(S, {
						className: Oe.a.noPollError
					});
					let m = Oe.a.ContainerForNonCommentsPage,
						_ = "";
					return e ? m = Object(l.a)(Oe.a.ForCommentsPage, {
						[Oe.a.isEditing]: t
					}) : _ = Object(l.a)(Oe.a.ForNonCommentsPage, {
						[Oe.a.mHasNotVoted]: !s,
						[Oe.a.mPollIsClosed]: !!s && Object(C.e)(n, s),
						[Oe.a.mGAPoll]: n.type === C.a.GA
					}), i.a.createElement("div", {
						className: m
					}, i.a.createElement("div", {
						className: Object(l.a)(c, Oe.a.container, _),
						onClick: this.handleContainerClick
					}, i.a.createElement(ge, {
						className: Oe.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: r,
						resultsByVoters: s,
						resultsByVotingPower: d,
						subredditId: o.id,
						onChangeResultType: this.handleResultTypeChange
					}), i.a.createElement(ne, {
						key: r,
						className: Oe.a.poll,
						displayType: this.state.resultType === C.b.ByVoters ? b.Count : b.Percent,
						pollId: r,
						resultType: this.state.resultType,
						subredditId: o.id,
						votingIcon: Object(C.d)(n) ? i.a.createElement(O.a, {
							className: Oe.a.govIcon
						}) : void 0
					}), u && this.state.displayReward && i.a.createElement(p, {
						amount: u,
						className: Oe.a.votingReward,
						subredditId: o.id
					})))
				}
			}

			function ye(e, t) {
				return t === C.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const xe = Object(c.c)({
				isEditing: x.K,
				poll: y.e,
				pollId: y.a,
				pollReward: y.d,
				post: I.F,
				resultsByVoters: y.c,
				resultsByVotingPower: y.b,
				subredditOrProfile: I.R
			});
			t.default = Object(a.b)(xe)(Ce)
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "n", (function() {
				return h
			}));
			var s, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 29199749760514
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function l(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const p = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				_ = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				E = (e, t, n, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: s
				});
			async function h(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${r.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/config.ts"),
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: r.hb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function a(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: r.hb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t || 1);
				return n.dividedToIntegerBy(r).toString()
			}

			function i(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function a(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t || 1);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function r(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(r).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DynamicThreshold/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), r.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), r.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), r.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), r.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var a = (e = i, t) => {
					switch (t.type) {
						case o.a: {
							const n = t.payload.claimPoints || {},
								s = Object.keys(n).reduce((t, s) => (t[s] = {
									...e[s],
									availableClaims: n[s]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (s[t] = s[t] || {
									availableClaims: []
								}, s[t].isClaiming = !0)
							}), s
						}
						case r.b:
						case r.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === r.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, s, r, o;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					a = null == i ? void 0 : i.contracts,
					c = null == a ? void 0 : a.unlocked,
					l = null !== (s = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== s ? s : e.provider,
					u = !!(null === (r = e.walletProvider) || void 0 === r ? void 0 : r.inTransition),
					m = (null == c ? void 0 : c.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: l,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: a,
					decimals: m,
					displayConversion: p,
					images: e.images || d,
					inTransition: u,
					name: e.name,
					nomenclature: null === (o = e.extra) || void 0 === o ? void 0 : o.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = l, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: s
						} = t.payload;
						return {
							...e,
							[n]: u(s)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = (e = p, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: s
						} = t.payload, r = Object.keys(s).reduce((t, r) => {
							return {
								...t,
								[r]: {
									...e[r] || {},
									[n]: s[r]
								}
							}
						}, {});
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				claims: a,
				points: m,
				publicWallets: b
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/endpoints/governance/crypto.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: a.a
				}
			});
			const c = (e, t) => {
				var n, s, r;
				return t ? null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === r ? void 0 : r[t] : void 0
			};

			function l() {
				const e = Object(r.Z)(),
					t = Object(s.e)(t => Object(r.q)(t, {
						pageLayer: e
					})),
					n = Object(s.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const d = (e, t) => {
				var n;
				const s = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return s === o.a.Ethereum || s === o.a.Rinkeby || s === o.a.EthTraderEthereum || s === o.a.EthTraderRinkeby || s === o.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				o = {},
				i = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				a = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : o
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const n = l(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				u = (e, t) => {
					const n = l(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Poll.e6a3f354ce11247e14b5.js.map