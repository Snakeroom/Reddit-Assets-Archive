// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.ff0bd79761968590013b.js
// Retrieved at 9/10/2020, 2:00:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
		"./node_modules/ethers/utils/address.js": function(e, t, n) {
			"use strict";
			var r = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = r(n("./node_modules/bn.js/lib/bn.js")),
				a = n("./node_modules/ethers/utils/bytes.js"),
				o = n("./node_modules/ethers/utils/keccak256.js"),
				i = n("./node_modules/ethers/utils/rlp.js"),
				c = n("./node_modules/ethers/errors.js");

			function d(e) {
				"string" == typeof e && e.match(/^0x[0-9A-Fa-f]{40}$/) || c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				for (var t = (e = e.toLowerCase()).substring(2).split(""), n = new Uint8Array(40), r = 0; r < 40; r++) n[r] = t[r].charCodeAt(0);
				n = a.arrayify(o.keccak256(n));
				for (var s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (15 & n[s >> 1]) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
				return "0x" + t.join("")
			}
			for (var l = {}, u = 0; u < 10; u++) l[String(u)] = String(u);
			for (u = 0; u < 26; u++) l[String.fromCharCode(65 + u)] = String(10 + u);
			var m, b = Math.floor((m = 9007199254740991, Math.log10 ? Math.log10(m) : Math.log(m) / Math.LN10));

			function p(e) {
				e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00";
				var t = "";
				for (e.split("").forEach((function(e) {
						t += l[e]
					})); t.length >= b;) {
					var n = t.substring(0, b);
					t = parseInt(n, 10) % 97 + t.substring(n.length)
				}
				for (var r = String(98 - parseInt(t, 10) % 97); r.length < 2;) r = "0" + r;
				return r
			}

			function f(e) {
				var t = null;
				if ("string" != typeof e && c.throwError("invalid address", c.INVALID_ARGUMENT, {
						arg: "address",
						value: e
					}), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = d(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && c.throwError("bad address checksum", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== p(e) && c.throwError("bad icap checksum", c.INVALID_ARGUMENT, {
							arg: "address",
							value: e
						}), t = new s.default.BN(e.substring(4), 36).toString(16); t.length < 40;) t = "0" + t;
					t = d("0x" + t)
				} else c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				return t
			}
			t.getAddress = f, t.getIcapAddress = function(e) {
				for (var t = new s.default.BN(f(e).substring(2), 16).toString(36).toUpperCase(); t.length < 30;) t = "0" + t;
				return "XE" + p("XE00" + t) + t
			}, t.getContractAddress = function(e) {
				if (!e.from) throw new Error("missing from address");
				var t = e.nonce;
				return f("0x" + o.keccak256(i.encode([f(e.from), a.stripZeros(a.hexlify(t))])).substring(26))
			}, t.getCreate2Address = function(e) {
				var t = e.initCodeHash;
				e.initCode && (t ? o.keccak256(e.initCode) !== t && c.throwError("initCode/initCodeHash mismatch", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}) : t = o.keccak256(e.initCode)), t || c.throwError("missing initCode or initCodeHash", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				});
				var n = f(e.from),
					r = a.arrayify(e.salt);
				return 32 !== r.length && c.throwError("invalid salt", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}), f("0x" + o.keccak256(a.concat(["0xff", n, r, t])).substring(26))
			}
		},
		"./node_modules/ethers/utils/rlp.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/ethers/utils/bytes.js");

			function s(e) {
				for (var t = []; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function a(e, t, n) {
				for (var r = 0, s = 0; s < n; s++) r = 256 * r + e[t + s];
				return r
			}

			function o(e, t, n, r) {
				for (var s = []; n < t + 1 + r;) {
					var a = i(e, n);
					if (s.push(a.result), (n += a.consumed) > t + 1 + r) throw new Error("invalid rlp")
				}
				return {
					consumed: 1 + r,
					result: s
				}
			}

			function i(e, t) {
				if (0 === e.length) throw new Error("invalid rlp data");
				if (e[t] >= 248) {
					if (t + 1 + (n = e[t] - 247) > e.length) throw new Error("too short");
					if (t + 1 + n + (s = a(e, t + 1, n)) > e.length) throw new Error("to short");
					return o(e, t, t + 1 + n, n + s)
				}
				if (e[t] >= 192) {
					if (t + 1 + (s = e[t] - 192) > e.length) throw new Error("invalid rlp data");
					return o(e, t, t + 1, s)
				}
				if (e[t] >= 184) {
					var n;
					if (t + 1 + (n = e[t] - 183) > e.length) throw new Error("invalid rlp data");
					if (t + 1 + n + (s = a(e, t + 1, n)) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + n + s,
						result: r.hexlify(e.slice(t + 1 + n, t + 1 + n + s))
					}
				}
				if (e[t] >= 128) {
					var s;
					if (t + 1 + (s = e[t] - 128) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + s,
						result: r.hexlify(e.slice(t + 1, t + 1 + s))
					}
				}
				return {
					consumed: 1,
					result: r.hexlify(e[t])
				}
			}
			t.encode = function(e) {
				return r.hexlify(function e(t) {
					if (Array.isArray(t)) {
						var n = [];
						return t.forEach((function(t) {
							n = n.concat(e(t))
						})), n.length <= 55 ? (n.unshift(192 + n.length), n) : ((a = s(n.length)).unshift(247 + a.length), a.concat(n))
					}
					var a, o = Array.prototype.slice.call(r.arrayify(t));
					return 1 === o.length && o[0] <= 127 ? o : o.length <= 55 ? (o.unshift(128 + o.length), o) : ((a = s(o.length)).unshift(183 + a.length), a.concat(o))
				}(e))
			}, t.decode = function(e) {
				var t = r.arrayify(e),
					n = i(t, 0);
				if (n.consumed !== t.length) throw new Error("invalid rlp data");
				return n.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					a = new r.BigNumber(n.dividedBy(s)),
					o = new r.BigNumber("100").multipliedBy(a);
				return new r.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "d", (function() {
				return G
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "h", (function() {
				return D
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/gov.ts"),
				v = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(s.a)(v.b),
				x = Object(s.a)(v.c),
				I = Object(s.a)(v.e),
				y = (Object(s.a)(v.f), Object(s.a)(v.g), Object(s.a)(v.h)),
				O = Object(s.a)(v.i),
				k = Object(s.a)(v.j),
				N = Object(s.a)(v.k),
				_ = Object(s.a)(v.q),
				E = Object(s.a)(v.r),
				T = Object(s.a)(v.s),
				w = Object(s.a)(v.t),
				C = Object(s.a)(v.u),
				A = Object(s.a)(v.v),
				M = Object(s.a)(v.w),
				P = Object(s.a)(v.x),
				G = (e, t) => async (n, r, s) => {
					let a, {
							apiContext: o,
							gqlContext: c
						} = s,
						l = r().polls.models[e];
					if (n(k({
							pollId: e
						})), (a = l.type === b.a.GA ? await Object(d.c)(c(), e, t) : await Object(d.b)(o(), l.subredditId, e, t)).ok) {
						if (l.type === b.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(I({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(N(a.body));
						const s = r();
						if ((l = s.polls.models[e]) && Object(b.d)(l)) {
							const {
								postId: e
							} = l, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.S)(e))
						}
					} else n(O({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(g.a)(n, a.error || a.errors[0].messsage)
				}, U = (e, t) => async (n, s, i) => {
					let {
						apiContext: d
					} = i;
					n(T());
					const m = s().transfers.communityPoints.contentId || void 0,
						b = await
					function(e, t) {
						return Object(u.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(d(), Object.assign(Object.assign({}, e), {
						contentId: m
					}));
					b.ok ? (n(w(Object.assign(Object.assign({}, b.body), {
						subredditId: e.subredditId
					}))), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(a.a)(e.amount)), r.fbt._param("tokenName", Object(h.q)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(_({
						error: b.error
					})), Object(g.a)(n, b.error))
				}, D = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(A());
					const a = await Object(m.a)(s(), e);
					a.ok ? t(M(a.body)) : t(C({
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				a = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(r.a)(a.m),
				i = Object(r.a)(a.n),
				c = Object(r.a)(a.l);
			t.a = e => async (t, n, r) => {
				let {
					apiContext: a
				} = r;
				t(o({
					subredditId: e.subredditId
				}));
				const d = await Object(s.b)(a(), e);
				d.ok ? t(i(Object.assign({
					subredditId: e.subredditId
				}, d.body))) : t(c({
					error: d.error
				}))
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(d);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(c.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~323a8d79"), n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~509f26c8"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~f5b424fb"), n.e("vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance~2c4c224b"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance-Transac~82ccdb7d"), n.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3IiquiUxUtXOyp-zOO6NRj",
				controls: "YWcjXTgX4qLhEK5VzWtZN",
				explanation: "_1HZDNpr5Mwq2PvYQAr8Vya",
				inputContainer: "_2o6aRpMmIwjIyBzKvAX3Iu",
				recipientContainer: "_9_VNXefTbTzw6yHVkranI",
				recipient: "_3qLUFjBZ3aszzs7hVEmIaj",
				title: "_2gmTTR14-GI7RpG5N8IfYY"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/governance/tokens.ts"),
				b = n("./src/reddit/selectors/gov.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				f = n("./node_modules/bignumber.js/bignumber.js"),
				h = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				g = n("./src/reddit/components/Governance/Token/index.tsx"),
				j = n("./src/reddit/constants/colors.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/endpoints/governance/crypto.ts"),
				O = n("./src/reddit/helpers/governance/stellar.ts"),
				k = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				N = n.n(k),
				_ = n("./node_modules/fbt/lib/FbtPublic.js");
			const E = Object(p.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				blockchainProvider: b.a,
				tokenDisplayConversion: b.p,
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				unlockedToken: b.s,
				wallet: b.g
			});
			var T = Object(a.b)(E)((function(e) {
					const t = e.wallet && e.wallet.unlockedAmount || "0",
						n = new f.BigNumber(e.amount || "0"),
						r = new f.BigNumber(t),
						a = r.isGreaterThanOrEqualTo(n),
						o = e.submissionEnabled && !r.isZero() && a;
					return s.a.createElement("div", {
						className: Object(h.a)(N.a.container, e.className)
					}, s.a.createElement("div", {
						className: N.a.available
					}, s.a.createElement("div", null, _.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), s.a.createElement(g.a, {
						grey: !0,
						className: N.a.token,
						subredditId: e.subredditId
					}), s.a.createElement("div", {
						style: {
							color: a ? void 0 : j.a.warning
						}
					}, Object(v.a)(Object(m.b)(t, e.tokenDisplayConversion)))), e.blockchainProvider === y.a.Stellar && o ? s.a.createElement(x.g, {
						redditStyle: !0,
						className: N.a.button,
						href: Object(O.b)(e.unlockedToken && e.unlockedToken.address || "", e.unlockedToken && e.unlockedToken.symbol || "", e.publicAddress || "", e.amount && Object(m.b)(e.amount, e.tokenDisplayConversion) || "0", e.contentId ? "t|".concat(e.contentId) : void 0),
						target: "_blank",
						tabIndex: e.tabIndex
					}, _.fbt._("send", null, {
						hk: "oTFGp"
					})) : s.a.createElement(x.f, {
						disabled: !o,
						className: N.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onTransferPoints
					}, e.transferIsPending ? s.a.createElement(I.a, {
						className: N.a.loadingIcon,
						sizePx: 20
					}) : _.fbt._("send", null, {
						hk: "oTFGp"
					})))
				})),
				w = n("./src/lib/currency/cleanNumber/index.ts"),
				C = n("./src/reddit/constants/keycodes.ts"),
				A = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				M = n.n(A);

			function P(e) {
				const t = e.amount || "0",
					n = !new f.BigNumber(t).isZero(),
					r = Object(v.a)(t);
				return s.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(h.a)(M.a.container, e.className)
				}, s.a.createElement(g.a, {
					className: M.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), s.a.createElement("div", {
					className: Object(h.a)(M.a.display, {
						[M.a.displayActive]: n
					}),
					style: {
						fontSize: G(r)
					}
				}, Object(v.a)(r)), s.a.createElement("input", {
					autoFocus: !0,
					className: M.a.input,
					maxLength: 9,
					style: {
						fontSize: G(r)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(w.a)(t.currentTarget.value)),
					onClick: U,
					onFocus: U,
					onKeyDown: e => {
						e.key !== C.b.ArrowLeft && e.key !== C.b.ArrowRight && e.key !== C.b.ArrowUp && e.key !== C.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function G(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function U(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var D = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				R = n("./node_modules/ethers/utils/address.js"),
				S = n("./node_modules/lodash/debounce.js"),
				L = n.n(S),
				B = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				V = n("./src/reddit/actions/users.ts"),
				q = n("./src/reddit/selectors/user.ts");
			var F = n("./src/reddit/controls/FormFields/index.tsx"),
				W = n("./src/reddit/hooks/useThunkDispatch.ts"),
				z = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				H = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Z = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				X = n.n(Z);
			const Q = 42,
				K = /^0x[0-9a-fA-F]+$/;
			var J;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(J || (J = {}));
			const $ = async (e, t, n, r) => {
				const s = e.current;
				if (!s || s.length <= D.b) return void r(J.Empty);
				const a = K.test(s);
				if (a) try {
					if (!!Object(R.getAddress)(s)) return void r(J.Valid)
				} catch (o) {}
				s.length <= D.a ? (r(J.Searching), n(((e, t) => async (n, r, s) => {
					let {
						apiContext: a
					} = s, o = r(), i = Object(q.eb)(o, {
						userName: e
					});
					if (!(i || (await n(Object(V.y)(e)), o = r(), i = Object(q.eb)(o, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let c = Object(b.j)(o, {
						subredditId: t,
						userId: i.id
					});
					return c || (await n(Object(B.a)({
						subredditId: t,
						userIds: [i.id]
					})), c = Object(b.j)(r(), {
						subredditId: t,
						userId: i.id
					})), {
						userId: i.id,
						wallet: c || null
					}
				})(s, t)).then(t => {
					let {
						userId: n,
						wallet: o
					} = t;
					e.current === s && r(n ? o ? J.Valid : J.UserDoesNotHaveAWallet : a ? J.InvalidWalletAddress : J.InvalidUsername)
				}).catch(() => {
					r(J.Error)
				})) : r(a ? J.InvalidWalletAddress : J.InvalidUsername)
			};

			function ee(e) {
				const {
					onChange: t,
					subredditId: n
				} = e, [a, o] = Object(r.useState)(e.initialRecipient || ""), i = Object(r.useRef)(a), [c, d] = Object(r.useState)(J.Empty), l = Object(W.a)(), u = () => $(i, n, l, e => {
					d(e), e === J.Valid && t(i.current, !0)
				}), m = Object(r.useMemo)(() => L()(u, 300), [i, n, l, d, t]);
				return Object(r.useEffect)(() => {
					e.initialRecipient && u()
				}, []), s.a.createElement("div", {
					className: Object(h.a)(X.a.container, e.className)
				}, s.a.createElement(F.c, {
					redditStyle: !0,
					className: X.a.input,
					label: _.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: Q,
					style: {
						borderColor: te(c)
					},
					tabIndex: e.tabIndex,
					type: "text",
					value: a,
					onChange: e => {
						const n = e.currentTarget.value.trim();
						i.current = n, o(n), t(n, !1), m()
					}
				}), function(e) {
					switch (e) {
						case J.UserDoesNotHaveAWallet:
							return s.a.createElement(H.a, {
								className: X.a.icon,
								style: {
									fill: j.a.notice
								}
							});
						case J.InvalidWalletAddress:
						case J.InvalidUsername:
						case J.Error:
							return s.a.createElement(Y.a, {
								className: X.a.icon,
								style: {
									fill: j.a.warning
								}
							});
						case J.Searching:
							return s.a.createElement(I.a, {
								className: X.a.loadingIcon,
								sizePx: 8
							});
						case J.Valid:
							return s.a.createElement(z.a, {
								className: X.a.icon
							});
						default:
							return null
					}
				}(c), s.a.createElement("div", {
					className: X.a.message,
					style: {
						color: te(c)
					}
				}, function(e) {
					switch (e) {
						case J.UserDoesNotHaveAWallet:
							return _.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case J.InvalidWalletAddress:
							return _.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case J.InvalidUsername:
							return _.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case J.Error:
							return _.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function te(e) {
				switch (e) {
					case J.UserDoesNotHaveAWallet:
						return j.a.notice;
					case J.InvalidWalletAddress:
					case J.InvalidUsername:
					case J.Error:
						return j.a.warning
				}
			}
			var ne = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function re(e) {
				const {
					tokenName: t
				} = e;
				return s.a.createElement(ne.a, {
					className: e.className
				}, _.fbt._("Send {tokenName}", [_.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var se = n("./src/lib/addQueryParams/index.ts"),
				ae = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				oe = n.n(ae);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ce extends s.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: r,
						tokenName: a
					} = this.props;
					if (!e || !t) return null;
					const o = Object(se.a)("https://daonuts.org/r/".concat(r.name), {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return s.a.createElement("div", {
						className: oe.a.container
					}, s.a.createElement(re, {
						className: oe.a.title,
						subredditId: r.id,
						tokenName: a
					}), s.a.createElement("div", {
						className: oe.a.body
					}, s.a.createElement("div", {
						className: oe.a.description
					}, ie._("Tipping with Donuts is now managed on Daonuts.org.", null, {
						hk: "3TBQTj"
					})), s.a.createElement(x.g, {
						redditStyle: !0,
						className: oe.a.button,
						href: o,
						target: "_blank"
					}, ie._("tip on daonuts.org", null, {
						hk: "2WQLYI"
					})), s.a.createElement("div", {
						className: oe.a.disclaimer
					}, ie._("Daonuts.org is not affiliated with Reddit.", null, {
						hk: "zDnw3"
					}))))
				}
			}
			const de = Object(p.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var le = Object(a.b)(de)(ce),
				ue = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				me = n.n(ue);
			const {
				fbt: be
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class pe extends s.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(m.a)(e, this.props.tokenDisplayConversion)
					}), this.handleRecipientChange = (e, t) => this.setState({
						recipient: e,
						recipientIsValid: t
					}), this.state = {
						displayAmount: void 0,
						recipient: void 0,
						recipientIsValid: !(!e.customCrypto || !e.publicAddress),
						showTransferTransactionModal: !1,
						tokenAmount: void 0
					}
				}
				render() {
					const {
						customCrypto: e,
						initialRecipient: t,
						isEthereumProvider: n,
						onTransferPoints: r,
						subreddit: a,
						tokenName: o,
						useCrypto: i
					} = this.props;
					if (!a) return null;
					if (e && n) return s.a.createElement(le, {
						recipient: t,
						subreddit: a,
						tokenName: o
					});
					if (this.state.showTransferTransactionModal) return s.a.createElement(d.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: a.id,
						transferAmount: this.state.tokenAmount
					});
					const c = i ? ee : D.c;
					return s.a.createElement("div", {
						className: me.a.container
					}, s.a.createElement(re, {
						className: me.a.title,
						subredditId: a.id,
						tokenName: o
					}), s.a.createElement("div", {
						className: me.a.inputContainer
					}, s.a.createElement(P, {
						amount: this.state.displayAmount,
						subredditId: a.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), !i && s.a.createElement("div", {
						className: me.a.explanation
					}, be._("Up to 49% of earned {tokenName}. Remaining are frozen.", [be._param("tokenName", o)], {
						hk: "1fUxyG"
					})), e ? s.a.createElement("div", {
						className: me.a.explanation
					}, "Transfer to ", t) : s.a.createElement("div", {
						className: me.a.recipientContainer
					}, s.a.createElement(c, {
						className: me.a.recipient,
						initialRecipient: t,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: a.id
					})), s.a.createElement(T, {
						amount: this.state.tokenAmount,
						className: me.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid,
						subredditId: a.id,
						tabIndex: 3,
						publicAddress: this.props.publicAddress,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && a && (i ? this.setState({
								showTransferTransactionModal: !0
							}) : r(this.state.tokenAmount, this.state.recipient, a.id))
						}
					}))
				}
			}
			const fe = Object(p.c)({
					customCrypto: u.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(b.f)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: l.q,
					tokenDisplayConversion: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(b.p)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					tokenName: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(b.q)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					useCrypto: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(b.l)(e, {
							subredditId: n ? n.id : void 0
						})
					}
				}),
				he = Object(a.b)(fe, e => ({
					onClose: () => {
						e(Object(c.f)())
					},
					onTransferPoints: (t, n, r) => e(Object(i.e)({
						amount: t,
						recipient: n,
						subredditId: r
					}, !0))
				})),
				ve = Object(l.t)();
			t.default = Object(o.a)(ve(he(pe)))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, r) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(a.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const m = (e, t, n) => Object(i.a)(e, Object.assign(Object.assign({}, o), {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function b(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: r
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/stellar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function r(e, t) {
				return "web+stellar:".concat(e, "?") + Object.entries(t).map(e => {
					let [t, n] = e;
					return t + "=" + encodeURIComponent(n)
				}).join("&")
			}

			function s(e, t, n, s, a) {
				const o = {
					destination: n,
					amount: s,
					asset_code: t,
					asset_issuer: e
				};
				return a && (o.memo = a), r("pay", o)
			}

			function a(e, t, n) {
				return r("pay", {
					destination: e,
					amount: n,
					asset_code: t,
					asset_issuer: e,
					memo: "o|membership"
				})
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(r.c)()
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.ff0bd79761968590013b.js.map