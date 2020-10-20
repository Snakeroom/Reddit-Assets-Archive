// https://www.redditstatic.com/desktop2x/AuthorHovercard.26b4bb3ee8baaa1ea4f4.js
// Retrieved at 10/20/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./node_modules/lodash/_assignMergeValue.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseAssignValue.js"),
				s = r("./node_modules/lodash/eq.js");
			e.exports = function(e, t, r) {
				(void 0 === r || s(e[t], r)) && (void 0 !== r || t in e) || n(e, t, r)
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_Stack.js"),
				s = r("./node_modules/lodash/_assignMergeValue.js"),
				d = r("./node_modules/lodash/_baseFor.js"),
				o = r("./node_modules/lodash/_baseMergeDeep.js"),
				a = r("./node_modules/lodash/isObject.js"),
				i = r("./node_modules/lodash/keysIn.js"),
				c = r("./node_modules/lodash/_safeGet.js");
			e.exports = function e(t, r, u, l, _) {
				t !== r && d(r, (function(d, i) {
					if (_ || (_ = new n), a(d)) o(t, r, i, u, e, l, _);
					else {
						var b = l ? l(c(t, i), d, i + "", t, r, _) : void 0;
						void 0 === b && (b = d), s(t, i, b)
					}
				}), i)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_assignMergeValue.js"),
				s = r("./node_modules/lodash/_cloneBuffer.js"),
				d = r("./node_modules/lodash/_cloneTypedArray.js"),
				o = r("./node_modules/lodash/_copyArray.js"),
				a = r("./node_modules/lodash/_initCloneObject.js"),
				i = r("./node_modules/lodash/isArguments.js"),
				c = r("./node_modules/lodash/isArray.js"),
				u = r("./node_modules/lodash/isArrayLikeObject.js"),
				l = r("./node_modules/lodash/isBuffer.js"),
				_ = r("./node_modules/lodash/isFunction.js"),
				b = r("./node_modules/lodash/isObject.js"),
				m = r("./node_modules/lodash/isPlainObject.js"),
				E = r("./node_modules/lodash/isTypedArray.js"),
				f = r("./node_modules/lodash/_safeGet.js"),
				h = r("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, t, r, T, j, p, S) {
				var O = f(e, r),
					I = f(t, r),
					R = S.get(I);
				if (R) n(e, r, R);
				else {
					var v = p ? p(O, I, r + "", e, t, S) : void 0,
						A = void 0 === v;
					if (A) {
						var y = c(I),
							L = !y && l(I),
							U = !y && !L && E(I);
						v = I, y || L || U ? c(O) ? v = O : u(O) ? v = o(O) : L ? (A = !1, v = s(I, !0)) : U ? (A = !1, v = d(I, !0)) : v = [] : m(I) || i(I) ? (v = O, i(O) ? v = h(O) : b(O) && !_(O) || (v = a(I))) : A = !1
					}
					A && (S.set(I, v), j(v, I, T, p, S), S.delete(I)), n(e, r, v)
				}
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRest.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return n((function(t, r) {
					var n = -1,
						d = r.length,
						o = d > 1 ? r[d - 1] : void 0,
						a = d > 2 ? r[2] : void 0;
					for (o = e.length > 3 && "function" == typeof o ? (d--, o) : void 0, a && s(r[0], r[1], a) && (o = d < 3 ? void 0 : o, d = 1), t = Object(t); ++n < d;) {
						var i = r[n];
						i && e(t, i, n, o)
					}
					return t
				}))
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, t) {
			e.exports = function(e, t) {
				if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
			}
		},
		"./node_modules/lodash/merge.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseMerge.js"),
				s = r("./node_modules/lodash/_createAssigner.js")((function(e, t, r) {
					n(e, t, r)
				}));
			e.exports = s
		},
		"./node_modules/lodash/toPlainObject.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_copyObject.js"),
				s = r("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return n(e, s(e))
			}
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				d = Object(n.a)(s)
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				d = "INCONTEXT__MUTED",
				o = Object(n.a)(s),
				a = Object(n.a)(d)
		},
		"./src/reddit/actions/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return f
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "o", (function() {
				return B
			})), r.d(t, "n", (function() {
				return V
			})), r.d(t, "m", (function() {
				return W
			})), r.d(t, "l", (function() {
				return q
			})), r.d(t, "j", (function() {
				return J
			})), r.d(t, "k", (function() {
				return K
			})), r.d(t, "p", (function() {
				return X
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./node_modules/lodash/isEmpty.js"),
				o = r.n(d),
				a = r("./src/reddit/actions/authorFlair.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/userFlair.ts");
			const f = "USER_FLAIR_DATA__MUTATED",
				h = "AUTHOR_FLAIR_DATA__MUTATED",
				T = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				j = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING"),
				p = Object(s.a)(T),
				S = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				I = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				R = Object(s.a)(O),
				v = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				A = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				y = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING"),
				L = Object(s.a)(A),
				U = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED"),
				g = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				x = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING"),
				N = Object(s.a)(g),
				C = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				D = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				w = Object(s.a)(k),
				F = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS"),
				P = Object(s.a)(D),
				H = "USERFLAIR_FETCH_SUCCESS",
				M = Object(s.a)(H),
				G = Object(s.a)(f),
				Y = Object(s.a)(h),
				B = (e, t, r, n, s) => async (d, o, a) => {
					let {
						apiContext: i
					} = a;
					const l = o(),
						_ = l.user.account,
						f = _ ? Object(b.e)(_) : void 0,
						h = Object(E.c)(l, {
							subredditId: s
						}),
						T = Object.assign(Object.assign({}, h.displaySettings), {
							isUserEnabled: r
						}),
						j = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: T
						};
					d(n === f ? G(j) : Y(j));
					const p = Object(m.T)(l, {
							subredditId: s
						}),
						S = t && e ? Object(u.g)(e) : void 0;
					Object(c.g)(i(), n, p.name, t, S), Object(c.i)(i(), r, p.name)
				}, V = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const o = n(),
						a = Object(m.T)(o, {
							subredditId: e
						}).name;
					r(j());
					const i = await Object(c.l)(d(), a, t);
					if (i.ok) {
						r(p({
							subredditId: e,
							isEnabled: t
						}))
					} else r(S());
					return i.ok
				}, W = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const o = n(),
						a = Object(m.T)(o, {
							subredditId: e
						}).name;
					r(I());
					const i = await Object(c.j)(d(), t, l.d.UserFlair, a);
					if (i.ok) {
						r(R({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(v());
					return i.ok
				}, q = (e, t) => async (r, s, d) => {
					let {
						apiContext: o
					} = d;
					const a = s(),
						u = Object(m.T)(a, {
							subredditId: t
						}).name;
					r(y());
					const b = await Object(c.f)(o(), e, u, l.d.UserFlair),
						E = b.ok && !(b.body && !1 === b.body.success);
					if (E) {
						const e = {
							subredditId: t,
							template: b.body
						};
						r(L(e));
						const s = Object(i.d)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), _.b.SuccessMod);
						r(Object(i.e)(s))
					} else {
						r(U());
						const s = Object(i.d)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), _.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), q(e, t));
						r(Object(i.e)(s))
					}
					return E
				}, J = (e, t) => async (r, s, d) => {
					let {
						apiContext: o
					} = d;
					const a = s(),
						u = Object(m.T)(a, {
							subredditId: t
						}).name;
					if (r(x()), (await Object(c.b)(o(), e, u)).ok) {
						r(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(i.d)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), _.b.SuccessMod);
						r(Object(i.e)(s))
					} else {
						r(C());
						const s = Object(i.d)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), _.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), J(e, t));
						r(Object(i.e)(s))
					}
				}, K = (e, t) => async (r, s, d) => {
					let {
						apiContext: o
					} = d;
					const a = s(),
						u = Object(m.T)(a, {
							subredditId: t
						}).name,
						b = Object(E.c)(a, {
							subredditId: t
						}).templateIds;
					if (r(w({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), u, l.d.UserFlair, e)).ok) {
						r(F());
						const e = Object(i.d)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), _.b.SuccessMod);
						r(Object(i.e)(e))
					} else {
						r(P({
							subredditId: t,
							templateIds: b
						}));
						const s = Object(i.d)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), _.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), K(e, t));
						r(Object(i.e)(s))
					}
				}, X = (e, t) => async (r, s, d) => {
					let {
						apiContext: u
					} = d;
					const l = s(),
						b = l.userFlair;
					if (b && b[e] && b[e].displaySettings.isEnabled && o()(b[e].templateIds)) {
						const s = Object(m.T)(l, {
								subredditId: e
							}).name,
							d = await Object(c.d)(u(), s);
						if (d.ok) r(M(d.body)), r(Object(a.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(i.d)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), _.b.Error);
							r(Object(i.e)(e))
						}
					} else r(Object(a.b)({
						username: t,
						subredditId: e
					}))
				}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				d = r("./src/reddit/components/Hovercards/helpers.ts"),
				o = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = r("./src/reddit/helpers/isPost.ts"),
				i = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const _ = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class b extends s.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(l.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(d.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || c.a,
						tooltipType: e.tooltipType
					}), r = "".concat(t, "-hover-id"), n = e.author || e.postOrComment.author;
					return s.a.createElement(o.a, {
						authorOrSubredditName: n,
						className: e.hoverDivClassName,
						hoverId: r,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, s.a.createElement(i.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: r,
						sendEvent: e.sendEvent,
						subredditId: _(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: n
					}))
				}
			}
			t.default = Object(u.c)(b)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "l", (function() {
				return f
			}));
			var n, s = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
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

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function c(e, t, r) {
				return Object(d.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(d.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const _ = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				m = e => ({
					type: "subscribe",
					subredditId: e
				}),
				E = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function f(e, t) {
				return await Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "s", (function() {
				return b
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return T
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "t", (function() {
				return O
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "r", (function() {
				return v
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "k", (function() {
				return y
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const d = [],
				o = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				i = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = O(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const r = p(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = p(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				l = (e, t) => {
					const r = p(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : o
				},
				_ = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const r = _(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				m = (e, t) => {
					const r = _(e, t);
					return r && r.amount || "0"
				},
				E = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				T = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				j = (e, t) => {
					const r = v(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				S = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const r = S(e, t);
					return r && r.walletProvider
				},
				I = (e, t) => {
					const r = O(e, t),
						n = S(e, t);
					return r && r.provider || n && n.provider
				},
				R = (e, t) => {
					const r = I(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				v = (e, t) => {
					const r = O(e, t),
						n = I(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const d = r && r.extra && r.extra.contracts,
						o = d && d.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				A = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = O(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				y = (e, t) => {
					const r = S(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.26b4bb3ee8baaa1ea4f4.js.map