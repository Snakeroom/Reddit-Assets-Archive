// https://www.redditstatic.com/desktop2x/AuthorHovercard.fd72e56122e1f9c14b21.js
// Retrieved at 10/26/2020, 12:20:08 PM by Reddit Dataminer v1.0.0
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
			e.exports = function e(t, r, u, l, b) {
				t !== r && d(r, (function(d, i) {
					if (b || (b = new n), a(d)) o(t, r, i, u, e, l, b);
					else {
						var _ = l ? l(c(t, i), d, i + "", t, r, b) : void 0;
						void 0 === _ && (_ = d), s(t, i, _)
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
				b = r("./node_modules/lodash/isFunction.js"),
				_ = r("./node_modules/lodash/isObject.js"),
				m = r("./node_modules/lodash/isPlainObject.js"),
				E = r("./node_modules/lodash/isTypedArray.js"),
				f = r("./node_modules/lodash/_safeGet.js"),
				h = r("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, t, r, j, T, p, S) {
				var O = f(e, r),
					v = f(t, r),
					I = S.get(v);
				if (I) n(e, r, I);
				else {
					var R = p ? p(O, v, r + "", e, t, S) : void 0,
						A = void 0 === R;
					if (A) {
						var L = c(v),
							C = !L && l(v),
							g = !L && !C && E(v);
						R = v, L || C || g ? c(O) ? R = O : u(O) ? R = o(O) : C ? (A = !1, R = s(v, !0)) : g ? (A = !1, R = d(v, !0)) : R = [] : m(v) || i(v) ? (R = O, i(O) ? R = h(O) : _(O) && !b(O) || (R = a(v))) : A = !1
					}
					A && (S.set(v, R), T(R, v, j, p, S), S.delete(v)), n(e, r, R)
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
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/users.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			var c = r("./src/reddit/selectors/user.ts");
			const u = () => async e => {
				e(Object(o.r)({
					forceFetch: !0
				})), await e(Object(d.g)(a.a.SNOOVATAR_MODAL))
			}, l = e => async (t, r) => {
				const o = r();
				Object(n.a)((e => t => Object.assign({
					source: e,
					action: "click",
					noun: "edit_snoovatar"
				}, i.defaults(t)))(e)(o)), Object(c.I)(o) ? await t(Object(d.h)(a.a.SNOOVATAR_MODAL)) : await t(Object(s.h)())
			}
		},
		"./src/reddit/actions/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return f
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "f", (function() {
				return k
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
				return z
			})), r.d(t, "k", (function() {
				return J
			})), r.d(t, "p", (function() {
				return K
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
				b = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/userFlair.ts");
			const f = "USER_FLAIR_DATA__MUTATED",
				h = "AUTHOR_FLAIR_DATA__MUTATED",
				j = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				T = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING"),
				p = Object(s.a)(j),
				S = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				v = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				I = Object(s.a)(O),
				R = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				A = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				L = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(s.a)(A),
				g = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED"),
				y = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				x = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING"),
				U = Object(s.a)(y),
				N = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED"),
				w = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				k = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				D = Object(s.a)(w),
				F = Object(s.a)("STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS"),
				P = Object(s.a)(k),
				H = "USERFLAIR_FETCH_SUCCESS",
				M = Object(s.a)(H),
				G = Object(s.a)(f),
				Y = Object(s.a)(h),
				B = (e, t, r, n, s) => async (d, o, a) => {
					let {
						apiContext: i
					} = a;
					const l = o(),
						b = l.user.account,
						f = b ? Object(_.e)(b) : void 0,
						h = Object(E.c)(l, {
							subredditId: s
						}),
						j = Object.assign(Object.assign({}, h.displaySettings), {
							isUserEnabled: r
						}),
						T = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: j
						};
					d(n === f ? G(T) : Y(T));
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
					r(T());
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
					r(v());
					const i = await Object(c.j)(d(), t, l.d.UserFlair, a);
					if (i.ok) {
						r(I({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(R());
					return i.ok
				}, q = (e, t) => async (r, s, d) => {
					let {
						apiContext: o
					} = d;
					const a = s(),
						u = Object(m.T)(a, {
							subredditId: t
						}).name;
					r(L());
					const _ = await Object(c.f)(o(), e, u, l.d.UserFlair),
						E = _.ok && !(_.body && !1 === _.body.success);
					if (E) {
						const e = {
							subredditId: t,
							template: _.body
						};
						r(C(e));
						const s = Object(i.d)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), b.b.SuccessMod);
						r(Object(i.e)(s))
					} else {
						r(g());
						const s = Object(i.d)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), q(e, t));
						r(Object(i.e)(s))
					}
					return E
				}, z = (e, t) => async (r, s, d) => {
					let {
						apiContext: o
					} = d;
					const a = s(),
						u = Object(m.T)(a, {
							subredditId: t
						}).name;
					if (r(x()), (await Object(c.b)(o(), e, u)).ok) {
						r(U({
							subredditId: t,
							templateId: e
						}));
						const s = Object(i.d)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						r(Object(i.e)(s))
					} else {
						r(N());
						const s = Object(i.d)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), z(e, t));
						r(Object(i.e)(s))
					}
				}, J = (e, t) => async (r, s, d) => {
					let {
						apiContext: o
					} = d;
					const a = s(),
						u = Object(m.T)(a, {
							subredditId: t
						}).name,
						_ = Object(E.c)(a, {
							subredditId: t
						}).templateIds;
					if (r(D({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), u, l.d.UserFlair, e)).ok) {
						r(F());
						const e = Object(i.d)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(i.e)(e))
					} else {
						r(P({
							subredditId: t,
							templateIds: _
						}));
						const s = Object(i.d)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), J(e, t));
						r(Object(i.e)(s))
					}
				}, K = (e, t) => async (r, s, d) => {
					let {
						apiContext: u
					} = d;
					const l = s(),
						_ = l.userFlair;
					if (_ && _[e] && _[e].displaySettings.isEnabled && o()(_[e].templateIds)) {
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
							}), b.b.Error);
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
			const b = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class _ extends s.a.Component {
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
						subredditId: b(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: n
					}))
				}
			}
			t.default = Object(u.c)(_)
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
				return b
			})), r.d(t, "b", (function() {
				return _
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
			const b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				_ = e => ({
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
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					fill: "none",
					stroke: "#fff",
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 18"
				}, s.a.createElement("path", {
					d: "M7 .75a.49.49 0 01.49.4 2.57 2.57 0 005.08 0 .49.49 0 01.49-.4h1.58A.51.51 0 0115 .9l4 4.09a.5.5 0 010 .7l-2 1.94a.51.51 0 01-.65 0l-1.5-1.04v10.16a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V6.59l-1.19 1A.5.5 0 013 7.6L1.08 5.69a.5.5 0 010-.7L5 .9a.51.51 0 01.36-.15H7z",
					strokeWidth: "1.29",
					strokeMiterlimit: "10",
					strokeLinecap: "round"
				}))
			}
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
				return b
			})), r.d(t, "s", (function() {
				return _
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "t", (function() {
				return O
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "r", (function() {
				return R
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "k", (function() {
				return L
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
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				_ = (e, t) => {
					const r = b(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				m = (e, t) => {
					const r = b(e, t);
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
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				T = (e, t) => {
					const r = R(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				S = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const r = S(e, t);
					return r && r.walletProvider
				},
				v = (e, t) => {
					const r = O(e, t),
						n = S(e, t);
					return r && r.provider || n && n.provider
				},
				I = (e, t) => {
					const r = v(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				R = (e, t) => {
					const r = O(e, t),
						n = v(e, t);
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
				L = (e, t) => {
					const r = S(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.fd72e56122e1f9c14b21.js.map