// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.cfc0dffcf6f3a19dac83.js
// Retrieved at 10/7/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
		"./node_modules/ethers/utils/address.js": function(e, t, n) {
			"use strict";
			var s = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = s(n("./node_modules/bn.js/lib/bn.js")),
				a = n("./node_modules/ethers/utils/bytes.js"),
				o = n("./node_modules/ethers/utils/keccak256.js"),
				i = n("./node_modules/ethers/utils/rlp.js"),
				c = n("./node_modules/ethers/errors.js");

			function d(e) {
				"string" == typeof e && e.match(/^0x[0-9A-Fa-f]{40}$/) || c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				for (var t = (e = e.toLowerCase()).substring(2).split(""), n = new Uint8Array(40), s = 0; s < 40; s++) n[s] = t[s].charCodeAt(0);
				n = a.arrayify(o.keccak256(n));
				for (var r = 0; r < 40; r += 2) n[r >> 1] >> 4 >= 8 && (t[r] = t[r].toUpperCase()), (15 & n[r >> 1]) >= 8 && (t[r + 1] = t[r + 1].toUpperCase());
				return "0x" + t.join("")
			}
			for (var l = {}, u = 0; u < 10; u++) l[String(u)] = String(u);
			for (u = 0; u < 26; u++) l[String.fromCharCode(65 + u)] = String(10 + u);
			var m, p = Math.floor((m = 9007199254740991, Math.log10 ? Math.log10(m) : Math.log(m) / Math.LN10));

			function b(e) {
				e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00";
				var t = "";
				for (e.split("").forEach((function(e) {
						t += l[e]
					})); t.length >= p;) {
					var n = t.substring(0, p);
					t = parseInt(n, 10) % 97 + t.substring(n.length)
				}
				for (var s = String(98 - parseInt(t, 10) % 97); s.length < 2;) s = "0" + s;
				return s
			}

			function h(e) {
				var t = null;
				if ("string" != typeof e && c.throwError("invalid address", c.INVALID_ARGUMENT, {
						arg: "address",
						value: e
					}), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = d(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && c.throwError("bad address checksum", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== b(e) && c.throwError("bad icap checksum", c.INVALID_ARGUMENT, {
							arg: "address",
							value: e
						}), t = new r.default.BN(e.substring(4), 36).toString(16); t.length < 40;) t = "0" + t;
					t = d("0x" + t)
				} else c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				return t
			}
			t.getAddress = h, t.getIcapAddress = function(e) {
				for (var t = new r.default.BN(h(e).substring(2), 16).toString(36).toUpperCase(); t.length < 30;) t = "0" + t;
				return "XE" + b("XE00" + t) + t
			}, t.getContractAddress = function(e) {
				if (!e.from) throw new Error("missing from address");
				var t = e.nonce;
				return h("0x" + o.keccak256(i.encode([h(e.from), a.stripZeros(a.hexlify(t))])).substring(26))
			}, t.getCreate2Address = function(e) {
				var t = e.initCodeHash;
				e.initCode && (t ? o.keccak256(e.initCode) !== t && c.throwError("initCode/initCodeHash mismatch", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}) : t = o.keccak256(e.initCode)), t || c.throwError("missing initCode or initCodeHash", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				});
				var n = h(e.from),
					s = a.arrayify(e.salt);
				return 32 !== s.length && c.throwError("invalid salt", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}), h("0x" + o.keccak256(a.concat(["0xff", n, s, t])).substring(26))
			}
		},
		"./node_modules/ethers/utils/rlp.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n("./node_modules/ethers/utils/bytes.js");

			function r(e) {
				for (var t = []; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function a(e, t, n) {
				for (var s = 0, r = 0; r < n; r++) s = 256 * s + e[t + r];
				return s
			}

			function o(e, t, n, s) {
				for (var r = []; n < t + 1 + s;) {
					var a = i(e, n);
					if (r.push(a.result), (n += a.consumed) > t + 1 + s) throw new Error("invalid rlp")
				}
				return {
					consumed: 1 + s,
					result: r
				}
			}

			function i(e, t) {
				if (0 === e.length) throw new Error("invalid rlp data");
				if (e[t] >= 248) {
					if (t + 1 + (n = e[t] - 247) > e.length) throw new Error("too short");
					if (t + 1 + n + (r = a(e, t + 1, n)) > e.length) throw new Error("to short");
					return o(e, t, t + 1 + n, n + r)
				}
				if (e[t] >= 192) {
					if (t + 1 + (r = e[t] - 192) > e.length) throw new Error("invalid rlp data");
					return o(e, t, t + 1, r)
				}
				if (e[t] >= 184) {
					var n;
					if (t + 1 + (n = e[t] - 183) > e.length) throw new Error("invalid rlp data");
					if (t + 1 + n + (r = a(e, t + 1, n)) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + n + r,
						result: s.hexlify(e.slice(t + 1 + n, t + 1 + n + r))
					}
				}
				if (e[t] >= 128) {
					var r;
					if (t + 1 + (r = e[t] - 128) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + r,
						result: s.hexlify(e.slice(t + 1, t + 1 + r))
					}
				}
				return {
					consumed: 1,
					result: s.hexlify(e[t])
				}
			}
			t.encode = function(e) {
				return s.hexlify(function e(t) {
					if (Array.isArray(t)) {
						var n = [];
						return t.forEach((function(t) {
							n = n.concat(e(t))
						})), n.length <= 55 ? (n.unshift(192 + n.length), n) : ((a = r(n.length)).unshift(247 + a.length), a.concat(n))
					}
					var a, o = Array.prototype.slice.call(s.arrayify(t));
					return 1 === o.length && o[0] <= 127 ? o : o.length <= 55 ? (o.unshift(128 + o.length), o) : ((a = r(o.length)).unshift(183 + a.length), a.concat(o))
				}(e))
			}, t.decode = function(e) {
				var t = s.arrayify(e),
					n = i(t, 0);
				if (n.consumed !== t.length) throw new Error("invalid rlp data");
				return n.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
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
					a = new s.BigNumber(n.dividedBy(r)),
					o = new s.BigNumber("100").multipliedBy(a);
				return new s.BigNumber(o).toNumber()
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "h", (function() {
				return D
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				p = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/gov.ts"),
				v = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(r.a)(v.b),
				j = Object(r.a)(v.c),
				I = Object(r.a)(v.e),
				N = (Object(r.a)(v.f), Object(r.a)(v.g), Object(r.a)(v.h)),
				y = Object(r.a)(v.i),
				C = Object(r.a)(v.j),
				E = Object(r.a)(v.k),
				O = Object(r.a)(v.q),
				_ = Object(r.a)(v.r),
				w = Object(r.a)(v.s),
				k = Object(r.a)(v.t),
				T = Object(r.a)(v.u),
				A = Object(r.a)(v.v),
				M = Object(r.a)(v.w),
				P = Object(r.a)(v.x),
				S = (e, t) => async (n, s, r) => {
					let a, {
							apiContext: o,
							gqlContext: c
						} = r,
						l = s().polls.models[e];
					if (n(C({
							pollId: e
						})), (a = l.type === p.a.GA ? await Object(d.c)(c(), e, t) : await Object(d.b)(o(), l.subredditId, e, t)).ok) {
						if (l.type === p.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(I({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(E(a.body));
						const r = s();
						if ((l = r.polls.models[e]) && Object(p.d)(l)) {
							const {
								postId: e
							} = l, t = r.posts.models[e];
							t && t.voteState === h.a.notVoted && n(Object(i.S)(e))
						}
					} else n(y({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(g.a)(n, a.error || a.errors[0].messsage)
				}, R = (e, t) => async (n, r, i) => {
					let {
						apiContext: d
					} = i;
					n(w());
					const m = r().transfers.communityPoints.contentId || void 0,
						p = await
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
					p.ok ? (n(k(Object.assign(Object.assign({}, p.body), {
						subredditId: e.subredditId
					}))), n(Object(c.e)({
						kind: b.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(a.a)(e.amount)), s.fbt._param("tokenName", Object(f.p)(r(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(O({
						error: p.error
					})), Object(g.a)(n, p.error))
				}, D = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(A());
					const a = await Object(m.a)(r(), e);
					a.ok ? t(M(a.body)) : t(T({
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/governance/wallet.ts"),
				a = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(s.a)(a.m),
				i = Object(s.a)(a.n),
				c = Object(s.a)(a.l);
			t.a = e => async (t, n, s) => {
				let {
					apiContext: a
				} = s;
				t(o({
					subredditId: e.subredditId
				}));
				const d = await Object(r.b)(a(), e);
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				return r.a.createElement(c.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function d(e) {
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, r.a.createElement("div", {
					className: c.a.title
				}, e.children), r.a.createElement(o.a, {
					className: c.a.closeIcon
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				tokenSymbol: d.q
			});
			t.a = Object(a.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
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
					src: n
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b"), n.e("vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance~231ed33d"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance-Transac~bbc9464a"), n.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
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
			t.a = r
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
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/usernameAvailable.ts"),
				u = n("./src/reddit/constants/colors.ts"),
				m = n("./src/reddit/controls/FormFields/index.tsx"),
				p = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				h = n("./src/reddit/icons/svgs/Info/index.tsx"),
				f = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				v = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				g = n.n(v),
				x = n("./node_modules/fbt/lib/FbtPublic.js");
			const j = 2,
				I = 20;
			var N;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(N || (N = {}));
			class y extends o.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > j && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > j) {
							switch (this.props.usernameAvailability[e]) {
								case l.b.Available:
									return N.Invalid;
								case l.b.Error:
									return N.Error;
								case l.b.Unavailable:
									return N.Valid;
								default:
									return N.Searching
							}
						}
						return N.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === N.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return o.a.createElement("div", {
						className: Object(d.a)(g.a.container, this.props.className)
					}, o.a.createElement(m.c, {
						redditStyle: !0,
						className: g.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: I,
						style: {
							borderColor: C(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case N.Error:
								return o.a.createElement(h.a, {
									className: g.a.icon,
									style: {
										fill: u.a.notice
									}
								});
							case N.Invalid:
								return o.a.createElement(f.a, {
									className: g.a.icon,
									style: {
										fill: u.a.warning
									}
								});
							case N.Searching:
								return o.a.createElement(p.a, {
									className: g.a.loadingIcon,
									sizePx: 8
								});
							case N.Valid:
								return o.a.createElement(b.a, {
									className: g.a.icon
								});
							default:
								return null
						}
					}(e), o.a.createElement("div", {
						className: g.a.message,
						style: {
							color: C(e)
						}
					}, function(e) {
						switch (e) {
							case N.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case N.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function C(e) {
				switch (e) {
					case N.Error:
						return u.a.notice;
					case N.Invalid:
						return u.a.warning
				}
			}
			const E = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(E, e => ({
				onCheckUsername: r()(t => e(Object(l.f)({
					username: t
				})), 250)
			}))(y)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/governance/tokens.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/reselect/es/index.js"),
				h = n("./node_modules/bignumber.js/bignumber.js"),
				f = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				g = n("./src/reddit/components/Governance/Token/index.tsx"),
				x = n("./src/reddit/constants/colors.ts"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = n("./src/reddit/endpoints/governance/crypto.ts"),
				y = n("./src/reddit/helpers/governance/stellar.ts"),
				C = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				E = n.n(C),
				O = n("./node_modules/fbt/lib/FbtPublic.js");
			const _ = Object(b.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				blockchainProvider: p.a,
				tokenDisplayConversion: p.o,
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				unlockedToken: p.r,
				wallet: p.g
			});
			var w = Object(a.b)(_)((function(e) {
					const t = e.wallet && e.wallet.unlockedAmount || "0",
						n = new h.BigNumber(e.amount || "0"),
						s = new h.BigNumber(t),
						a = s.isGreaterThanOrEqualTo(n),
						o = e.submissionEnabled && !s.isZero() && a;
					return r.a.createElement("div", {
						className: Object(f.a)(E.a.container, e.className)
					}, r.a.createElement("div", {
						className: E.a.available
					}, r.a.createElement("div", null, O.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), r.a.createElement(g.a, {
						grey: !0,
						className: E.a.token,
						subredditId: e.subredditId
					}), r.a.createElement("div", {
						style: {
							color: a ? void 0 : x.a.warning
						}
					}, Object(v.a)(Object(m.b)(t, e.tokenDisplayConversion)))), e.blockchainProvider === N.a.Stellar && o ? r.a.createElement(j.j, {
						redditStyle: !0,
						className: E.a.button,
						href: Object(y.b)(e.unlockedToken && e.unlockedToken.address || "", e.unlockedToken && e.unlockedToken.symbol || "", e.publicAddress || "", e.amount && Object(m.b)(e.amount, e.tokenDisplayConversion) || "0", e.contentId ? "t|".concat(e.contentId) : void 0),
						target: "_blank",
						tabIndex: e.tabIndex
					}, O.fbt._("send", null, {
						hk: "oTFGp"
					})) : r.a.createElement(j.i, {
						disabled: !o,
						className: E.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onTransferPoints
					}, e.transferIsPending ? r.a.createElement(I.a, {
						className: E.a.loadingIcon,
						sizePx: 20
					}) : O.fbt._("send", null, {
						hk: "oTFGp"
					})))
				})),
				k = n("./src/lib/currency/cleanNumber/index.ts"),
				T = n("./src/reddit/constants/keycodes.ts"),
				A = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				M = n.n(A);

			function P(e) {
				const t = e.amount || "0",
					n = !new h.BigNumber(t).isZero(),
					s = Object(v.a)(t);
				return r.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(f.a)(M.a.container, e.className)
				}, r.a.createElement(g.a, {
					className: M.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), r.a.createElement("div", {
					className: Object(f.a)(M.a.display, {
						[M.a.displayActive]: n
					}),
					style: {
						fontSize: S(s)
					}
				}, Object(v.a)(s)), r.a.createElement("input", {
					autoFocus: !0,
					className: M.a.input,
					maxLength: 9,
					style: {
						fontSize: S(s)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(k.a)(t.currentTarget.value)),
					onClick: R,
					onFocus: R,
					onKeyDown: e => {
						e.key !== T.b.ArrowLeft && e.key !== T.b.ArrowRight && e.key !== T.b.ArrowUp && e.key !== T.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function S(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function R(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var D = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				U = n("./node_modules/ethers/utils/address.js"),
				G = n("./node_modules/lodash/debounce.js"),
				V = n.n(G),
				B = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				L = n("./src/reddit/actions/users.ts"),
				F = n("./src/reddit/selectors/user.ts");
			var W = n("./src/reddit/controls/FormFields/index.tsx"),
				H = n("./src/reddit/hooks/useThunkDispatch.ts"),
				q = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				z = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				X = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				Z = n.n(X);
			const J = 42,
				K = /^0x[0-9a-fA-F]+$/;
			var Q;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(Q || (Q = {}));
			const $ = async (e, t, n, s) => {
				const r = e.current;
				if (!r || r.length <= D.b) return void s(Q.Empty);
				const a = K.test(r);
				if (a) try {
					if (!!Object(U.getAddress)(r)) return void s(Q.Valid)
				} catch (o) {}
				r.length <= D.a ? (s(Q.Searching), n(((e, t) => async (n, s, r) => {
					let {
						apiContext: a
					} = r, o = s(), i = Object(F.hb)(o, {
						userName: e
					});
					if (!(i || (await n(Object(L.y)(e)), o = s(), i = Object(F.hb)(o, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let c = Object(p.i)(o, {
						subredditId: t,
						userId: i.id
					});
					return c || (await n(Object(B.a)({
						subredditId: t,
						userIds: [i.id]
					})), c = Object(p.i)(s(), {
						subredditId: t,
						userId: i.id
					})), {
						userId: i.id,
						wallet: c || null
					}
				})(r, t)).then(t => {
					let {
						userId: n,
						wallet: o
					} = t;
					e.current === r && s(n ? o ? Q.Valid : Q.UserDoesNotHaveAWallet : a ? Q.InvalidWalletAddress : Q.InvalidUsername)
				}).catch(() => {
					s(Q.Error)
				})) : s(a ? Q.InvalidWalletAddress : Q.InvalidUsername)
			};

			function ee(e) {
				const {
					onChange: t,
					subredditId: n
				} = e, [a, o] = Object(s.useState)(e.initialRecipient || ""), i = Object(s.useRef)(a), [c, d] = Object(s.useState)(Q.Empty), l = Object(H.a)(), u = () => $(i, n, l, e => {
					d(e), e === Q.Valid && t(i.current, !0)
				}), m = Object(s.useMemo)(() => V()(u, 300), [i, n, l, d, t]);
				return Object(s.useEffect)(() => {
					e.initialRecipient && u()
				}, []), r.a.createElement("div", {
					className: Object(f.a)(Z.a.container, e.className)
				}, r.a.createElement(W.c, {
					redditStyle: !0,
					className: Z.a.input,
					label: O.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: J,
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
						case Q.UserDoesNotHaveAWallet:
							return r.a.createElement(z.a, {
								className: Z.a.icon,
								style: {
									fill: x.a.notice
								}
							});
						case Q.InvalidWalletAddress:
						case Q.InvalidUsername:
						case Q.Error:
							return r.a.createElement(Y.a, {
								className: Z.a.icon,
								style: {
									fill: x.a.warning
								}
							});
						case Q.Searching:
							return r.a.createElement(I.a, {
								className: Z.a.loadingIcon,
								sizePx: 8
							});
						case Q.Valid:
							return r.a.createElement(q.a, {
								className: Z.a.icon
							});
						default:
							return null
					}
				}(c), r.a.createElement("div", {
					className: Z.a.message,
					style: {
						color: te(c)
					}
				}, function(e) {
					switch (e) {
						case Q.UserDoesNotHaveAWallet:
							return O.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case Q.InvalidWalletAddress:
							return O.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case Q.InvalidUsername:
							return O.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case Q.Error:
							return O.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function te(e) {
				switch (e) {
					case Q.UserDoesNotHaveAWallet:
						return x.a.notice;
					case Q.InvalidWalletAddress:
					case Q.InvalidUsername:
					case Q.Error:
						return x.a.warning
				}
			}
			var ne = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function se(e) {
				const {
					tokenName: t
				} = e;
				return r.a.createElement(ne.a, {
					className: e.className
				}, O.fbt._("Send {tokenName}", [O.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var re = n("./src/lib/addQueryParams/index.ts"),
				ae = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				oe = n.n(ae);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ce extends r.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: s,
						tokenName: a
					} = this.props;
					if (!e || !t) return null;
					const o = Object(re.a)("https://daonuts.org/r/".concat(s.name), {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return r.a.createElement("div", {
						className: oe.a.container
					}, r.a.createElement(se, {
						className: oe.a.title,
						subredditId: s.id,
						tokenName: a
					}), r.a.createElement("div", {
						className: oe.a.body
					}, r.a.createElement("div", {
						className: oe.a.description
					}, ie._("Tipping with Donuts is now managed on Daonuts.org.", null, {
						hk: "3TBQTj"
					})), r.a.createElement(j.j, {
						redditStyle: !0,
						className: oe.a.button,
						href: o,
						target: "_blank"
					}, ie._("tip on daonuts.org", null, {
						hk: "2WQLYI"
					})), r.a.createElement("div", {
						className: oe.a.disclaimer
					}, ie._("Daonuts.org is not affiliated with Reddit.", null, {
						hk: "zDnw3"
					}))))
				}
			}
			const de = Object(b.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var le = Object(a.b)(de)(ce),
				ue = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				me = n.n(ue);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class be extends r.a.Component {
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
						onTransferPoints: s,
						subreddit: a,
						tokenName: o,
						useCrypto: i
					} = this.props;
					if (!a) return null;
					if (e && n) return r.a.createElement(le, {
						recipient: t,
						subreddit: a,
						tokenName: o
					});
					if (this.state.showTransferTransactionModal) return r.a.createElement(d.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: a.id,
						transferAmount: this.state.tokenAmount
					});
					const c = i ? ee : D.c;
					return r.a.createElement("div", {
						className: me.a.container
					}, r.a.createElement(se, {
						className: me.a.title,
						subredditId: a.id,
						tokenName: o
					}), r.a.createElement("div", {
						className: me.a.inputContainer
					}, r.a.createElement(P, {
						amount: this.state.displayAmount,
						subredditId: a.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), !i && r.a.createElement("div", {
						className: me.a.explanation
					}, pe._("Up to 49% of earned {tokenName}. Remaining are frozen.", [pe._param("tokenName", o)], {
						hk: "1fUxyG"
					})), e ? r.a.createElement("div", {
						className: me.a.explanation
					}, "Transfer to ", t) : r.a.createElement("div", {
						className: me.a.recipientContainer
					}, r.a.createElement(c, {
						className: me.a.recipient,
						initialRecipient: t,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: a.id
					})), r.a.createElement(w, {
						amount: this.state.tokenAmount,
						className: me.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid,
						subredditId: a.id,
						tabIndex: 3,
						publicAddress: this.props.publicAddress,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && a && (i ? this.setState({
								showTransferTransactionModal: !0
							}) : s(this.state.tokenAmount, this.state.recipient, a.id))
						}
					}))
				}
			}
			const he = Object(b.c)({
					customCrypto: u.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(p.f)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: l.q,
					tokenDisplayConversion: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(p.o)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					tokenName: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(p.p)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					useCrypto: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(p.k)(e, {
							subredditId: n ? n.id : void 0
						})
					}
				}),
				fe = Object(a.b)(he, e => ({
					onClose: () => {
						e(Object(c.f)())
					},
					onTransferPoints: (t, n, s) => e(Object(i.e)({
						amount: t,
						recipient: n,
						subredditId: s
					}, !0))
				})),
				ve = Object(l.t)();
			t.default = Object(o.a)(ve(fe(be)))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/selectors/activeModalId.ts"),
				h = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/layout/row/Inline/index.tsx"),
				g = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(g);
			var j = Object(h.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: x.a.wrapper
					}, d.a.createElement(v.a, {
						className: x.a.titleRow
					}, n), d.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), d.a.createElement(v.a, {
						className: x.a.buttonRow
					}, d.a.createElement(f.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				I = n("./src/reddit/controls/ErrorText/index.m.less"),
				N = n.n(I);
			const y = Object(u.c)({
				activeModalId: b.a
			});
			class C extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(a()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
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
						className: n,
						errorModalBody: r,
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(N.a.wrapper, n)
					}, d.a.createElement("span", {
						className: N.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: N.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && d.a.createElement(j, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const E = Object(l.b)(y, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(C),
				O = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(E, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(O, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const b = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: o
					} = e, i = p(e, ["label", "children", "inputRef", "className"]), c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(b, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				v = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: c
					} = e, d = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, r.a.createElement(b, m({
						innerRef: s
					}, d)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: n,
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
						label: n,
						placeholder: s,
						errors: a = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(f, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(d.b, {
						className: u.a.trash
					})), !!a[o] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !i;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/lodash/get.js"),
				r = n.n(s),
				a = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(a.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
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

			function p(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: r()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: r()(e.body, ["data", "children", 0, "data", "permalink"], "")
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
			var s = n("./src/config.ts"),
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: r.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: s
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
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: r.db.POST,
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
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function s(e, t) {
				return "web+stellar:".concat(e, "?") + Object.entries(t).map(e => {
					let [t, n] = e;
					return t + "=" + encodeURIComponent(n)
				}).join("&")
			}

			function r(e, t, n, r, a) {
				const o = {
					destination: n,
					amount: r,
					asset_code: t,
					asset_issuer: e
				};
				return a && (o.memo = a), s("pay", o)
			}

			function a(e, t, n) {
				return s("pay", {
					destination: e,
					amount: n,
					asset_code: t,
					asset_issuer: e,
					memo: "o|membership"
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react-redux/es/index.js");

			function r() {
				return Object(s.c)()
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const c = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.cfc0dffcf6f3a19dac83.js.map