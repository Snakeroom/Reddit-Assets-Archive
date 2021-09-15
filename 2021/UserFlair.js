// https://www.redditstatic.com/desktop2x/UserFlair.5465fec90466ac171b27.js
// Retrieved at 9/15/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserFlair"], {
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "o", (function() {
				return S
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "m", (function() {
				return R
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "k", (function() {
				return F
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				S = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				T = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				R = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				F = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return O
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return F
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return A
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return U
			})), r.d(t, "userFlairAllowAssingOwnSettingSuccess", (function() {
				return L
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return I
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return j
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return D
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return m
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return C
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return p
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return N
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return g
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return k
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return w
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return P
			})), r.d(t, "userFlairMutated", (function() {
				return h
			})), r.d(t, "authorFlairMutated", (function() {
				return y
			})), r.d(t, "userFlairChanged", (function() {
				return M
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return Y
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return v
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return x
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return G
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return Q
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./node_modules/lodash/isEmpty.js"),
				d = r.n(i),
				c = r("./src/reddit/actions/authorFlair.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				o = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/userFlair.ts"),
				T = r("./src/lib/initializeClient/installReducer.ts"),
				R = r("./src/reddit/reducers/features/userFlair/index.ts"),
				f = r("./src/reddit/actions/userFlair/constants.ts");
			Object(T.a)({
				features: {
					userFlair: R.a
				}
			});
			const O = Object(s.a)(f.i),
				F = Object(s.a)(f.j),
				A = Object(s.a)(f.h),
				U = Object(s.a)(f.c),
				L = Object(s.a)(f.d),
				I = Object(s.a)(f.b),
				j = Object(s.a)(f.p),
				D = Object(s.a)(f.q),
				m = Object(s.a)(f.o),
				C = Object(s.a)(f.f),
				p = Object(s.a)(f.g),
				N = Object(s.a)(f.e),
				g = Object(s.a)(f.m),
				k = Object(s.a)(f.n),
				w = Object(s.a)(f.l),
				P = Object(s.a)(f.k),
				h = Object(s.a)(f.r),
				y = Object(s.a)(f.a),
				M = (e, t, r, n, s) => async (i, d, {
					apiContext: c
				}) => {
					const u = d(),
						l = u.user.account,
						E = l ? Object(S.e)(l) : void 0,
						T = {
							...Object(b.d)(u, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						R = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: T
						};
					i(n === E ? h(R) : y(R));
					const f = Object(_.Q)(u, {
							subredditId: s
						}),
						O = t && e ? Object(o.g)(e) : void 0;
					Object(a.g)(c(), n, f.name, t, O), Object(a.i)(c(), r, f.name)
				}, Y = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const i = n(),
						d = Object(_.Q)(i, {
							subredditId: e
						}).name;
					r(O());
					const c = await Object(a.l)(s(), d, t);
					if (c.ok) {
						r(F({
							subredditId: e,
							isEnabled: t
						}))
					} else r(A());
					return c.ok
				}, v = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const i = n(),
						d = Object(_.Q)(i, {
							subredditId: e
						}).name;
					r(U());
					const c = await Object(a.j)(s(), t, l.d.UserFlair, d);
					if (c.ok) {
						r(L({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(I());
					return c.ok
				}, x = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					const d = s(),
						c = Object(_.Q)(d, {
							subredditId: t
						}).name;
					r(j());
					const o = await Object(a.f)(i(), e, c, l.d.UserFlair),
						S = o.ok && !(o.body && !1 === o.body.success);
					if (S) {
						const e = {
							subredditId: t,
							template: o.body
						};
						r(D(e));
						const s = Object(u.e)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), E.b.SuccessMod);
						r(Object(u.f)(s))
					} else {
						r(m());
						const s = Object(u.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), x(e, t));
						r(Object(u.f)(s))
					}
					return S
				}, G = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					const d = s(),
						c = Object(_.Q)(d, {
							subredditId: t
						}).name;
					if (r(C()), (await Object(a.b)(i(), e, c)).ok) {
						r(p({
							subredditId: t,
							templateId: e
						}));
						const s = Object(u.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), E.b.SuccessMod);
						r(Object(u.f)(s))
					} else {
						r(N());
						const s = Object(u.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), G(e, t));
						r(Object(u.f)(s))
					}
				}, Q = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					const d = s(),
						c = Object(_.Q)(d, {
							subredditId: t
						}).name,
						o = Object(b.d)(d, {
							subredditId: t
						}).templateIds;
					if (r(g({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(i(), c, l.d.UserFlair, e)).ok) {
						r(k());
						const e = Object(u.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), E.b.SuccessMod);
						r(Object(u.f)(e))
					} else {
						r(w({
							subredditId: t,
							templateIds: o
						}));
						const s = Object(u.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), Q(e, t));
						r(Object(u.f)(s))
					}
				}, H = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					var o;
					const l = s(),
						S = null === (o = l.features) || void 0 === o ? void 0 : o.userFlair;
					if (S && S[e] && S[e].displaySettings.isEnabled && d()(S[e].templateIds)) {
						const s = Object(_.Q)(l, {
								subredditId: e
							}).name,
							d = await Object(a.d)(i(), s);
						if (d.ok) r(P(d.body)), r(Object(c.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(u.e)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), E.b.Error);
							r(Object(u.f)(e))
						}
					} else r(Object(c.b)({
						username: t,
						subredditId: e
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserFlair.5465fec90466ac171b27.js.map