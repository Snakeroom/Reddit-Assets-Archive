// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.3d18cd5da98666209382.js
// Retrieved at 7/26/2021, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-BurnPointsModal"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t),
					l = new n.BigNumber(a.dividedBy(r)),
					c = new n.BigNumber("100").multipliedBy(l);
				return new n.BigNumber(c).toNumber()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "a", (function() {
				return r
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				r = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			})), a.d(t, "b", (function() {
				return M
			})), a.d(t, "c", (function() {
				return j
			})), a.d(t, "f", (function() {
				return _
			})), a.d(t, "g", (function() {
				return L
			})), a.d(t, "d", (function() {
				return A
			})), a.d(t, "e", (function() {
				return D
			})), a.d(t, "h", (function() {
				return B
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/makeActionCreator/index.ts"),
				l = a("./src/lib/prettyPrintNumber/index.ts"),
				c = a("./src/reddit/actions/modal.ts"),
				s = a("./src/reddit/actions/post.ts"),
				o = a("./src/reddit/actions/toaster.ts"),
				i = a("./src/config.ts"),
				d = a("./src/lib/makeGqlRequest/index.ts"),
				u = a("./src/reddit/models/Poll/index.ts"),
				m = a("./src/redditGQL/operations/PollVote.json"),
				p = a("./src/reddit/endpoints/governance/requester.ts");
			var h = a("./src/reddit/endpoints/governance/wallet.ts"),
				b = a("./src/reddit/models/Toast/index.ts"),
				v = a("./src/reddit/models/Vote/index.ts"),
				f = a("./src/reddit/selectors/crypto/points.ts"),
				E = a("./src/reddit/actions/governance/constants.ts"),
				x = a("./src/reddit/actions/governance/errorToast.ts");
			const g = Object(r.a)(E.b),
				M = Object(r.a)(E.c),
				C = Object(r.a)(E.e),
				j = (Object(r.a)(E.f), Object(r.a)(E.g), Object(r.a)(E.h)),
				N = Object(r.a)(E.i),
				y = Object(r.a)(E.j),
				w = Object(r.a)(E.k),
				O = Object(r.a)(E.q),
				_ = Object(r.a)(E.r),
				k = Object(r.a)(E.s),
				I = Object(r.a)(E.t),
				z = Object(r.a)(E.u),
				T = Object(r.a)(E.v),
				F = Object(r.a)(E.w),
				L = Object(r.a)(E.x),
				A = (e, t) => async (a, n, {
					apiContext: r,
					gqlContext: l
				}) => {
					let c, o = n().polls.models[e];
					if (a(y({
							pollId: e
						})), (c = o.type === u.a.GA ? await ((e, t, a) => Object(d.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: a
									}
								}
							}))(l(), e, t) : await
							function(e, t, a, n) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${i.a.metaUrl}/polls/${t}/${a}/votes/me/${n}`
								})
							}(r(), o.subredditId, e, t)).ok) {
						if (o.type === u.a.GA) {
							const {
								options: e
							} = c.body.data.updatePostPollVoteState.poll;
							a(C({
								pollId: o.id,
								optionId: t,
								options: e
							}))
						} else a(w(c.body));
						const r = n();
						if ((o = r.polls.models[e]) && Object(u.d)(o)) {
							const {
								postId: e
							} = o, t = r.posts.models[e];
							t && t.voteState === v.a.notVoted && a(Object(s.bb)(e))
						}
					} else a(N({
						pollId: e,
						error: c.error || c.errors[0].message
					})), Object(x.a)(a, c.error || c.errors[0].messsage)
				}, D = (e, t) => async (a, r, {
					apiContext: s
				}) => {
					var d;
					a(k());
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
							endpoint: `${i.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(s(), {
						...e,
						contentId: u
					});
					m.ok ? (a(I({
						...m.body,
						subredditId: e.subredditId
					})), a(Object(o.f)({
						kind: b.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(l.a)(e.amount)), n.fbt._param("tokenName", (null === (d = Object(f.b)(r(), e.subredditId)) || void 0 === d ? void 0 : d.name) || ""), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && a(Object(c.f)())) : (a(O({
						error: m.error
					})), Object(x.a)(a, m.error))
				}, B = e => async (t, a, {
					apiContext: n
				}) => {
					t(T());
					const r = await Object(h.a)(n(), e);
					r.ok ? t(F(r.body)) : t(z({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, a) {
			"use strict";

			function n(e, t, a = 3e4, n = 3e5) {
				return async (r, l, c) => new Promise((s, o) => {
					const i = Date.now() + n,
						d = () => {
							o(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > i) return d();
							const n = Date.now();
							await e(r, l, c);
							const m = await t(l);
							if (m) s();
							else if (!1 === m) o();
							else {
								Date.now() + Math.max(a - (Date.now() - n), 0) < i ? setTimeout(u, a) : d()
							}
						};
					u()
				})
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/actions/modal.ts"),
				o = a("./src/reddit/icons/svgs/Close/index.tsx"),
				i = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = a.n(i);
			t.a = Object(l.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(s.f)()), t && t()
				}
			}))((function(e) {
				return r.a.createElement(o.a, {
					className: Object(c.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				s = a("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				o = a.n(s);

			function i(e) {
				return r.a.createElement("div", {
					className: Object(l.a)(o.a.container, e.className, {
						[o.a.coloredContainer]: e.colored
					})
				}, r.a.createElement("div", {
					className: o.a.title
				}, e.children), r.a.createElement(c.a, {
					className: o.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				s = a("./src/config.ts"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/selectors/crypto/points.ts"),
				d = a("./src/reddit/components/Governance/Token/index.m.less"),
				u = a.n(d);
			const m = Object(c.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(i.b)(e, t)
			});
			t.a = Object(l.b)(m)((function(e) {
				var t;
				const a = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!a) return null;
				const n = e.grey ? a.greyVector || a.grey : a.filledVector || a.filled,
					l = `${s.a.assetPath}/${n}`;
				if (e.grey && l.endsWith(".svg")) {
					const t = `url(${l}) center/cover`;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: l
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/components/Governance/Token/index.tsx"),
				d = a("./src/reddit/helpers/governance/tokens.ts"),
				u = a("./src/reddit/selectors/crypto/points.ts"),
				m = a("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = a.n(m);
			const h = Object(c.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(l.b)(h)((function(e) {
				var t;
				return r.a.createElement("div", {
					className: Object(s.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, r.a.createElement(i.a, {
					className: Object(s.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(o.a)(Object(d.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less": function(e, t, a) {
			e.exports = {
				overview: "_2my8YJMn6fLwdXQPvFzOC_",
				amount: "_2uJHGxFIl306f82z4CUElv",
				memo: "QK8D8Vn2Zi45kckvHp1UF",
				error: "lHTeQCCGAXimtIjNkn3Kb"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2pjl09-gi2tNbckawdUdz",
				sectionsContainer: "_2kniUL-mLa5WNXZG0Mvwr0",
				section: "_3q3ET_tDRLknupxMrxqumk",
				sectionImage: "_3c8qkLyW7RBPLK_N2nxH3Q",
				sectionContent: "_1FH1B9Vjevh9JyXo0FtYQS",
				sectionHeader: "_2DQMGepFbIHT4d4KzISXeG",
				sectionDescription: "_1AdisjJ_TBmzcusoIGB7zd",
				footer: "_1h3NhYGCWtZTxg2bCNuuo_",
				footnote: "_1h0VFxo7szF2RtpMB6e4Rj"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				s = a("./src/reddit/selectors/activeModal.ts"),
				o = a("./src/reddit/selectors/crypto/points.ts"),
				i = a("./node_modules/fbt/lib/FbtPublic.js"),
				d = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = a("./src/reddit/controls/Button/index.tsx");
			const m = () => r.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M42.4 19.1H20.8v19.4h21.6V19.1z",
					fill: "#008985"
				}), r.a.createElement("path", {
					d: "M42.5 38.6l-.3-5.7A694 694 0 0142 19l.5.5-21.6.2.7-.7v19.4l-.7-.5c4.8 0 8.7.1 12.2.3l9.6.5c-6.6 0-14.2 0-21.8.2a.4.4 0 01-.4-.5l-.2-19.4a.6.6 0 01.6-.6h4a2236.4 2236.4 0 0118.1.1.7.7 0 01.2.5 463.6 463.6 0 01-.6 19.5z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M11.4 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), r.a.createElement("path", {
					d: "M11.5 45a678.4 678.4 0 01-.6-19.6l.1-.2a1014.3 1014.3 0 0110-6.6.7.7 0 01.6.7v6.3l-.2 13.1a.5.5 0 01-.3.4 151 151 0 01-9.6 5.8l4.4-3.1 4.8-3.4-.2.3-.2-19.5 1 .6-2.6 1.7-7 4.8.4-.6a269.3 269.3 0 01-.6 19.3z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M32.8 25.7H11.3v19.4h21.5V25.8z",
					fill: "#14D8C3"
				}), r.a.createElement("path", {
					d: "M33 45.2c-.2 0-.2-2.2-.4-5.7l-.3-13.8.5.5-21.5.2.6-.7v19.4l-.6-.5a404.7 404.7 0 0121.8.8c-6.7 0-14.2 0-21.8.2a.4.4 0 01-.5-.4l-.2-19.5a.6.6 0 01.6-.6h4.1a2320.2 2320.2 0 0118 .1.7.7 0 01.2.5 463.3 463.3 0 01-.6 19.5z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M32.8 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), r.a.createElement("path", {
					d: "M33 45c-.2.2-.2-1.9-.4-5.3l-.2-6.3a403.8 403.8 0 01-.1-8l.2-.2a1015.7 1015.7 0 019.8-6.6.7.7 0 01.7.6v6.4c0 5.4 0 9.6-.2 13.1a.5.5 0 01-.2.4 150.8 150.8 0 01-9.6 5.8l4.4-3.1 4.7-3.4-.1.3-.3-19.4 1 .5-2.5 1.7-7 4.8.3-.6a331.3 331.3 0 01-.2 13.7l-.4 5.6z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M23.4 44.8H20V26.6h3.4v18.2zM39.2 40.3l-2.5 1.6.1-18 2.6-1.5-.2 17.9z",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l6-10.8L28.9 3l-6 10.8z",
					fill: "#85FFED"
				}), r.a.createElement("path", {
					d: "M22.8 13.8l1.5-3.3 4-7.9.7.7L8.3 13.7l.3-.2L5 19.8l-2.5 4.4-.9-.8c10-4.8 15.8-7.4 21.3-9.5A1713.8 1713.8 0 001.8 24.4a.5.5 0 01-.4-.5v-.2l6-10.9.3-.2 3.1-1.6 17.7-8.7a.7.7 0 01.9.9 290.4 290.4 0 01-6.6 10.6z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l2.8 5.7 20.9-10.2-2.9-5.7z",
					fill: "#14D8C3"
				}), r.a.createElement("path", {
					d: "M25.6 19.4l-.9-1.6-2.2-4h.3c-5 2.7-13 6.7-20.7 10.5l.2-.6L5 29.2l.1.2-.6-.1a570.5 570.5 0 0121.2-9.8l-10.3 5.1L5 30a.4.4 0 01-.5-.2l-2.9-5.7a.4.4 0 01.2-.5l2.6-1.3a1223.8 1223.8 0 0118.7-9l.1.2a106.7 106.7 0 012.5 6z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M25.6 19.4l6-10.7-2.8-5.8-6 10.8 2.8 5.7z",
					fill: "#008985"
				}), r.a.createElement("path", {
					d: "M25.6 19.3l-.9-1.4-2.2-4.1a.3.3 0 010-.3 517.7 517.7 0 016.2-11 .5.5 0 01.5.2L31 6.2 32 8.5a.4.4 0 010 .4 166.8 166.8 0 01-6.4 10.3l2.8-5.3 3-5.4v.3l-3-5.7h.8l-1 1.7-5 9v-.3a45 45 0 011.7 4l.7 1.8z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M17.5 11L19 8.3l-3 1.5-1.5 2.6L7 16.1l-1.4 2.7 7.2-3.6-2 3.6 3.6-1.8 1.5-3.3 8.5-4 1.4-2.6-8.3 3.8zM14.2 18.5l2.2 5-3 1.4-2.3-5 3-1.4zM26.8 7.8l2.4 4.3-1.1 2.2-2.5-4.5 1.2-2zM31 18.2c-1.5 2-2.8 3.8-3.2 6.6h-2.6c-.7-2-1.4-5-.5-7.5",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M24.6 17.3v2.3a22.3 22.3 0 001.1 5.1l-.5-.3h2.5l-.4.4v-.5l.8-2.3a10 10 0 013-3.7l-2 3a11 11 0 00-1 3.6v.3h-.3l-2.3.1H24.9V25l-.9-3c-.1-.9-.2-1.8-.1-2.6 0-.6.1-1.1.3-1.6l.4-.6z",
					fill: "#FEB331"
				}), r.a.createElement("path", {
					d: "M28.4 21.5l-1.7-1-2 .4a.7.7 0 01-1-.8l.6-2-1.1-1.8a.7.7 0 01.5-1.1l2.1-.2 1.3-1.6a.7.7 0 011.3.2l.8 2 1.9.7a.7.7 0 01.2 1.2L29.7 19l-.2 2a.7.7 0 01-1 .6z",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M28.4 21.7h.3a.7.7 0 00.5-.4c.1 0 .2-.2.1-.3v-.7V18.7h.2l.9-1 .5-.4v-.1h.1V17a.2.2 0 000-.1H30.6l-.3-.2-1.5-.6h-.2l-.1-.3-.6-1.3-.2-.6h-.1l-.5.5-.9 1-.2.3H26l-2.1.2c0 .2 0 .3.2.4l.8 1.4.1.3v.2l-.5 1.6-.1.4v.1a.3.3 0 00.1.2h1.1l1.2-.2 1.6 1.5c-.5-.3-1-.7-1.8-1h.3l-1.3.3-.7.2h-.5a1 1 0 01-.8-.6 1 1 0 010-.6v-.7L24 18v.3l-.8-1.2-.2-.3-.1-.2-.1-.2a1.2 1.2 0 011-1.7l.7-.1 1.4-.2-.4.2.7-.8.3-.4.1-.2.1-.1.1-.1c.2-.3.5-.4.8-.4a1.4 1.4 0 011.4.7l.1.1v.1l.1.2.7 1.6-.4-.4 1.5.6.4.2.2.1.3.2a1.4 1.4 0 010 2l-.1.1-.1.1-.6.4-.9.8.2-.4a37.1 37.1 0 01-.3 2c0 .4-.2.6-.4.8a1 1 0 01-.6.2h-.4l-.2-.3z",
					fill: "#F80"
				}), r.a.createElement("path", {
					d: "M43.6 11.9c-5.4 2-8 10.7-8 10.7s-2.1.6-3.2 1.5a58 58 0 014-16.3",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M36.3 7.7c.1.1-.6 2.1-1.4 5.2a65.3 65.3 0 00-2 11.3l-.8-.4 1.7-1 1.6-.7-.3.3v-.2a26.1 26.1 0 014-7.2c1.5-1.6 3-2.6 4.6-3a8 8 0 00-2.7 1.8 23 23 0 00-5 8.8l-.2.2h-.1a16.1 16.1 0 00-3 1.6l-.8.7.1-1 .2-1.5a55 55 0 012.3-10.9c1-2.6 1.6-4 1.8-4z",
					fill: "#FEB331"
				}), r.a.createElement("path", {
					d: "M41.3 22C36.8 21.2 33 25 33 25h-3.3c1-2.9 5.4-7.7 10.8-8.6",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M40.3 16.2l-.3.2-.3.1-.3.1-.2.1-.7.3-.7.3-.7.4-.4.2-.5.3-.4.2-.4.4-.9.6-.4.4-.5.4-.4.4-.2.2-.2.2-.4.5-.4.4-.4.5-.4.5c-.5.7-.9 1.4-1.2 2.2l-.4-.7h3.3l-.3.2a11.1 11.1 0 012.6-1.8l2.4-.8c1.4-.3 2.7-.2 3.7.2-1.5-.2-3 0-4.3.5a12 12 0 00-3.9 2.4v.1h-3.5l-.6.1.2-.5c.3-.8.6-1.5 1-2.1.6-.7 1-1.4 1.7-2l.4-.5.5-.4.8-.8c1-.8 2.2-1.5 3.4-2l.3-.2.4-.1.6-.2 1.1-.3h1z",
					fill: "#FEB331"
				}), r.a.createElement("path", {
					d: "M37.2 12.7l-.4-2.4-2-1.4a.8.8 0 01.1-1.4L37 6.4l.7-2.3a.8.8 0 011.4-.4l1.7 1.7h2.4a.8.8 0 01.8 1.1l-1 2.2.8 2.3a.8.8 0 01-1 1l-2.3-.3-2 1.5a.8.8 0 01-1.3-.5z",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M37 12.7l.3.2a.8.8 0 00.7.3c.2 0 .3 0 .4-.2l.6-.4 1.2-1.2H42l.7.2H43a.3.3 0 00.2-.2V11l-.2-.4-.6-1.7-.1-.2.1-.3.7-1.4.3-.8a.2.2 0 000-.2h-2.8l-.2-.1-1.8-1.7h-.2l-.2.6-.6 1.8v.2l-.3.1-1.7.9-.4.1H35V8a.4.4 0 00-.2.4l.1.2h.1l.2.2.6.5 1 .9v2.5c0-.7-.2-1.5-.4-2.4l.1.2-1.3-.8-.6-.5a1.2 1.2 0 01-.6-1 1.2 1.2 0 01.5-1h.2L35 7l.4-.2 1.4-.8-.2.3.5-1.7v-.4l.1-.2v-.1l.1-.2a1.4 1.4 0 012.1-.4h.1l.6.6 1.2 1-.5-.1h1.3l.6-.1h.6c.4 0 .7.1 1 .3a1.5 1.5 0 01.4 1.7v.1h-.1V7l-.2.2-.8 1.8v-.5l.6 1.7.2.4v.5c.1 0 0 .2 0 .2a1.5 1.5 0 01-.7 1.3l-.7.2h-.5l-.7-.2-1.4-.2.5-.2c-.6.4-1 .8-1.5 1l-.3.3H39l-.2.2c-.2.1-.6.2-.9.1l-.6-.3a1 1 0 01-.2-.4c-.1-.3 0-.4 0-.4z",
					fill: "#F80"
				}), r.a.createElement("path", {
					d: "M41.5 21.8l-1-1h-1.6a.5.5 0 01-.4-.8l.7-1.3-.5-1.5a.5.5 0 01.6-.6l1.5.2 1.2-.9a.5.5 0 01.8.4l.3 1.5 1.2.8a.5.5 0 01-.1 1l-1.4.6-.4 1.4a.5.5 0 01-.9.2z",
					fill: "#FFF3AF"
				}), r.a.createElement("path", {
					d: "M41.4 22h.3a.5.5 0 00.4-.2v-.2a17.2 17.2 0 01.4-1.5V20l.2-.1.8-.5.4-.3-.3-.2-1-.7h-.1v-.4l-.2-1-.1-.4a.2.2 0 00.2 0l-.4.3-.8.6-.3.2h-.2l-.8-.2h-.7v-.1l.1-.1.1.2.3 1.2.1.2v.2l-.7 1-.2.3v.1h.2l.5.1.9.2.8 1.4-1-1h.2-1.9a.9.9 0 01-.5-1v-.2l.1-.2.2-.2.4-1v.4l-.4-1v-.3l-.1-.1v-.2a1 1 0 011-1.2h.6l1 .2h-.5l.7-.4.3-.2.1-.1.1-.1c.3-.2.6-.3.8-.2a1.2 1.2 0 011 .9v.1h.1v.2l.2 1.3-.3-.5 1 .7.2.1.2.2a1.3 1.3 0 01.3.8 1.2 1.2 0 01-.6 1.1l-.2.1-.4.2-.8.4.3-.4-.4 1v.2l-.2.2a1 1 0 01-.5.5h-.8l-.1-.4z",
					fill: "#F80"
				})),
				p = () => r.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M18 32.3c-6.4 1-10.7-1.1-13.2-3.5a11.4 11.4 0 01-3-9.5c.4-3.4 1.9-6.6 3.3-9.7l3.1 4.1c3-4 4.8-6.6 5-12.2 4.4 2 8 6.3 9.2 10.5l1.3-3.4c1.5 2.2 3 4.5 4 7a13 13 0 011 7.9c-1.2 4.6-5.9 9.4-10.8 9",
					fill: "#FF8717"
				}), r.a.createElement("path", {
					d: "M17.8 32.7l.7-.1a9 9 0 004.3-1.6 13 13 0 005-6.4c.6-1.6.8-3.3.5-5a17 17 0 00-1.8-5.4c-1-1.8-2.1-3.5-3.3-5.3l1-.1-1.2 3.4-.7 1.9-.5-2a16.5 16.5 0 00-8.8-10l1-.6-.4 3.3a15.8 15.8 0 01-2.5 6l-1.7 2.5-.6.8-.6.8-.5-.8-3.2-4 1.1-.2-2.2 5.4c-.6 1.7-1 3.4-1 5.1-.2 1.5 0 3 .5 4.5A9.2 9.2 0 005 28.5a13.5 13.5 0 006.4 3.6 17.8 17.8 0 006.6.5 20 20 0 01-4.1.3A15.4 15.4 0 015.8 30L4 28.5c-.5-.5-1-1.2-1.3-1.8-.8-1.4-1.2-2.9-1.3-4.4-.2-1.5-.1-3 .2-4.5.3-1.5.7-3 1.2-4.3l1.7-4 .3-.8.5.6 3.3 4.1h-.9c1.4-2 2.8-3.9 3.6-5.9l.9-3 .3-3v-1l.9.4 2.8 1.6 1.2 1 1 1a18 18 0 014.5 7.4l-1.3-.1L23 8.3l.5-1.2.8 1c1.3 2 2.5 4 3.5 6s1.6 4 1.7 6a11.6 11.6 0 01-3.6 9.4 12.2 12.2 0 01-4.5 3 8.3 8.3 0 01-3 .3l-.6-.1z",
					fill: "#FF4500"
				}), r.a.createElement("path", {
					d: "M14 31.5c-2.8-.3-5.7-2.2-6.4-5-.7-3 1.3-5.9 3.2-8.4l5-6.3c1 2.3 2.7 4.3 4.5 6.1 1.8 1.7 3.6 3.3 4.4 5.7 2.1 6.7-5.7 8.5-10.7 8z",
					fill: "#FFF1B6"
				}), r.a.createElement("path", {
					d: "M14 31.7c0-.2 1-.1 2.8-.4a18.5 18.5 0 003-.6l1.7-.8c.6-.3 1.1-.6 1.6-1.1.4-.5.8-1 1-1.7.2-.7.3-1.4.1-2v-.6l-.2-.6-.5-1c-.4-.8-.9-1.4-1.4-2l-2-2-2-2C17 15.7 15.8 14 15 12.3l1.6.2-2 2.5-2.5 3.2-2.1 2.8c-.6.8-1 1.7-1.4 2.6a5.3 5.3 0 00.3 4.7l1.4 1.7c1.1 1 2.4 1.6 3.7 2A9.4 9.4 0 019.5 30c-.5-.3-.9-.7-1.2-1.2-.4-.4-.7-1-1-1.5v-.4l-.1-.3v-.2L7 26v-2.3l.6-1.6c1-2.2 2.4-4 3.7-5.7l3.7-5 .8-1.1.6 1.2c.4.9.8 1.7 1.4 2.4a21.9 21.9 0 003.4 3.7l2 2a12 12 0 011.5 2.1l.4.6.2.7.2.6.2.6c.2.9.2 1.8 0 2.6-.1.9-.5 1.6-1 2.3-.4.6-1 1.1-1.6 1.5l-1.8.9a13 13 0 01-5.5.7c-1.3 0-2-.3-2-.5z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M45.5 29.1l-3-4.7c-.6-1-1.8-1.8-3.2-2l-6.1-.9c-1.5-.2-3 .2-4.2 1l-5.8 3.4a6.3 6.3 0 00-2.7 3.3l-2 5.8c-.4 1.3-.3 2.7.4 3.7l3 4.8c.6 1 1.8 1.7 3.2 2l6.1.8c1.5.2 3-.1 4.2-.9l5.8-3.5a6.3 6.3 0 002.7-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.7 6.7a10 10 0 00-7.9 4.7c-.5 1-2 .7-1.8-.2a6 6 0 00-4-6.5c-1-.3-.5-1.7.5-1.7a10 10 0 007.9-4.8c.5-.9 2-.7 1.8.3a6 6 0 004 6.4c1 .4.5 1.7-.5 1.8z",
					fill: "#383838"
				}), r.a.createElement("path", {
					d: "M38.8 36l.1-.2.2-.1.3-.2.3-.6v-.4l-.4-.3h-.1c-.5-.1-1-.4-1.5-.7a6.2 6.2 0 01-2.6-3.4 7 7 0 01-.3-2.6v.2-.2-.1h-.3a.6.6 0 00-.5.2l-.1.1a10.4 10.4 0 01-8.3 5.1l.4-.2-.3.1-.3.1-.1.2v.1l.3.3-.3-.2a6.5 6.5 0 014.4 7.2V40 40.4l.2.1h.3l.3-.2v-.1a9.4 9.4 0 016.3-4l.5-.1H38.9 37.7a9.2 9.2 0 00-3.1 1.2c-1.4.8-2.5 2-3.3 3.4a1.6 1.6 0 01-1.5.8c-.3 0-.6-.2-.8-.4l-.2-.2v-.2l-.1-.3v-.2a6 6 0 00-.2-2c-.1-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.8-2.2l-.3-.2.2.3-.2-.2-.2-.1-.2-.3-.2-.2.1-1.1c.1-.3.4-.6.6-.7.3-.2.6-.3 1-.3h-.4.3a9 9 0 003.7-1.1 10.6 10.6 0 002.7-2.1l.9-1.3v-.1c.2-.2.4-.5.7-.6.3-.2.7-.2 1-.2.4 0 .8.2 1 .5l.2.2.2.3a1.8 1.8 0 010 .6v-.2.2c0 .7 0 1.5.2 2.2a5.9 5.9 0 003.4 3.7l.2.2-.3-.2c.3 0 .6.3.7.6.1.3.1.6 0 .8a1.4 1.4 0 01-1 1h-.4z",
					fill: "#231F20"
				}), r.a.createElement("path", {
					d: "M45.4 29.2l.2.2.4.8a4.1 4.1 0 01.1 2.4c0 .4-.2.7-.3 1a426.4 426.4 0 01-2.2 6.5 6.7 6.7 0 01-2.1 2.2l-.4.2-1.5 1-3.2 2c-.3 0-.5.3-.8.4a7.6 7.6 0 01-3 1h-1.7l-.5-.1-2-.3-2.2-.2-1-.2h-.3-.3l-.5-.2c-1-.3-2-.9-2.6-1.7 0 0 0-.2-.2-.3l-.1-.2-.6-1-2.3-3.6-.1-.2-.2-.3a5 5 0 01-.3-3l.3-1.2 1.3-4 .5-1.4.8-1.4c.5-.9 1.3-1.6 2.2-2.2l4.5-2.6 1-.6.2-.2h.2l.1-.1.6-.3a7.1 7.1 0 013.4-.6l1.1.1 2 .4 3.6.6a4.7 4.7 0 013.3 2.5l.4.7.7 1.4 1.4 2.6-3-4.6-.1-.3-.2-.3-.5-.4a4.2 4.2 0 00-1.8-.9l-.6-.1-1.5-.2-2.9-.4-1.4-.2h-1.4c-1 0-1.9.4-2.7.9l-2.5 1.5-2.5 1.6-.6.4a7 7 0 00-1.6 1.3 5.5 5.5 0 00-1 1.7l-.2.7a1540.4 1540.4 0 00-1.8 5.3 3.9 3.9 0 00.3 2.8v.3l.3.2.7 1.1 1.3 2.1.5.9.3.4.1.2.1.1a3.6 3.6 0 002.1 1.3h.5l.4.1 2 .3 3.5.5h.4a4.5 4.5 0 001.2 0 6 6 0 002.1-.6l.7-.5 1.4-.8 2.6-1.6 1.3-.7 1-.7c.6-.5 1-1.2 1.4-1.9v-.2l.1-.2v-.1l.3-.6.3-1a1594.4 1594.4 0 001.4-3.7l.1-.3a4 4 0 00.3-1c0-.6 0-1.3-.2-1.9l-.1-.6z",
					fill: "#231F20"
				}), r.a.createElement("path", {
					d: "M44 26.6l-3-4.7c-.6-1.1-1.8-1.8-3.2-2l-6.2-1c-1.4 0-3 .2-4.2 1l-5.7 3.5c-1.3.7-2.2 1.9-2.7 3.3l-2 5.8c-.4 1.3-.3 2.6.3 3.7l3 4.7c.7 1.1 1.8 1.8 3.2 2l6.2.9c1.5.2 3-.1 4.2-1l5.7-3.4c1.3-.7 2.3-1.9 2.8-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.8 6.7a10 10 0 00-7.8 4.7c-.5.9-2 .7-1.8-.3a6 6 0 00-4-6.4c-1-.4-.6-1.7.5-1.8a10 10 0 007.8-4.7c.6-.9 2-.7 1.9.3a6 6 0 004 6.4c1 .4.5 1.7-.6 1.8z",
					fill: "#4C4C4C"
				}), r.a.createElement("path", {
					d: "M37.3 33.4l.1-.1.2-.1.2-.2.4-.7-.1-.3c-.1-.2-.2-.3-.4-.3l-1.5-.7a6.3 6.3 0 01-3-6v.2-.2-.1l-.2-.1h-.3l-.3.3v.1-.1a10.4 10.4 0 01-8.3 5.1h.4-.4l-.2.1-.2.2v.1l.4.3-.3-.3c.7.3 1.4.7 2 1.2a6.5 6.5 0 012.3 6v-.2V38l.3.1h.3l.3-.3a9.4 9.4 0 016.2-4.1 4.9 4.9 0 011 0h1.1-1.1a10 10 0 00-3.1 1.2c-1.4.8-2.6 2-3.4 3.4a1.6 1.6 0 01-1.4.7c-.3 0-.6 0-.8-.3l-.2-.2-.1-.3V38v-.2a6 6 0 00-.2-2c-.2-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.9-2.2l-.3-.2.3.2-.2-.1-.3-.2-.1-.2-.2-.3v-1c.2-.4.4-.6.7-.8l.9-.3-.3.1h.3a9 9 0 003.7-1.2 10.6 10.6 0 002.6-2l1-1.4c.1-.3.4-.5.7-.7l1-.2c.4 0 .8.2 1 .5l.2.3.1.3v.5-.2.2c0 .8 0 1.5.3 2.2.1.7.4 1.3.8 1.8a6 6 0 002.5 2l.3.1-.3-.2c.3.1.6.4.7.7.1.2.1.5 0 .8a1.4 1.4 0 01-1 1h-.2l-.2-.1z",
					fill: "#231F20"
				}), r.a.createElement("path", {
					d: "M43.9 26.7l.2.2.4.8c.2.5.2 1 .2 1.5l-.1 1-.3 1a415.5 415.5 0 01-2.2 6.4 6.7 6.7 0 01-2.2 2.1l-.3.3-1.5 1-3.2 1.9-.8.5a7.3 7.3 0 01-4.2 1h-.5l-.5-.1-2.1-.3-2-.3-1.1-.1H23l-.6-.2a5.2 5.2 0 01-2.5-1.7l-.2-.3v-.1l-.1-.1-.6-1-2.3-3.6-.2-.2-.1-.3a5 5 0 010-4.2l1.3-4 .5-1.4.7-1.5c.6-.8 1.4-1.6 2.3-2.1l4.4-2.6 1-.7.3-.1h.1l.2-.2.5-.2a7 7 0 013.5-.7l1 .2 2 .3 3.7.7a4.7 4.7 0 013.3 2.5l.4.7.7 1.3 1.3 2.6-2.9-4.6-.1-.2-.2-.3-.5-.5a4.2 4.2 0 00-1.8-.8l-.7-.1-1.4-.2-3-.4-1.4-.2a5.8 5.8 0 00-4 .8l-2.5 1.6-2.6 1.6-.6.4a7 7 0 00-1.5 1.3 5.6 5.6 0 00-1 1.7l-.3.7a1727.5 1727.5 0 00-1.7 5.3 3.9 3.9 0 00.2 2.8l.2.3.1.2a246.5 246.5 0 002 3.2l.6.9.3.4v.2l.2.1c.4.5.8.8 1.3 1a4.2 4.2 0 001.2.4h.5l1.9.3 3.6.5h1.6a6 6 0 002.1-.7l.7-.4 1.4-.8 2.6-1.6 1.2-.7 1-.8c.6-.5 1.1-1 1.4-1.8l.1-.2v-.2l.1-.1.2-.6.4-1 .7-2 .6-1.7a26 26 0 01.4-1.3v-1.9l-.2-.6z",
					fill: "#231F20"
				}), r.a.createElement("path", {
					d: "M32 26.1c-1.3.4-2.9 0-4-.8-1.2-1-2-2.2-2.4-3.6-.6-2.7-.6-5.1.6-8 1.3-3 2.8-4 3.8-7.6.5 2.7 1 3.2 2.1 5 1.2 1.7 3.7 2.8 4.7 4.5 1.3 2 .9 4-1.9 4.5-.7 2.6-.2 4.9-2.8 6.1z",
					fill: "#FFF1B6"
				}), r.a.createElement("path", {
					d: "M32 26.3h.1l.2-.2.2-.2.2-.1c.4-.4.7-.7.9-1.2a6 6 0 00.4-2l.4-2.6v-.3l.4-.1.4-.1.4-.2.4-.2h.1l.2-.2a1.5 1.5 0 00.5-1.3v-.4-.2h-.1v-.2l-.1-.2-.1-.2-.3-.4-.6-.8-.8-.6-2-1.5-.9-.9-.2-.2-.2-.3-.2-.3-.2-.2a19.8 19.8 0 01-1.3-2.3 15 15 0 01-.7-2.6h1.8a14 14 0 01-2.4 5 19.9 19.9 0 00-2.1 4.5 10 10 0 00-.4 4L26 21l.1.6.2.6a6.1 6.1 0 002.2 3.3 5.4 5.4 0 003 1h.3-.1a4.2 4.2 0 01-1.2.2c-.6 0-1.1-.2-1.6-.4a6 6 0 01-2.7-2A7.3 7.3 0 0125 21a12 12 0 011-8.4l.8-1.4 1.5-2.6c.4-.9.7-1.7.9-2.6l.8-3.6.8 3.6c.1.8.3 1.5.6 2.2l.5 1 .6.8.3.5.1.2.2.2.7.7c1 .9 2.2 1.6 3.2 2.7a6.7 6.7 0 011 1.4v.3l.2.3.2 1v1l-.1.3-.1.3-.2.3a3 3 0 01-.3.5l-.2.2-.3.2-.2.1-.2.2c-.5.3-1.1.5-1.7.6l.6-.7-.5 2.7c-.2.8-.5 1.6-1 2.2a3.3 3.3 0 01-1.7 1.2 1 1 0 01-.3 0l-.4-.1a.1.1 0 00.1 0z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M32.4 23.4c.1.8-.7 1.4-1.4 1.4-1.2.2-2.4-.7-2.8-1.9a5.3 5.3 0 010-3.5l1.5-3.4 2.3 4.6c.4.8.8 1.7.6 2.5",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M32.8 23.2l-.3-.7-.7-1.4-2.7-4.8h1.2l-1 2.2-.6 2.1a4 4 0 00.2 2.4 2.9 2.9 0 001.2 1.3l.7.2h.8c.3 0 .5-.2.7-.4.2-.2.4-.4.4-.7 0 .3 0 .5-.2.8l-.5.6a2.2 2.2 0 01-1.6.3c-.6 0-1.1-.3-1.6-.7-.4-.3-.8-.8-1-1.3l-.4-1.6.1-1.6c.2-.9.5-1.8 1-2.6l.6-1.5.6-1.4.6 1.3a132.3 132.3 0 012.5 5.1c.2.5.3 1.1.3 1.7 0 .5-.2.7-.3.7z",
					fill: "#fff"
				})),
				h = () => r.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M29.4 20.3c0-1 .1-2.2-.1-3.3-.2-.9-.8-1.6-1.2-2.4v.4a8 8 0 00-.8-3.6l-1.8-3c-.4-.7-.8-1.6-1.7-2-1-.7-2.4-1-3.6-1.3l-.4 1.3c.8-.2 1.4-.8 1.2-1.7 0-.6-.4-1.2-.6-1.8-.3-.7-.4-1.4-.8-2-.5-.8-1.3-1-2.1-.9-1 .2-1.8.7-2.6 1L11.4 2 4.6 4.4c-1 .3-2.4.6-2.8 1.7-.2 1 .3 2.1.6 3l.6-.8c-.7.3-1.6.5-2.1 1.1-.5.5-.8 1.3-.9 2V14l.1 3c0 .8-.1 1.7.2 2.5.5.8.7 1.7 1 2.5L2 25c.3.9.5 1.8 1 2.6.4.7 1 1.2 1.5 1.8.5.5.9 1.1 1.7 1.3.9.1 1.8 0 2.7.2l3 .2 2.9.2 3 .2c.9-.1 1.7-.6 2.5-1l2.7-1.2 1.5-.7 1.5-.6c.7-.6 1-1.5 1.4-2.3l1.5-2.7.5-1.2v-1.4c-.1-1-2-.7-2 .1 0 .8.1 1.4-.3 2.1L26 24.6l-1 2c0 .3-.1.3-.4.5l-1.4.6-4.6 2.1c-.7.3-1.4.1-2.1 0l-2.7-.1-5.2-.4c-.6 0-1.3.2-1.7-.3l-1.5-1.6c-1-1.2-1.3-2.9-1.8-4.4L3 20.6l-.4-1c-.1-.5-.4-.8-.4-1.2v-5.7c0-.7-.2-1.5 0-2.2.2-.3.2-.5.5-.6l1.2-.5c.3-.2.7-.5.6-.8-.3-.7-.6-1.5-.6-2.2v-.3h-.1.2l1.2-.5L10.4 4 15.9 2l.9-.4.8-.2c-.2 0-.1 0 0 0l.2.2.3.8.5 1.6.4.8v.4c.2.3-.3.2.5 0-.3 0-.7.2-.8.6 0 .3.1.5.4.6l2.3.7c.7.2 1.2.4 1.6 1l1 1.6 1.2 1.9a6.5 6.5 0 011 3.3c0 .4.1.7.4 1 .3.6.7 1.1.8 1.8v2.7c0 1 2 .7 2-.1z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M19.6 5.4l-14.8 5c-.4 0-.8-.9-1.2-2v-.2C3.2 7 2.9 6 3.3 5.9L17.8 1c.4 0 .8.9 1.2 2v.2c.4 1.2 1 2.1.6 2.2z",
					fill: "#CCCCCA"
				}), r.a.createElement("path", {
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4a161286.2 161286.2 0 0113.3-4.4c.4-.2.2-.8-.3-.7z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M5.3 10C9.6 8.7 13.7 6.6 18 5.3c1-.4.4-1.9-.6-1.6C13.1 5.1 9 7.1 4.7 8.5c-1 .3-.4 1.9.6 1.5z",
					fill: "#A5A4A4"
				}), r.a.createElement("path", {
					d: "M4.2 6.8V7l.3-.2 1.1-.5 3.4-1c2.4-.8 4.9-1.5 7.3-2.4.5-.2 1.4-.4 1.6-1 .1-.4-.5-.5-.6-.1 0-.2 0 0-.1 0l-.4.2-1.3.5-3.7 1.2c-2.4.7-5 1.3-7.3 2.4-.3 0-1.4.6-.8 1 .4.3.8-.2.5-.4z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M23.8 9.6l-9-.5-9.3 3.2L2.4 15l-.9 3.6 2.6 8.2 2.4 2.8 11.6.9 7.2-3.3 2.8-5.3v-4.5l-4.3-7.7z",
					fill: "#A5A4A4"
				}), r.a.createElement("path", {
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.2-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), r.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1L3 22l2.8 4.7c.2.2.3.7.6 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.7 1.4 1.9.6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.1 2.1 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
					fill: "#CCCCCA"
				}), r.a.createElement("path", {
					d: "M11.4 7l1.6-.5c.2 0 .3-.3.2-.5-.1-.2-.3-.3-.5-.2l-1.6.4c-.2 0-.3.3-.2.5 0 .2.2.3.5.2zM8 27l2.5.2c.2 0 .4 0 .4-.3 0-.2 0-.4-.3-.4l-2.5-.2c-.2 0-.4 0-.4.3 0 .2 0 .4.3.4z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M18.7 19c-2.1-1-4.1-2.1-6.3-2.6-.8-.2-1.6-.4-2.4-.8l-1.2-.8c-.9-1-.8-2 .2-2.8 1-1 2.2-2 3.3-2.8.5-.4 1-.6 1.5-.8.4-.2.8 0 1 .3.1.4 0 .8-.5 1-1.7.7-3 2-4.4 3.2-.4.4-.3.7 0 1l.7.5c.5.2 1.1.5 1.7.6 2.5.5 4.8 1.6 7 2.8 1 .5 1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.9.2-1-.3-.2-.5 0-.8.5-1 1-.3 2-.6 2.8-1l3.3-1.6.9-.7z",
					fill: "#A5A4A4"
				}), r.a.createElement("path", {
					d: "M14.2 23.7l-1.3.5-.5.1c-1 .4-1.7-.1-2-.7v-1.1c.2-.4.6-.6 1-.8l1.1-.4 1.7-.7 3-1.5c-1.6-.8-3.2-1.6-5-2-.8-.2-1.7-.4-2.5-.8-.5-.2-1-.6-1.4-1-1.2-1.4-1.1-2.7.2-3.9l3.4-2.8c.4-.4 1-.6 1.5-.8l.2-.1c.3-.2.7-.2 1 0 .4.1.7.4.8.8.3.7 0 1.5-.8 1.8-1.2.5-2.1 1.4-3.1 2.3l-1 .8.4.3 1.5.5c2.7.6 5.2 1.8 7.3 3 .8.3 1 1 1.2 1.3 0 .4 0 1-.6 1.8a9.8 9.8 0 01-3.6 2.4l-2.5 1z",
					fill: "#A5A4A4"
				}), r.a.createElement("path", {
					d: "M19.2 19.1c-2.1-1-4.1-2-6.3-2.5l-2.3-.8c-.5-.2-1-.5-1.3-.9-.9-1-.8-1.9.2-2.8 1-1 2.2-1.9 3.3-2.8l1.6-.7c.3-.2.7-.1.9.3.1.4 0 .7-.4.9-1.8.7-3 2.1-4.5 3.3-.4.3-.3.7 0 1l.7.5 1.7.5c2.5.6 4.8 1.7 7 2.9 1 .4 1.1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.8.1-1-.3-.2-.5.1-.8.5-1l2.9-1 3.2-1.6.9-.8z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M14.6 23.5l-1.4.5-.4.2c-.7.2-1.2 0-1.5-.6a1 1 0 01.1-1l.7-.4 1-.4a24 24 0 001.8-.7l3.1-1.5h.1l.4-.4a25 25 0 00-5.7-2.3 14 14 0 01-2.4-.8c-.5-.2-1-.5-1.3-1-1-1.1-1-2.2.2-3.3 1-1 2.2-2 3.3-2.8l1.4-.7h.2c.3-.2.6-.2.9-.1.2 0 .4.3.5.6.2.5 0 1-.6 1.3-1.2.6-2.2 1.4-3.3 2.4l-1 .9-.2.2.2.2c.2.2.4.4.6.4.5.3 1 .5 1.6.6 2.6.5 5 1.7 7.1 2.8.7.4 1 .8 1 1.2 0 .3 0 .8-.5 1.4a9.5 9.5 0 01-3.5 2.4l-2.4 1zm-1.6-.2l1.3-.5 2.4-1a8.7 8.7 0 003.2-2c.2-.3.4-.6.4-.9 0-.3-.4-.5-.6-.6-2-1-4.4-2.3-7-2.8-.6-.1-1.2-.3-1.7-.6-.3 0-.6-.3-.9-.6-.2-.2-.3-.5-.3-.8 0-.2.1-.5.4-.7l1-.9c1-1 2.1-1.9 3.5-2.5.3-.1.2-.3.2-.4l-.1-.1h-.5l-1.2.7-3.3 2.8c-.9.8-1 1.4-.2 2.3l1.1.8 2.3.7a27 27 0 016.2 2.5l.2.1a.4.4 0 010 .6l-.3.3-.6.5h-.1a51.8 51.8 0 01-6.4 2.9v.2c0 .2.1.3.5.1l.5-.1z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.4 4.4 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3l-6.1-1-6.2-1.1-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4a48353.8 48353.8 0 01-9.8-1.7l-5.9-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2 0 0l.3-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5l1.8.3 5.6 1 6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6L29.7 17l-2-.4c-.4 0-.6.6-.2.7z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M26.8 19.7L41 22l2 .4c.7.1 1-1 .3-1.2L29.2 19l-2-.4c-.8-.1-1.1 1-.4 1.2z",
					fill: "#C18D42"
				}), r.a.createElement("path", {
					d: "M46.9 21.3c0-1.3-.8-2.4-1.9-2.5-1 0-2 1-2 2.4 0 1.3.8 2.4 1.8 2.5 1.1 0 2-1 2-2.4z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M46.5 21.4c0 .7-.3 1.7-1.1 2-.7.3-1.4-.2-1.7-.8-.5-.8-.5-1.8-.1-2.5.3-.7 1-1.2 1.7-1 .9.4 1.2 1.4 1.2 2.3 0 .3.7.2.7 0 0-1-.4-2.2-1.4-2.6-.9-.4-2 0-2.6.8a3 3 0 00-.3 3c.4.9 1.3 1.5 2.3 1.3 1.2-.3 2-1.4 2-2.6 0-.3-.7-.2-.7 0zM47.1 29.8c-.8-1.4-1.5-2.8-2.5-4l-4.2-5.1-4.7-5.8-1-1.2c-.7-.8-1.7-.5-2.6-.1L19 19.3c-1.4.6-2.8 1.1-4 1.8-1 .4-1 1.3-1 2.1l-.2 2.6-.5 13.9V39.8c0 1 .8 2 1.3 2.7.4.7.8 1.8 1.5 2.3l1.1.3c.6 0 1.1.2 1.7.3l11.2 2c1.2.1 2.4.4 3.5.6 1 .1 1.6 0 2.2-.8l.4-.6 6.1-8.4 3.3-4.4 1.5-2c.4-.7.4-1.4 0-2-.8-1.4-2.9-.2-2 1.2-.2-.3.1-.6-.1-.4l-.3.3L44 32l-3 4c-2 2.8-4 5.6-6.2 8.4l-.8 1.1-.2.3c0 .3.7-.3.8-.3l-.9-.1-1.8-.3-10.8-2-3.4-.5h-.3l.3.2-.1-.2-1.4-2.4-.5-.7.1 1v-1-.7l.1-2.8.4-8 .1-3.4v-1.9l-.1.4.4-.2 2-1 13.6-5.8 1.5-.7h.1c0 .1-.8-.2-.7 0l.3.4 4.2 5.1 4.6 5.7 1 1.2-.1-.1c0 .2.2.4.3.5l1 1.7.6 1c.8 1.3 3 .1 2.1-1.2z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M35.3 17.8l-17.7 7.7c-.2 0-.4.3-.4.5l-2.7 14.2a290.7 290.7 0 012.5 3.6l17.2 3c.2 0 .4 0 .5-.2L46.1 31c.2-.2.1-.5 0-.7L44 27 36 18a.6.6 0 00-.7-.2z",
					fill: "#C18D42"
				}), r.a.createElement("path", {
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8a31996 31996 0 015.8 6.6l1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1l-6 8.3-3.5 4.7-1.2 1.6-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1-.1-.2.3.6c0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), r.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6a22549.5 22549.5 0 002 2.2l4 4.9c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6l-1.8-.3-5.8-1-6-1.1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1a7430.5 7430.5 0 007.4-3.3l10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M18 23.5l12-5.2 1.8-.8c.5-.2 0-1-.5-.7l-12 5.2-1.7.7c-.6.3 0 1 .4.8zM15.9 25v7c0 .5.8.5.8 0v-6l.1-1c0-.5-.9-.5-.9 0zM15.7 33.6v1.7c0 .2.2.5.4.4.3 0 .5-.2.5-.4v-1.5-.2c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.5z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M33.4 26c-.4-1.7-.7-5-1-6.4-1 .4-2.5 2.4-3 2.9-2.5 2.2-1.8 2.7-4.8 2.6-2.7-.1-4.5-.7-4.8 0-.3.5.6 2 1.5 3.7.8 1.7 1.6 1.4.5 3.4-.6 1-2.2 3.1-2.6 4.4.5.3 1.3 0 1.7 0 1-1.5 2.8-4 2.9-5 0-1.4-2.5-4.2-3.1-5.2 1.5 0 5.3.9 6.8.2 1.3-.5 3.8-4 4.9-5 .2 1.3 0 5.1.8 6 .7.8 3.1 1.3 4.8 1.7.5-.3 1-.7 1.3-1.2L33.4 26z",
					fill: "#C18D42"
				}), r.a.createElement("path", {
					d: "M36.3 30.6c4.4-2.8 4-3-.3-4.4-2.4-.8-2.5-.7-2.9-3.3-.1-.9.1-3.7-1-3.9-1-.2-2.5 2.1-3.2 2.7-2.4 2.2-2.2 2.5-5.2 2.4-4.7-.2-5.2-.2-3.3 3.7.9 1.7 1.9 1.9.7 3.9-.7 1.2-2.5 3.4-2.5 4.7 0 2.1 6.4-1.4 7.6-1.2 1.1.2 4.4 5.4 5.8 3.5.7-1 .7-2.8.8-3.9.6-3 .9-2.5 3.5-4.2zm-4 1.6c-.8 1-1 5-1.2 6.3-1-1-3.3-3.7-4.7-4-1.4-.2-5.3 1.5-6.8 2 .6-1.3 3.2-4.7 3.3-6 0-1.2-2.5-4.1-3-5.1 1.4 0 5.2.9 6.7.2 1.3-.5 3.9-4 5-5 .1 1.3 0 5.1.8 6 .9 1 4.8 1.6 6.1 2-1.2.8-5.4 2.4-6.2 3.6z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M21 38.3l3.4-1.2c.6-.2.5-1-.1-.8l-3.4 1.1c-.6.2-.5 1 0 .9zM34.4 33.2c.8-.4 1.5-.8 2.2-1.4.5-.4 0-1-.5-.6a7 7 0 01-1.9 1.1c-.5.3-.4 1.1.2.9zM33.3 37.9l-.8 1.3c-.3.6.4 1 .7.4l.8-1.3c.3-.6-.4-1-.7-.4zM34.5 20.5l-.3-1.5c0-.5-1-.2-.9.4l.3 1.5c0 .5 1 .2.9-.4z",
					fill: "#fff"
				}));
			var b = a("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less"),
				v = a.n(b);

			function f(e) {
				const {
					pointsName: t
				} = e;
				return r.a.createElement("div", {
					className: v.a.container
				}, r.a.createElement(d.a, {
					colored: !0
				}, i.fbt._("Burn Your {pointsName}", [i.fbt._param("pointsName", t)], {
					hk: "2JXqt"
				})), r.a.createElement("div", {
					className: v.a.sectionsContainer
				}, r.a.createElement(E, {
					image: r.a.createElement(m, null),
					header: i.fbt._("Burn and be rewarded", null, {
						hk: "1G5I22"
					}),
					description: i.fbt._("Burn your {pointsName} to receive a reward created by the community.", [i.fbt._param("pointsName", t)], {
						hk: "iRnjD"
					})
				}), r.a.createElement(E, {
					image: r.a.createElement(p, null),
					header: i.fbt._("No one gets the {pointsName}", [i.fbt._param("pointsName", t)], {
						hk: "2hPu7L"
					}),
					description: i.fbt._("When your {pointsName} disappear, it helps the rest of the community by making everyone else's slice of {pointsName2} larger.", [i.fbt._param("pointsName", t), i.fbt._param("pointsName2", t)], {
						hk: "Baw1t"
					})
				}), r.a.createElement(E, {
					image: r.a.createElement(h, null),
					header: i.fbt._("Your community will thank you", null, {
						hk: "2DLt1I"
					}),
					description: i.fbt._("After burning your {pointsName} the user or bot who asked you to burn them will reward you accordingly. *", [i.fbt._param("pointsName", t)], {
						hk: "jf25R"
					})
				})), r.a.createElement("div", {
					className: v.a.footer
				}, r.a.createElement("div", {
					className: v.a.footnote
				}, i.fbt._("* Rewards are created by the community, for the community. Reddit has nothing to do with them, and cannot assist you to cancel, reverse, or otherwise modify burning details. Once you burn your {pointsName}, they’re gone forever.", [i.fbt._param("pointsName", t)], {
					hk: "13HyI3"
				})), r.a.createElement(u.q, {
					onClick: e.onContinue
				}, i.fbt._("Let's do it", null, {
					hk: "2Ktk0f"
				}))))
			}

			function E(e) {
				return r.a.createElement("div", {
					className: v.a.section
				}, r.a.createElement("div", {
					className: v.a.sectionImage
				}, e.image), r.a.createElement("div", {
					className: v.a.sectionContent
				}, r.a.createElement("h4", {
					className: v.a.sectionHeader
				}, e.header), r.a.createElement("p", {
					className: v.a.sectionDescription
				}, e.description)))
			}
			var x = a("./node_modules/bignumber.js/bignumber.js"),
				g = a("./src/reddit/actions/governance/index.ts"),
				M = a("./src/reddit/actions/modal.ts"),
				C = a("./src/reddit/actions/toaster.ts"),
				j = a("./src/reddit/actions/util/pollActionForSuccess.ts"),
				N = a("./src/reddit/endpoints/governance/crypto.ts"),
				y = a("./src/reddit/helpers/crypto/transactions.ts"),
				w = a("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				O = a("./src/reddit/helpers/governance/tokens.ts"),
				_ = a("./src/reddit/helpers/trackers/crypto.ts"),
				k = a("./src/reddit/hooks/useTracking.ts"),
				I = a("./src/reddit/models/Toast/index.ts"),
				z = a("./src/reddit/selectors/gov.ts"),
				T = a("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				F = a("./src/lib/classNames/index.ts"),
				L = a("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				A = a("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				D = a("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx"),
				B = a("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less"),
				P = a.n(B);

			function R(e) {
				const {
					burnAmount: t,
					burnMemo: a,
					hasEnoughPoints: n,
					pointsName: l,
					subreddit: c
				} = e;
				return r.a.createElement("div", {
					className: P.a.overview
				}, r.a.createElement(L.a, {
					amount: t,
					className: P.a.amount,
					subredditId: c.id
				}), r.a.createElement(D.a, {
					subredditId: c.id
				}), r.a.createElement("div", {
					className: Object(F.a)(P.a.memo, {
						[P.a.error]: !n
					})
				}, n ? i.fbt._("For “{memo}”. Fulfilled by the community, not Reddit.", [i.fbt._param("memo", a)], {
					hk: "1rkdVJ"
				}) : i.fbt._("Not enough {pointsName}", [i.fbt._param("pointsName", l)], {
					hk: "2qcKwi"
				})))
			}

			function V(e) {
				return r.a.createElement(A.b, {
					values: [
						[Object(A.a)(), e.contractAddress],
						[i.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"],
						[i.fbt._("Memo", null, {
							hk: "4AomKF"
						}), e.memo]
					]
				})
			}
			const G = 15e3;

			function H(e) {
				const {
					burnAmount: t,
					burnMemo: a,
					subreddit: n,
					pointsDetails: c
				} = e, s = Object(l.d)(), o = Object(k.a)(), d = () => s(Object(M.f)()), u = n.id, m = Object(l.e)(e => Object(z.e)(e, {
					subredditId: u
				})), p = new x.BigNumber(m).isGreaterThanOrEqualTo(t), h = Object(O.b)(t, null == c ? void 0 : c.displayConversion), b = c.contractAddress, v = Object(y.a)(b, t, a), f = e => {
					o(Object(_.a)("burn_link", u, h, e))
				}, E = c.name;
				return r.a.createElement(T.a, {
					approvalOverview: r.a.createElement(R, {
						burnAmount: t,
						burnMemo: a,
						hasEnoughPoints: p,
						subreddit: n,
						pointsName: E
					}),
					approvalDetails: r.a.createElement(V, {
						contractAddress: b,
						memo: a
					}),
					onClose: d,
					onTransactionSuccess: async e => {
						d(), s(function(e) {
							const t = Object(C.e)(i.fbt._("Burning your {pointsName}...", [i.fbt._param("pointsName", e)], {
								hk: "2LoC1g"
							}), I.b.SuccessCommunity);
							return t.duration = G, Object(C.f)(t)
						}(E));
						try {
							await async function(e, t, a, n, r) {
								await Object(w.a)(t, a), await e(Object(j.a)(Object(g.h)({
									subredditId: n
								}), async e => {
									const t = Object(z.e)(e(), {
										subredditId: n
									});
									return r !== t || null
								})), e(Object(g.h)({
									subredditId: n
								}))
							}(s, c, e.hash, n.id, m), o(Object(_.b)("burn_link", u, h)), s(function(e) {
								const t = Object(C.e)(i.fbt._("Your {pointsName} were burnt!", [i.fbt._param("pointsName", e)], {
									hk: "1BHX95"
								}), I.b.SuccessCommunityGreen);
								return t.duration = G, Object(C.f)(t)
							}(E))
						} catch (t) {
							f(t.toString()), s(function(e) {
								return Object(C.f)(Object(C.e)(i.fbt._("There was an error while burning your {pointsName}. Please try again later", [i.fbt._param("pointsName", e)], {
									hk: "48Un5w"
								}), I.b.Error))
							}(E))
						}
					},
					onTransactionFailure: f,
					subredditId: u,
					title: i.fbt._("Approve Burning Your Bricks", null, {
						hk: "4DTzlV"
					}),
					transaction: p ? v : null,
					transactionIntent: Object(N.b)(u, t, a)
				})
			}
			t.default = Object(c.a)((function() {
				const {
					subreddit: e,
					pointsDetails: t
				} = Object(o.c)(), a = Object(l.e)(e => Object(s.a)(e)), [c, i] = Object(n.useState)(!0);
				return e && t ? c ? r.a.createElement(f, {
					onContinue: () => i(!1),
					pointsName: t.name
				}) : r.a.createElement(H, {
					burnAmount: a.amount,
					burnMemo: a.memo,
					subreddit: e,
					pointsDetails: t
				}) : null
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less": function(e, t, a) {
			e.exports = {
				currentBalance: "_31YIsY0F-7Am4I-6rVcdRl",
				currentBalanceAmount: "QasuEd0D0OPCzr5tiNWoL"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/selectors/gov.ts"),
				s = a("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = a("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less"),
				i = a.n(o);
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const t = Object(l.e)(t => Object(c.e)(t, e));
				return r.a.createElement("div", {
					className: i.a.currentBalance
				}, d._("Current balance:", null, {
					hk: "2NDvrq"
				}), r.a.createElement(s.a, {
					className: i.a.currentBalanceAmount,
					amount: t,
					subredditId: e.subredditId,
					small: !0,
					grey: !0
				}))
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return w
			})), a.d(t, "c", (function() {
				return O
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/lodash/uniqueId.js"),
				l = a.n(r),
				c = a("./node_modules/raf/index.js"),
				s = a.n(c),
				o = a("./node_modules/react/index.js"),
				i = a.n(o),
				d = a("./node_modules/react-redux/es/index.js"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/modal.ts"),
				h = a("./src/reddit/selectors/activeModalId.ts"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				v = a("./src/reddit/controls/Button/index.tsx"),
				f = a("./src/reddit/layout/row/Inline/index.tsx"),
				E = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = a.n(E);
			var g = Object(b.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return i.a.createElement("div", {
						className: x.a.wrapper
					}, i.a.createElement(f.a, {
						className: x.a.titleRow
					}, a), i.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), i.a.createElement(f.a, {
						className: x.a.buttonRow
					}, i.a.createElement(v.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				M = a("./src/reddit/controls/ErrorText/index.m.less"),
				C = a.n(M);
			const j = Object(u.c)({
				activeModalId: h.a
			});
			class N extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${l()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					s()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: a,
						errorModalBody: r,
						errorModalTitle: l = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: c = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: s,
						textHasOverflowed: o
					} = this.state;
					return i.a.createElement("div", {
						className: Object(m.a)(C.a.wrapper, a)
					}, i.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), o && i.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, c), t === s && i.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: l
					}, r || e))
				}
			}
			const y = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(N),
				w = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: l = []
					} = e, c = l.length ? l : r ? [r] : [];
					return c.length ? i.a.createElement("div", {
						className: t
					}, c.map((e, t) => i.a.createElement(y, {
						className: a,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => i.a.createElement(w, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			})), a.d(t, "b", (function() {
				return b
			})), a.d(t, "c", (function() {
				return v
			})), a.d(t, "d", (function() {
				return x
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/controls/ErrorText/index.tsx"),
				o = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				i = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = a("./src/reddit/controls/FormFields/index.m.less"),
				u = a.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = c.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: c,
						...s
					} = e, o = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(l.a)(u.a.inputWrapper, c, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, s)), e.label && r.a.createElement("label", {
						className: Object(l.a)(u.a.label, {
							[u.a.mHasValue]: o
						})
					}, e.label), e.children)
				},
				v = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						isInvalid: c,
						className: s,
						redditStyle: o,
						...i
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(l.a)(u.a.inputMovingLabelWrapper, s, {
							[u.a.mIsInvalid]: c,
							[u.a.mIsRedditStyle]: o
						}),
						onClick: h
					}, r.a.createElement(p, m({
						innerRef: n
					}, i)), e.label && r.a.createElement("label", {
						className: Object(l.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				f = e => r.a.createElement("div", {
					className: Object(l.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(o.a, {
					className: u.a.plus
				}));
			var E;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(E || (E = {}));
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: E.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: E.REMOVE,
							value: a,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: a,
						placeholder: n,
						errors: l = []
					} = this.props;
					return e.map((e, c) => r.a.createElement(b, {
						inputRef: e => this.setInputRef(e, c),
						isInvalid: !!l[c],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, c),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(c)
					}, r.a.createElement(i.b, {
						className: u.a.trash
					})), !!l[c] && r.a.createElement(s.b, {
						className: u.a.errorText
					}, l[c])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: c,
						disabled: s
					} = this.props;
					this.focusedInput = null;
					const o = !(!!n && a.length >= n) && !s;
					return r.a.createElement("div", {
						className: Object(l.a)(u.a.multiInputWrapper, e)
					}, t && o && r.a.createElement(f, {
						onClick: this.addValue,
						text: c
					}), this.renderFields(), !t && o && r.a.createElement(f, {
						onClick: this.addValue,
						text: c
					}))
				}
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
				r = a.n(n),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = a.n(c);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => r.a.createElement("div", {
				className: Object(l.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "j", (function() {
				return c
			})), a.d(t, "i", (function() {
				return s
			})), a.d(t, "h", (function() {
				return o
			})), a.d(t, "l", (function() {
				return i
			})), a.d(t, "k", (function() {
				return d
			})), a.d(t, "m", (function() {
				return u
			})), a.d(t, "g", (function() {
				return m
			})), a.d(t, "b", (function() {
				return p
			})), a.d(t, "d", (function() {
				return h
			})), a.d(t, "c", (function() {
				return b
			})), a.d(t, "e", (function() {
				return v
			})), a.d(t, "f", (function() {
				return f
			})), a.d(t, "n", (function() {
				return E
			}));
			var n, r = a("./src/config.ts"),
				l = a("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function s(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function i(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, a) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: a
					}
				})
			}
			async function u(e, t, a) {
				return await Object(l.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations`,
					data: a
				})
			}
			async function m(e, t, a) {
				return await Object(l.a)(e, {
					method: "delete",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations/${a}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const p = (e, t, a) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: a
				}),
				h = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				v = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, a, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: a,
					amount: n
				});
			async function E(e, t) {
				return await Object(l.a)(e, {
					method: "put",
					endpoint: `${r.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return s
			}));
			var n = a("./src/config.ts"),
				r = (a("./src/lib/bigNumberUtils/percent.ts"), a("./src/lib/constants/index.ts")),
				l = a("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(l.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: r.hb.GET
				}).then(e => {
					if (e.ok) {
						const a = e.body,
							n = {
								[t.subredditId]: a
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function s(e, t) {
				return Object(l.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
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
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return l
			})), a.d(t, "c", (function() {
				return c
			})), a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function l(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.dividedToIntegerBy(r).toString()
			}

			function c(e, t) {
				return Object(r.b)(parseInt(l(e, t), 10))
			}

			function s(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js");

			function r(e, t) {
				const [a, r] = Object(n.useState)(e);
				return [a, e => {
					t.current && r(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				s = a.n(c);
			const o = e => r.a.createElement("svg", {
				className: Object(l.a)(s.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = o
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/redux/es/redux.js"),
				r = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/actions/economics/claims/constants.ts")),
				l = a("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var s = (e = c, t) => {
					switch (t.type) {
						case l.a: {
							const a = t.payload.claimPoints || {},
								n = Object.keys(a).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: a[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var a;
								(null === (a = e[t]) || void 0 === a ? void 0 : a.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case r.b:
						case r.a:
							const {
								subredditId: a
							} = t.payload;
							return {
								...e, [a]: {
									...e[a],
									isClaiming: t.type === r.b
								}
							};
						default:
							return e
					}
				},
				o = a("./src/reddit/actions/governance/constants.ts");
			const i = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, a, n, r, l;
				const c = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					s = null == c ? void 0 : c.contracts,
					o = null == s ? void 0 : s.unlocked,
					i = null !== (n = null === (a = e.walletProvider) || void 0 === a ? void 0 : a.provider) && void 0 !== n ? n : e.provider,
					u = !!(null === (r = e.walletProvider) || void 0 === r ? void 0 : r.inTransition),
					m = (null == o ? void 0 : o.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: i,
					contractAddress: (null == o ? void 0 : o.address) || "",
					contracts: s,
					decimals: m,
					displayConversion: p,
					images: e.images || d,
					inTransition: u,
					name: e.name,
					nomenclature: null === (l = e.extra) || void 0 === l ? void 0 : l.nomenclature,
					polls: e.polls,
					symbol: (null == o ? void 0 : o.token) || ""
				}
			}
			var m = (e = i, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: a,
							meta: n
						} = t.payload;
						return {
							...e,
							[a]: u(n)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var h = (e = p, t) => {
				switch (t.type) {
					case o.n: {
						const {
							subredditId: a,
							wallets: n
						} = t.payload, r = Object.keys(n).reduce((t, r) => {
							return {
								...t,
								[r]: {
									...e[r] || {},
									[a]: n[r]
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
			t.a = Object(n.c)({
				claims: s,
				points: m,
				publicWallets: h
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return o
			})), a.d(t, "c", (function() {
				return i
			})), a.d(t, "a", (function() {
				return d
			}));
			var n = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/contexts/PageLayer/index.tsx"),
				l = a("./src/reddit/endpoints/governance/crypto.ts"),
				c = a("./src/lib/initializeClient/installReducer.ts"),
				s = a("./src/reddit/reducers/features/crypto/index.ts");
			Object(c.a)({
				features: {
					crypto: s.a
				}
			});
			const o = (e, t) => {
				var a, n, r;
				return t ? null === (r = null === (n = null === (a = e.features) || void 0 === a ? void 0 : a.crypto) || void 0 === n ? void 0 : n.points) || void 0 === r ? void 0 : r[t] : void 0
			};

			function i() {
				const e = Object(r.bb)(),
					t = Object(n.e)(t => Object(r.q)(t, {
						pageLayer: e
					})),
					a = Object(n.e)(e => o(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: a
				}
			}
			const d = (e, t) => {
				var a;
				const n = null === (a = o(e, t)) || void 0 === a ? void 0 : a.blockchainProvider;
				return n === l.a.Ethereum || n === l.a.Rinkeby || n === l.a.EthTraderEthereum || n === l.a.EthTraderRinkeby || n === l.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "g", (function() {
				return d
			})), a.d(t, "e", (function() {
				return u
			})), a.d(t, "f", (function() {
				return m
			}));
			var n = a("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				l = {},
				c = (e, t) => {
					const a = p(e, t);
					if (a) return a.mainHeader
				},
				s = (e, t) => {
					const a = p(e, t);
					return a && a.mainHeader ? a.mainHeader.price : "0"
				},
				o = (e, t) => {
					const a = p(e, t);
					return a && a.mainHeader ? {
						owner: a.mainHeader.owner,
						ownerId: a.mainHeader.ownerId
					} : l
				},
				i = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const a = i(e, t),
						n = a && a.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const a = i(e, t);
					return a && a.amount || "0"
				},
				m = (e, t) => {
					const a = Object(n.m)(e, t);
					return a && e.subreddits.gov.releaseNotes[a] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.3d18cd5da98666209382.js.map