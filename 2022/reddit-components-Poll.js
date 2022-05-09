// https://www.redditstatic.com/desktop2x/reddit-components-Poll.04877c82ffcaff80aabe.js
// Retrieved at 5/9/2022, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Poll"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t),
					s = new r.BigNumber(n.dividedBy(o)),
					i = new r.BigNumber("100").multipliedBy(s);
				return new r.BigNumber(i).toNumber()
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function s(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: s,
					locale: i = r.D
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const a = new Date(e * r.Sb);
				return o.a ? new Intl.DateTimeFormat(i, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a) : a.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.D;
				const n = e.toString().length > 10,
					o = new Date(e * (n ? 1 : 1e3));
				return o.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const s = [o.sc, o.pb, o.B, o.Q, o.kb, o.Sb],
				i = {
					[o.Sb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.kb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.Q]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.B]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.pb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.sc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Sb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.Q]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.B]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.sc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.sc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[o.sc]: "",
						[o.pb]: "",
						[o.B]: "",
						[o.Q]: "",
						[o.kb]: "",
						[o.Sb]: ""
					};
				let u = l - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of s) {
					const e = Math.floor(u / r);
					e && (d[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const m = s.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				o = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				o = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
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
				return f
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return j
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				o = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				s = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				a = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				l = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				d = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				h = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				g = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				v = "GOVERNANCE__TRANSFER_FAILURE",
				E = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				O = "GOVERNANCE__TRANSFER_PENDING",
				C = "GOVERNANCE__TRANSFER_SUCCESS",
				N = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				x = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(o.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return V
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/config.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/crypto/points.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			const E = Object(o.a)(g.b),
				O = Object(o.a)(g.c),
				C = Object(o.a)(g.e),
				N = (Object(o.a)(g.f), Object(o.a)(g.g), Object(o.a)(g.h)),
				y = Object(o.a)(g.i),
				x = Object(o.a)(g.j),
				j = Object(o.a)(g.k),
				I = Object(o.a)(g.q),
				P = Object(o.a)(g.r),
				T = Object(o.a)(g.s),
				S = Object(o.a)(g.t),
				L = Object(o.a)(g.u),
				A = Object(o.a)(g.v),
				k = Object(o.a)(g.w),
				w = Object(o.a)(g.x),
				R = (e, t) => async (n, r, o) => {
					let s, {
							apiContext: i,
							gqlContext: c
						} = o,
						b = r().polls.models[e];
					if (n(x({
							pollId: e
						})), (s = b.type === u.a.GA ? await ((e, t, n) => Object(d.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(c(), e, t) : await
							function(e, t, n, r) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${l.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(i(), b.subredditId, e, t)).ok) {
						if (b.type === u.a.GA) {
							const {
								options: e
							} = s.body.data.updatePostPollVoteState.poll;
							n(C({
								pollId: b.id,
								optionId: t,
								options: e
							}))
						} else n(j(s.body));
						const o = r();
						if ((b = o.polls.models[e]) && Object(u.d)(b)) {
							const {
								postId: e
							} = b, t = o.posts.models[e];
							t && t.voteState === _.a.notVoted && n(Object(a.kb)(e))
						}
					} else n(y({
						pollId: e,
						error: s.error || s.errors[0].message
					})), Object(v.a)(n, s.error || s.errors[0].messsage)
				}, D = (e, t) => async (n, o, a) => {
					let {
						apiContext: d
					} = a;
					var u;
					n(T());
					const m = o().transfers.communityPoints.contentId || void 0,
						b = await
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
					}(d(), {
						...e,
						contentId: m
					});
					b.ok ? (n(S({
						...b.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(s.a)(e.amount)), r.fbt._param("tokenName", (null === (u = Object(h.b)(o(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(I({
						error: b.error
					})), Object(v.a)(n, b.error))
				}, V = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					t(A());
					const s = await Object(b.a)(o(), e);
					s.ok ? t(k(s.body)) : t(L({
						error: s.error
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.b)(e, n)
				}
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${a.a.assetPath}/${r}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return o.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: s
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const a = Object(i.a)(),
						c = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : a
						};
					return o.a.createElement(o.a.Fragment, null, Object(s.d)(t, c))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var l = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const s = Object(i.a)(),
						a = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : s
						};
					return o.a.createElement(o.a.Fragment, null, Object(c.a)(t, a))
				},
				d = n("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(i.a)(),
						s = null != n ? n : r;
					return o.a.createElement(o.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
						const n = e * d.Sb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(t, s))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.D;
				const o = Object(p.e)(e, t),
					s = new Date(e * d.Sb);
				let i;
				if (o === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return o === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, r) : o === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, r)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.D;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,r)}`
			}
			var _ = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: s
				} = e;
				const a = Object(i.a)(),
					c = null != s ? s : a;
				return o.a.createElement(o.a.Fragment, null, f(t, n, r, c))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
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
				return l
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				s = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function l(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
					seconds: e.poll.endsAt / r.Sb
				}))], {
					hk: "3OERID"
				}) : Object(s.a)(new Date(e.poll.endsAt)))
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
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
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
			var b, f = n("./src/lib/bigNumberUtils/percent.ts"),
				_ = n("./src/lib/prettyPrintNumber/index.ts"),
				h = n("./src/reddit/helpers/governance/tokens.ts"),
				g = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				v = n("./src/reddit/components/Poll/PollBody/ResultOption/index.m.less"),
				E = n.n(v);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var O = function(e) {
					var t, n;
					const o = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						a = e.result.options[e.optionId],
						c = new r.BigNumber(s).isZero() ? 0 : Object(f.a)(a.votes, s),
						d = Object(h.c)(a.votes, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion);
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, E.a.container),
						title: e.displayType === b.Count ? a.votes : `${c.toFixed(2)}% (${d} ${null===(n=null==e?void 0:e.pointsDetails)||void 0===n?void 0:n.name})`
					}, i.a.createElement("div", {
						className: E.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: `${c}%`
						}
					}), i.a.createElement("div", {
						className: Object(l.a)(E.a.count, {
							[E.a.hide]: e.displayType !== b.Count,
							[E.a.show]: e.displayType === b.Count
						})
					}, Object(_.b)(parseInt(a.votes))), i.a.createElement("div", {
						className: Object(l.a)(E.a.percent, {
							[E.a.hide]: e.displayType === b.Count,
							[E.a.show]: e.displayType !== b.Count
						})
					}, `${c.toFixed(1)}%`), i.a.createElement("div", {
						className: E.a.text
					}, o.text), a.userSelected && i.a.createElement(g.a, {
						className: E.a.check
					}))
				},
				C = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				N = n("./src/reddit/models/Poll/index.ts"),
				y = n("./src/reddit/selectors/poll/index.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				I = n("./src/reddit/components/Poll/NoPollError/index.m.less"),
				P = n.n(I);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function S(e) {
				return i.a.createElement("div", {
					className: Object(l.a)(P.a.container, e.className)
				}, T._("Error: Could not load poll", null, {
					hk: "WWRIU"
				}))
			}
			var L = n("./src/reddit/actions/governance/index.ts"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/helpers/trackers/post.ts"),
				R = n("./src/reddit/selectors/crypto/points.ts"),
				D = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				V = n("./src/reddit/components/Poll/PollBody/ClosedPoll/index.m.less"),
				B = n.n(V);

			function G(e) {
				let t;
				const {
					pointsDetails: n
				} = Object(R.c)();
				return e.poll.options.forEach(n => {
					t || (t = n);
					const o = e.result.options[n.id],
						s = e.result.options[t.id];
					new r.BigNumber(s.votes).isLessThan(new r.BigNumber(o.votes)) && (t = n)
				}), i.a.createElement("div", {
					className: e.className
				}, e.poll.options.map((r, o) => i.a.createElement(O, {
					key: o,
					className: B.a.option,
					displayType: e.displayType,
					isWinningOption: r === t,
					optionId: r.id,
					poll: e.poll,
					result: e.result,
					pointsDetails: n
				})), i.a.createElement(D.a, {
					className: B.a.metaData,
					poll: e.poll
				}))
			}
			var M = n("./node_modules/lodash/isNil.js"),
				U = n.n(M),
				F = n("./src/reddit/constants/elementClassNames.ts"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				$ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				q = n("./src/reddit/components/Poll/PollBody/OpenPoll/index.m.less"),
				W = n.n(q);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z(e) {
				return "INPUT" === e.tagName
			}
			class K extends i.a.Component {
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
							r = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(n.elements).filter(z));
						U()(r) || (this.props.onVoteSelection(t.options[r]), this.props.sendEvent(Object(w.g)(t.id, t.postId, r)))
					}
				}
				render() {
					return i.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, i.a.createElement("div", null, this.props.poll.options.map((e, t) => i.a.createElement("label", {
						key: t,
						className: W.a.option
					}, i.a.createElement("input", {
						className: W.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), i.a.createElement("div", {
						className: W.a.optionText
					}, e.text)))), i.a.createElement("div", {
						className: W.a.controlRow
					}, i.a.createElement("div", {
						className: W.a.buttonContainer
					}, i.a.createElement(H.o, {
						className: F.n,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? i.a.createElement($.a, {
						className: W.a.loadingIcon,
						sizePx: 20
					}) : i.a.createElement(s.Fragment, null, this.props.votingIcon, Z._("Vote", null, {
						hk: "4gs6FY"
					}))), !this.props.userIsLoggedIn && i.a.createElement("div", {
						className: W.a.loggedOutTooltip
					}, Z._("You must be logged in to vote", null, {
						hk: "MnQpC"
					}))), i.a.createElement(D.a, {
						className: W.a.metaData,
						poll: this.props.poll
					})))
				}
			}
			const Q = Object(c.c)({
				userIsLoggedIn: e => !!e.user.account
			});
			var Y = Object(a.b)(Q)(Object(A.c)(K)),
				J = n("./src/reddit/components/Poll/PollBody/index.m.less"),
				X = n.n(J);
			class ee extends i.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(N.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(w.f)(e.id, e.postId))
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
						poll: r,
						result: o,
						subredditId: s,
						title: a,
						voteInProgress: c,
						votingIcon: l
					} = this.props;
					return r ? i.a.createElement("div", {
						className: e
					}, a && i.a.createElement("div", {
						className: X.a.title
					}, a), o && Object(N.e)(r, o) ? i.a.createElement(G, {
						displayType: t,
						poll: r,
						result: o,
						subredditId: s
					}) : i.a.createElement(Y, {
						poll: r,
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
			var ne = Object(k.u)({
					isCommentsPage: k.x
				})(Object(a.b)(te, (e, t) => ({
					onVoteSelection: n => e(Object(L.d)(t.pollId, n.id))
				}))(Object(A.c)(ee))),
				re = n("./src/reddit/selectors/gov.ts"),
				oe = n("./src/reddit/icons/svgs/DynamicThreshold/index.tsx"),
				se = n("./src/reddit/components/Poll/ResultsSelector/DecisionThreshold/index.m.less"),
				ie = n.n(se),
				ae = n("./node_modules/fbt/lib/FbtPublic.js");

			function ce(e) {
				return i.a.createElement(s.Fragment, null, i.a.createElement("div", {
					className: ie.a.text
				}, ae.fbt._("Achieved Decision Threshold", null, {
					hk: "vyCtz"
				})), i.a.createElement("div", {
					className: ie.a.decisionIcon,
					title: e.votes
				}, i.a.createElement(oe.a, {
					className: ie.a.decisionThreshold
				})))
			}

			function le(e) {
				return i.a.createElement(s.Fragment, null, i.a.createElement("div", {
					className: ie.a.text
				}, ae.fbt._("Decision Threshold: {amount}", [ae.fbt._param("amount", Object(_.b)(parseInt(Object(h.b)(e.threshold, e.tokenDisplayConversion))))], {
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
				poll: (e, t) => {
					let {
						pollId: n
					} = t;
					return e.polls.models[n]
				},
				pollResult: (e, t) => {
					let {
						pollId: n
					} = t;
					return e.polls.results.byVotingPower[n]
				},
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(R.b)(e, n)
				}
			});
			var me = Object(a.b)(ue)((function(e) {
					var t;
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const n = Object(N.c)(e.poll, e.pollResult),
						r = new o.a(e.pollResult.options[n.id].votes),
						s = e.poll.decisionThreshold,
						a = r.isGreaterThanOrEqualTo(new o.a(s)),
						c = Object(f.a)(e.pollResult.options[n.id].votes, s);
					return i.a.createElement("div", {
						className: Object(l.a)(ie.a.container, e.className)
					}, a ? i.a.createElement(ce, {
						votes: r.toString()
					}) : i.a.createElement(le, {
						threshold: s,
						percent: c,
						tokenDisplayConversion: null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion
					}))
				})),
				pe = n("./src/reddit/components/Poll/ResultsSelector/index.m.less"),
				be = n.n(pe),
				fe = n("./src/reddit/components/Poll/ResultsSelector/Tab/index.m.less"),
				_e = n.n(fe);

			function he(e) {
				return i.a.createElement("a", {
					className: Object(l.a)(e.className, _e.a.container, {
						[_e.a.selectable]: !!e.selectable,
						[_e.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ve = Object(c.c)({
				distribution: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.gov.distributions[n]
				},
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(R.b)(e, n)
				},
				poll: (e, t) => {
					let {
						pollId: n
					} = t;
					return e.polls.models[n]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: n,
						resultsByVoters: r
					} = t;
					const o = e.polls.models[n];
					return !!(o && r && Object(N.e)(o, r))
				},
				wallet: re.d
			});
			var Ee = Object(a.b)(ve)((function(e) {
					const {
						distribution: t,
						pointsDetails: n,
						poll: o,
						resultsByVoters: s,
						resultsByVotingPower: a,
						wallet: c
					} = e, d = a ? a.totalVotes : "0", u = !new r.BigNumber(d).isZero() && c && t ? Object(f.a)(d, t.totalAvailable) : 0, m = s ? s.totalVotes : "0", p = Object(h.c)(d, null == n ? void 0 : n.displayConversion), b = Object(_.b)(parseInt(m)), g = null == n ? void 0 : n.name;
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, be.a.container)
					}, i.a.createElement("div", null, o.type !== N.a.GA && i.a.createElement(he, {
						isSelected: e.currentResultType === N.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: `${p} ${g}`,
						tooltipText: ge._("{count} {tokenName} ({percent}% of all {tokenNameAgain})", [ge._param("count", p), ge._param("tokenName", g), ge._param("percent", u.toFixed(2)), ge._param("tokenNameAgain", g)], {
							hk: "3R2TN1"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(N.b.ByVotingPower)
					}), i.a.createElement(he, {
						isSelected: e.currentResultType === N.b.ByVoters,
						selectable: e.pollIsClosed,
						text: ge._({
							"*": "{count} votes",
							_1: "{count} vote"
						}, [ge._param("count", b), ge._plural(parseInt(m))], {
							hk: "3oK0a3"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(N.b.ByVoters)
					})), Object(N.d)(o) && i.a.createElement(me, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				Oe = n("./src/reddit/components/Poll/index.m.less"),
				Ce = n.n(Oe);
			class Ne extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll && this.props.poll.type === N.a.GA ? N.b.ByVoters : N.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll && this.props.poll.type === N.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new r.BigNumber(this.props.pollReward).isZero()) {
						const n = ye(e, t.resultType),
							r = ye(this.props, this.state.resultType);
						if (n && r && e.poll && this.props.poll) {
							const t = !Object(N.e)(e.poll, n),
								o = Object(N.e)(this.props.poll, r);
							t && o && this.setState({
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
						resultsByVoters: r,
						pollId: o,
						subredditOrProfile: s,
						post: a,
						className: c,
						resultsByVotingPower: d,
						pollReward: u
					} = this.props;
					if (!o || !n || !s) return null;
					if (a.isMeta && (!o || !n || !s)) return i.a.createElement(S, {
						className: Ce.a.noPollError
					});
					let m = Ce.a.ContainerForNonCommentsPage,
						f = "";
					return e ? m = Object(l.a)(Ce.a.ForCommentsPage, {
						[Ce.a.isEditing]: t
					}) : f = Object(l.a)(Ce.a.ForNonCommentsPage, {
						[Ce.a.mHasNotVoted]: !r,
						[Ce.a.mPollIsClosed]: !!r && Object(N.e)(n, r),
						[Ce.a.mGAPoll]: n.type === N.a.GA
					}), i.a.createElement("div", {
						className: m
					}, i.a.createElement("div", {
						className: Object(l.a)(c, Ce.a.container, f),
						onClick: this.handleContainerClick
					}, i.a.createElement(Ee, {
						className: Ce.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: o,
						resultsByVoters: r,
						resultsByVotingPower: d,
						subredditId: s.id,
						onChangeResultType: this.handleResultTypeChange
					}), i.a.createElement(ne, {
						key: o,
						className: Ce.a.poll,
						displayType: this.state.resultType === N.b.ByVoters ? b.Count : b.Percent,
						pollId: o,
						resultType: this.state.resultType,
						subredditId: s.id,
						votingIcon: Object(N.d)(n) ? i.a.createElement(C.a, {
							className: Ce.a.govIcon
						}) : void 0
					}), u && this.state.displayReward && i.a.createElement(p, {
						amount: u,
						className: Ce.a.votingReward,
						subredditId: s.id
					})))
				}
			}

			function ye(e, t) {
				return t === N.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const xe = Object(c.c)({
				isEditing: x.M,
				poll: y.e,
				pollId: y.a,
				pollReward: y.d,
				post: j.G,
				resultsByVoters: y.c,
				resultsByVotingPower: y.b,
				subredditOrProfile: j.U
			});
			t.default = Object(a.b)(xe)(Ne)
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(s.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
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
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "n", (function() {
				return g
			}));
			var r, o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function a(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function l(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
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
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				_ = e => ({
					type: "subscribe",
					subredditId: e
				}),
				h = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function g(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${o.a.metaUrl}/crypto/ethereum/transaction-intent`,
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
			var r = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: o.jb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: r
						}
					}
					return e
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: o.jb.POST,
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
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(o).toString()
			}

			function i(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function a(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t || 1);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function s(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(o).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(s.e)(i.i) || o.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || o.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
				const e = a(),
					t = Object(s.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DynamicThreshold/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), o.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), o.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), o.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), o.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case o.b:
						case o.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === o.b
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
				var t, n, r, o, s;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					a = null == i ? void 0 : i.contracts,
					c = null == a ? void 0 : a.unlocked,
					l = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					u = !!(null === (o = e.walletProvider) || void 0 === o ? void 0 : o.inTransition),
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
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: u(r)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, o = Object.keys(r).reduce((t, o) => {
							return {
								...t,
								[o]: {
									...e[o] || {},
									[n]: r[o]
								}
							}
						}, {});
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
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
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: a.a
				}
			});
			const c = (e, t) => {
				var n, r, o;
				return t ? null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === o ? void 0 : o[t] : void 0
			};

			function l() {
				const e = Object(o.fb)(),
					t = Object(r.e)(t => Object(o.r)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const d = (e, t) => {
				var n;
				const r = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby || r === s.a.ArbitrumRinkeby
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
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const o = [],
				s = {},
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
					} : s
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const n = l(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = l(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Poll.04877c82ffcaff80aabe.js.map